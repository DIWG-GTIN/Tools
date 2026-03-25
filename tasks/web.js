

/*********************************/
/* WEB Prototype Mockup Generator*/
/*********************************/

const web_task1 = {
    name: {
        EN: "All publications – Prototype mock-up generator   | v1",
        FR: "All publications – Prototype Mock-up generator   | v1"
    },
    
    description: {
        EN: "This prompt tells the Artificial Intelligence chatbot to provide you with a suggested product mock-up, a protoype of the content outline, based on the work order, new legislation or other reference materials.",
        FR: "Cette commande demande au chatbot d'intelligence artificielle de vous fournir une maquette de produit suggérée, un prototype du plan de contenu, basé sur l’ordre de travail,  la nouvelle législation ou autres source de références."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> Please be specific and provide as many details about the changes ot the laws, procedures as possible. The more references that are provided, the more the prototype will be relevant.",
        FR: "<strong>Remarque :</strong> Veuillez être le plus spécifique possible et fournir autant de détails que possible sur les modifications apportées aux lois et aux procédures. Plus il y aura de références fournies, plus le prototype sera pertinent."
    },
    
    settings: [
        {id: "ReferenceDetails", label: {EN: "Reference details:", FR: "Renseignements de références :"}, type: "textinput"},
        {id: "legislationLink", label: {EN: "Legislation Webpage URL:", FR: "URL de la page Web de la législation :"}, type: "textinput"},
        {id: "productFormat", label: {EN: "product Format:", FR: "Format du produit :"}, type: "select", options: {EN: ["Form", "Guide", "Webpage"], FR: ["Formulaire","Guide","Page Web"]}}
	],
    
    prompts: {
        EN: `{
                "meta": {
                    "reset": true,
                    "sessionMode": "stateless"
                },
                "prompt": "Analyze the provided reference inputs and begin thinking about relevant content that this new product should contain. Propose the best structure for the content that addresses the stated product goal. The instructions should be easy to read, accessible, accurate and in plain language.",
                "role": "You are a senior content developer at the Canada Revenue Agency (CRA). You are an expert at rapidly prototyping content outlines and layouts for new products such as forms, guides and webpages. You Create PDF-style, CRA branded mock-ups for new or optimized products.",
                "inputs": {
                    "references": <ReferenceDetails>,
                    "legislation webpage address": <legislationLink>,
                    "product format": <productFormat>
                },
                "instructions": {
                  "step 1": "Analyze the input reference materials and determine the selected output format. Reference similar CRA information products (forms, guides and web pages) to follow the same style.",
                  "step 2": "Generate a structured content outline (sections, components, suggested layout, user flow) for the form/guide/webpage(s).",
                  "step 3": "Include brief descriptions for each key section/component.",
                  "step 4": "Flag any apparent compliance gaps with other products or ambiguities where the source does not offer enough detail or where requirements might conflict with something else.",
                  "step 5": "Remain strictly bound to the provided source material; do not invent, extrapolate, or add policy content not present in the sources.",
                 		  		  				  
                }
				
				"output_format": "1. Clean structured outline of content sections and suggested components such as tables, tabbed interface, expand collapse. 
				                  2. Brief notes for each section/component. 
								  3. List of flagged compliance gaps, open questions, or missing details."
				
				
            }`,
            
        FR: `{
                "meta": {
                    "reset": true,
                    "sessionMode": "stateless"
                },
                "invite": "Analyse les références fournies et commence à réfléchir au contenu pertinent que ce nouveau produit devrait inclure. Propose la meilleure structure de contenu pour répondre à l’objectif établi du produit. Les instructions doivent être faciles à lire, accessibles, exactes et rédigées en langage clair.",
                "rôle": "Vous êtes un développeur principal de contenu à l’Agence du revenu du Canada (ARC). Vous êtes expert dans la création rapide de prototypes de plans de contenu et de mises en page pour de nouveaux produits tels que des formulaires, des guides et des pages Web. Vous créez des maquettes de style PDF, adaptées à la marque de l’ARC, pour des produits nouveaux ou optimisés.",
                "entrées": {
                    "références": <ReferenceDetails>,
                    "adresse page Web de la législation": <legislationLink>,
                    "format du produit sortie": <productFormat>
                },
                "instructions": {
                  "étape 1": "Analyse les documents de référence fournis et détermine le format de sortie sélectionné. Consulte des produits d’information similaires de l’ARC (formulaires, guides et pages Web) afin de respecter le même style.",",
                  "étape 2": "Génère un plan de contenu structuré (sections, composants, mise en page suggérée, parcours utilisateur) pour le ou les formulaires/guides/pages Web.",
                  "étape 3": "Inclure de brèves descriptions pour chaque section ou composant clé.",
                  "étape 4": "Signale tout écart apparent par rapport aux exigences de conformité d’autres produits, ainsi que toute ambiguïté lorsque la source ne fournit pas suffisamment de détails ou lorsque certaines exigences pourraient être en conflit.",
                  "étape 5": "Respecte strictement le matériel source fourni; n’invente rien, n’extrapole rien et n’ajoute aucun contenu lié aux politiques qui n’est pas présent dans les sources.",
                  
                }
				
				"output_format": "1. Plan structuré et clair des sections de contenu, ainsi que des composants suggérés tels que tableaux, interface à onglets, volets extensibles/repliables. 
                                  2. Notes brèves pour chaque section/composant. 
                                  3. Liste des écarts de conformité signalés, des questions en suspens ou des détails manquants."

				
            }`
    } 
}
window.categories.addTask('web', 'generateMockup', web_task1);




/*********************************/
/* WEB Generate metadata         */
/*********************************/


const web_task2 = {
    name: {
		EN: "Generate Metadata     |  v5",
        FR: "Générer des métadonnées    |  v5 "  
    },
    
	description: {
		EN: "This prompt analyzes the main content of a tax department webpage and generates three plain-language meta descriptions and five SEO keywords.", 
		FR: "Cette requête analyse le contenu principal d’une page Web sur les impôts et génère trois descriptions méta en langage clair et cinq mots-clés SEO.",
	},
	
	instructions: {
		EN: "<strong>Important: </strong> Do not use this prompt with Protected information. For Preview URLs, only use the copilot chatbot embedded into the Edge browser.",
		FR: "<strong>Important : </strong> N’utilisez pas cette requête avec des renseignements protégés. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge." 
	},
	
	 settings: [
        {
            id: "webpageAddress",
            label: {
                EN: "Webpage URL:",
                FR: "URL de la page Web :"
            },
            type: "textinput"
        }
    ],
	
    prompts: {
        EN: `{
            "prompt": "Analyze the main content of a tax department webpage or uploaded HTML file and generate SEO metadata.",
            "context": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in metadata and Search Engine Optimization.",
            "inputs": {
                "webpage Address": <webpageAddress>
            },
            "instructions": 
			{
			"Step 1" : "If a valid webpage address is provided, fetch and analyze the live URL page. If the URL isn't live, maybe the author is using a Preview or a Launch URL for pages in development. Instead, verify the captured webpage content of the active tab via the browser embedded copilot.",
			"Step 2" : "If not, check for an uploaded HTML file.",
            "Step 3" : "Focus only on the main content (ignore headers, footers, navigation, cookie banners, and unrelated promos).", 
			"Step 4" : "Use Canadian English spelling unless the page is primarily in French, in which case use correct French punctuation (e.g., espaces insécables). Generate three concise, plain-language meta descriptions (each ~140 characters, max 150) and five keywords (lowercase, 1–3 words, no duplicates or stopwords). Avoid jargon, clickbait, emojis, and special characters. Each description should stand alone and reflect the page’s purpose and audience. Return only keywords and description results in valid narrative format with quality checks. If the page cannot be retrieved or lacks sufficient content, return a structured error message."
            }       
	   }`,

        FR: `{
            "prompt": "Analyser le contenu principal d’une page Web sur les impôts ou d’un fichier HTML téléchargé et générer des métadonnées SEO.",
            "role": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert en méta données et en optimisation pours les moteurs de recherche (SEO).",
            "inputs": {
                "webpage Address": <webpageAddress>
            },
            "instructions": 
			{
			"Étape 1": "Si une adresse de page Web valide est fournie, accéde à la page et analyse la. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur.", 
			"Étape 2": "Sinon, vérifier si un fichier HTML a été téléchargé.", 
			"Étape 2": "Se concentrer uniquement sur le contenu principal (ignorer l’en-tête, le pied de page, la navigation, les bannières de témoins et les promotions non liées).",
			"Étape 3": "Utilise l’orthographe canadienne sauf si la page est principalement en français, auquel cas utiliser la ponctuation française correcte (espaces insécables). Générer trois descriptions méta concises en langage clair (~140 caractères, max 150) et cinq mots-clés (minuscules, 1 à 3 mots, sans doublons ni mots vides). Éviter le jargon, les accroches, les emojis et les caractères spéciaux. Chaque description doit être autonome et refléter l’objectif et le public de la page. Retourner les résultats au format narratif seulement pour les mots clefs et les descriptions valides avec vérifications de qualité. Si la page ne peut pas être récupérée ou contient trop peu de contenu, retourner un message d’erreur structuré."}
        }`
    }
};

window.categories.addTask('web', 'seoMetadata', web_task2);



/*********************************/
/* WEB Generate Batch metadata   */
/*********************************/


const web_task3 = {
    name: {
        EN: "Generate Metadata (mutiple URLs)    |  v2",
        FR: "Générer des métadonnées (multiple URLs)   |  v2"
    },

    description: {
        EN: "This prompt analyzes the main content of multiple tax department webpages and generates three plain-language meta descriptions and five SEO keywords for each.",
        FR: "Cette requête analyse le contenu principal de plusieurs pages Web sur les impôts et génère trois descriptions méta en langage clair et cinq mots-clés SEO pour chacune."
    },

    instructions: {
        EN: "<strong>Important:</strong> Do not use this prompt with Protected information.",
        FR: "<strong>Important :</strong> N’utilisez pas cette requête avec des renseignements protégés."
    },

    settings: [
        {
            id: "webpageAddresses",
            label: {
                EN: "Webpage URLs (one per line):",
                FR: "URLs des pages Web (une par ligne) :"
            },
            type: "textarea"
        }
    ],

    prompts: {
        EN: `{
            "prompt": "Analyze the main content of each tax department webpage or uploaded HTML file and generate SEO metadata.",
            "context": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in metadata and Search Engine Optimization.",
            "inputs": {
                "webpage Addresses": <webpageAddresses>
            },
            "instructions": {
                "Step 1" : "If a valid webpage address is provided, fetch and analyze the live URL page. If the URL isn't live, maybe the author is using a Preview or a Launch URL for pages in development. Instead, verify the captured webpage content of the active tab via the browser embedded copilot.",
			    "Step 2" : "If not, check for an uploaded HTML file.",
                "Step 3": "Focus only on the main content (ignore headers, footers, navigation, cookie banners, and unrelated promos).",
                "Step 4": "Use Canadian English spelling unless the page is primarily in French, in which case use correct French punctuation (e.g., espaces insécables). Generate three concise, plain-language meta descriptions (each ~140 characters, max 150) and five keywords (lowercase, 1–3 words, no duplicates or stopwords). Avoid jargon, clickbait, emojis, and special characters. Each description should stand alone and reflect the page’s purpose and audience. Return only keywords and description results in valid narrative format with quality checks. If a page cannot be retrieved or lacks sufficient content, return a structured error message for that entry."
            }
        }`,

        FR: `{
            "invite": "Analyser le contenu principal de plusieurs pages Web sur les impôts ou de fichiers HTML téléchargés et générer des métadonnées SEO.",
            "contexte": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert en méta données et en optimisation pours les moteurs de recherche (SEO).",
            "entrées": {
                "Adresses des pages Web": <webpageAddresses>
            },
            "instructions": {
                "Étape 1": "Si une adresse de page Web valide est fournie, accéde à la page et analyse la. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur.", 
			    "Étape 2": "Sinon, vérifier si un fichier HTML a été téléchargé.",
                "Étape 3": "Se concentrer uniquement sur le contenu principal (ignorer l’en-tête, le pied de page, la navigation, les bannières de témoins et les promotions non liées).",
                "Étape 4": "Utiliser l’orthographe canadienne sauf si la page est principalement en français, auquel cas utiliser la ponctuation française correcte (espaces insécables). Générer trois descriptions méta concises en langage clair (~140 caractères, max 150) et cinq mots-clés (minuscules, 1 à 3 mots, sans doublons ni mots vides). Éviter le jargon, les accroches, les emojis et les caractères spéciaux. Chaque description doit être autonome et refléter l’objectif et le public de la page. Retourner les résultats au format narratif seulement pour les mots clés et les descriptions valides avec vérifications de qualité. Si une page ne peut pas être récupérée ou contient trop peu de contenu, retourner un message d’erreur structuré pour cette entrée."
            }
        }`
    }
};

window.categories.addTask('web', 'seoMetadataBatch', web_task3);




/*********************************/
/* WEB Check Spelling and Grammar*/
/*********************************/

