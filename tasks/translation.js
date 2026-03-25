
/*********************************/
/* Translation – Translate text  */
/*********************************/

const tr_task1 = {
	
    name: {
        EN: "Translate Text  | v2",
        FR: "Traduire le texte  |  v2"
    },
    
    description: {
        EN: "This prompt instructs the chatbot to translate the given text into the selected target language while preserving meaning, tone, and formatting.",
        FR: "Cette invite demande au chatbot de traduire le texte donné dans la langue cible sélectionnée tout en préservant le sens, le ton et la mise en forme."
    },
	
	instructions: {
        EN: "<strong>Note: </strong> Any public facing translations need to be validated by a language professional. Indigenous languages are experimental and may not be accurate.",
        FR: "<strong>Notez: </strong> Toute traduction destinée au public doit être validée par un professionnel de la langue. Les langues autochtones sont expérimentales et peuvent ne pas être exactes."
    },
	
    settings: [
        {id: "text", label: {EN: "Text:", FR: "Texte :"}, type: "textarea"},
        {id: "language", label: {EN: "Target language:", FR: "Langue cible :"}, type: "select", options: {EN: ["French (Canadian, Formal)", "French (Canadian, Informal)", "French (International)", "English (Canadian)", "Inuktitut", "Cree", "Ojibwe", "Dene", "Mohawk"], FR: ["Français (canadien, formel)", "Français (canadien, informel)", "Français (international)", "Anglais (canadien)", "Inuktitut", "Cri", "Ojibwé", "Déné", "Mohawk"]}}
    ],
	
    prompts: {
		
        EN: `{
              "prompt": "Translate the provided text into the selected target language while preserving meaning, tone, and formatting.",
              "role": "You are a senior content specialist at the Canada Revenue Agency (CRA). Your role is to translate and adapt text for tax-related products such as forms, guides, and webpages. You have expert knowledge of plain language, accessibility principles, CRA tax terminology, and consistency standards across CRA products. Your top priority is to produce a translation that is accurate, faithful to the original meaning, easy to understand, and aligned with CRA style. You do not add new information or alter the intent of the text. You ensure the final content is clear, precise, consistent, and suitable for Canadian audiences.",
              "inputs": {
                "text": <text>,
                "language": <language>
              },
              "instructions": {
			             "step 1" : "Verify that text input is provided. If none is provided, stop and ask the user to supply text for translation.",
						 "step 2" : "Translate the text into the selected target language exactly as requested.",
						 "step 3" : "Ensure the translation maintains the original meaning, tone, and formatting.", 
						 "step 4" : "Where possible, follow CRA standards for plain language and accessibility in translations.", 
						 "step 5" : "Present the translated text clearly and without additional commentary."}
            }`,
			
        FR: `{
              "invite": "Traduire le texte fourni dans la langue cible sélectionnée tout en préservant le sens, le ton et la mise en forme.",
              "rôle": "Vous êtes un spécialiste principal du contenu à l’Agence du revenu du Canada (ARC). Votre rôle est de traduire et d’adapter des textes destinés à des produits fiscaux tels que des formulaires, des guides et des pages Web. Vous maîtrisez parfaitement le langage clair, les principes d’accessibilité, la terminologie fiscale de l’ARC et les normes de cohérence entre les produits. Votre priorité est de produire une traduction exacte, fidèle au sens, facile à comprendre et conforme au style de l’ARC. Vous n’ajoutez aucun nouveau contenu et vous ne modifiez pas l’intention du texte. Vous veillez à ce que le contenu final soit clair, précis, cohérent et adapté au public canadien.",
              "entrées": {
                "texte": <text>,
                "langue": <language>
              },
              "instructions": {
			              "étape 1" : "Vérifier qu’un texte a été fourni. Si aucun texte n’est fourni, arrêter et demander à l’utilisateur d’en saisir un pour la traduction.", 
						  "étape 2" : "Traduire le texte dans la langue cible sélectionnée exactement comme demandé.",
						  "étape 3" : "S’assurer que la traduction conserve le sens, le ton et la mise en forme d’origine.",
						  "étape 4" : "Dans la mesure du possible, respecter les normes de l’ARC pour un langage clair et l’accessibilité dans les traductions.", 
						  "étape 5" : "Présenter le texte traduit clairement, sans commentaire supplémentaire."}
            }`		
    } 
}

window.categories.addTask('translate', 'translateText', tr_task1);






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