/**
 * The default set of translated pieces of text indexed by locale.
 * Values from window.__cmp.config.localization will override these
 * per locale.  Empty values will use the english value provided
 * inline in each component. Because the purpose definitions will change,
 * you will need to update the translations regularly. As a consequence, this
 * translations.js file is very important to keep up to date.
 */
export default {
	en: {
		banner: {
			title: '',
			description: '',
			links: {
				data: {
					title: '',
					description: ''
				},
				purposes: {
					title: '',
					description: ''
				},
				manage: '',
				accept: ''
			}
		},
		summary: {
			title: '',
			description: '',
			who: {
				title: '',
				description: ''
			},
			what: {
				title: '',
				description: ''
			}
		},
		details: {
			back: '',
			save: ''
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			optoutdDescription: ``,
			purpose1: {
				description: ''
			},
			purpose2: {
				description: ''
			},
			purpose3: {
				description: ''
			},
			purpose4: {
				description: ''
			}
		},
		vendors: {
			title: '',
			description: '',
			accept: '',
			acceptAll: '',
			acceptNone: '',
			optOut: '',
			back : ''
		}
	},
	es: {
		banner: {
			title: 'Uso de cookies',
			description: 'Utilizamos &quot;cookies&quot; propias y de terceros para elaborar informaci&oacute;n estad&iacute;stica y mostrarle publicidad personalizada a trav&eacute;s del an&aacute;lisis de su navegaci&oacute;n. Si contin&uacute;a navegando acepta su uso.',
			links: {
				data: {
					title: 'Informaci&oacute;n que puede ser usada.',
					description: `<ul>
									<li>Tipo de navegador y su configuraci&oacute;n</li>
									<li>Informaci&oacute;n sobre el sistema operativo del dispositivo</li>
									<li>Informaci&oacute;n sobre las cookies</li>
									<li>Informaci&oacute;n sobre otros identificadores asignados al dispositivo</li>
									<li>Direcci&oacute;n IP desde la cual el dispositivo accede al sitio web o aplicaci&oacute;n m&oacute;vil</li>
									<li>Informaci&oacute;n sobre la actividad del usuario en ese dispositivo, incluidas las p&aacute;ginas web y las aplicaciones m&oacute;viles visitadas o utilizadas</li>
									<li>Informaci&oacute;n sobre la ubicaci&oacute;n geogr&aacute;fica del dispositivo cuando accede a un sitio web o aplicaci&oacute;n m&oacute;vil</li>
								</ul>`
				},
				purposes: {
					title: 'Prop&oacute;sitos para almacenar informaci&oacute;n.',
					description: `C&oacute;mo puede ser usada la informaci&oacute;n:`
				},
				manage: 'Leer m&aacute;s',
				accept: 'Aceptar'
			}
		},
		details: {
			title: 'configuraci&oacute;n de privacidad',
			back: 'Atr&aacute;s',
			save: 'Guardar y salir'
		},
		summary: {
			title: 'Obtenga m&aacute;s informaci&oacute;n sobre c&oacute;mo se usa la informaci&oacute;n.',
			description: 'Nosotros y algunas empresas selectas podemos acceder y usar su informaci&oacute;n para los siguientes prop&oacute;sitos. Puede personalizar sus opciones a continuaci&oacute;n o continuar usando nuestro sitio si est&aacute; de acuerdo con los prop&oacute;sitos.',
			detailLink: 'M&aacute;s informaci&oacute;n',
			who:{
				title:'&iquest;Qui&eacute;n est&aacute; usando esta informaci&oacute;n?',
				description:'Nosotros y las compa&ntilde;&iacute;as preseleccionadas usaremos su informaci&oacute;n. Puede ver cada empresa en los enlaces de arriba o',
				link:'mira la lista completa aqu&iacute;.'
			},
			what:{
				title:'&iquest;Qu&eacute; informaci&oacute;n est&aacute; siendo utilizada?',
				description:'Diferentes compa&ntilde;&iacute;as usan informaci&oacute;n diferente,',
				link:'mira la lista completa aqu&iacute;.'
			}
		},
		purposes: {
			title: 'Datos recolectados',
			description: 'A continuaci&oacute;n se muestra la lista de datos que se pueden recopilar:',
			back: 'Configura c&oacute;mo se usan estos datos',
			optoutdDescription: 'Dependiendo del tipo de datos que recopilan, usan y procesan, y otros factores, incluida la privacidad por dise&ntilde;o, ciertos socios conf&iacute;an en su consentimiento, mientras que otros requieren que se excluya. Para obtener informaci&oacute;n sobre cada proveedor y ejercer sus elecciones, consulte a continuaci&oacute;n. O para optar por no participar, visite los sitios de NAI, DAA o EDAA.',
			items: `<ul>
						<li>Tipo y configuraci&oacute;n del navegador</li>
						<li>Informaci&oacute;n del sistema operativo</li>
						<li>Datos de cookies</li>
						<li>Informaci&oacute;n sobre el dispositivo utilizado</li>
						<li>La direcci&oacute;n IP desde la que el dispositivo accede al sitio web</li>
						<li>Informaci&oacute;n sobre la actividad del usuario en este dispositivo, incluidas las p&aacute;ginas web visitadas</li>
						<li>Informaci&oacute;n de geolocalizaci&oacute;n del dispositivo al acceder al sitio web</li>
					</ul>`,
			purpose1: {
				menu: 'Almacenamiento y acceso a la informaci&oacute;n',
				title: 'Almacenamiento y acceso a la informaci&oacute;n',
				description: 'El almacenamiento y acceso a la informaci&oacute;n que ya est&aacute; almacenada en su dispositivo, como identificadores publicitarios, identificadores de dispositivos, cookies y tecnolog&iacute;as similares.'
			},
			purpose2: {
				menu: 'Personalizaci&oacute;n',
				title: 'Personalizaci&oacute;n',
				description: 'La recopilaci&oacute;n y el procesamiento de informaci&oacute;n para personalizar posteriormente la publicidad y/o contenidos para usted, como en otros sitios web o aplicaciones, a lo largo del tiempo. Normalmente, la selecci&oacute;n futura de publicidad y/o contenido.'
			},
			purpose3: {
				menu: 'Selecci&oacute;n de anuncios, entregas, informes',
				title: 'Selecci&oacute;n de anuncios, entregas, informes',
				description: 'Recopilaci&oacute;n de informaci&oacute;n y combinaci&oacute;n de informaci&oacute;n recopilada previamente, para seleccionar y entregar anuncios para usted, medir la entrega y la efectividad de dichos anuncios. Esto incluye el uso de informaci&oacute;n recopilada previamente sobre sus intereses para seleccionar anuncios, procesar datos sobre qu&eacute; publicidades se mostraron, con qu&eacute; frecuencia se mostraron, cu&aacute;ndo y d&oacute;nde se mostraron y si tom&oacute; alguna medida relacionada con el anuncio, incluyendo, por ejemplo, clicks sobre los anuncios o compras. Esto no incluye la personalizaci&oacute;n, que es la recopilaci&oacute;n y el procesamiento de la informaci&oacute;n sobre el uso de este servicio para personalizar posteriormente la publicidad y / o contenido en otros contextos, como sitios web o aplicaciones, a lo largo del tiempo.'

			},
			purpose4: {
				menu: 'Selecci&oacute;n de contenido, entrega, informes',
				title: 'Selecci&oacute;n de contenido, entrega, informes',
				description: 'Recopilaci&oacute;n de informaci&oacute;n, y combinaci&oacute;n con informaci&oacute;n recopilada previamente, para seleccionar y entregar contenido para usted, y para medir la entrega y la efectividad de dicho contenido. Esto incluye el uso de informaci&oacute;n recopilada anteriormente sobre sus intereses para seleccionar contenido, procesar datos sobre qu&eacute; contenido se mostr&oacute;, con qu&eacute; frecuencia o durante cu&aacute;nto tiempo se mostr&oacute;, cu&aacute;ndo y d&oacute;nde se mostr&oacute; y si realiz&oacute; alguna acci&oacute;n relacionada con el contenido, incluyendo por ejemplo, clicks sobre el contenido. Esto no incluye la personalizaci&oacute;n, que es la recopilaci&oacute;n y el procesamiento de la informaci&oacute;n sobre el uso de este servicio para personalizar posteriormente el contenido y / o publicidad en otros contextos, como sitios web o aplicaciones, a lo largo del tiempo.'

			},
			purpose5: {
				menu: 'Medici&oacute;n',
				title: 'Medici&oacute;n',
				description: 'Recopilaci&oacute;n de informaci&oacute;n sobre su uso del contenido y la combinaci&oacute;n con informaci&oacute;n recopilada anteriormente, utilizada para medir, comprender e informar sobre el uso que hace del servicio. Esto no incluye la personalizaci&oacute;n, la recopilaci&oacute;n de informaci&oacute;n sobre el uso de este servicio para personalizar posteriormente el contenido y / o la publicidad en otros contextos, es decir, en otros servicios, como sitios web o aplicaciones, a lo largo del tiempo.'

			},
		},
		vendors: {
			title: 'Nuestros Partners',
			description: 'Ay&uacute;denos a ofrecerle un mejor servicio. Nuestros socios utilizan las cookies de su navegador para comprender, a trav&eacute;s de la web, lo que le interesa y para ofrecerle contenido y publicidad relevantes.',
			accept: 'Aceptar',
			acceptAll: 'Aceptar todo',
			optOut: 'Requiere opt-out',
			back : 'Atr&aacute;s'
		}
	},
	fr: {
		banner: {
			title: 'Les cookies nous aident &agrave; vous d&eacute;livrer un service de qualit&eacute;.',
			description: 'Nos <a onclick="window.__cmp.handleVendorListClick()">partenaires</a> et nous-m&ecirc;me utilisons les cookies afin de proposer du contenu et de la publicit&eacute; pertinents.',
			links: {
				data: {
					title: 'Donn&eacute;es utilis&eacute;es',
					description: `<ul>
									<li>Donn&eacute;es sur le navigateur utilis&eacute;</li>
									<li>Donn&eacute;es sur le systeme d'exploitation utilis&eacute;</li>
									<li>Donn&eacute;es des cookies</li>
									<li>Donn&eacute;es sp&eacute;cifiques au terminal (ordinateur de bureau, mobile...)</li>
									<li>Adresse IP</li>
									<li>Donn&eacute;es de navigation (pages visit&eacute;es)</li>
									<li>Donn&eacute;es de g&eacute;olocalisation</li>
								</ul>`
				},
				purposes: {
					title: 'Utilisation des donn&eacute;es',
					description: `A quoi servent ces donn&eacute;es:`
				},
				manage: 'Pr&eacute;f&eacute;rences',
				accept: 'Continuer'
			}
		},
		summary: {
			title: 'Comment sont utilis&eacute;es mes donn&eacute;es ?',
			description: 'Nos partenaires et nous-m&ecirc;me utilisons les cookies (petits fichiers texte) du navigateur afin de comprendre les centres d\'int&eacute;r&ecirc;t de nos visiteurs et ainsi leur proposer du contenu et de la publicit&eacute; pertinents. D&eacute;sormais, nous avons besoin de votre consentement.',
			detailLink: 'Informations et configuration',
			who: {
				title: 'Qui utilise mes donn&eacute;es ?',
				description: `Seulement nos partenaires et nous-m&ecirc;me pouvons utiliser vos donn&eacute;es.
					Vous pouvez personnaliser vos choix ci-dessus ou continuer &agrave; utiliser notre site si vous &ecirc;tes d'accord.`,
				link: 'Voir la liste compl&egrave;te de nos partenaires'
			},
			what: {
				title: 'Quelles donn&eacute;es sont utilis&eacute;es ?',
				description: 'Chaque partenaire utilise diff&eacute;remment vos donn&eacute;es.',
				link: 'Voir la liste compl&egrave;te des donn&eacute;es utilis&eacute;es'
			}
		},
		details: {
			back: 'Retour',
			save: 'Valider et continuer sur le site'
		},
		purposes: {
			title: 'Donn&eacute;es collect&eacute;es',
			description: 'Ci-dessous la liste des donn&eacute;es pouvant &ecirc;tre collect&eacute;es :',
			back: 'Configurer comment ces donn&eacute;es sont utilis&eacute;es',
			optoutdDescription: '',
			items: `<ul>
						<li>Type de navigateur et son param&eacute;trage</li>
						<li>Informations sur le syst&egrave;me d'exploitation</li>
						<li>Donn&eacute;es des cookies</li>
						<li>Informations sur l'appareil utilis&eacute;</li>
						<li>L'adresse IP &agrave; partir de laquelle l'appareil acc&egrave;de au site Web</li>
						<li>Informations sur l'activit&eacute; de l'utilisateur sur cet appareil, y compris les pages Web visit&eacute;es</li>
						<li>Informations de g&eacute;olocalisation de l'appareil lorsqu'il acc&egrave;de au site Web</li>
					</ul>`,
			purpose1: {
				menu: 'Stockage d\'informations et acc&egrave;s',
				title: 'Stockage d\'informations et acc&egrave;s',
				description: 'Autoriser le stockage d&rsquo;informations ou l&rsquo;acc&egrave;s &agrave; des informations d&eacute;j&agrave; stock&eacute;es sur votre appareil, telles que des identifiants publicitaires, des identifiants de dispositif, des cookies et des technologies similaires.'
			},
			purpose2: {
				menu: 'Personnalisation',
				title: 'Personnalisation',
				description: 'Autoriser la collecte et le traitement d&rsquo;informations sur votre utilisation de ce service pour ensuite personnaliser la publicit&eacute; et/ou le contenu qui vous sont propos&eacute;s dans d&rsquo;autres contextes, tels que sur d&rsquo;autres sites ou applications, au fil du temps. En r&egrave;gle g&eacute;n&eacute;rale, le contenu du site ou de l&rsquo;application est utilis&eacute; pour d&eacute;terminer vos centres d&rsquo;int&eacute;r&ecirc;t et permettent de d&eacute;terminer le choix de la publicit&eacute; et/ou du contenu.'
			},
			purpose3: {
				menu: 'S&eacute;lection d\'annonces, diffusion, rapport',
				title: 'S&eacute;lection d\'annonces, diffusion, rapport',
				description: 'Autoriser le traitement des donn&eacute;es d\'un utilisateur pour fournir du contenu ou des publicit&eacute;s et mesurer la diffusion de ces contenus ou publicit&eacute;s, extraire des informations et g&eacute;n&eacute;rer des rapports pour comprendre l\'utilisation des services; et / ou acc&eacute;der ou stocker des informations sur des dispositifs &agrave; cette fin. Inclura les caract&eacute;ristiques suivantes:'
			},
			purpose4: {
				menu: 'S&eacute;lection de contenu, diffusion, rapport',
				title: 'S&eacute;lection de contenu, diffusion, rapport',
				description: 'Autoriser le traitement des donn&eacute;es d\'un utilisateur pour la cr&eacute;ation de contenu personnalis&eacute; (y compris la diffusion, l\'analyse et la cr&eacute;ation de rapports) en fonction des pr&eacute;f&eacute;rences ou des int&eacute;r&ecirc;ts d\'un utilisateur connus ou inf&eacute;rer &agrave; partir de donn&eacute;es collect&eacute;es sur plusieurs sites, applications ou appareils; et / ou acc&eacute;der ou stocker des informations sur des dispositifs &agrave; cette fin. Inclura les caract&eacute;ristiques suivantes:'
			},
			purpose5: {
				menu: 'Mesures',
				title: 'Mesures',
				description: 'Autoriser la collecte d&rsquo;informations sur votre utilisation du contenu et la combinaison avec des informations pr&eacute;c&eacute;demment collect&eacute;es, utilis&eacute;es pour mesurer, comprendre et rendre compte de votre utilisation du service. Cela n&rsquo;inclut pas la personnalisation, la collecte d&rsquo;informations sur votre utilisation de ce service pour personnaliser ult&eacute;rieurement le contenu et/ou la publicit&eacute; dans d&rsquo;autres contextes, par exemple sur d&rsquo;autres services, tels que des sites ou des applications.'
			}
		},
		vendors: {
			title: 'Nos partenaires',
			description: 'Aidez-nous &agrave; vous fournir une meilleure exp&eacute;rience en ligne! Nos partenaires utilisent des cookies et collectent des informations &agrave; partir de votre navigateur sur le Web pour vous fournir du contenu, diffuser des publicit&eacute;s pertinentes et analyser les audiences Web.',
			accept: 'Accepter',
			acceptAll: 'Accepter tout',
			optOut: '',
			back : 'Configurer comment ces soci&eacute;t&eacute;s r&eacute;cup&egrave;rent mes donn&eacute;es'
		}
	},
	de: {
		banner: {
			title: 'Cookies helfen uns einen hochwertigen Service zu bieten',
			description: 'Wir und unsere Partner verwenden Cookies, um relevante Inhalte und Werbung bereitzustellen.',
			links: {
				data: {
					title: 'Verwendungszwecke',
					description: `<ul>
									<li>Browserdaten</li>
									<li>Betriebssystemdaten</li>
									<li>Cookie-Daten</li>
									<li>Ger&auml;tedaten (Desktop, Mobile etc.)</li>
									<li>IP-Adresse</li>
									<li>Nutzungsverhalten</li>
									<li>Geo-Daten</li>
								</ul>`
				},
				purposes: {
					title: 'Verwendung von Daten',
					description: `Wozu dienen diese Daten?`
				},
				manage: 'Einstellungen',
				accept: 'Akzeptieren und fortsetzen'
			}
		},
		summary: {
			title: 'Wie werden meine Daten verwendet?',
			description: 'Unsere Partner und wir selbst verwenden Cookies (kleine Textdateien) des Browsers, um die Interessen unserer Besucher zu verstehen und ihnen relevante Inhalte und Werbung zur Verf&uuml;gung zu stellen. Jetzt brauchen wir Ihre Zustimmung.',
			detailLink: 'Informationen und Einstellungen',
			who: {
				title: 'Wer nutzt meine Daten?',
				description: `Nur unsere Partner und wir k&ouml;nnen Ihre Daten verwenden. Sie k&ouml;nnen Ihre Auswahl oben anpassen oder unsere Website weiterhin nutzen, wenn Sie zustimmen.`,
				link: 'Sehen Sie die komplette Liste unserer Partner'
			},
			what: {
				title: 'Welche Daten werden verwendet?',
				description: 'Jeder Partner verwendet Ihre Daten unterschiedlich.',
				link: 'Siehe die vollst&auml;ndige Liste der verwendeten Daten'
			}
		},
		details: {
			back: 'Zur&uuml;ck',
			save: 'Speichern und auf der Webseite fortfahren'
		},
		purposes: {
			title: 'Gesammelte Daten',
			description: 'Liste der Daten, die gesammelt werden',
			back: 'Konfigurieren Sie, wie diese Daten verwendet werden',
			optoutdDescription: '',
			items: `<ul>
						<li>Browsertyp und Einstellungen</li>
						<li>Informationen zum Betriebssystem</li>
						<li>Cookie-Daten</li>
						<li>Ger&auml;teinformationen</li>
						<li>Die IP-Adresse, von der aus das Ger&auml;t auf die Website zugreift</li>
						<li>Informationen zur Benutzeraktivit&auml;t auf diesem Ger&auml;t, einschlie&szlig;lich der besuchten Webseiten</li>
						<li>Geolokalisierungsinformationen des Ger&auml;ts beim Zugriff auf die Website</li>
					</ul>`,
			purpose1: {
				menu: 'Speicherung und Zugriff auf Informationen',
				title: 'Speicherung von Informationen und Zugriff',
				description: 'Speicherung von Informationen oder Zugriff auf Informationen, die bereits auf Ihrem Ger&auml;t gespeichert sind, z.B. Werbe-IDs, Ger&auml;te-IDs, Cookies und &auml;hnliche Technologien.'
			},
			purpose2: {
				menu: 'Personalisierung',
				title: 'Personalisierung',
				description: 'Die Erfassung und Verarbeitung von Informationen &uuml;ber Ihre Nutzung dieses Dienstes zur nachtr&auml;glichen Personalisierung von Werbung und / oder Inhalten in anderen Kontexten, z.B. auf anderen Websites oder in anderen Apps. In der Regel wird der Inhalt der Website oder App verwendet, um R&uuml;ckschl&uuml;sse auf Ihre Interessen zu ziehen, die die zuk&uuml;nftige Auswahl von Werbung und / oder Inhalten beeinflussen.'
			},
			purpose3: {
				menu: 'Auslieferung und Berichte von Anzeigen',
				title: 'Auslieferung und Berichte von Anzeigen',
				description: 'Die Sammlung von Informationen und die Kombination mit zuvor gesammelten Informationen, um Werbung f&uuml;r Sie auszuw&auml;hlen und zu liefern und die Lieferung und Wirksamkeit solcher Werbung zu messen. Dies beinhaltet die Verwendung zuvor gesammelter Informationen &uuml;ber Ihre Interessen zur Auswahl von Anzeigen, die Verarbeitung von Daten dar&uuml;ber, welche Werbeanzeigen gezeigt wurden, wie oft sie gezeigt wurden, wann und wo sie gezeigt wurden und ob Sie irgendwelche Ma&szlig;nahmen im Zusammenhang mit der Werbung ergriffen haben, einschlie&szlig;lich z Anzeige oder einen Kauf t&auml;tigen. Dies umfasst nicht die Personalisierung, dh die Sammlung und Verarbeitung von Informationen &uuml;ber Ihre Nutzung dieses Dienstes, um sp&auml;ter Werbung und / oder Inhalte in anderen Kontexten wie Websites oder Apps im Laufe der Zeit zu personalisieren'
			},
			purpose4: {
				menu: 'Auslieferung und Berichte von Inhalten',
				title: 'Auslieferung und Berichte von Inhalten',
				description: 'Die Sammlung von Informationen und die Kombination mit zuvor gesammelten Informationen, um Inhalte f&uuml;r Sie auszuw&auml;hlen und zu liefern und die Lieferung und Effektivit&auml;t solcher Inhalte zu messen. Dies beinhaltet die Verwendung zuvor gesammelter Informationen &uuml;ber Ihre Interessen, um Inhalte auszuw&auml;hlen, Daten dar&uuml;ber zu verarbeiten, welcher Inhalt gezeigt wurde, wie oft oder wie lange er angezeigt wurde, wann und wo er gezeigt wurde und ob Sie irgendwelche Ma&szlig;nahmen in Bezug auf den Inhalt ergriffen haben zum Beispiel klicken auf Inhalt. Dies beinhaltet nicht die Personalisierung, dh die Sammlung und Verarbeitung von Informationen &uuml;ber Ihre Nutzung dieses Dienstes, um Inhalte und / oder Werbung f&uuml;r Sie sp&auml;ter in anderen Kontexten wie Websites oder Apps zu personalisieren.'
			},
			purpose5: {
				menu: 'Zielgruppenmessung',
				title: 'Zielgruppenmessung',
				description: 'Die Sammlung von Informationen &uuml;ber Ihre Nutzung des Inhalts und die Kombination mit zuvor gesammelten Informationen, die verwendet werden, um Ihre Nutzung des Dienstes zu messen, zu verstehen und dar&uuml;ber zu berichten. Dies umfasst nicht die Personalisierung, die Sammlung von Informationen &uuml;ber Ihre Nutzung dieses Dienstes, um Inhalte und / oder Werbung f&uuml;r Sie in anderen Kontexten, d. H. Auf anderen Diensten, wie Websites oder Apps, im Zeitverlauf zu personalisieren.'
			}
		},
		vendors: {
			title: 'Unsere Partner',
			description: 'Helfen Sie uns, Ihnen eine bessere Online-Erfahrung zu bieten! Unsere Partner verwenden Cookies und sammeln Informationen von Ihrem Browser im Internet, um Sie mit Inhalten zu versorgen, relevante Werbung auszuliefern und Zielgruppen im Internet zu analysieren.',
			accept: 'Akzeptieren',
			acceptAll: 'Alle akzeptieren / deaktivieren',
			optOut: 'Ben&ouml;tigt Opt-Out',
			back : 'Zur&uuml;ck'
		}
	},
	pl: {
		banner: {
			title: 'Reklamy pomagają nam rozwijać tę stronę',
			description: 'Kiedy odwiedzasz naszą stronę, wstępnie wybrane firmy mogą odczytywać i korzystać z określonych informacji zapisanych na Twoim urządzeniu, aby wyświetlać odpowiednie reklamy bądź spersonalizowane treści.',
			links: {
				data: {
					title: 'Informacje jakie mogą być używane.',
					description: `<ul>
						<li>Rodzaj przeglądarki i jej ustawienia</li>
						<li>Informacje o systemie operacyjnym urządzenia</li>
						<li>Informacje zawarte w ciasteszkach (cookie)</li>
						<li>Informacje o innych identyfikatorach przypisanych do urządzenia</li>
						<li>Adres IP z kt&oacute;rego urządzenie łączy się ze stroną lub aplikacją mobilną</li>
						<li>Informacje o aktywności użytkownika na tym urządzeniu włącznie z odwiedzonymi bądź używanymi stronami i aplikacjami mobilnymi</li>
						<li>Informacje o lokalizacji geograficznej urządzenia podczas połączenia ze stroną bądź aplikacją mobilną</li>
					</ul>`
				},
				purposes: {
					title: 'Cele przechowywania informacji.',
					description: `W jaki spos&oacute;b informacje mogą być używane:`
				},
				manage: 'Zobacz więcej',
				accept: '&lt;b&gt;Akceptuję&lt;/b&gt;'
			}
		},
		summary: {
			title: 'W jaki spos&oacute;b informacje są używane?',
			description: 'My oraz wybrane firmy mogą odczytywać i korzystać z Twoich danych dla niżej wymienionych cel&oacute;w. Poniżej możesz zmienić ustawienia albo przejść do serwisu, jeżeli akceptujesz te ustawienia.',
			detailLink: 'Zobacz więcej i zmień ustawienia',
			who: {
				title: 'Kto korzysta z tych informacji?',
				description: 'My oraz wstępnie wybrane firmy będą korzystać z Twoich danych. Możesz przejrzeć listę firm za pomocą odnośnik&oacute;w powyżej albo',
				link: 'wyświetlić pełną listę tutaj'
			},
			what: {
				title: 'Jakie informacje mogą być używane?',
				description: 'Poszczeg&oacute;lne firmy korzystają z r&oacute;żnych danych,',
				link: 'zobacz pełną listę tutaj'
			}
		},
		details: {
			back: 'Wstecz',
			save: '&lt;b&gt;Zapisz i przejdź do serwisu&lt;/b&gt;'
		},
		purposes: {
			title: 'Jakie informacje mogą być używane?',
			description: 'Poniżej znajduje się pełna lista informacji, jakie mogą być gromadzone.',
			back: 'Dostosuj spos&oacute;b, w jaki dane z poprzedniej strony są używane',
			optoutdDescription: `W zależności od rodzaju danych, kt&oacute;re są zbierane, używane
			i przetwarzane, a także innych czynnik&oacute;w włączając uwzględnienie ochrony prywatności na etapie projektowania systemu,
			niekt&oacute;rzy partnerzy polegają na Twojej zgodzie, podczas gdy inni wymagają odwołania zgody.
			Aby uzyskać więcej informacji oraz dokonać wyboru, zobacz poniżej.
			Ewentualnie aby odwołać zgodę odwiedź stronę &lt;a href='http://optout.networkadvertising.org/?c=1#!/' target='_blank'&gt;NAI&lt;/a&gt;,
			&lt;a href='http://optout.aboutads.info/?c=2#!/' target='_blank'&gt;DAA&lt;/a&gt;
			lub &lt;a href='http://youronlinechoices.eu/' target='_blank'&gt;EDAA&lt;/a&gt;.`,
			items: `<ul>
				<li>Rodzaj przeglądarki i jej ustawienia</li>
				<li>Informacje o systemie operacyjnym urządzenia</li>
				<li>Informacje zawarte w ciasteszkach (cookie)</li>
				<li>Informacje o innych identyfikatorach przypisanych do urządzenia</li>
				<li>Adres IP z kt&oacute;rego urządzenie łączy się ze stroną lub aplikacją mobilną</li>
				<li>Informacje o aktywności użytkownika na tym urządzeniu włącznie z odwiedzonymi bądź używanymi stronami i aplikacjami mobilnymi</li>
				<li>Informacje o lokalizacji geograficznej urządzenia podczas połączenia ze stroną bądź aplikacją mobilną</li>
			</ul>`,
			purpose1: {
				menu: 'Zapisywanie i odczytywanie informacji',
				title: 'Zapisywanie i odczytywanie informacji',
				description: 'Co to oznacza: zapisywanie informacji albo odczytywanie informacji, kt&oacute;re zostały już zapisane na Twoim urządzeniu - takich jak identyfikatory reklamowe, identyfikatory urządzenia, ciasteczka (cookie) i podobne technologie.'
			},
			purpose2: {
				menu: 'Personalizacja',
				title: 'Personalizacja',
				description: 'Co to oznacza: zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje. Zwykle treści ze strony lub aplikacji są używane do przewidywania Twoich zainteresowań, na podstawie kt&oacute;rych w przyszłości są dobierane reklamy i/lub treść.'
			},
			purpose3: {
				menu: 'Dobieranie, dostarczanie, raportowanie reklam',
				title: 'Dobieranie, dostarczanie, raportowanie reklam',
				description: 'Co to oznacza: zbieranie informacji i łączenie ich z wcześniej zebranymi informacjami w celu dobrania i dostarczenia Ci reklam, a także pomiaru dostarczalności i efektywności takich reklam. To dotyczy r&oacute;wnież wcześniej zebranych informacji o Twoich zainteresowaniach w celu dobrania reklam, przetwarzania danych o reklamach kt&oacute;re zostały wyświetlone, jak często były wyświetlane, kiedy i gdzie były wyświetlone i czy została wykonana na nich jakaś akcja - na przykład kliknięcie w reklamę albo dokonanie zakupu. To nie dotyczy personalizacji, kt&oacute;ra oznacza zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje.'
			},
			purpose4: {
				menu: 'Dobieranie, dostarczanie, raportowanie treści',
				title: 'Dobieranie, dostarczanie, raportowanie treści',
				description: 'Co to oznacza: zbieranie informacji i łączenie ich z wcześniej zebranymi informacjami w celu dobrania i dostarczenia Ci treści, a także pomiaru dostarczalności i efektywności takich treści. To dotyczy r&oacute;wnież wcześniej zebranych informacji o Twoich zainteresowaniach w celu dobrania treści, przetwarzania danych o treściach kt&oacute;re zostały wyświetlone, jak często były wyświetlane, kiedy i gdzie były wyświetlone i czy została wykonana na nich jakaś akcja - na przykład kliknięcie na treści. To nie dotyczy personalizacji, kt&oacute;ra oznacza zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje.'
			},
			purpose5: {
				menu: 'Pomiary',
				title: 'Pomiary',
				description: 'Co to oznacza: zbieranie informacji o Twoim sposobie używania treści i łączenie ich z wcześniej zebranymi informacjami w celu pomiar&oacute;w, zrozumienia i raportowania Twojego sposobu używania serwisu. To nie dotyczy personalizacji, kt&oacute;ra oznacza zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje.'
			}
		},
		vendors: {
			title: 'Kto korzysta z tych informacji?',
			description: 'Tutaj możesz zobaczyć pełną listę firm, kt&oacute;re korzystają z Twoich informacji. Aby dowiedzieć się więcej, zobacz ich politykę prywatności.',
			accept: 'Akceptuję',
			acceptAll: 'Zaakceptuj wszystko',
			optOut: 'wymaga odwołania zgody',
			back: 'Dostosuj spos&oacute;b, w jaki te firmy korzystają z danych z poprzedniej strony'
		}
	},
	it: {
		banner: {
			title: 'Uso dei cookies',
			description: 'Utilizziamo i nostri &quot;cookie&quot; e di terze parti per raccogliere informazioni statistiche e mostrarti pubblicit&agrave; personalizzata attraverso l\'analisi della tua navigazione. Se continui a navigare, accetti tale utilizzo',
			links: {
				data: {
					title: 'Informazioni che possono essere utilizzate.',
					description: `<ul>
									<li>Tipo di browser e sua configurazione</li>
									<li>Informazioni sul sistema operativo del dispositivo</li>
									<li>Informazioni sui cookie</li>
									<li>Informazioni su altri identificatori assegnati al dispositivo</li>
									<li>Indirizzo IP da cui il dispositivo accede al sito Web o all'applicazione mobile</li>
									<li>Informazioni sull'attivit&agrave; dell'utente su questo dispositivo, comprese le pagine Web e le applicazioni mobile visitate o utilizzate</li>
									<li>Informazioni sulla posizione geografica del dispositivo quando si accede a un sito Web o un'applicazione mobile</li>
								</ul>`
				},
				purposes: {
					title: 'Uso dei dati.',
					description: `Come possono essere utilizzate le informazioni:`
				},
				manage: 'Leggi di pi&ugrave;',
				accept: 'Accetta'
			}
		},
		details: {
			title: 'Impostazioni sulla privacy',
			back: 'Indietro',
			save: 'Salva ed esci'
		},
		summary: {
			title: 'Ulteriori informazioni su come vengono utilizzate le informazioni.',
			description: 'Noi e alcune societ&agrave; selezionate possiamo accedere e utilizzare le tue informazioni per i seguenti scopi. Puoi personalizzare le tue opzioni qui sotto o continuare a utilizzare il nostro sito se sei d\'accordo con gli scopi.',
			detailLink: 'Maggiori informazioni',
			who:{
				title:'Chi sta usando queste informazioni?',
				description:'Noi e le societ&agrave; preselezionate utilizziamo le tue informazioni. Puoi vedere ciascuna compagnia nei link sopra.',
				link:'Guarda l\'elenco completo qui.'
			},
			what:{
				title:'Quali informazioni vengono utilizzate?',
				description:'Diverse aziende usano informazioni diverse,',
				link:'Guarda l\'elenco completo qui.'
			}
		},
		purposes: {
			title: 'Dati raccolti',
			description: 'Di seguito &egrave; riportato l\'elenco dei dati che possono essere raccolti:',
			back: 'Configura come vengono utilizzati questi dati',
			optoutdDescription: 'A seconda del tipo di dati che raccolgono, utilizzano e elaborano, e di altri fattori, inclusa la privacy in base alla progettazione, alcuni partner fanno affidamento sul loro consenso, mentre altri richiedono che vengano esclusi. Per informazioni su ciascun fornitore ed esercitare le tue scelte, vedi sotto. O per rinunciare, visitare i siti NAI, DAA o EDAA.',
			items: `<ul>
						<li>Tipo e configurazione del browser</li>
						<li>Informazioni sul sistema operativo</li>
						<li>Dati dei cookie</li>
						<li>Informazioni sul dispositivo utilizzato</li>
						<li>L'indirizzo IP da cui il dispositivo accede al sito Web</li>
						<li>Informazioni sull'attivit&agrave; dell'utente su questo dispositivo, comprese le pagine Web visitate</li>
						<li>Informazioni sulla posizione del dispositivo quando si accede al sito Web</li>
					</ul>`,
			purpose1: {
				menu: 'Archiviazione e accesso alle informazioni',
				title: 'Archiviazione e accesso alle informazioni',
				description: 'La memorizzazione e l\'accesso alle informazioni gi&agrave; memorizzate sul dispositivo, come identificatori pubblicitari, identificativi del dispositivo, cookie e tecnologie simili.'
			},
			purpose2: {
				menu: 'Personalizzazione',
				title: 'Personalizzazione',
				description: 'La raccolta e l\'elaborazione di informazioni per personalizzare successivamente la pubblicit&agrave; e / o il contenuto per te, come in altri siti Web o applicazioni, nel tempo. Normalmente, la futura selezione di pubblicit&agrave; e / o contenuti.'
			},
			purpose3: {
				menu: 'Selezione degli annunci, diffusione, report',
				title: 'Selezione degli annunci, diffusione, report',
				description: 'Consentire l\'elaborazione dei dati di un utente per fornire contenuti o annunci pubblicitari e misurare la diffusione di tali contenuti o pubblicit&agrave;, estrarre informazioni e generare rapporti per comprendere l\'uso dei servizi; e / o accedere o memorizzare informazioni sui dispositivi per questo scopo. Includi le seguenti funzionalit&agrave;.'

			},
			purpose4: {
				menu: 'Selezione dei contenuti, diffusione, report',
				title: 'Selezione dei contenuti, diffusione, report',
				description: 'Raccolta di informazioni e combinazione con informazioni precedentemente raccolte per selezionare e fornire contenuti per te e per misurare la consegna e l\'efficacia di tali contenuti. Ci&ograve; include l\'uso delle informazioni raccolte in precedenza sui tuoi interessi per selezionare il contenuto, elaborare i dati su quale contenuto &egrave; stato visualizzato, con quale frequenza o per quanto tempo &egrave; stato mostrato, quando e dove &egrave; stato visualizzato e se hai intrapreso qualche azione relativa al contenuto, incluso esempio, clic sul contenuto. Ci&ograve; non include la personalizzazione, che &egrave; la raccolta e l\'elaborazione di informazioni sull\'uso di questo servizio per personalizzare successivamente il contenuto e / o la pubblicit&agrave; in altri contesti, come siti Web o applicazioni, nel tempo.'

			},
			purpose5: {
				menu: 'Misurazione',
				title: 'Misurazione',
				description: 'Raccolta di informazioni sull\'utilizzo del contenuto e sulla combinazione di informazioni raccolte in precedenza, utilizzate per misurare, comprendere e riferire sull\'utilizzo del servizio. Ci&ograve; non include la personalizzazione, la raccolta di informazioni sull\'uso di questo servizio per personalizzare successivamente il contenuto e / o la pubblicit&agrave; in altri contesti, ovvero in altri servizi, come siti Web o applicazioni, nel tempo.'

			},
		},
		vendors: {
			title: 'I nostri partner',
			description: 'Aiutaci ad offrirti un servizio migliore. I nostri partner utilizzano i loro cookie del browser per comprendere, attraverso il web, i loro interessi e offrire contenuti e pubblicit&agrave; pertinenti.',
			accept: 'Accetta',
			acceptAll: 'Accetta tutto',
			optOut: 'Richiede la rinuncia',
			back : 'Indietro'
		}
	}
};