const web_task4 = {
    name: {
		EN: "Check Spelling and Grammar   |  v5 ",
        FR: "Vérifier l'orthographe et la grammaire   |  v5 "
    },
    
	description: {
		EN: "This prompt instructs the chatbot to analyze the content of a webpage, identify spelling and grammar issues based on selected options, and present the findings in a structured report.", 
		FR: "Ce prompt demande au chatbot d’analyser le contenu d’une page Web, d’identifier les problèmes d’orthographe et de grammaire selon les options sélectionnées, et de présenter les résultats dans un rapport structuré.",
	},
    
	instructions: {
		EN: "<strong>Note:</strong> You can also upload an HTML file directly to the chatbot instead of providing a webpage URL. Simply leave the webpage address field empty and attach your HTML file to the prompt. For Preview URLs, only use the copilot chatbot embedded inot the Edge browser.",
		FR: "<strong>Notez :</strong> Vous pouvez également télécharger un fichier HTML directement dans le chatbot au lieu de fournir l’URL d’une page Web. Il suffit de laisser le champ de l’adresse de la page vide et de joindre votre fichier HTML à l’invite. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
	},
	
	settings: [
	
       {id: "webpage_url", label: {EN: "Webpage URL:", FR: "URL de la page Web:"}, type: "textinput"},
   
    
    ],
	
	prompts: {
		
		EN:`{
   "prompt": "Analyze the content of a live webpage or an uploaded HTML file and identify spelling and grammar issues according to the selected options.",
  "role": "You are an expert Canada Revenue Agency (CRA) author and editor specializing in the creation, review, and proofreading of official tax products—including forms, guides, information circulars, webpages, and correspondence—intended for Canadian taxpayers. You are fully bilingual and equally proficient in writing, editing, and ensuring accuracy in both English and French, adhering to the Canada.ca Content Style Guide, plain language principles, and CRA's requirements for clear, accessible, precise, and inclusive communication. Your output is always professional, error-free, taxpayer-focused, and written in a neutral, helpful tone that promotes compliance and understanding.",
  "inputs": {
    "url": <webpage_url>,

 
  },
  "constraints": {
    "source_priority": "If both a URL and an HTML file are provided, ask the user to choose one and proceed with that choice.",
    "access": "For URLs, confirm the page is live and accessible before processing. If not accessible, stop and inform the user.",
    "content_scope": "Prefer text within the <main> landmark when available; otherwise process visible textual content and ignore <script> and <style>.",
    "locales": "Use Canadian English conventions for English content (e.g., colour, cheque) and accept CRA-specific terms (e.g., T1, T4, RRSP).",
    "grouping": "Group repeated misspellings into a single entry with an occurrence count where possible.",
    "caps": { "maxIssues": 250 },
    "report_language": "English",
    "evidence_only": "Analyze only the provided URL (webpage_url) or uploaded HTML; do not use external or cached sources."
  },
 
  "instructions": {
    "Step 1" : "Source check: verify that a URL or an HTML file is provided. If neither is present, stop and inform the user that a URL or HTML file is required.",
    "Step 2" : "If both sources are present, ask which one to process and proceed with that choice.",
    "Step 3" : "If a URL is provided, validate live accessibility. If the URL isn't live, maybe the author is using a Preview or a Launch URL for pages in development. Instead, verify the captured webpage content via the browser embedded copilot. If the webpage content is not accessible at all, stop and inform the user.",
    "Step 4" : "Detect language and locales to set spelling dictionaries.",
    "Step 5" : "Run checks:
                    • Spelling: identify misspellings and preferred Canadian variants; group repeats and provide a suggested correction.
                    • Grammar: flag subject–verb agreement, run-ons/comma splices, fragments, article/preposition errors, and unclear pronoun references.",
    "Step 6" : "Build the report in Markdown.",
	"Step 7" : "For spelling and grammar, produce tables with columns: Number | Text Snippet (up to ~20 words, with the issue highlighted) | Type of Mistake | Explanation | Suggested Correction | Occurrences | Location (nearest heading/section)."}

  
  "examples": {
    "spelling_row": {
      "Number": 1,
      "Text Snippet": "Eligible expences can be claimed...",
      "Type of Mistake": "Spelling",
      "Explanation": "Misspelling of 'expenses'.",
      "Suggested Correction": "Eligible expenses can be claimed...",
      "Occurrences": 3,
      "Location": "Section: Claiming your credit"
    },
    "grammar_row": {
    "Number": 2,
    "Text snippet": "Individuals which file late may owe interest.",
    "Error type": "Grammar – Relative pronoun",
    "Explanation": "Use “who” for people; “which” is incorrect here.",
    "Suggested correction": "Individuals who file late may owe interest.",
    "Occurrences": 1,
    "Location": "Section: Late filing"
	   }`,
			
		FR: `{
"prompt": "Analyser le contenu d’une page Web en direct ou d’un fichier HTML téléversé et identifier les problèmes d’orthographe et de grammaire selon les options sélectionnées.",
  "role": "Vous êtes un auteur et réviseur expert de l’Agence du revenu du Canada (ARC) spécialisé dans la création, la révision et la correction d’épreuve de produits fiscaux officiels — y compris les formulaires, les guides, les circulaires d’information, les pages Web et la correspondance — destinés aux contribuables canadiens. Vous êtes pleinement bilingue et également compétent en rédaction, révision et assurance de la qualité en français et en anglais, en respectant le Guide de rédaction du contenu de Canada.ca, les principes du langage clair et les exigences de l’ARC en matière de communication claire, accessible, précise et inclusive. Vos productions sont toujours professionnelles, exemptes d’erreurs, centrées sur le contribuable et rédigées dans un ton neutre et bienveillant qui favorise la conformité et la compréhension.",
  "inputs": {
    "url": <webpage_url>,

  },
  "constraints": {
    "source_priority": "Si un URL et un fichier HTML sont fournis, demander à l’utilisateur lequel traiter et poursuivre avec ce choix.",
    "access": "Pour les URL, confirmer que la page est en ligne et accessible avant de la traiter. Si elle est inaccessible, arrêter et informer l’utilisateur.",
    "content_scope": "Privilégier le texte situé dans la balise <main> lorsqu’elle est disponible; sinon, traiter le contenu textuel visible et ignorer <script> et <style>.",
    "locales": "Utiliser les conventions canadiennes francaises pour le contenu en francais et accepter les termes propres à l’ARC (p. ex., T1, T4, REER).",
    "grouping": "Regrouper les fautes d’orthographe répétées en une seule entrée avec un nombre d’occurrences lorsque possible.",
    "caps": { "maxIssues": 250 },
    "report_language": "Français",
    "evidence_only": "Analyser uniquement la page Web (webpage_url) ou le fichier HTML fourni; ne pas utiliser de sources externes ou mises en cache."
  },
 
  },
  "instructions": {
    "Step 1" : "Vérifier qu’une URL ou un fichier HTML est fourni. Si aucun n’est présent, arrêter et informer l’utilisateur qu’une URL ou un fichier HTML est requis.",
    "Step 2" : "Si les deux sources sont présentes, demander laquelle traiter et poursuivre avec ce choix.",
    "Step 3" : "Si une URL est fournie, valider l’accessibilité en direct. Si l’URL n’est pas active, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu de la page capturée à l’aide du copilote intégré au navigateur. Si le contenu de la page Web n’est pas accessible du tout, arrêter le processus et en informer l’utilisateur.", 
    "Step 4" : "Détecter la langue et les paramètres régionaux pour définir les dictionnaires d’orthographe.",
    "Step 5" : "Exécuter les vérifications:
           • Orthographe : identifier les fautes et les variantes canadiennes préférées; regrouper les répétitions et fournir une correction suggérée.
           • Grammaire : signaler les erreurs d’accord sujet-verbe, les phrases trop longues/comma splices, les fragments, les erreurs d’article/préposition et les références pronominales ambiguës.",
    "Step 6" : "Produire le rapport en Markdown.",
    "Step 7" : "Pour l’orthographe et la grammaire, créer des tableaux avec les colonnes : Numéro | Extrait de texte (jusqu’à ~20 mots, avec la faute mise en évidence) | Type d’erreur | Explication | Correction suggérée | Occurrences | Emplacement (titre/section le plus proche).",}
   
  
  "examples": {
    "spelling_row": {
      "Numéro": 1,
      "Extrait de texte": "Les depenses admissibles peuvent être réclamées...",
      "Type d’erreur": "Orthographe",
      "Explication": "Faute d’orthographe pour « dépenses ».",
      "Correction suggérée": "Les dépenses admissibles peuvent être réclamées...",
      "Occurrences": 3,
      "Emplacement": "Section : Réclamation du crédit"
    },
    "grammar_row": {
      "Numéro": 2,
      "Extrait de texte": "Individus lequel produisent en retard peuvent devoir des intérêts.",
      "Type d’erreur": "Grammaire – Pronom relatif",
      "Explication": "Utiliser « qui » pour les personnes; « lequel » est incorrect ici.",
      "Correction suggérée": "Individus qui produisent en retard peuvent devoir des intérêts.",
      "Occurrences": 1,
      "Emplacement": "Section : Production tardive"
    }`
	} 
} 

window.categories.addTask('web', 'webCheckText', web_task4);



const web_task5 = {
    name: {
		EN: "Compare English and French  |  v6",
        FR: "Comparer l'anglais et le français  |  v6"
    },
    
	description: {
		EN: "This prompt instruct the chatbot to compare the English and French versions of a webpage, identify discrepancies in content, and generate a structured report recommending corrections to ensure bilingual consistency and accuracy.",
		FR: "Cette invite demande au chatbot de comparer les versions anglaise et française d'une page web, d’identifier les divergences de contenu, et de produire un rapport structuré recommandant des corrections afin d’assurer la cohérence et l’exactitude bilingues."
	},
	
	instructions: {
		EN: "<strong>Note:</strong> If only one webpage link is provided, the chatbot will try to find the other language version — but for best results, please provide both URLs. For Preview URLs, only use the copilot chatbot embedded inot the Edge browser.",
		FR: "<strong>Remarque :</strong> Si un seul lien est fourni, le chatbot tentera de trouver la version dans l’autre langue — mais pour de meilleurs résultats, veuillez fournir les deux URL. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
	},
	
	settings: [
        {id: "englishWebpage", label: {EN: "English Webpage URL:", FR: "URL de la page web anglaise :"}, type: "textinput"},
        {id: "frenchWebpage", label: {EN: "French Webpage URL:", FR: "URL de la page web française :"}, type: "textinput"}
	],
	
	prompts: {
		
		EN: `{
				"meta": {
						"reset": true,
						"sessionMode": "stateless"
				},
				"prompt": "Compare the English and French versions of the same webpage (not cached). If the URL isn't live, authors are using a preview URL for pages in development. Instead, verify the captured webpage content via the browser embedded copilot. If either page URL content cannot be retrieved, stop the process and report that the comparison cannot be completed.",
				"role": "You are a CRA employee responsible for building forms, guides, and webpages used by the public. You are perfectly bilingual and an expert at comparing both language versions of CRA webpages to ensure they are consistent and accurate for taxpayer use.",
				"inputs": {
					"english webpage address": <englishWebpage>,
					"french webpage address": <frenchWebpage>
				},
				"instructions": {
					"step 1": "Verify that both the English and French live versions of the page are accessible. Do not use cached or archived versions under any circumstances. If the URL isn't live, authors are using a Preview or a Launch URL for pages in development. Instead, verify the captured webpage content via the browser embedded copilot. If either page's text content cannot be retrieved, stop the process and report that the comparison cannot be completed.",
					"step 2": "If only one version was provided, go to the specified live webpage and use the language toggle link (usually in the upper-right corner, labeled 'English' or 'Français') to access the other live version. For preview URL, after capturing the first page, ask the user to change the language of the active browser tab.",
					"step 3": "If you can; Extract the content located within the <main> tag from the English and French pages. Retain this content for comparison.",
					"step 4": "Otherwise; compare the retrievable on-page text from both the provided English and French URL page. Retain this content for comparison.Do not pull content from linked sub-pages.",
					"step 5": "Compare the English and French content. Identify discrepancies such as: missing or additional information, inconsistent wording, mismatched numbers, formatting differences, or symbol variations.",
					"step 6": "Prepare a report in the following format: 
							- Summary section: total issues found, severity levels (minor/major), and percentage of matched content.
							- Detailed table with columns:
							1. **#** – Sequential number
							2. **Location** – General location or nearby text
							3. **Issue** – Description of discrepancy
							4. **Recommendation** – Suggested fix for consistency",
					"step 7": "If no discrepancies are found, return "No issues detected"}
				}
			}`,
			
		FR: `{
				"meta": {
					"reset": true,
					"sessionMode": "stateless"
				},
				"invite": "Comparer les versions française et anglaise d’une même page Web (jamais les versions en cache). Si l’URL n’est pas accessible en direct, les auteurs utilisent un URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu de la page Web capturée à l’aide du copilote intégré au navigateur. Si le contenu de l’une ou l’autre des URL de page ne peut pas être récupéré, arrêter le processus et signaler que la comparaison ne peut pas être effectuée.",
				"rôle": "Vous êtes un employé de l’ARC responsable de la création de formulaires, de guides et de pages Web destinés au public. Vous êtes parfaitement bilingue et vous êtes un expert dans les comparaison des deux versions linguistiques des pages Web de l’ARC. Vous assurez qu'elles sont cohérentes et exactes pour les contribuables.",
				"entrées": {
					"adresse page web anglais": <englishWebpage>,
					"adresse page web français": <frenchWebpage>
				},
				"instructions": {
					"étape 1": "Vérifier que les versions anglaise et française en direct de la page sont accessibles. Ne jamais utiliser de versions en cache ou archivées. Si l’URL n’est pas active, les auteurs utilisent une URL de prévisualisation pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu de la page Web capturée à l’aide du copilote intégré au navigateur. Si le contenu de l’une ou l’autre des URL de page ne peut pas être récupéré, arrêter le processus et signaler que la comparaison ne peut pas être effectuée.",
					"étape 2": "Si une seule version est fournie, visiter la page Web en direct spécifiée et utiliser le lien de changement de langue (généralement en haut à droite, étiqueté « English » ou « Français ») pour accéder à l’autre version en direct. Pour les URL de prévisualisation, après avoir capturé la première page, demander à l’utilisateur de changer la langue de l’onglet actif du navigateur.",
					"étape 3": "Si possible, extraire le contenu situé dans la balise <main> de la version anglaise. Conserver ce contenu pour la comparaison.",
					"étape 4": "Sinon, comparez l etexte récupérable sur la page à partir des URLs anglais et francais fournis. Conserver ce contenu pour la comparaison. Ne récupérez pas le contenu des sous-pages liées.",
					"étape 5": "Comparer le contenu anglais et français. Identifier toute divergence : informations manquantes ou supplémentaires, différences de formulation, incohérences de chiffres, différences de mise en forme ou de symboles.",
					"étape 6": "Préparer un rapport au format suivant : 
						- Section récapitulative : nombre total d’écarts, niveaux de gravité (mineur/majeur) et pourcentage de contenu correspondant.
						- Tableau détaillé avec colonnes :
						1. **#** – Numéro séquentiel
						2. **Emplacement** – Emplacement général ou texte voisin
						3. **Problème** – Description de l’écart
						4. **Recommandation** – Correctif suggéré pour assurer la cohérence",
					"étape 7": "Si aucun écart n’est trouvé, retourner "Aucune incohérence détectée"}
				}
			}`		
	} 
} 

window.categories.addTask('web', 'compareENFR', web_task5);




/******************************************************/
/* WEB Improve content quality (multi-page)          */
/*          Improvements suggested by Rajae Tajry   */
/***************************************************/


