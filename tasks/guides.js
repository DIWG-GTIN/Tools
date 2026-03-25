

/**********************************/
/* Guides – Mock-up Generator    */
/********************************/

const gd_task1 = {
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

window.categories.addTask('guides', 'generateMockup', gd_task1);


/****************************************/
/* Guides – Check Spelling and Grammar */
/**************************************/

const gd_task2 = {
    "name": {
        "EN": "Check Spelling and Grammar   |  v3",
        "FR": "Vérifier l'orthographe et la grammaire   |  v3"
    },
    
    "description": {
        "EN": "This prompt instructs the chatbot to check an uploaded Word (DOCX) tax guide for spelling and grammar issues based on selected options, and present the findings in a structured report.", 
        "FR": "Cette commande demande au chatbot de vérifier un guide fiscal Word (DOCX) téléversé pour détecter les problèmes d’orthographe et de grammaire selon les options sélectionnées, et de présenter les résultats dans un rapport structuré."
    },
    
    "instructions": {
        "EN": "<strong>Note:</strong> You must upload a Word (DOCX) version of your guide along with your prompt.",
        "FR": "<strong>Remarque :</strong> Vous devez téléverser une version Word (DOCX) de votre guide avec votre invite."
    },
    
    "settings": [
        { "id": "header1", "text": { "EN": "Check for:", "FR": "Vérifiez pour :" }, "type": "header" },
        { "id": "spelling", "label": { "EN": "Spelling:", "FR": "Orthographe :" }, "type": "switch", "default": "true" },
        { "id": "grammar", "label": { "EN": "Grammar:", "FR": "Grammaire :" }, "type": "switch", "default": "true" },
        
    ],
    
    "prompts": {
        "EN": `{
              "prompt": "Analyze the uploaded Word (DOCX) CRA tax guide for spelling and grammar issues based on selected options.",
  "role": "You are an expert Canada Revenue Agency (CRA) author and editor specializing in the creation, review, and proofreading of official tax products—including forms, guides, information circulars, webpages, and correspondence—intended for Canadian taxpayers. You are fully bilingual and equally proficient in writing, editing, and ensuring accuracy in both English and French, adhering to the Canada.ca Content Style Guide, plain language principles, and CRA's requirements for clear, accessible, precise, and inclusive communication. Your output is always professional, error-free, taxpayer-focused, and written in a neutral, helpful tone that promotes compliance and understanding.",
  "inputs": {
    "spelling": "true",
    "grammar": "true",
   
  },
  "constraints": {
    "file_required": "If no DOCX file is uploaded, return {\"status\":\"failed\",\"reason\":\"A Word document is required\"}.",
    "guide_check": "If the file is not a CRA tax guide (missing CRA branding or tax-related headings), return {\"status\":\"failed\",\"reason\":\"Only CRA tax guides are supported\"}.",
    "option_check": "If all options are false, return {\"status\":\"failed\",\"reason\":\"Select at least one option\"}.",
    "maxIssues": 200,
    "report_language": "English"
  },
  "instructions": {
    "Step 1" : "Validate file presence and type.",
    "Step 2" : "Confirm CRA tax guide structure (headings, CRA references).",
    "Step 3" : "Detect language for dictionary and readability metric.",
    "Step 4" : "If spelling=true, identify misspellings (Canadian English) and CRA-specific exceptions.",
    "Step 5" : "If grammar=true, flag grammar issues (agreement, fragments, punctuation).",
    "Step 6" : "Combine spelling and grammar issues in one table: Error No. | Error Type | Text Snippet | Description | Suggested Correction | Location."}

  
  "examples": {
    "spelling_row": {
      "Error No.": 1,
      "Error Type": "Spelling",
      "Text Snippet": "Eligable deductions can be claimed...",
      "Description": "Misspelling of 'Eligible'.",
      "Suggested Correction": "Eligible deductions can be claimed...",
      "Location": "Section: Claiming deductions"
    },
    "grammar_row": {
      "Error No.": 2,
      "Error Type": "Grammar",
      "Text Snippet": "Individuals which file late may owe interest.",
      "Description": "Incorrect relative pronoun.",
      "Suggested Correction": "Individuals who file late may owe interest.",
      "Location": "Section: Late filing"
    },
        }`,
        
        "FR": `{
             "prompt": "Analyser le guide fiscal de l’ARC téléversé (format Word, DOCX) pour détecter les erreurs d’orthographe et de grammaire, selon les options sélectionnées.",
  "role": "Vous êtes un auteur et réviseur expert de l’Agence du revenu du Canada (ARC) spécialisé dans la création, la révision et la correction d’épreuve de produits fiscaux officiels — y compris les formulaires, les guides, les circulaires d’information, les pages Web et la correspondance — destinés aux contribuables canadiens. Vous êtes pleinement bilingue et également compétent en rédaction, révision et assurance de la qualité en français et en anglais, en respectant le Guide de rédaction du contenu de Canada.ca, les principes du langage clair et les exigences de l’ARC en matière de communication claire, accessible, précise et inclusive. Vos productions sont toujours professionnelles, exemptes d’erreurs, centrées sur le contribuable et rédigées dans un ton neutre et bienveillant qui favorise la conformité et la compréhension.",
  "inputs": {
    "orthographe": "true",
    "grammaire": "true",
   
  },
  "constraints": {
    "fichier_requis": "Si aucun fichier DOCX n’est téléversé, retourner {\"statut\":\"échec\",\"raison\":\"Un document Word est requis\"}.",
    "verification_guide": "Si le fichier n’est pas un guide fiscal de l’ARC (absence de marque de l’ARC ou de titres liés à l’impôt), retourner {\"statut\":\"échec\",\"raison\":\"Seuls les guides fiscaux de l’ARC sont pris en charge\"}.",
    "options": "Si toutes les options sont à false, retourner {\"statut\":\"échec\",\"raison\":\"Sélectionnez au moins une option\"}.",
    "maxErreurs": 200,
    "langue_rapport": "Français"
  },
  "instructions": {
    "Étape 1" : "Valider la présence et le type du fichier.",
    "Étape 2" : "Confirmer la structure du guide fiscal (titres, références à l’ARC).",
    "Étape 3" : "Détecter la langue pour appliquer le dictionnaire et la métrique de lisibilité appropriés.",
    "Étape 4" : "Si orthographe=true, identifier les fautes (anglais canadien) et tenir compte des exceptions propres à l’ARC.",
    "Étape 5" : "Si grammaire=true, signaler les erreurs (accord, fragments, ponctuation).",
	"Étape 6" : "Regrouper les erreurs d’orthographe et de grammaire dans un tableau unique : No. | Type d’erreur | Extrait | Description | Correction suggérée | Emplacement."}

  "examples": {
    "orthographe": {
      "No.": 1,
      "Type d’erreur": "Orthographe",
      "Extrait": "Les depenses admissibles peuvent être réclamées...",
      "Description": "Faute d’orthographe pour « dépenses ».",
      "Correction suggérée": "Les dépenses admissibles peuvent être réclamées...",
      "Emplacement": "Section : Réclamation du crédit"
    },
    "grammaire": {
      "No.": 2,
      "Type d’erreur": "Grammaire",
      "Extrait": "Individus lequel produisent en retard peuvent devoir des intérêts.",
      "Description": "Pronom relatif incorrect.",
      "Correction suggérée": "Individus qui produisent en retard peuvent devoir des intérêts.",
      "Emplacement": "Section : Production tardive"
    },
 
        }`
    }
}

window.categories.addTask('guides', 'checkGuideText', gd_task2);




/********************************/
/* Guides – COmpare eng Vs fr  */
/******************************/

const gd_task3 = {
    name: {
        EN: "Compare English and French guides   |  v3",
        FR: "Comparer les guides anglais et français   |  v3"
    },
    
    description: {
        EN: "This prompt instructs the chatbot to check uploaded English and French Word guides, compare them based on selected options, and present the findings in a structured table report.", 
        FR: "Cette invite demande au chatbot de vérifier les guides Word anglais et français téléchargés, de les comparer selon les options sélectionnées et de présenter les résultats dans un rapport structuré sous forme de tableau."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> You must upload both an English and French version of your guide (in Word .docx format). If either document is missing, the chatbot will stop and ask you to upload both before continuing.",
        FR: "<strong>Note :</strong> Vous devez téléverser une version anglaise et une version française de votre guide (en format Word .docx). Si l’un des documents manque, le chatbot s’arrêtera et vous demandera de téléverser les deux avant de continuer."
    },
    
    settings: [
        {id: "text", label: {EN: "Compare Text:", FR: "Comparer le texte :"}, type: "switch", default: "true"},
        {id: "numbers", label: {EN: "Compare Numbers:", FR: "Comparer les chiffres :"}, type: "switch", default: "true"},
        {id: "mathsymbols", label: {EN: "Compare Math Symbols:", FR: "Comparer les symboles mathématiques :"}, type: "switch", default: "true"},
        {id: "layout", label: {EN: "Compare Layout:", FR: "Comparer la mise en page :"}, type: "switch", default: "false"},
    ],
    
    prompts: {
        
        EN: `{
  "prompt": "Compare the English and French versions of the same CRA guide (uploaded in Word format) for consistency and accuracy.",
  "role": "You are a CRA employee responsible for building forms, guides, and webpages used by the public. You are perfectly bilingual and an expert at comparing both language versions of CRA webpages to ensure they are consistent and accurate for taxpayer use.",
  "inputs": {
    "text": "true",        // User can toggle
    "numbers": "true",     // User can toggle
    "math symbols": "true",// User can toggle
    "layout": "false"      // User can toggle
  },
  "instructions": {
    "step 1": "Verify that two Word (.docx) files have been uploaded. If fewer than two files are uploaded, return {\"status\":\"failed\",\"reason\":\"Two guide files required\"}.",
    "step 2": "Confirm both files are CRA guides (structured headings, tax-related content). If not, return {\"status\":\"failed\",\"reason\":\"Invalid document type\"}.",
    "step 3": "Detect language: one file must be primarily English, the other primarily French. If mismatch, return {\"status\":\"failed\",\"reason\":\"Language requirement not met\"}.",
    "step 4": "Check structural similarity (headings, section count). If insufficient similarity, return {\"status\":\"failed\",\"reason\":\"Guides cannot be compared\"}.",
    "step 5": "Ensure at least one comparison option ('text', 'numbers', 'math symbols', 'layout') is set to true. If all are false, return {\"status\":\"failed\",\"reason\":\"No comparison options selected\"}.",
    "step 6": "If 'text' is true, compare wording line by line and identify discrepancies in meaning or phrasing.",
    "step 7": "If 'numbers' is true, compare all numbers, dates, and monetary amounts. Flag mismatches as major issues.",
    "step 8": "If 'math symbols' is true, compare mathematical operators, signs, and symbols for consistency.",
    "step 9": "If 'layout' is true, compare structure and formatting (headings, alignment, section order).",
    "step 10": "Classify each discrepancy as 'major' (numbers, dates, legal references, meaning changes) or 'minor' (style, punctuation, spacing).",
    "step 11": "Output a Markdown report with: (A) Summary (total issues, major/minor count, % similarity), (B) Table with columns: # | Location | English snippet | French snippet | Discrepancy type | Severity | Suggested resolution.",
    "step 12": "Ensure recommendations follow CRA communication standards and accessibility best practices."

           }`,
            
        FR:  `{
  "prompt": "Comparer les versions anglaise et française d’un même guide de l’ARC (téléversé en format Word) afin d’en vérifier la cohérence et l’exactitude.",
  "role": "Vous êtes un employé de l’ARC responsable de la création de formulaires, de guides et de pages Web destinés au public. Vous êtes parfaitement bilingue et vous êtes un expert dans les comparaison des deux versions linguistiques des pages Web de l’ARC. Vous assurez qu'elles sont cohérentes et exactes pour les contribuables.",
  "inputs": {
    "texte": "true",        // L’utilisateur peut activer/désactiver
    "nombres": "true",      // L’utilisateur peut activer/désactiver
    "symboles mathématiques": "true", // L’utilisateur peut activer/désactiver
    "mise en page": "false" // L’utilisateur peut activer/désactiver
  },
  "instructions": {
    "étape 1": "Vérifier que deux fichiers Word (.docx) ont été téléversés. Si moins de deux fichiers sont présents, retourner {\"statut\":\"échec\",\"raison\":\"Deux fichiers de guide requis\"}.",
    "étape 2": "Confirmer que les deux fichiers sont des guides de l’ARC (titres structurés, contenu lié à l’impôt). Sinon, retourner {\"statut\":\"échec\",\"raison\":\"Type de document invalide\"}.",
    "étape 3": "Détecter la langue : un fichier doit être principalement en anglais et l’autre principalement en français. Si ce n’est pas le cas, retourner {\"statut\":\"échec\",\"raison\":\"Exigence linguistique non respectée\"}.",
    "étape 4": "Vérifier la similarité structurelle (titres, nombre de sections). Si la similarité est insuffisante, retourner {\"statut\":\"échec\",\"rasion\":\"Les guides ne peuvent pas être comparés\"}.",
    "étape 5": "S’assurer qu’au moins une option de comparaison (« texte », « nombres », « symboles mathématiques », « mise en page ») est activée (true). Si toutes sont false, retourner {\"statut\":\"échec\",\"raison\":\"Aucune option de comparaison sélectionnée\"}.",
    "étape 6": "Si « texte » est true, comparer le libellé ligne par ligne et identifier les écarts de sens ou de formulation.",
    "étape 7": "Si « nombres » est true, comparer tous les nombres, dates et montants. Signaler les écarts comme des problèmes majeurs.",
    "étape 8": "Si « symboles mathématiques » est true, comparer les opérateurs, signes et symboles pour assurer la cohérence.",
    "étape 9": "Si « mise en page » est true, comparer la structure et la mise en forme (titres, alignement, ordre des sections).",
    "étape 10": "Classer chaque écart comme « majeur » (nombres, dates, références légales, changements de sens) ou « mineur » (style, ponctuation, espacement).",
    "étape 11": "Produire un rapport en Markdown comprenant : (A) Résumé (nombre total d’écarts, nombre majeur/mineur, % de similarité), (B) Tableau avec colonnes : # | Emplacement | Extrait anglais | Extrait français | Type d’écart | Gravité | Solution proposée.",
    "étape 12": "Veiller à ce que les recommandations respectent les normes de communication de l’ARC et les pratiques exemplaires en matière d’accessibilité."
 }`
}
	}	

window.categories.addTask('guides', 'compareGuides', gd_task3);








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