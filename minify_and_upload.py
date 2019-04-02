from subprocess import run, check_output, call
from sys import argv
from jsmin import jsmin
import preppy
import os
import shutil
# List of files we want to process as a default behavior
supported_locales = ["en", "fr", "es"]
files_to_process = [*["m32cmploader_{}.js".format(locale) for locale in supported_locales], "m32cmp.js"]
git_branch = check_output(["git", "rev-parse", "--abbrev-ref", "HEAD"]).decode().strip()

def minify(files):
    for f in files:
        with open("{}.min.js".format(f.split(".")[0]), "w") as out_f, open(f, "r") as in_f:
            out_f.write(jsmin(in_f.read()))

def put_on_rdc(file, prod):
    test_dir = ''
    if not prod:
        test_dir = '/m32cmp/{}'.format(git_branch)
    print('FILE {}'.format(file))
    try:
        run(['gcloud', 'compute', '--project', 'm32-infrastructure', 'copy-files', file, 'bitnami@rdc1-m32-media-prod:/rdc/html{}/{}'.format(test_dir, file), '--zone', 'us-east1-b']).check_returncode()
    except:
        # If the upload failed, try again but creates the right folder on the server.
        os.mkdir(git_branch)
        run(['gcloud', 'compute', '--project', 'm32-infrastructure', 'copy-files', git_branch, 'bitnami@rdc1-m32-media-prod:/rdc/html/m32cmp', '--zone', 'us-east1-b']).check_returncode()
        run(['gcloud', 'compute', '--project', 'm32-infrastructure', 'copy-files', file, 'bitnami@rdc1-m32-media-prod:/rdc/html{}/{}'.format(test_dir, file), '--zone', 'us-east1-b']).check_returncode()
        os.rmdir(git_branch)

def upload(files, prod=False):
    for file in files:
        # Stores the new minified and unminified files.
        if file in files_to_process:
            put_on_rdc('{}.min.js'.format(file.split(".")[0]), prod)
        put_on_rdc(file, prod)

def build_loaders_for_all_locales():
    """builds a different loader script for each locale. If you want to add one, add it to the supported_locales array above."""
    for locale in supported_locales:
        with open("m32cmploader_{}.js".format(locale), "w+") as f:
            f.write(preppy.getModule("cmp_loader.prep").get(locale))

def get_bundled_cmp_from_build_folder():
    # copies the file to our current dir if it's there. Otherwise, warn the user to use yarn build
    if os.path.isfile("build/cmp.bundle.js"):
        shutil.copy("build/cmp.bundle.js", "m32cmp.js")
    else:
        print("the build/cmp.bundle.js is not present, did you run `yarn build` ?")


if __name__ == "__main__":
    # Default behavior of this script is to minify and upload everything that needs it
    build_loaders_for_all_locales()
    get_bundled_cmp_from_build_folder()
    minify(files_to_process)
    upload(files_to_process, ("--prod" in argv))