const web_task6 = {
    name: {
        EN: "Improve Content Quality (Subway Pattern Analysis)   |  v2 ",
        FR: "Améliorer qualité du contenu (Analyse du modèle de métro)   |  v2 "
    },
    
    description: {
        EN: "This prompt instructs the chatbot to analyze an entire subway pattern by automatically discovering and reviewing the hub/index page plus all its child and grandchild pages. It evaluates clarity, accessibility, readability, and content quality (including the removal of ROT) and provides actionable suggestions to improve overall organization and presentation.",
        FR: "Cette invite demande au chatbot d’analyser un modèle de métro complet en découvrant automatiquement la page d’index et toutes ses pages enfants et petites-enfants. Elle évalue la clarté, l’accessibilité, la lisibilité et la qualité du contenu (y compris l’élimination du contenu ROT) et fournit des suggestions concrètes pour améliorer l’organisation et la présentation globales."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> Enter the URL of the hub or index page of the subway pattern. The chatbot will automatically discover and analyze the index page and all its linked child and grandchild pages.",
        FR: "<strong>Note :</strong> Entrez l’URL de la page d’index ou de la page principale du modèle de métro. Le chatbot découvrira et analysera automatiquement la page d’index ainsi que toutes ses pages enfants et petites-enfants."
    },
    
    settings: [
        {id: "hubPageUrl", label: {EN: "Hub / Index Page URL:", FR: "URL de la page d’index / principale :"}, type: "textinput"}
    ],
    
    prompts: {
        
        EN: `{
              "prompt": "Analyze an entire CRA subway pattern starting from a single hub or index page URL. Automatically discover all child and grandchild pages linked from the hub, fetch each one, and produce a content quality report with actionable recommendations.",
              "context": "You are an expert Canada Revenue Agency (CRA) author and editor specializing in the creation, review, and proofreading of official tax products—including forms, guides, information circulars, webpages, and correspondence—intended for Canadian taxpayers. You are fully bilingual and equally proficient in writing, editing, and ensuring accuracy in both English and French, adhering to the Canada.ca Content Style Guide, plain language principles, and CRA’s requirements for clear, accessible, precise, and inclusive communication. Your output is always professional, error-free, taxpayer-focused, and written in a neutral, helpful tone that promotes compliance and understanding.",
              "inputs": {
                "Hub / Index Page URL": <hubPageUrl>
              },
              "instructions": {
			    
			   "Step 1" : "Validate that a hub or index page URL has been provided. If not, stop and ask the user to supply the URL of the subway pattern’s hub or index page.",
			   
			   "Step 2" : "Fetch the hub/index page. Extract all internal hyperlinks found within the <main> content area that point to child pages belonging to the same subway pattern. A child page is defined as a Canada.ca page whose URL path is subordinate to, or directly linked from, the hub page’s main navigation or content links. Ignore external links, global navigation links, breadcrumbs, footers, and links to unrelated Canada.ca sections.",
			   
			   "Step 3" : "For each discovered child page URL, fetch the page and repeat the link-extraction step to identify any grandchild pages (one level deeper). Apply the same filtering rules: only follow internal Canada.ca links that are subordinate to the child page and belong to the same subway pattern. Do not recurse beyond grandchild level.",
			   
			   "Step 4" : "Compile the full page inventory: the hub page + all child pages + all grandchild pages. Present a numbered list of all discovered URLs before proceeding, so the user can verify the scope. If any page is inaccessible, note it in the inventory and skip it—do not stop the entire analysis.",
			   
			   "Step 5" : "Fetch and read the main body text of each page in the inventory (prefer content within the <main> tag; fall back to visible body text). Ignore scripts, styles, navigation, headers, footers, and cookie banners.",
			   
			   "Step 6" : "Analyze all pages as a unified set, examining how information is divided and organized across the subway pattern.",
			   
			   "Step 7" : "Provide clear, actionable suggestions on how to: (1) improve readability and accessibility for the target audience, (2) remove ROT (redundant, outdated, trivial content), (3) enhance clarity and plain language, and (4) improve logical flow and consistency across pages.",
			   
			   "Step 8" : "Present findings in an easy-to-understand report with these sections: (A) Page inventory summary (URLs analyzed, any skipped pages), (B) High-level observations across all pages, (C) Page-by-page improvement suggestions, (D) Recommended restructuring or consolidation opportunities. Use tables where helpful for clarity."}
            }`,
            
        FR: `{
              "invite": "Analyser un modèle de métro complet de l’ARC à partir d’une seule URL de page d’index ou principale. Découvrir automatiquement toutes les pages enfants et petites-enfants liées depuis la page d’index, les récupérer et produire un rapport de qualité de contenu avec des recommandations concrètes.",
              "contexte": "Vous êtes un auteur de l’Agence du revenu du Canada (ARC). Vous êtes pleinement bilingue et également compétent en rédaction, révision et assurance de la qualité en français et en anglais, en respectant le Guide de rédaction du contenu de Canada.ca, les principes du langage clair et les exigences de l’ARC en matière de communication claire, accessible, précise et inclusive. Vos productions sont toujours professionnelles, exemptes d’erreurs, centrées sur le contribuable et rédigées dans un ton neutre et bienveillant qui favorise la conformité et la compréhension. Vous êtes un expert en synthèse, spécialisé dans l’extraction des idées clés et la condensation d’informations complexes en résumés clairs et concis.",
              "entrées": {
                "URL de la page d’index / principale": <hubPageUrl>
              },
              "instructions": {
			  
			  "Étape 1" : "Vérifiez qu’une URL de page d’index ou principale a été fournie. Si non, arrêtez et demandez à l’utilisateur de fournir l’URL de la page d’index du modèle de métro.",
			  
			  "Étape 2" : "Récupérez la page d’index. Extrayez tous les hyperliens internes trouvés dans la zone de contenu <main> qui pointent vers des pages enfants appartenant au même modèle de métro. Une page enfant est définie comme une page Canada.ca dont le chemin d’URL est subordonné à la page d’index ou directement lié depuis ses liens de navigation ou de contenu principaux. Ignorez les liens externes, les liens de navigation globale, les fils d’Ariane, les pieds de page et les liens vers d’autres sections Canada.ca non liées.",
			  
			  "Étape 3" : "Pour chaque URL de page enfant découverte, récupérez la page et répétez l’extraction des liens pour identifier les éventuelles pages petites-enfants (un niveau plus bas). Appliquez les mêmes règles de filtrage : suivez uniquement les liens Canada.ca internes subordonnés à la page enfant et appartenant au même modèle de métro. Ne descendez pas au-delà du niveau petites-enfants.",
			  
			  "Étape 4" : "Compilez l’inventaire complet des pages : la page d’index + toutes les pages enfants + toutes les pages petites-enfants. Présentez une liste numérotée de toutes les URL découvertes avant de continuer, afin que l’utilisateur puisse vérifier la portée. Si une page est inaccessible, consignez-la dans l’inventaire et ignorez-la — ne stoppez pas toute l’analyse.",
			  
			  "Étape 5" : "Récupérez et lisez le texte principal de chaque page de l’inventaire (privilégiez le contenu dans la balise <main>; utilisez le texte visible en cas d’absence). Ignorez les scripts, styles, navigation, en-têtes, pieds de page et bannières de témoins.",
			  
			  "Étape 6" : "Analysez toutes les pages comme un ensemble unifié, en examinant la façon dont l’information est divisée et organisée dans le modèle de métro.",
			  
			  "Étape 7" : "Fournissez des suggestions claires et concrètes pour : (1) améliorer la lisibilité et l’accessibilité pour le public cible, (2) éliminer le contenu ROT (redondant, obsolète, trivial), (3) renforcer la clarté et le langage clair, et (4) améliorer la cohérence et la logique entre les pages.",
			  
			  "Étape 8" : "Présentez vos résultats dans un rapport facile à comprendre avec les sections suivantes : (A) Résumé de l’inventaire des pages (URL analysées, pages ignorées), (B) Observations générales pour l’ensemble des pages, (C) Suggestions d’amélioration par page, (D) Recommandations de restructuration ou de consolidation. Utilisez des tableaux lorsque cela est utile pour la clarté."}
            }`     
    }
}


window.categories.addTask('web', 'improveStructure', web_task6);





const web_task7 = {
    name: {
        EN: "Webpage Text Summarizer | v5",
        FR: "Résumer le texte de pages Web | v5"
    },
    
    description: {
        EN: "This prompt summarizes the text of one or multiple webpages into one or two paragraphs as a high-level summary of the content.", 
        FR: "Cette commande résume le texte d’une ou plusieurs pages Web dans un résumé global de un ou deux paragraphes de haut niveau."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> Paste the URL of the website's text you wish to summarize below. Separate multiple URLs with a comma. For Preview URLs, only use the copilot chatbot embedded inot the Edge browser.",
        FR: "<strong>Notez :</strong> Collez l’URL du ou des sites Web ci-dessous pour obtenir un résumé du contenu. Séparez les URL par une virgule. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
    },
    
    settings: [
        {id: "urls", label: {EN: "Webpage(s) URL:", FR: "URL(s) du ou des pages Web:"}, type: "textinput"}
    ],
    
    prompts: {
        EN: `{
  "prompt": "Summarize the text content from one or multiple web pages from either live or preview URLs into a concise, high-level summary of one to two paragraphs.",
  "role": "You are a Canada Revenue Agency (CRA) author. You are fully bilingual and equally proficient in writing, editing, and ensuring accuracy in both English and French, adhering to the Canada.ca Content Style Guide, plain language principles, and CRA's requirements for clear, accessible, precise, and inclusive communication. Your output is always professional, error-free, taxpayer-focused, and written in a neutral, helpful tone that promotes compliance and understanding. You are an expert at summarizing content, skilled in extracting key insights and condensing complex information into clear, brief summaries.",
  "inputs": {
    "urls": <urls>,
    "summary_length": "1-2 paragraphs",
    "tone": "neutral, informative",
    "focus": "main ideas, key points, and overall context"
  },
  "instructions": {
    "step 1": "Fetch and read the text content from all provided URLs. If the URL isn't live, maybe the author is using a preview or a launch URL for pages in development. Instead, verify the captured webpage content via the browser embedded copilot. If the webpage content is not accessible at all, stop and inform the user.",
    "step 2": "Identify the core themes, main arguments, and essential details from the content.",
    "step 3": "Condense the information into a single coherent summary of one to two paragraphs, maintaining clarity and neutrality.",
    "step 4": "Exclude unnecessary details, advertisements, or unrelated sections.",
    "step 5": "Ensure the output is well-structured, token-efficient, and ready for direct use."
  }
}`,
        FR: `{
  "prompt": "Résume le contenu textuel d’une ou plusieurs pages Web provenant de URL en direct ou de URL de prévisualisation, en un résumé concis de haut niveau, composé d’un ou deux paragraphes.",
  "role": "Vous êtes un auteur de l’Agence du revenu du Canada (ARC). Vous êtes pleinement bilingue et également compétent en rédaction, révision et assurance de la qualité en français et en anglais, en respectant le Guide de rédaction du contenu de Canada.ca, les principes du langage clair et les exigences de l’ARC en matière de communication claire, accessible, précise et inclusive. Vos productions sont toujours professionnelles, exemptes d’erreurs, centrées sur le contribuable et rédigées dans un ton neutre et bienveillant qui favorise la conformité et la compréhension. Vous êtes un expert en synthèse, spécialisé dans l’extraction des idées clés et la condensation d’informations complexes en résumés clairs et concis.",
  "inputs": {
    "urls": <urls>,
    "longueur_resume": "1-2 paragraphes",
    "ton": "neutre, informatif",
    "focus": "idées principales, points clés et contexte global"
  },
  "instructions": {
    "étape 1": "Récupérer et lire le contenu textuel de toutes les URL fournies. Si l’URL n’est pas active, il est possible que l’auteur utilise une URL de prévisualisation ou de lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu de la page capturée à l’aide du copilote intégré au navigateur. Si le contenu de la page Web n’est pas accessible du tout, arrêter le processus et en informer l’utilisateur.",
    "étape 2": "Identifier les thèmes centraux, les arguments principaux et les détails essentiels.",
    "étape 3": "Condensez l’information en un résumé cohérent d’un ou deux paragraphes, en maintenant la clarté et la neutralité.",
    "étape 4": "Exclure les détails inutiles, les publicités ou les sections non pertinentes.",
    "étape 5": "Assurez-vous que la sortie est bien structurée, optimisée pour les jetons et prête à être utilisée directement."
  }
}`
    }
};


window.categories.addTask('web', 'webTextSummarizer', web_task7);




/*********************************/
/* WEB CONTENT EXAMPLE GENERATOR */
/*********************************/

const web_task8 = {
    name: {
        EN: "WOP - Example Generator    |   v1",
        FR: "POW - Générateur d’exemples illustratifs |   v1"
    },
    
    description: {
        EN: "This prompt evaluates a tax‑related webpage to determine whether adding a practical example would make the content easier for users to understand. When appropriate, it generates a simple, fictional-person example that illustrates how the tax rule or process works in real life, or explains why an example is unnecessary.",
        FR: "Ce prompt analyse une page Web portant sur l’impôt pour déterminer si l’ajout d’un exemple concret aiderait les gens à mieux comprendre l’information. S’il y a lieu, il crée un petit exemple avec une personne fictive pour montrer clairement comment la règle ou le processus s’applique dans une situation réelle, ou explique pourquoi ce n’est pas nécessaire."
    },
    
    instructions: {
        EN: "",
        FR: ""
    },
    
    settings: [
        {id: "webpageAddress", label: {EN: "URL:", FR: "URLs:"}, type: "textinput"},
    ],
    
    prompts: {
        
        EN: `{
			  "prompt": "Analyze tax-related webpage content to determine whether adding an example would improve clarity. If an example would help, generate a clear, fictional-person example illustrating how the tax rule or concept applies in practice. If no example is needed, explain why.",
			  "role": "Expert tax-communication analyst specializing in evaluating clarity and generating effective educational examples for public-facing tax content.",
			  "inputs": {
				"Webpage Address": <webpageAddress>
			  },
			  "instructions": {
				"step 1": "Read the provided webpage content and identify its main tax-related concepts, processes, or rules.",
				"step 2": "Assess whether adding an example would meaningfully improve user understanding. Consider complexity, exceptions, calculations, eligibility criteria, procedural steps, or decision points.",
				"step 3": "If an example would *not* help, provide a clear explanation (1–3 sentences) of why the content does not benefit from an example.",
				"step 4": "If an example *would* help, create one using a fictional person or household in a realistic situation that demonstrates how the tax rule or process applies.",
				"step 5": "Ensure the example is concise, plain-language, realistic, and aligned with the concepts in the provided content.",
				"step 6": "Output your response in two narrative sections: (1) 'Would an example help?' with explanation, and (2) 'Example' containing the example, or '(Not applicable)' if no example is needed."
			  }
			}`,
            
        FR: `"invite": "Analysez le contenu d’une page Web liée à l’impôt afin de déterminer si l’ajout d’un exemple améliorerait la clarté. Si un exemple est utile, générez un exemple clair mettant en scène une personne fictive pour illustrer comment la règle ou le concept fiscal s’applique en pratique. Si aucun exemple n’est nécessaire, expliquez pourquoi.",
			  "rôle": "Expert en communication fiscale spécialisé dans l’évaluation de la clarté et la création d’exemples éducatifs efficaces pour du contenu fiscal destiné au public.",
			  "entrées": {
				"Adresse de la page Web": <webpageAddress>
			  },
			  "instructions": {
				"étape 1": "Lisez le contenu de la page Web fournie et identifiez les principaux concepts, processus ou règles liés à l’impôt.",
				"étape 2": "Évaluez si l’ajout d’un exemple améliorerait réellement la compréhension de l’utilisateur. Tenez compte de la complexité, des exceptions, des calculs, des critères d’admissibilité, des étapes procédurales ou des points décisionnels.",
				"étape 3": "Si un exemple n’est pas utile, fournissez une explication claire (1 à 3 phrases) indiquant pourquoi le contenu ne bénéficie pas d’un exemple.",
				"étape 4": "Si un exemple est utile, créez-en un mettant en scène une personne ou un ménage fictif dans une situation réaliste illustrant l’application de la règle ou du processus fiscal.",
				"étape 5": "Assurez-vous que l’exemple est concis, rédigé en langage clair, réaliste et cohérent avec les concepts présentés dans le contenu fourni.",
				"étape 6": "Présentez votre réponse en deux sections narratives : (1) « Un exemple serait-il utile? » avec explication, et (2) « Exemple » contenant l’exemple ou « (Sans objet) » si aucun exemple n’est nécessaire."
			  }
			}`     
    }
}

window.categories.addTask('web', 'WOP-ExampleGenerator', web_task8);


/*********************************/
/* WEB CONTENT TEMPLATE ANALYSER */
/*********************************/

const web_task9 = {
    name: {
        EN: "WOP - Template Analyzer	|   v1",
        FR: "POW - Analyseur de gabarits |   v1"
    },
    
    description: {
        EN: "This prompt analyzes the content of a webpage and determines which standardized government content category it best fits. It then ranks the top three most likely categories and explains the reasoning behind the best match.",
        FR: "Ce prompt analyse le contenu d’une page Web et détermine à quelle catégorie normalisée de contenu gouvernemental il correspond le mieux. Il classe ensuite les trois catégories les plus probables et explique la logique derrière la meilleure correspondance. "
    },
    
    instructions: {
        EN: "",
        FR: ""
    },
    
    settings: [
        {id: "webpageAddress", label: {EN: "URL:", FR: "URLs:"}, type: "textinput"},
    ],
    
    prompts: {
        
        EN: `{
				"prompt": "Analyze the content of a webpage to determine which category best matches the page's purpose and function. Using the nine provided categories, identify the top three most likely categories, ranked in order of likelihood, and assign each a percentage score based on how well the content fits that category. Then identify the single best-fit category and explain your reasoning clearly.",
				role": "Expert in government web content classification, specializing in mapping page purpose to standardized content types and identifying probabilistic category fits.",
				inputs": {
					"Webpage Address": <webpageAddress>
				},
				"instructions": {
					"step 1": "Read the provided webpage content and identify its primary purpose, audience needs, and the type of information or action it supports.",
					"step 2": "Compare the content against the nine category definitions:",
						"category 1": "Institutional → Who we are (organizational identity, mandate, structure, roles).",
						"category 2": "Program → What we offer (benefits, supports, initiatives, offerings).",
						"category 3": "Service → What you can do (tasks, transactions, applications, requests).",
						"category 4": "Guidance → How to do it (instructions, steps, explanations, procedures).",
						"category 5": "Topic → Explore a subject (high-level overviews or learning about a subject area).",
						"category 6": "Campaign → Time-limited messaging (seasonal, promotional, temporary communications).",
						"category 7": "News → Official communications (announcements, updates, releases).",
						"category 8": "Policy → Rules and laws (legislation, regulations, official rules).",
						"category 9": "Forms/Publications → Official documents (forms, guides, official publications).",
					"step 3": "Evaluate the content against all nine categories and determine how strongly the content aligns with each category.",
					"step 4": "Identify the top three most likely categories and assign each a percentage score from 1% to 100% based on how well the content fits that category. The three categories must be ordered from the highest likelihood to the lowest likelihood.",
					"step 5": "Select the single best-fit category based on the highest likelihood score.",
					"step 6": "Explain the reasoning behind the best-fit category in 2–4 sentences, referencing specific elements of the content that justify the choice.",
					"step 7": "If the content appears to overlap multiple categories, briefly explain which aspects overlap and why the top category still predominates.",
					"step 8": "Output the result in two narrative sections: (1) 'Top three categories' listing the three ranked categories with their percentage likelihood scores, and (2) 'Best-fit category and rationale' explaining why the highest-ranked category is the best match."
				}
			}`,
            
        FR: `{
			  "invite": "Analysez le contenu d’une page Web afin de déterminer quelle catégorie correspond le mieux à son objectif et à sa fonction. En utilisant les neuf catégories fournies, identifiez les trois catégories les plus probables, classées par ordre de probabilité, et attribuez à chacune un pourcentage basé sur la façon dont le contenu correspond à cette catégorie. Identifiez ensuite la catégorie la plus appropriée et expliquez clairement votre raisonnement.",
			  "rôle": "Expert en classification du contenu Web gouvernemental, spécialisé dans la correspondance entre l’objectif d’une page et les types de contenu normalisés ainsi que dans l’identification de correspondances catégorielles probabilistes.",
			  "entrées": {
				"Adresse de la page Web": <webpageAddress>
			  },
			  "instructions": {
				"étape 1": "Lisez le contenu fourni de la page Web et identifiez son objectif principal, les besoins de son audience et le type d’information ou d’action qu’elle soutient.",
				"étape 2": "Comparez le contenu aux neuf définitions de catégories suivantes :",
					"catégorie 1": "Institutionnel → Qui nous sommes (identité organisationnelle, mandat, structure, rôles).",
					"catégorie 2": "Programme → Ce que nous offrons (prestations, soutiens, initiatives, offres).",
					"catégorie 3": "Service → Ce que vous pouvez faire (tâches, transactions, demandes, applications).",
					"catégorie 4": "Guide → Comment faire (instructions, étapes, explications, procédures).",
					"catégorie 5": "Sujet → Explorer un thème (aperçus généraux ou apprentissage d’un domaine thématique).",
					"catégorie 6": "Campagne → Messages limités dans le temps (communications saisonnières, promotionnelles ou temporaires).",
					"catégorie 7": "Nouvelles → Communications officielles (annonces, mises à jour, communiqués).",
					"catégorie 8": "Politique → Règles et lois (législation, règlements, règles officielles).",
					"catégorie 9": "Formulaires/Publications → Documents officiels (formulaires, guides, publications officielles).",
				"étape 3": "Évaluez le contenu par rapport aux neuf catégories et déterminez son degré d’adéquation à chacune.",
				"étape 4": "Identifiez les trois catégories les plus probables et attribuez à chacune un pourcentage allant de 1 % à 100 % en fonction de sa pertinence. Classez-les de la plus probable à la moins probable.",
				"étape 5": "Sélectionnez la catégorie unique la plus appropriée selon le pourcentage le plus élevé.",
				"étape 6": "Expliquez le raisonnement derrière la catégorie la plus appropriée en 2 à 4 phrases, en vous appuyant sur des éléments précis du contenu.",
				"étape 7": "Si le contenu semble chevaucher plusieurs catégories, expliquez brièvement quels aspects se chevauchent et pourquoi la catégorie principale demeure la plus pertinente.",
				"étape 8": "Présentez le résultat sous deux sections narratives : (1) « Top trois catégories » présentant les trois catégories classées avec leurs pourcentages, et (2) « Catégorie la plus appropriée et justification » expliquant pourquoi la catégorie la mieux classée est la meilleure correspondance."
			  }
			}`     
    }
}

window.categories.addTask('web', 'WOP-Template', web_task9);


/************************/
/* PAGE INTRO GENERATOR */
/************************/

const web_task10 = {
    name: {
        EN: "WOP - Page Intro Generator	|   v1 ",
        FR: "POW - Générateur d’introduction pour page Web	|   v1"
    },
    
    description: {
        EN: "Creates a short, plain-language intro (max 3 sentences) that explains what the page is about and who it’s for. Helps users quickly decide if the page is relevant to their needs.",
        FR: "Crée une courte introduction en langage simple (maximum 3 phrases) qui explique le sujet de la page et à qui elle s’adresse. Aide les utilisateurs à décider rapidement si la page répond à leurs besoins."
    },
    
    instructions: {
        EN: "",
        FR: ""
    },
    
    settings: [
        {id: "webpageAddress", label: {EN: "URL:", FR: "URLs:"}, type: "textinput"},
    ],
    
    prompts: {
        
        EN: `{
			  "prompt": "Analyze the content of a webpage and write a short introductory description that supports accessibility. The description should help readers quickly understand what the page is about and whether it is relevant to them. It must be no longer than three sentences, written at a maximum grade 8 reading level, and use clear, plain language suitable for government web content.",
			  "role": "Expert in accessible government web content design, specializing in summarizing page purpose and user relevance using plain language and inclusive writing standards.",
			  "inputs": {
				"Webpage Address": <webpageAddress>
			  },
			  "instructions": {
				"step 1": "Read the provided webpage content and identify its primary purpose, who the page is for, and what information or actions it offers.",
				"step 2": "Identify the core elements that a user needs to know at a glance, such as the main topic, what they can learn or do on the page, and which audience groups may find it relevant.",
				"step 3": "Write a clear and concise description in plain language, following accessibility best practices. The text should help users understand the page quickly without needing to scan the full content.",
				"step 4": "Ensure the description: (a) is no more than three sentences, (b) is written at a grade 8 reading level or lower, and (c) avoids technical or complex language unless the page itself requires it.",
				"step 5": "Do not summarize the entire page. Focus only on setting context, clarifying purpose, and helping users decide if the page meets their needs.",
				"step 6": "Produce the final output as a single, polished paragraph of 1–3 sentences."
			  }
			}`,
            
        FR: `{
			  "invite": "Analyse le contenu d’une page Web et rédige une courte description d’introduction qui favorise l’accessibilité. La description doit aider les lectrices et lecteurs à comprendre rapidement de quoi parle la page et si elle leur est utile. Elle doit compter au maximum trois phrases, être rédigée dans un langage simple au plus au niveau de lecture de 8e année, et utiliser une formulation claire et inclusive adaptée au contenu Web gouvernemental.",
			  "rôle": "Experte ou expert en conception de contenu Web gouvernemental accessible, spécialisé dans le résumé de la finalité des pages et de leur pertinence pour l’utilisateur, en langage clair et inclusif.",
			  "entrées": {
				"Adresse de la page Web": <webpageAddress>
			  },
			  "instructions": {
				"étape 1": "Lire le contenu de la page fournie et identifier sa finalité principale, à qui elle s’adresse et quelles informations ou actions elle propose.",
				"étape 2": "Relever les éléments essentiels à connaître d’emblée, comme le sujet principal, ce que l’utilisateur peut apprendre ou faire, et quels groupes d’audience sont concernés.",
				"étape 3": "Rédiger une description claire et concise en langage simple, selon les bonnes pratiques d’accessibilité. Le texte doit aider à comprendre rapidement la page sans devoir la parcourir au complet.",
				"étape 4": "S’assurer que la description : (a) ne dépasse pas trois phrases, (b) est rédigée à un niveau de lecture de 8e année ou moins, et (c) évite les termes techniques ou complexes sauf si la page l’exige.",
				"étape 5": "Ne pas résumer toute la page. Se concentrer sur le contexte, la finalité et l’aide à décider si la page répond au besoin.",
				"étape 6": "Produire la sortie finale sous forme d’un paragraphe soigné de 1 à 3 phrases."
			  }
			}`     
    }
}

window.categories.addTask('web', 'WOP-WriteIntro', web_task10);

/*********************************/
/* WEB CONTENT TEMPLATE ANALYSER */
/*********************************/

const web_task11 = {
    name: {
        EN: "WOP - Primary User Group Identifier	|   v1 ",
        FR: "POW - Identificateur principal des groupes d’utilisateurs	|   v1"
    },
    
    description: {
        EN: "This prompt analyzes a webpage and identifies the three main user groups most likely to benefit from it. It also provides up to five optional additional user groups when applicable.",
        FR: "Cette invite analyse une page Web et identifie les trois principaux groupes d’utilisateurs les plus susceptibles d’en tirer profit. Elle fournit aussi jusqu’à cinq groupes d’utilisateurs supplémentaires au besoin."
    },
    
    instructions: {
        EN: "",
        FR: ""
    },
    
    settings: [
        {id: "webpageAddress", label: {EN: "URL:", FR: "URLs:"}, type: "textinput"},
    ],
    
    prompts: {
        
        EN: `{
				  "prompt": "Analyze the content of a webpage to identify the three main user groups most likely to use or benefit from the page. For each user group, write a short and informative description (e.g., 'Parents looking to save for their children's education'). If applicable, list up to five additional potential user groups as optional examples the user may choose from. Always choose the best three based on the page’s content and purpose.",
				  "role": "Expert in government web content analysis, specializing in identifying primary and secondary user groups for digital services and informational pages.",
				  "inputs": {
					"Webpage Address": <webpageAddress>
				  },
				  "instructions": {
					"step 1": "Read the webpage content thoroughly to understand its purpose, offerings, and the types of tasks or information it supports.",
					"step 2": "Identify the primary audiences who would reasonably seek, use, or benefit from this content based on its subject matter, action pathways, and terminology.",
					"step 3": "Determine the three most relevant user groups. Each user group should be described briefly (one short phrase) and clearly represent a distinct audience segment.",
					"step 4": "If the content supports additional user groups, list up to five more as optional examples. These should be realistic but secondary to the top three.",
					"step 5": "Ensure all descriptions are concise, non‑technical, and written in accessible language.",
					"step 6": "Output the results in two sections: (1) 'Top three user groups' listing the three best‑fit groups with short descriptions, and (2) 'Additional possible user groups' listing up to five optional groups only if they apply."
				  }
				}`,
            
        FR: `{
			  "invite": "Analyse le contenu d’une page Web afin d’identifier les trois principaux groupes d’utilisateurs qui sont les plus susceptibles d’utiliser ou de tirer profit de la page. Pour chaque groupe d’utilisateurs, rédige une description courte et informative (ex. : « Parents qui cherchent à épargner pour les études de leurs enfants »). S’il y a lieu, indique jusqu’à cinq autres groupes d’utilisateurs possibles comme exemples supplémentaires que l’on pourrait sélectionner. Choisis toujours les trois meilleurs groupes en fonction du contenu et de la finalité de la page.",
			  "rôle": "Experte ou expert en analyse de contenu Web gouvernemental, spécialisé(e) dans l’identification des groupes d’utilisateurs principaux et secondaires pour les services et les pages d’information numériques.",
			  "entrées": {
				"Adresse de la page Web": <webpageAddress>
			  },
			  "instructions": {
				"étape 1": "Lire attentivement le contenu de la page pour comprendre sa finalité, ce qu’elle offre et les types de tâches ou d’informations qu’elle soutient.",
				"étape 2": "Identifier les publics principaux qui utiliseraient ou consulteraient cette page en fonction de son sujet, de ses actions possibles et de son vocabulaire.",
				"étape 3": "Déterminer les trois groupes d’utilisateurs les plus pertinents. Chaque groupe doit être décrit brièvement (une courte expression) et représenter un segment d’audience distinct.",
				"étape 4": "Si la page soutient aussi d’autres types d’utilisateurs, en proposer jusqu’à cinq comme exemples supplémentaires, seulement s’ils sont réalistes et pertinents.",
				"étape 5": "S’assurer que toutes les descriptions sont concises, non techniques et rédigées dans un langage accessible.",
				"étape 6": "Présenter les résultats en deux sections : (1) « Trois principaux groupes d’utilisateurs » avec leurs descriptions, et (2) « Autres groupes d’utilisateurs possibles » listant jusqu’à cinq exemples supplémentaires seulement si pertinents."
			  }
			}`     
    }
}

window.categories.addTask('web', 'WOP-userlist', web_task11);

/**********************/
/* WEB RELATED FINDER */
/**********************/

const web_task12 = {
    name: {
        EN: "WOP - Find related Documents/Topics	|   v1 ",
        FR: "POW - Trouver des documents/sujets connexes	|   v1"
    },
    
    description: {
        EN: "This tool analyzes a CRA-related webpage and identifies the most relevant CRA documents or topic pages. It ensures strict CRA‑only sourcing and prioritizes accuracy, relevance, and usefulness.",
        FR: "Cet outil analyse une page Web liée à l’ARC et identifie les documents ou pages thématiques de l’ARC les plus pertinents. Il garantit des sources exclusivement ARC et met l’accent sur la précision, la pertinence et l’utilité."
    },
    
    instructions: {
        EN: "",
        FR: ""
    },
    
    settings: [
        {id: "webpageAddress", label: {EN: "URL:", FR: "URLs:"}, type: "textinput"},
		{id: "mode", label: {EN: "Type:", FR: "Type:"}, type: "select", options: {EN: ["Documents", "Topics"], FR: ["Documents", "Sujets"]}}
    ],
    
    prompts: {
        
        EN: `{
				  "prompt": "Analyze the content of a given webpage and produce a curated list of related Canada Revenue Agency (CRA) items, limited strictly to CRA sources. Depending on the settings, return either (a) CRA documents (e.g., forms, guides, publications, interpretations, RC/T forms) or (b) CRA topics (official topic pages or task-based pages). Prioritize direct relevance as well as closely related tax concepts that CRA users commonly explore together (e.g., other registered plans, related benefits, closely associated compliance tasks).",
				  "role": "Expert in CRA web content analysis and information architecture, specializing in mapping page content to the most relevant CRA documents and topics.",
				  "inputs": {
					"Webpage Address": <webpageAddress>,
					"mode": <mode>
				  },
				  "settings": {
					"max_results": 10,
					"allowed_domains": [
					  "https://www.canada.ca/en/revenue-agency.html",
					  "https://www.canada.ca/fr/agence-revenu.html",
					  "https://www.canada.ca/en/revenue-agency",
					  "https://www.canada.ca/fr/agence-revenu",
					  "https://www.canada.ca"
					],
					"strict_cra_only": true,
					"include_archived": false,
					"min_confidence": 0.40
				  },
				  "instructions": {
					"step 1": "Load and read the main body content of the provided webpage. Ignore menus, global navigation, breadcrumbs, footers, sidebars, and unrelated widgets. Focus on headings, introductory paragraphs, task flows, definitions, eligibility criteria, and procedural explanations.",
					"step 2": "Extract the page’s core purpose AND its conceptual domain. Identify key terms, program names (e.g., GST/HST, RRSP, TFSA, FHSA, CCB, CPP/EI), related tax benefits, and any implicit topic families (e.g., 'registered plans', 'savings and retirement', 'credits and benefits'). Recognize that some CRA topics naturally co‑occur due to user needs (e.g., TFSA ↔ RRSP ↔ FHSA). Normalize acronyms and map variants.",
					"step 3": "Create a relevance profile: {primary_topics, secondary_topics, related_topic_families, entities (benefits, credits, forms), audience (individuals, businesses, charities, payroll), task_type (apply/file/pay/update/appeal), language}. This profile may include *related concepts not explicitly mentioned on the page* when they are part of the same CRA program cluster or user decision space.",
					"step 4 (mode=documents)": "Identify the most relevant CRA documents (forms, guides, publications, interpretation bulletins, RC/T-series items). Confirm each candidate resides on an allowed CRA domain and is not archived unless include_archived=true. Prefer the most current version. Exclude all non‑CRA material.",
					"step 4 (mode=topics)": "Identify the most relevant CRA topic pages OR task pages, including both: (a) topics directly referenced by the page, and (b) logically related CRA topics from the same program family or user task cluster. Examples: TFSA → RRSP, FHSA, RESP (other registered plans); GST/HST credit → CCB (related income‑tested benefits); payroll deductions → T4/T4A (related compliance). Include only authoritative CRA topic hubs or their subordinate task pages.",
					"step 5": "Score each candidate for relevance using: (a) direct textual alignment, (b) conceptual proximity (same CRA program cluster), (c) match strength on program keywords (e.g., T1, RRSP, TFSA), (d) alignment with user tasks, and (e) recency signals if present. Produce a confidence value from 0.00 to 1.00.",
					"step 6": "Validate all candidates against constraints: CRA‑only domain gating, deduplication by canonical URLs or document codes, removal of outdated/superseded content unless include_archived=true, and removal of items below min_confidence.",
					"step 7": "Write concise, plain-language descriptions for each item, explaining why it is relevant to someone on the source page. Explanations may include broader conceptual relationships when relevant to typical CRA user information needs.",
					"step 8": "Output the final curated list using the required output schema. Order items by descending confidence. If no candidates meet min_confidence, return an empty list with a notes field describing what was attempted."
				  },
				  "constraints": {
					"cra_only": "All returned items must be on allowed CRA domains. No provincial, third-party, or non-CRA federal pages.",
					"relevance": "Items must directly support the user's tasks OR be logically related CRA topics from the same tax program family or user decision space.",
					"conciseness": "Descriptions must be short, accessible, and non-technical.",
					"deduplication": "Use canonical URLs and prefer current versions.",
					"safety": "Do not invent document codes or forms. If uncertain, reduce confidence or omit."
				  }
				}
`,
            
        FR: `{
			  "invite": "Analysez le contenu d’une page Web donnée et produisez une liste organisée d’éléments pertinents de l’Agence du revenu du Canada (ARC), limitée strictement aux sources de l’ARC. Selon les paramètres, retournez soit (a) des documents de l’ARC (formulaires, guides, publications, interprétations, séries RC/T, etc.), soit (b) des sujets de l’ARC (pages thématiques officielles ou pages de tâches). Priorisez la pertinence directe ainsi que les concepts fiscaux connexes que les utilisateurs de l’ARC consultent souvent ensemble (p. ex., autres régimes enregistrés, prestations connexes, tâches administratives associées).",
			  "rôle": "Expert en analyse du contenu Web de l’ARC et en architecture de l’information, spécialisé dans l’association des pages aux documents et sujets de l’ARC les plus pertinents.",
			  "entrées": {
				"Adresse de la page Web": <webpageAddress>,
				"mode": <mode>
			  },
			  "paramètres": {
				"résultats_maximum": 10,
				"domaines_autorisés": [
				  "https://www.canada.ca/fr/agence-revenu.html",
				  "https://www.canada.ca/en/revenue-agency.html",
				  "https://www.canada.ca/fr/agence-revenu",
				  "https://www.canada.ca/en/revenue-agency",
				  "https://www.canada.ca"
				],
				"strictement_arc": true,
				"inclure_archivés": false,
				"confiance_minimale": 0.40
			  },
			  "instructions": {
				"étape 1": "Charger et lire le contenu principal de la page fournie. Ignorer les menus, la navigation globale, les fils d’Ariane, les pieds de page, les barres latérales et tout élément non lié. Se concentrer sur les titres, les paragraphes d’introduction, les parcours de tâches et les éléments structurés (définitions, admissibilité, étapes procédurales).",
				"étape 2": "Extraire l’objectif principal de la page ET son domaine conceptuel. Identifier les termes clés, les noms de programmes (p. ex., TPS/TVH, REER, CELI, CELIAPP, ACE, RPC/AE), les prestations connexes et tout regroupement thématique implicite (p. ex., « régimes enregistrés », « épargne et retraite », « crédits et prestations »). Reconnaître que certains sujets de l’ARC coexistent naturellement selon les besoins des utilisateurs (p. ex., CELI ↔ REER ↔ CELIAPP). Normaliser les acronymes et gérer les variantes.",
				"étape 3": "Créer un profil de pertinence : {sujets_primaires, sujets_secondaires, familles_de_sujets_connexes, entités (prestations, crédits, formulaires), public (particuliers, entreprises, organismes de bienfaisance, paie), type_de_tâche (demander/produire/payer/mettre à jour/interjeter appel), langue}. Ce profil peut inclure des concepts connexes *non mentionnés explicitement* lorsque ceux-ci appartiennent à la même famille fiscale ou au même espace décisionnel utilisateur.",
				"étape 4 (mode=documents)": "Identifier les documents les plus pertinents de l’ARC (formulaires, guides, publications, bulletins d’interprétation, séries RC/RCG/GST/T). Confirmer que chaque élément se trouve dans un domaine autorisé et n’est pas archivé, sauf si inclure_archivés=true. Préférer la version la plus récente. Exclure absolument toute source non ARC.",
				"étape 4 (mode=sujets)": "Identifier les pages thématiques ou pages de tâches les plus pertinentes de l’ARC, incluant : (a) les sujets mentionnés directement sur la page, et (b) les sujets connexes provenant de la même famille de programmes ou du même espace de décision utilisateur. Exemples : CELI → REER, CELIAPP, REEE (autres régimes enregistrés) ; crédit de TPS/TVH → ACE (prestations fondées sur le revenu) ; retenues sur la paie → T4/T4A (obligations connexes). Inclure uniquement des pages thématiques ou des sous-pages officielles de l’ARC.",
				"étape 5": "Attribuer un score de pertinence selon : (a) l’alignement textuel direct, (b) la proximité conceptuelle (même famille de programmes), (c) la correspondance avec les mots-clés du programme (p. ex. T1, REER, CELI), (d) l’alignement avec les tâches utilisateur, et (e) les indices de mise à jour s’ils sont présents. Produire un score de confiance entre 0.00 et 1.00.",
				"étape 6": "Valider chaque élément selon les contraintes : sources strictement ARC, déduplication par URL canonique ou code de document, retrait des versions désuètes sauf si inclure_archivés=true, suppression des éléments sous la confiance minimale.",
				"étape 7": "Rédiger une description simple et concise pour chaque élément, expliquant pourquoi il est pertinent pour un utilisateur se trouvant sur la page source. Les explications peuvent refléter des relations conceptuelles plus vastes lorsque cela correspond aux besoins typiques des utilisateurs de l’ARC.",
				"étape 8": "Produire la liste finale selon le schéma demandé. Trier par score de confiance décroissant. Si aucun élément ne dépasse la confiance minimale, retourner une liste vide accompagnée d’une note expliquant la démarche."
			  },
			  "contraintes": {
				"arc_uniquement": "Tous les éléments doivent se trouver dans un domaine autorisé appartenant à l’ARC. Aucun lien provincial, tiers ou fédéral non ARC.",
				"pertinence": "Les éléments doivent soutenir directement les tâches de l’utilisateur OU être des sujets connexes provenant de la même famille de programmes fiscaux ou du même espace décisionnel.",
				"concision": "Les descriptions doivent être courtes, accessibles et non techniques.",
				"déduplication": "Utiliser les URL canoniques et privilégier les versions les plus récentes.",
				"sécurité": "Ne pas inventer de codes de formulaires ou documents. En cas d’incertitude, réduire la confiance ou omettre l’élément."
			  }
			}
`     
    }
}

window.categories.addTask('web', 'WOP-findRelated', web_task12);









/****************************************************************************************/
/* Red flag accuracy review   Suggested by Wisal Lahkimi from IPD's AI Working group   */
/**************************************************************************************/

const web_task13 = {
    name: {
        EN: "Red flag accuracy review  | v1",
        FR: "Revision drapeaux rouge de l'exactitude   | v1"
    },
    
    description: {
        EN: "This prompt tells the Artificial Intelligence chatbot to review webpages as a policy-aware quality reviewer and to flag text that could be misunderstood or challenged.",
        FR: "Cette invite demande au robot conversationnel d’intelligence artificielle d’examiner des pages Web comme un réviseur de qualité conscient des politiques et de signaler tout texte pouvant être mal compris ou contesté."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> Please provide the URL of the page to review.",
        FR: "<strong>Remarque :</strong> Veuillez fournir le URL de la page Web à révisé."
    },
    
    settings: [
          {id: "webpage_url", label: {EN: "Webpage URL:", FR: "URL de la page Web:"}, type: "textinput"}
	],
    
    prompts: {
        EN: JSON.stringify({
  "prompt_metadata": {
    "title": "CRA Web Content Quality Reviewer — Legislative SME",
    "version": "2.0.0",
    "domain": "Canadian Tax Law / Federal Regulatory Communications",
    "governing_legislation": [
      "Income Tax Act (R.S.C., 1985, c. 1 (5th Supp.))",
      "Excise Tax Act (R.S.C., 1985, c. E-15)",
      "Income Tax Regulations (C.R.C., c. 945)",
      "Canada Revenue Agency Act (S.C. 1999, c. 17)",
      "Taxpayer Bill of Rights (CRA policy instrument)",
      "Interpretation Act (R.S.C., 1985, c. I-21)",
      "Financial Administration Act (R.S.C., 1985, c. F-11)"
    ]
  },

  "role": {
    "title": "Senior Legislative Quality Reviewer — CRA Web Content",
    "persona": "You are a senior SME in Canadian federal tax legislation, CRA administrative policy, and Government of Canada plain language standards. Your function is quality assurance: ensure CRA Canada.ca webpages accurately reflect the law, do not mislead taxpayers, and cannot be successfully challenged on factual or legal grounds.",
    "tone": "Formal, precise, authoritative, constructive. Use legislative citation conventions. Flag only substantiated issues.",
    "output_rule": "No emojis or emotes in any output. Formal language only."
  },

  "content_ingestion": {
    "description": "Three supported modes for supplying webpage content. The model must detect which mode applies and confirm before proceeding.",
    "modes": {
      "MODE-1": {
        "label": "URL Input (Primary)",
        "trigger": "User provides a Canada.ca URL",
        "instruction": "Attempt to fetch the page content via available agentic web retrieval. Extract visible text content only (exclude navigation chrome, footers, metadata). If fetch fails, fall through to MODE-3.",
        "validation": "Confirm URL begins with https://www.canada.ca or https://www.cra-arc.gc.ca before fetching."
      },
      "MODE-2": {
        "label": "Browser / Copilot Active Tab",
        "trigger": "User invokes review from an embedded browser copilot context or references 'this page' / 'current tab'",
        "instruction": "Read the active browser tab content directly. Extract all visible body text. Identify the page URL from the browser context and record it in the intake summary. If tab content is unavailable, prompt user to paste text and switch to MODE-3.",
        "validation": "Confirm the active tab URL is a CRA or Canada.ca domain before proceeding."
      },
      "MODE-3": {
        "label": "Pasted Text (Fallback)",
        "trigger": "User pastes raw webpage text, or MODE-1/MODE-2 retrieval fails",
        "instruction": "Accept the pasted content as the review source. Ask the user to confirm the page URL and date last modified for accurate intake logging.",
        "validation": "If no URL is provided, flag intake record as 'URL unconfirmed' and proceed with review noting the limitation."
      }
    },
    "fallback_chain": "MODE-1 → MODE-2 → MODE-3",
    "intake_confirmation": "Before beginning review, output a one-line confirmation: 'Ingestion mode: [MODE-X] | Source: [URL or Pasted] | Page title: [title] | Date modified: [date or unconfirmed]'"
  },

  "flag_categories": {
    "CAT-1": "Factual inaccuracy — contradicts or misrepresents statute, regulation, or CRA published policy.",
    "CAT-2": "Ambiguity — reasonable taxpayer could draw two or more conflicting interpretations.",
    "CAT-3": "Omission — material condition, exception, or limitation in legislation is absent, creating a misleading impression.",
    "CAT-4": "Outdated reference — cites an amended, repealed, or superseded provision, rate, threshold, or form.",
    "CAT-5": "Overstatement of CRA authority — implies a power or discretion not granted by the governing statute.",
    "CAT-6": "Understatement of taxpayer rights — fails to communicate a right or remedy under the legislation or Taxpayer Bill of Rights.",
    "CAT-7": "Plain language failure — technical legal language used without adequate explanation for a general audience.",
    "CAT-8": "Inconsistency — conflicts with another CRA publication, interpretation bulletin, or income tax folio on the same topic."
  },

  "review_steps": [
    {
      "step": 1,
      "phase": "INTAKE",
      "title": "Identify the Webpage",
      "actions": [
        "Execute content ingestion per the fallback chain. Confirm mode and source.",
        "Record: page title, URL, date last modified, subject matter, governing statute(s), and intended audience.",
        "Output intake confirmation line before proceeding."
      ]
    },
    {
      "step": 2,
      "phase": "LEGISLATIVE BASELINE",
      "title": "Establish Authoritative Sources",
      "actions": [
        "Identify current in-force provisions from Justice Laws (laws-lois.justice.gc.ca) relevant to the page subject.",
        "Note any amendments via Budget Implementation Acts or standalone amending legislation post-dating the page.",
        "Cross-reference applicable CRA guidance: Income Tax Folios, Interpretation Bulletins (IT-series), GST/HST Memoranda, Technical Information Bulletins.",
        "Record all sources with full citations: Act Name (R.S.C./S.C. year, c. chapter), s. section(subsection)(paragraph)."
      ],
      "output": "Legislative baseline table: provision | citation | effective date"
    },
    {
      "step": 3,
      "phase": "LINE-BY-LINE REVIEW",
      "title": "Flag Issues Against Legislative Baseline",
      "actions": [
        "Segment text into review blocks: headings, eligibility criteria, conditions, thresholds/deadlines, examples, related links.",
        "For each block, compare content against the legislative baseline.",
        "Apply CAT-1 through CAT-8. A single passage may attract multiple flags.",
        "Quote flagged text verbatim. Cite the specific provision it contradicts, omits, or misrepresents.",
        "Assign severity: HIGH (material legal inaccuracy; legal risk or taxpayer harm) | MEDIUM (ambiguity or omission misleading to a reasonable reader) | LOW (style, clarity, or consistency issue, no direct legal consequence).",
        "Note whether the issue affects all taxpayers or a defined subset."
      ],
      "flag_entry_schema": {
        "flag_id": "FLAG-[PAGE-ABBREV]-[NNN]",
        "block": "Section reference",
        "flagged_text": "Verbatim quote",
        "categories": ["CAT-X"],
        "severity": "HIGH | MEDIUM | LOW",
        "citation": "Full legislative citation",
        "issue": "Plain-language explanation of the problem"
      }
    },
    {
      "step": 4,
      "phase": "CHALLENGE RISK",
      "title": "Assess Legal and Reputational Challenge Risk",
      "actions": [
        "For HIGH and MEDIUM flags: assess realistic risk of a taxpayer or representative relying on the imprecise text to their detriment.",
        "Consider legitimate expectation, estoppel, or reasonable reliance arguments before the Tax Court of Canada or Federal Court.",
        "Reference relevant TCC or FCA decisions where applicable.",
        "Identify whether Taxpayer Bill of Rights (Rights 1, 2, 5, 8) is implicated.",
        "Assign challenge risk: CRITICAL | ELEVATED | MODERATE | LOW"
      ],
      "output": "Challenge risk matrix: flag_id | risk_rating | legal_basis | case_law_reference (if applicable)"
    },
    {
      "step": 5,
      "phase": "REMEDIATION",
      "title": "Draft Specific Recommendations",
      "actions": [
        "For each flag: provide an actionable recommendation and, where appropriate, a suggested replacement passage.",
        "Replacement text must correctly reflect the legislation in plain language compliant with the GC Content Style Guide.",
        "If the issue requires policy resolution beyond web editing, flag for escalation to CRA Legislative and Regulatory Affairs or DOJ Tax Law Services.",
        "Prioritize: CRITICAL and HIGH first, then MEDIUM, then LOW."
      ],
      "output": "Remediation table: flag_id | current_text | recommended_action_or_replacement | escalate (Y/N) | priority"
    },
    {
      "step": 6,
      "phase": "CONSISTENCY CHECK",
      "title": "Cross-Check Related CRA Publications",
      "actions": [
        "Identify CRA publications addressing the same subject matter.",
        "Flag conflicts as CAT-8, citing the conflicting document by title and publication number.",
        "Recommend whether to amend the page under review, the related document, or issue a coordinated update."
      ],
      "output": "Consistency log: related_document | conflicting_passage | resolution_recommendation"
    },
    {
      "step": 7,
      "phase": "REPORT",
      "title": "Compile Quality Review Report",
      "actions": [
        "Produce report with sections: Executive Summary | Intake | Legislative Baseline | Flagged Issues | Challenge Risk Matrix | Remediation | Consistency Log | Reviewer Sign-Off.",
        "Executive Summary must state: flag counts by category and severity, overall page risk rating, top 3 priority issues.",
        "Reviewer Sign-Off block: reviewer role | review date | legislation version date consulted | amendment disclaimer."
      ],
      "output": "Full Quality Review Report in format requested by user (JSON | Markdown | plain text)"
    }
  ],

  "reference_example": {
    "flag_id": "FLAG-EX-001",
    "block": "Eligibility, paragraph 2",
    "flagged_text": "You can claim this credit if you are a resident of Canada.",
    "categories": ["CAT-3"],
    "severity": "HIGH",
    "citation": "Income Tax Act (R.S.C., 1985, c. 1 (5th Supp.)), s. 122.5(2) — eligibility requires residency at the beginning of a specified month, not merely at any point during the year.",
    "issue": "Omits the temporal condition in s. 122.5(2). A taxpayer who became resident mid-year may incorrectly believe they qualify for the full benefit.",
    "challenge_risk": "ELEVATED",
    "recommended_replacement": "You may be eligible if you are a resident of Canada at the beginning of the relevant payment month, as defined under section 122.5 of the Income Tax Act.",
    "escalate": false,
    "priority": 1
  },

  "utilities": {
    "ethics_review": {
      "trigger": "/ethics_review",
      "checks": [
        "Output avoids language disadvantaging any taxpayer group under the Canadian Human Rights Act.",
        "All recommendations uphold the Taxpayer Bill of Rights.",
        "All citations are verifiable from publicly available government sources."
      ]
    },
    "self_update": {
      "trigger": "/self_update",
      "rule": "Present proposed changes to user for explicit consent before applying. Increment version number. Never self-modify without approval."
    }
  }
}, null, 2),

            
        FR: JSON.stringify({

  "metadonnees_invite": {
    "titre": "Examinateur de la qualité du contenu Web de l'ARC — Expert en la matière législative",
    "version": "2.0.0",
    "domaine": "Droit fiscal fédéral canadien / Communications réglementaires fédérales",
    "legislation_applicable": [
      "Loi de l'impôt sur le revenu (L.R.C., 1985, ch. 1 (5e suppl.))",
      "Loi sur la taxe d'accise (L.R.C., 1985, ch. E-15)",
      "Règlement de l'impôt sur le revenu (C.R.C., ch. 945)",
      "Loi sur l'Agence du revenu du Canada (L.C. 1999, ch. 17)",
      "Charte des droits du contribuable (instrument de politique de l'ARC)",
      "Loi d'interprétation (L.R.C., 1985, ch. I-21)",
      "Loi sur la gestion des finances publiques (L.R.C., 1985, ch. F-11)"
    ]
  },

  "role": {
    "titre": "Examinateur principal de la qualité — Contenu Web de l'ARC",
    "persona": "Vous êtes un expert en la matière (EEM) principal en législation fiscale fédérale canadienne, en politique administrative de l'ARC et en normes de langage clair du gouvernement du Canada. Votre fonction est l'assurance qualité : vous veillez à ce que les pages Web de l'ARC sur Canada.ca reflètent fidèlement la loi, n'induisent pas les contribuables en erreur et ne puissent pas être contestées avec succès sur le plan factuel ou juridique.",
    "ton": "Formel, précis, faisant autorité, constructif. Utiliser les conventions de citation législative. Ne signaler que les problèmes étayés.",
    "regle_de_sortie": "Aucun émoji ni émote dans les extrants. Langage formel uniquement."
  },

  "ingestion_du_contenu": {
    "description": "Trois modes pris en charge pour fournir le contenu de la page Web. Le modèle doit détecter le mode applicable et le confirmer avant de procéder.",
    "modes": {
      "MODE-1": {
        "libelle": "Saisie d'URL (mode principal)",
        "declencheur": "L'utilisateur fournit une URL Canada.ca",
        "instruction": "Tenter de récupérer le contenu de la page par extraction Web agentique disponible. Extraire uniquement le contenu textuel visible (exclure la navigation, les pieds de page et les métadonnées). En cas d'échec de la récupération, passer au MODE-3.",
        "validation": "Confirmer que l'URL commence par https://www.canada.ca ou https://www.arc-cra.gc.ca avant la récupération."
      },
      "MODE-2": {
        "libelle": "Navigateur / Onglet actif du copilote",
        "declencheur": "L'utilisateur invoque l'examen depuis un contexte de copilote de navigateur intégré ou fait référence à « cette page » / « onglet actif »",
        "instruction": "Lire directement le contenu de l'onglet actif du navigateur. Extraire tout le texte visible du corps de la page. Identifier l'URL de la page depuis le contexte du navigateur et la consigner dans le résumé de prise en charge. Si le contenu de l'onglet est indisponible, inviter l'utilisateur à coller le texte et basculer vers le MODE-3.",
        "validation": "Confirmer que l'URL de l'onglet actif appartient au domaine de l'ARC ou de Canada.ca avant de procéder."
      },
      "MODE-3": {
        "libelle": "Texte collé (solution de repli)",
        "declencheur": "L'utilisateur colle le texte brut de la page Web, ou la récupération en MODE-1/MODE-2 échoue",
        "instruction": "Accepter le contenu collé comme source d'examen. Demander à l'utilisateur de confirmer l'URL de la page et la date de dernière modification pour une consignation précise de la prise en charge.",
        "validation": "Si aucune URL n'est fournie, signaler l'entrée de prise en charge comme « URL non confirmée » et poursuivre l'examen en notant cette limitation."
      }
    },
    "chaine_de_repli": "MODE-1 → MODE-2 → MODE-3",
    "confirmation_prise_en_charge": "Avant de commencer l'examen, produire une ligne de confirmation : « Mode d'ingestion : [MODE-X] | Source : [URL ou Texte collé] | Titre de la page : [titre] | Date de modification : [date ou non confirmée] »"
  },

  "categories_de_signalement": {
    "CAT-1": "Inexactitude factuelle — contredit ou représente de façon inexacte la loi, le règlement ou la politique publiée de l'ARC.",
    "CAT-2": "Ambiguïté — un contribuable raisonnable pourrait tirer deux interprétations contradictoires ou plus.",
    "CAT-3": "Omission — une condition, une exception ou une limitation importante prévue par la loi est absente, créant une impression trompeuse.",
    "CAT-4": "Référence périmée — cite une disposition, un taux, un seuil ou un formulaire modifié, abrogé ou remplacé.",
    "CAT-5": "Surestimation du pouvoir de l'ARC — laisse entendre un pouvoir ou un pouvoir discrétionnaire non accordé par la loi habilitante.",
    "CAT-6": "Sous-estimation des droits du contribuable — omet de communiquer un droit ou un recours disponible en vertu de la législation ou de la Charte des droits du contribuable.",
    "CAT-7": "Échec du langage clair — utilise un langage juridique technique sans explication adéquate pour un public général.",
    "CAT-8": "Incohérence — contredit une autre publication de l'ARC, un bulletin d'interprétation ou un folio de l'impôt sur le revenu portant sur le même sujet."
  },

  "etapes_d_examen": [
    {
      "etape": 1,
      "phase": "PRISE EN CHARGE",
      "titre": "Identifier la page Web",
      "actions": [
        "Exécuter l'ingestion du contenu selon la chaîne de repli. Confirmer le mode et la source.",
        "Consigner : titre de la page, URL, date de dernière modification, sujet, loi(s) habilitante(s) et public cible.",
        "Produire la ligne de confirmation de prise en charge avant de procéder."
      ]
    },
    {
      "etape": 2,
      "phase": "BASE LÉGISLATIVE",
      "titre": "Établir les sources faisant autorité",
      "actions": [
        "Identifier les dispositions en vigueur pertinentes sur le site Lois-lois (laws-lois.justice.gc.ca) relatives au sujet de la page.",
        "Noter les modifications apportées par des lois d'exécution du budget ou des lois modificatrices indépendantes postérieures à la date de la page.",
        "Croiser avec les documents d'orientation applicables de l'ARC : Folios de l'impôt sur le revenu, Bulletins d'interprétation (série IT), Mémorandums sur la TPS/TVH, Bulletins d'information technique.",
        "Consigner toutes les sources avec leurs citations complètes : Nom de la loi (L.R.C./L.C. année, ch. chapitre), art. article(paragraphe)(alinéa)."
      ],
      "extrant": "Tableau de base législative : disposition | citation | date d'entrée en vigueur"
    },
    {
      "etape": 3,
      "phase": "EXAMEN LIGNE PAR LIGNE",
      "titre": "Signaler les problèmes par rapport à la base législative",
      "actions": [
        "Segmenter le texte en blocs d'examen : titres, critères d'admissibilité, conditions, seuils/délais, exemples, liens connexes.",
        "Pour chaque bloc, comparer le contenu à la base législative.",
        "Appliquer les catégories CAT-1 à CAT-8. Un même passage peut recevoir plusieurs signalements.",
        "Citer le texte signalé mot pour mot. Citer la disposition précise qu'il contredit, omet ou représente de façon inexacte.",
        "Attribuer une gravité : ÉLEVÉE (inexactitude juridique importante; risque juridique ou préjudice pour le contribuable) | MOYENNE (ambiguïté ou omission pouvant induire un lecteur raisonnable en erreur) | FAIBLE (problème de style, de clarté ou de cohérence, sans conséquence juridique directe).",
        "Indiquer si le problème touche tous les contribuables ou un sous-ensemble défini."
      ],
      "schema_d_entree_de_signalement": {
        "id_signalement": "SIGNAL-[ABRÉV-PAGE]-[NNN]",
        "bloc": "Référence de section",
        "texte_signale": "Citation mot pour mot",
        "categories": ["CAT-X"],
        "gravite": "ÉLEVÉE | MOYENNE | FAIBLE",
        "citation": "Citation législative complète",
        "probleme": "Explication en langage clair du problème"
      }
    },
    {
      "etape": 4,
      "phase": "RISQUE DE CONTESTATION",
      "titre": "Évaluer le risque de contestation juridique et de réputation",
      "actions": [
        "Pour les signalements ÉLEVÉS et MOYENS : évaluer le risque réaliste qu'un contribuable ou son représentant se fie au texte imprécis à son détriment.",
        "Considérer les arguments d'attente légitime, d'irrecevabilité ou de confiance raisonnable devant la Cour canadienne de l'impôt ou la Cour fédérale.",
        "Référencer les décisions pertinentes de la CCI ou de la CAF le cas échéant.",
        "Déterminer si la Charte des droits du contribuable (droits 1, 2, 5, 8) est en cause.",
        "Attribuer un risque de contestation : CRITIQUE | ÉLEVÉ | MODÉRÉ | FAIBLE"
      ],
      "extrant": "Matrice des risques de contestation : id_signalement | cote_risque | base_juridique | référence_jurisprudentielle (si applicable)"
    },
    {
      "etape": 5,
      "phase": "MESURES CORRECTIVES",
      "titre": "Rédiger des recommandations précises",
      "actions": [
        "Pour chaque signalement : fournir une recommandation concrète et, le cas échéant, un passage de remplacement suggéré.",
        "Le texte de remplacement doit refléter correctement la législation en langage clair conforme au Guide de rédaction du contenu du GC.",
        "Si le problème nécessite une résolution de politique au-delà de la rédaction Web, signaler pour escalade aux Affaires législatives et réglementaires de l'ARC ou aux Services de droit fiscal du ministère de la Justice.",
        "Prioriser : CRITIQUE et ÉLEVÉ en premier, puis MOYEN, puis FAIBLE."
      ],
      "extrant": "Tableau de mesures correctives : id_signalement | texte_actuel | action_ou_remplacement_recommandé | escalade (O/N) | priorité"
    },
    {
      "etape": 6,
      "phase": "VÉRIFICATION DE LA COHÉRENCE",
      "titre": "Croiser avec les publications connexes de l'ARC",
      "actions": [
        "Identifier les publications de l'ARC portant sur le même sujet.",
        "Signaler les conflits sous CAT-8, en citant le document conflictuel par titre et numéro de publication.",
        "Recommander s'il convient de modifier la page examinée, le document connexe ou d'émettre une mise à jour coordonnée."
      ],
      "extrant": "Journal de cohérence : document_connexe | passage_conflictuel | recommandation_de_résolution"
    },
    {
      "etape": 7,
      "phase": "RAPPORT",
      "titre": "Compiler le rapport d'examen de la qualité",
      "actions": [
        "Produire un rapport comprenant les sections suivantes : Sommaire exécutif | Prise en charge | Base législative | Problèmes signalés | Matrice des risques de contestation | Mesures correctives | Journal de cohérence | Approbation de l'examinateur.",
        "Le sommaire exécutif doit indiquer : nombre de signalements par catégorie et gravité, cote de risque globale de la page, 3 problèmes prioritaires nécessitant une action immédiate.",
        "Bloc d'approbation de l'examinateur : rôle de l'examinateur | date d'examen | date de la version de la législation consultée | avis de modification."
      ],
      "extrant": "Rapport d'examen de la qualité complet dans le format demandé par l'utilisateur (JSON | Markdown | texte brut)"
    }
  ],

  "exemple_de_reference": {
    "id_signalement": "SIGNAL-EX-001",
    "bloc": "Admissibilité, paragraphe 2",
    "texte_signale": "Vous pouvez demander ce crédit si vous êtes résident du Canada.",
    "categories": ["CAT-3"],
    "gravite": "ÉLEVÉE",
    "citation": "Loi de l'impôt sur le revenu (L.R.C., 1985, ch. 1 (5e suppl.)), par. 122.5(2) — l'admissibilité exige la résidence au Canada au début d'un mois déterminé, et non simplement à un moment quelconque durant l'année.",
    "probleme": "Omet la condition temporelle du par. 122.5(2). Un contribuable devenu résident en cours d'année pourrait croire à tort qu'il est admissible à la totalité de la prestation.",
    "risque_de_contestation": "ÉLEVÉ",
    "remplacement_recommande": "Vous pourriez être admissible si vous êtes résident du Canada au début du mois de paiement visé, au sens de l'article 122.5 de la Loi de l'impôt sur le revenu.",
    "escalade": false,
    "priorite": 1
  },

  "utilitaires": {
    "examen_ethique": {
      "declencheur": "/examen_ethique",
      "verifications": [
        "Les extrants évitent tout langage défavorisant un groupe de contribuables en vertu de la Loi canadienne sur les droits de la personne.",
        "Toutes les recommandations respectent la Charte des droits du contribuable.",
        "Toutes les citations sont vérifiables à partir de sources gouvernementales publiques faisant autorité."
      ]
    },
    "mise_a_jour_automatique": {
      "declencheur": "/mise_a_jour_automatique",
      "regle": "Présenter les modifications proposées à l'utilisateur pour approbation explicite avant application. Incrémenter le numéro de version. Ne jamais effectuer d'auto-modification sans approbation."
    }
  }
}, null, 2)
    }
};
window.categories.addTask('web', 'redflagReview', web_task13);










/*********************************************************************/
/* WEB — Self-Assessment Questionnaire → Interactive Question JSON   */
/* Converts a CRA webpage's self-assessment Q&A into a JSON file     */
/* ready to import into InteractiveQuestions_HTMLGenerator-e.html 
/* Suggested By Joel Plourde from STBIS **
/*********************************************************************/



const web_task14 = {

    name: {
        EN: "Self-Assessment Q&A → Interactive Question JSON  |  v1",
        FR: "Q&R d'auto-évaluation → JSON de question interactive  |  v1"
    },

    description: {
        EN: "Fetches a CRA webpage URL, extracts self-assessment questionnaire (field flow / decision tree) content, and produces a JSON file ready to import into the InteractiveQuestions_HTMLGenerator-e.html tool.",
        FR: "Récupère l'URL d'une page Web de l'ARC, extrait le contenu du questionnaire d'auto-évaluation (champ de flux / arbre de décision) et produit un fichier JSON prêt à importer dans l'outil InteractiveQuestions_HTMLGenerator-e.html."
    },

    instructions: {
        EN: "<strong>Important:</strong> Do not use this prompt with Protected information. Provide only a publicly accessible canada.ca URL. The page must contain a self-assessment questionnaire, decision tree, or field-flow widget. The output JSON is ready to load directly into <em>InteractiveQuestions_HTMLGenerator-e.html</em> using its Load button.",
        FR: "<strong>Important :</strong> N'utilisez pas cette requête avec des renseignements protégés. Fournissez uniquement une URL canada.ca accessible au public. La page doit contenir un questionnaire d'auto-évaluation, un arbre de décision ou un composant champ de flux. Le fichier JSON produit peut être chargé directement dans <em>InteractiveQuestions_HTMLGenerator-e.html</em> via son bouton Charger."
    },

    settings: [
        {
            id: "sourceURL",
            label: {
                EN: "Webpage URL (must contain a self-assessment questionnaire):",
                FR: "URL de la page Web (doit contenir un questionnaire d'auto-évaluation) :"
            },
            type: "textinput"
        },
        {
            id: "pageLanguage",
            label: {
                EN: "Page language:",
                FR: "Langue de la page :"
            },
            type: "select",
            options: {
                EN: ["English", "French"],
                FR: ["Anglais", "Français"]
            }
        }
    ],

    prompts: {

        EN: `{
    "meta": {
        "reset": true,
        "sessionMode": "stateless"
    },
    "prompt": "Fetch a CRA webpage, locate its self-assessment questionnaire content, and convert it into a structured JSON file compatible with the InteractiveQuestions_HTMLGenerator-e.html import format.",
    "role": "You are a Senior Content Developer at the Canada Revenue Agency (CRA) who specialises in web content and interactive decision-tree tools. You have expert knowledge of the GC Web Experience Toolkit (WET) Fieldflow component and the InteractiveQuestions_HTMLGenerator-e.html authoring tool.",
    "inputs": {
        "source_url": <sourceURL>,
        "page_language": <pageLanguage>
    },

    "instructions": {
        "step_1_fetch": "Fetch the full HTML of the provided URL. Focus only on the main content area (ignore site header, footer, navigation, breadcrumbs, cookie banners, and unrelated promotional content).",

        "step_2_identify": "Locate all self-assessment questionnaire content on the page. This content may appear as: (a) an existing WET Fieldflow widget (.wb-fieldflow), (b) a numbered or bulleted list of questions and answers that functions as a decision tree, (c) a section titled with words like 'Find out if you qualify', 'Self-assessment', 'Am I eligible', or similar eligibility-check language. If no questionnaire content is found, stop and return a structured error: { 'error': 'No self-assessment questionnaire content detected on the provided page.', 'url': <sourceURL> }.",

        "step_3_extract_intro": "Identify and extract any introductory paragraph(s) that appear before the first question. This becomes the 'intro' field. Preserve meaningful HTML formatting (e.g., <p>, <strong>, <a href>) but strip navigation or decorative markup. If there is no introduction, set 'intro' to an empty string.",

        "step_4_extract_questions": "Extract every question node in the decision tree. For each question record: (a) 'id' — generate a short unique identifier using the pattern 'q-' followed by a zero-padded integer (e.g., 'q-001', 'q-002'). (b) 'html' — the question text as an HTML string wrapped in a <p> tag. Preserve inline emphasis (<strong>, <em>) and inline links (<a href>). (c) 'descHtml' — any supplementary description, disclaimer, or note that appears beneath the question label but above the answer choices; wrap in <p>. If none, use empty string. (d) 'answers' — ordered array of answer objects (see step 5).",

        "step_5_extract_answers": "For each answer option belonging to a question, create an answer object with these fields: (a) 'id' — unique identifier using pattern 'ans-' followed by a zero-padded integer (e.g., 'ans-001'). (b) 'text' — the answer label as an HTML string in a <p> tag. (c) 'action' — use 'goto' if selecting this answer leads to another question; use 'panel' if it leads to a result/outcome panel. (d) 'nextId' — if action is 'goto', set this to the 'id' of the target question; otherwise null. (e) 'panelId' — if action is 'panel', set this to the 'id' of the corresponding result panel (see step 6); otherwise null. (f) 'classes' — empty string unless the source markup includes explicit WET utility classes on this list item.",

        "step_6_extract_panels": "Extract every result or outcome panel that answers lead to. These are the final nodes of the decision tree — typically alert boxes, callout boxes, or sections with a heading like 'You may be eligible', 'You are not eligible', 'Next steps', etc. For each panel: (a) 'id' — generate a unique identifier using the pattern 'answer-' followed by a zero-padded integer (e.g., 'answer-001'). Use this same id as the 'panelId' on the answer(s) that point to it. (b) 'style' — classify the panel using one of these four values only: 'success' (positive/eligible outcomes), 'danger' (ineligible or stop outcomes), 'warning' (conditional or partial outcomes), 'info' (neutral information or next steps). (c) 'headingLevel' — if the panel has a visible heading, set to 'h2', 'h3', 'h4', or 'h5' as appropriate to the page hierarchy; otherwise use 'none'. (d) 'headingText' — the plain text of the panel heading if present; otherwise empty string. (e) 'bodyHTML' — the full body content of the panel as an HTML string. Preserve lists (<ul>, <ol>, <li>), links (<a href>), and emphasis. Do not include the heading element in bodyHTML (it is captured separately in headingText). Wrap plain text in <p> tags.",

        "step_7_resolve_links": "Review all 'nextId' and 'panelId' values. Confirm every answer that uses action 'goto' has a valid 'nextId' that matches an existing question 'id'. Confirm every answer that uses action 'panel' has a valid 'panelId' that matches an existing panel 'id'. If a link cannot be resolved (e.g., the target is ambiguous or missing from the source), set the value to null and add a comment in the '_warnings' array.",

        "step_8_assemble_json": "Assemble the final JSON object using exactly this top-level structure: { 'version': 1, 'intro': '<string>', 'questions': [ <array of question objects> ], 'panels': [ <array of panel objects> ] }. The 'version' field must always be the integer 1. The order of items in 'questions' must follow the logical reading order of the decision tree (root question first). The order of items in 'panels' does not affect functionality but should follow the order answers reference them.",

        "step_9_quality_check": "Before outputting, verify: (1) Every 'id' value is unique across both 'questions' and 'panels'. (2) Every 'panelId' reference in answers matches a panel 'id'. (3) Every 'nextId' reference in answers matches a question 'id'. (4) No HTML in 'html', 'descHtml', 'text', or 'bodyHTML' fields contains <script>, <style>, <iframe>, or event attributes (onclick, onload, etc.). (5) All text is in the same language as the source page. (6) Plain text segments are wrapped in <p> tags. If any check fails, fix the issue before outputting.",

        "step_10_output": "Return ONLY the valid JSON object. Do not wrap it in markdown code fences. Do not add explanatory prose before or after the JSON. If warnings were generated during step 7, append a top-level '_warnings' array to the JSON containing plain-text descriptions of each issue. Example of the expected output structure is provided below in 'json_schema_reference'."
    },

    "json_schema_reference": {
        "description": "This is the exact schema the InteractiveQuestions_HTMLGenerator-e.html tool expects when loading a JSON file. Reproduce this structure precisely.",
        "schema": {
            "version": 1,
            "intro": "<p>Optional introductory paragraph shown before the first question.</p>",
            "questions": [
                {
                    "id": "q-001",
                    "html": "<p>Question text goes here.</p>",
                    "descHtml": "<p>Optional supplementary description below the question label.</p>",
                    "answers": [
                        {
                            "id": "ans-001",
                            "text": "<p>Answer option label.</p>",
                            "action": "goto",
                            "nextId": "q-002",
                            "panelId": null,
                            "classes": ""
                        },
                        {
                            "id": "ans-002",
                            "text": "<p>Another answer option label.</p>",
                            "action": "panel",
                            "nextId": null,
                            "panelId": "answer-001",
                            "classes": ""
                        }
                    ]
                },
                {
                    "id": "q-002",
                    "html": "<p>Second question text.</p>",
                    "descHtml": "",
                    "answers": [
                        {
                            "id": "ans-003",
                            "text": "<p>Yes</p>",
                            "action": "panel",
                            "nextId": null,
                            "panelId": "answer-002",
                            "classes": ""
                        },
                        {
                            "id": "ans-004",
                            "text": "<p>No</p>",
                            "action": "panel",
                            "nextId": null,
                            "panelId": "answer-003",
                            "classes": ""
                        }
                    ]
                }
            ],
            "panels": [
                {
                    "id": "answer-001",
                    "style": "danger",
                    "headingLevel": "h3",
                    "headingText": "You are not eligible",
                    "bodyHTML": "<p>Based on your answers, you do not meet the requirements.</p>"
                },
                {
                    "id": "answer-002",
                    "style": "success",
                    "headingLevel": "h3",
                    "headingText": "You may be eligible",
                    "bodyHTML": "<p>Based on your answers, you may qualify. Review the next steps below.</p><ul><li>Step one</li><li>Step two</li></ul>"
                },
                {
                    "id": "answer-003",
                    "style": "warning",
                    "headingLevel": "none",
                    "headingText": "",
                    "bodyHTML": "<p>Your situation requires further review. Contact the CRA for more information.</p>"
                }
            ]
        }
    },

    "constraints": [
        "Return ONLY the JSON object — no markdown fences, no preamble, no prose after the JSON.",
        "Do not invent, paraphrase, or add policy content not present on the source page.",
        "Preserve Canadian English spelling and all existing hyperlinks from the source.",
        "Do not strip meaningful anchor links — preserve <a href> elements in body content.",
        "Use null (JSON null, not the string 'null') for absent optional fields.",
        "The 'version' field must be the integer 1.",
        "All HTML in string fields must be well-formed and safe (no scripts or event handlers).",
        "If the page cannot be fetched or contains no questionnaire, return a JSON error object — do not fabricate content."
    ],

    "error_response_format": {
        "error": "Description of what went wrong.",
        "url": "The URL that was provided.",
        "suggestion": "Guidance for the user on how to resolve the issue."
    }
}`,

        FR: `{
    "meta": {
        "reset": true,
        "sessionMode": "stateless"
    },
    "invite": "Récupérer une page Web de l'ARC, localiser son contenu de questionnaire d'auto-évaluation et le convertir en fichier JSON structuré compatible avec le format d'importation de InteractiveQuestions_HTMLGenerator-e.html.",
    "rôle": "Vous êtes développeur principal de contenu à l'Agence du revenu du Canada (ARC), spécialisé dans le contenu Web et les outils interactifs d'arbre de décision. Vous avez une connaissance approfondie du composant Fieldflow de la Boîte à outils de l'expérience Web (BOEW) et de l'outil de création InteractiveQuestions_HTMLGenerator-e.html.",
    "entrées": {
        "url_source": <sourceURL>,
        "langue_page": <pageLanguage>
    },

    "instructions": {
        "étape_1_récupération": "Récupère le HTML complet de l'URL fournie. Concentrez-vous uniquement sur la zone de contenu principale (ignorer l'en-tête, le pied de page, la navigation, le fil d'Ariane, les bannières de témoins et le contenu promotionnel non lié).",

        "étape_2_identification": "Localiser tout le contenu du questionnaire d'auto-évaluation sur la page. Ce contenu peut apparaître sous la forme : (a) d'un composant WET Fieldflow existant (.wb-fieldflow), (b) d'une liste numérotée ou à puces de questions et réponses fonctionnant comme un arbre de décision, (c) d'une section intitulée avec des termes tels que « Déterminez si vous êtes admissible », « Auto-évaluation », « Suis-je admissible » ou autre langage similaire de vérification d'admissibilité. Si aucun contenu de questionnaire n'est trouvé, arrêter et retourner une erreur structurée : { 'erreur': 'Aucun contenu de questionnaire d'auto-évaluation détecté sur la page fournie.', 'url': <sourceURL> }.",

        "étape_3_extraction_intro": "Identifier et extraire les paragraphes d'introduction qui apparaissent avant la première question. Ceci devient le champ 'intro'. Conserver le formatage HTML significatif (<p>, <strong>, <a href>) mais supprimer le balisage de navigation ou décoratif. S'il n'y a pas d'introduction, définir 'intro' comme une chaîne vide.",

        "étape_4_extraction_questions": "Extraire chaque nœud de question dans l'arbre de décision. Pour chaque enregistrement de question : (a) 'id' — générer un identifiant unique court selon le modèle 'q-' suivi d'un entier avec zéros de remplissage (ex. : 'q-001', 'q-002'). (b) 'html' — le texte de la question sous forme de chaîne HTML enveloppée dans une balise <p>. Conserver l'emphase en ligne (<strong>, <em>) et les liens en ligne (<a href>). (c) 'descHtml' — toute description, avertissement ou note supplémentaire apparaissant sous l'étiquette de la question mais au-dessus des choix de réponses; envelopper dans <p>. Si inexistant, utiliser une chaîne vide. (d) 'answers' — tableau ordonné des objets de réponse (voir étape 5).",

        "étape_5_extraction_réponses": "Pour chaque option de réponse appartenant à une question, créer un objet de réponse avec ces champs : (a) 'id' — identifiant unique selon le modèle 'ans-' suivi d'un entier avec zéros de remplissage (ex. : 'ans-001'). (b) 'text' — l'étiquette de réponse sous forme de chaîne HTML dans une balise <p>. (c) 'action' — utiliser 'goto' si la sélection de cette réponse mène à une autre question; utiliser 'panel' si elle mène à un panneau de résultat/résultat. (d) 'nextId' — si action est 'goto', définir à l''id' de la question cible; sinon null. (e) 'panelId' — si action est 'panel', définir à l''id' du panneau de résultat correspondant (voir étape 6); sinon null. (f) 'classes' — chaîne vide sauf si le balisage source inclut des classes utilitaires WET explicites sur cet élément de liste.",

        "étape_6_extraction_panneaux": "Extraire chaque panneau de résultat ou de résultats vers lequel les réponses mènent. Ce sont les nœuds finaux de l'arbre de décision — généralement des boîtes d'alerte, des boîtes de rappel ou des sections avec un titre tel que « Vous pourriez être admissible », « Vous n'êtes pas admissible », « Prochaines étapes », etc. Pour chaque panneau : (a) 'id' — générer un identifiant unique selon le modèle 'answer-' suivi d'un entier avec zéros de remplissage (ex. : 'answer-001'). Utiliser ce même identifiant comme 'panelId' dans la ou les réponses qui y pointent. (b) 'style' — classer le panneau en utilisant l'une de ces quatre valeurs uniquement : 'success' (résultats positifs/admissibles), 'danger' (inéligible ou arrêt), 'warning' (résultats conditionnels ou partiels), 'info' (informations neutres ou prochaines étapes). (c) 'headingLevel' — si le panneau a un titre visible, définir à 'h2', 'h3', 'h4', ou 'h5' selon la hiérarchie de la page; sinon utiliser 'none'. (d) 'headingText' — le texte brut du titre du panneau si présent; sinon chaîne vide. (e) 'bodyHTML' — le contenu complet du corps du panneau sous forme de chaîne HTML. Conserver les listes (<ul>, <ol>, <li>), les liens (<a href>) et l'emphase. Ne pas inclure l'élément de titre dans bodyHTML (il est capturé séparément dans headingText). Envelopper le texte brut dans des balises <p>.",

        "étape_7_résolution_liens": "Réviser toutes les valeurs 'nextId' et 'panelId'. Confirmer que chaque réponse utilisant l'action 'goto' a un 'nextId' valide correspondant à un 'id' de question existant. Confirmer que chaque réponse utilisant l'action 'panel' a un 'panelId' valide correspondant à un 'id' de panneau existant. Si un lien ne peut pas être résolu, définir la valeur à null et ajouter un commentaire dans le tableau '_warnings'.",

        "étape_8_assemblage_json": "Assembler l'objet JSON final en utilisant exactement cette structure de niveau supérieur : { 'version': 1, 'intro': '<chaîne>', 'questions': [ <tableau d'objets de questions> ], 'panels': [ <tableau d'objets de panneaux> ] }. Le champ 'version' doit toujours être l'entier 1. L'ordre des éléments dans 'questions' doit suivre l'ordre de lecture logique de l'arbre de décision (question racine en premier). L'ordre des éléments dans 'panels' n'affecte pas la fonctionnalité mais devrait suivre l'ordre dans lequel les réponses y font référence.",

        "étape_9_vérification_qualité": "Avant de sortir, vérifier : (1) Chaque valeur 'id' est unique dans les 'questions' et les 'panels'. (2) Chaque référence 'panelId' dans les réponses correspond à un 'id' de panneau. (3) Chaque référence 'nextId' dans les réponses correspond à un 'id' de question. (4) Aucun HTML dans les champs 'html', 'descHtml', 'text' ou 'bodyHTML' ne contient de <script>, <style>, <iframe> ou d'attributs d'événement (onclick, onload, etc.). (5) Tout le texte est dans la même langue que la page source. (6) Les segments de texte brut sont enveloppés dans des balises <p>. Si une vérification échoue, corriger le problème avant de sortir.",

        "étape_10_sortie": "Retourner UNIQUEMENT l'objet JSON valide. Ne pas l'envelopper dans des délimiteurs de code markdown. Ne pas ajouter de prose explicative avant ou après le JSON. Si des avertissements ont été générés à l'étape 7, ajouter un tableau '_warnings' de niveau supérieur au JSON contenant des descriptions en texte brut de chaque problème."
    },

    "référence_schéma_json": {
        "description": "Voici le schéma exact attendu par l'outil InteractiveQuestions_HTMLGenerator-e.html lors du chargement d'un fichier JSON. Reproduire cette structure avec précision.",
        "schéma": {
            "version": 1,
            "intro": "<p>Paragraphe d'introduction facultatif affiché avant la première question.</p>",
            "questions": [
                {
                    "id": "q-001",
                    "html": "<p>Texte de la question.</p>",
                    "descHtml": "<p>Description supplémentaire facultative sous l'étiquette de la question.</p>",
                    "answers": [
                        {
                            "id": "ans-001",
                            "text": "<p>Étiquette de l'option de réponse.</p>",
                            "action": "goto",
                            "nextId": "q-002",
                            "panelId": null,
                            "classes": ""
                        },
                        {
                            "id": "ans-002",
                            "text": "<p>Étiquette d'une autre option de réponse.</p>",
                            "action": "panel",
                            "nextId": null,
                            "panelId": "answer-001",
                            "classes": ""
                        }
                    ]
                },
                {
                    "id": "q-002",
                    "html": "<p>Texte de la deuxième question.</p>",
                    "descHtml": "",
                    "answers": [
                        {
                            "id": "ans-003",
                            "text": "<p>Oui</p>",
                            "action": "panel",
                            "nextId": null,
                            "panelId": "answer-002",
                            "classes": ""
                        },
                        {
                            "id": "ans-004",
                            "text": "<p>Non</p>",
                            "action": "panel",
                            "nextId": null,
                            "panelId": "answer-003",
                            "classes": ""
                        }
                    ]
                }
            ],
            "panels": [
                {
                    "id": "answer-001",
                    "style": "danger",
                    "headingLevel": "h3",
                    "headingText": "Vous n'êtes pas admissible",
                    "bodyHTML": "<p>D'après vos réponses, vous ne répondez pas aux exigences.</p>"
                },
                {
                    "id": "answer-002",
                    "style": "success",
                    "headingLevel": "h3",
                    "headingText": "Vous pourriez être admissible",
                    "bodyHTML": "<p>D'après vos réponses, vous pourriez être admissible. Consultez les prochaines étapes ci-dessous.</p><ul><li>Première étape</li><li>Deuxième étape</li></ul>"
                },
                {
                    "id": "answer-003",
                    "style": "warning",
                    "headingLevel": "none",
                    "headingText": "",
                    "bodyHTML": "<p>Votre situation nécessite un examen plus approfondi. Communiquez avec l'ARC pour obtenir de plus amples renseignements.</p>"
                }
            ]
        }
    },

    "contraintes": [
        "Retourner UNIQUEMENT l'objet JSON — pas de délimiteurs markdown, pas de préambule, pas de prose après le JSON.",
        "Ne pas inventer, paraphraser ou ajouter du contenu de politique absent de la page source.",
        "Conserver l'orthographe canadienne-française et tous les hyperliens existants de la source.",
        "Ne pas supprimer les liens d'ancre significatifs — conserver les éléments <a href> dans le contenu du corps.",
        "Utiliser null (null JSON, pas la chaîne 'null') pour les champs facultatifs absents.",
        "Le champ 'version' doit être l'entier 1.",
        "Tout HTML dans les champs de chaîne doit être bien formé et sécurisé (pas de scripts ni de gestionnaires d'événements).",
        "Si la page ne peut pas être récupérée ou ne contient pas de questionnaire, retourner un objet JSON d'erreur — ne pas fabriquer de contenu."
    ],

    "format_réponse_erreur": {
        "erreur": "Description de ce qui s'est produit.",
        "url": "L'URL qui a été fournie.",
        "suggestion": "Conseils à l'utilisateur pour résoudre le problème."
    }
}`
    }
};

window.categories.addTask('web', 'selfAssessmentToJSON', web_task14);











/*********************************/
/* WEB CONTENT TEMPLATE ANALYSER */
/*********************************/

/*

task = {
    name: {
        EN: "	|   v1 ",
        FR: "	|   v1"
    },
    
    description: {
        EN: "",
        FR: ""
    },
    
    instructions: {
        EN: "",
        FR: ""
    },
    
    settings: [
        {id: "webpageAddress", label: {EN: "URL:", FR: "URLs:"}, type: "textinput"},
    ],
    
    prompts: {
        
        EN: ``,
            
        FR: ``     
    }
}

window.categories.addTask('web', 'INSERT ID HERE', task);

*/