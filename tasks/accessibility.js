/********************************************/
/* Accessibility – Readability Optimizer   */
/******************************************/

const task1 = {
    name: {
        EN: "All publications – Readability Optimizer   | v5",
        FR: "Toutes les publications – Optimiseur de lisibilité    | v5"
    },
    
    description: {
        EN: "This prompt instructs the chatbot to analyze the content of a specified webpage, evaluate its readability, and provide actionable suggestions to improve clarity and accessibility.",
        FR: "Ce prompt demande au robot conversationnel d’analyser le contenu d’une page Web spécifiée, d’évaluer sa lisibilité et de fournir des suggestions concrètes pour améliorer la clarté et l’accessibilité."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> You can also copy segments of text along with this prompt directly to the chatbot instead of providing a webpage URL. Simply leave the webpage address field empty and paste your text in the prompt. For Preview URLs, only use the copilot chatbot embedded into the Edge browser.",
        FR: "<strong>Notez :</strong> Vous pouvez également copier des segments de texte avec cette commande d'IA directement dans le robot conversationnel au lieu de fournir l’URL d’une page Web. Il suffit de laisser le champ de l’adresse Web vide et de coller votre texte dans la commande d'IA. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
    },
    
    settings: [
        {id: "webpage_url", label: {EN: "Webpage URL:", FR: "URL de la page Web:"}, type: "textinput"},
        {id: "readabilityLevel", label: {EN: "Target Audience:", FR: "Public cible:"}, type: "select", options: {EN: ["Grade 8", "Plain Language (Universal)"], FR: ["8e année", "Langage clair (universel)"]}}
    ],
    
    prompts: {
        EN: `{
            "prompt": "Analyze the provided content — whether from a live webpage, pasted text snippet, or attached form/guide — and evaluate its readability. Provide actionable suggestions to simplify language to a Grade 8 level (Flesch-Kincaid), while preserving all original meaning and official requirements. Present revised text in a clear table format.",
            "role": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in plain language and readability.",
            "inputs": {
                 "input_type": "If there is no URL provided; determine which input is provided before iniatiting the review: text | form | guide",
                "url": <webpage_url>,
                "language": "English or French (default: English)"
                "target_grade_level": "8 (default) – optional: enter a different Flesch-Kincaid target (e.g., 7)"
            },
            "instructions": {
                "step 1": "Determine which input_type is provided. Accept only ONE source. If none or more than one are filled, reply: 'Please choose exactly one input_type (url | text | form | guide) and provide the content.' and stop.",
                "step 2A": "If url → Fetch the live URL content. If the URL isn't live, maybe the author is using a Preview o a Launch URL for pages in development. If so, verify the captured webpage content of the active tab via the browser embedded copilot. Do not fetch a live equivalent. Only if both URLs are inaccessible, reply: 'Error: Page not accessible. Please provide a valid URL.' and stop.",
                "step 2B": "If text → Use the pasted text directly.",
                "step 2C": "If form or guide → Extract all readable text from the attached file.",
                "step 3": "Extract only the main taxpayer-facing content (ignore navigation, footers, sidebars, metadata unless they contain instructional text).",
                "step 4": "Calculate the current Flesch-Kincaid Grade Level of the content.",
                "step 5": "Identify all sections above the target grade level (default: Grade 8) or containing jargon, long sentences, passive voice, or complex structure.",
                "step 6": "Rewrite problematic sections using plain language, active voice, short sentences, and simple vocabulary — while preserving 100% of the original meaning and all legal/official requirements.",
                "step 7": "Present results in a clean Markdown table with these columns: Original Text | Suggested Revision | Flesch-Kincaid Improvement | Notes",
                "step 8": "At the top, include: Current Grade Level: X | Target: 8 | Overall Recommendation: [Excellent / Good / Needs Work]",
                "step 9": "If no improvements needed, state clearly: 'This content already meets or exceeds Grade 8 readability standards.'"
            }
        }`,

        FR: `{
            "prompt": "Analyser le contenu fourni — qu’il provienne d’une page Web en direct, d’un extrait de texte collé ou d’un formulaire ou guide joint — et évaluer sa lisibilité. Proposer des suggestions concrètes pour simplifier le langage jusqu’au niveau de 8e année (Flesch-Kincaid), tout en conservant intégralement le sens et les exigences officielles. Présenter les révisions dans un tableau clair et facile à suivre.",
            "role": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert sur le language clair et simple et la lisibilité.",
            "inputs": {
                "input_type": "Choisir EXACTEMENT UN seul : url | texte | formulaire | guide",
                 "input_type": "Si il n'y as pas de URL fournit, determinez quel type de format est fournit avant de commencer l'analyse : texte | formulaire | guide",
                "url": <webpage_url>,
                
                "langue": "Français ou Anglais (défaut : Français)"
                "niveau_cible": "8 (par défaut) – optionnel : entrez un autre niveau Flesch-Kincaid (ex. : 7)"
            },
            "instructions": {
                "étape 1": "Déterminer quel input_type est fourni. N’accepter qu’UNE seule source. Sinon, répondre : « Veuillez choisir exactement un seul type d’entrée (url | texte | formulaire | guide) et fournir le contenu. » et arrêter.",
                "étape 2A": "Si url → Récupérer le contenu de la page en direct. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur. Ne pas récupérer une URL équivalente en direct. Seulement si les deux URLs sont inaccessible, répondre : « Erreur : page non accessible. Veuillez fournir une URL valide » et arrêter.",
                "étape 2B": "Si texte → Utiliser le texte collé directement.",
                "étape 2C": "Si formulaire ou guide → Extraire tout le texte lisible du fichier joint.",
                "étape 3": "Conserver uniquement le contenu principal destiné aux contribuables (ignorer navigation, en-tête, pied de page, etc.).",
                "étape 4": "Calculer le niveau actuel de lisibilité Flesch-Kincaid.",
                "étape 5": "Repérer les sections dépassant le niveau cible (défaut : 8e année) ou contenant du jargon, phrases longues ou structure complexe.",
                "étape 6": "Réécrire en langage clair, voix active, phrases courtes — sans jamais modifier le sens ni les obligations officielles.",
                "étape 7": "Présenter les résultats dans un tableau Markdown avec les colonnes : Texte original | Révision suggérée | Amélioration Flesch-Kincaid | Notes",
                "étape 8": "En haut : Niveau actuel : X | Cible : 8 | Recommandation globale : [Excellent / Bon / À améliorer]",
                "étape 9": "Si aucune amélioration requise : « Ce contenu respecte déjà ou dépasse les normes de lisibilité de 8e année. »"
            }
        }`
    }
};  

window.categories.addTask('access', 'readability', task1);





/***********************************************/
/* Accessibility – Dense Paragraphs Optimizer */
/*********************************************/

const task2 = {
    name: {
        EN: "All publications – Dense Paragraph Optimizer    |  v5",
        FR: "Toutes les publications – Optimiseur de paragraphes denses   | v5"
    },
    
    description: {
        EN: "This prompt instructs the chatbot to analyze the content of a specified webpage, form, guide or text snippet and identifies dense paragraphs. It proposes re-written versions using bullets, numbered steps, sub-headings or tables.", 
        FR: "Cette invite demande au chatbot d’analyser le contenu d’une page Web, d’un formulaire, d’un guide ou d’un extrait de texte spécifié et d’identifier les paragraphes denses. Elle propose des versions réécrites en utilisant des puces, des étapes numérotées, des sous-titres ou des tableaux."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> You can also copy segments of text along with this prompt directly to the chatbot instead of providing a webpage URL. Simply leave the webpage address field empty and paste your text in the prompt or attach a form or a guide. For Preview URLs, only use the copilot chatbot embedded into the Edge browser.",
        FR: "<strong>Notez :</strong> Vous pouvez également copier des segments de texte avec cette commande d’IA directement dans le robot conversationnel au lieu de fournir l’URL d’une page Web. Il suffit de laisser le champ de l’adresse Web vide et de coller votre texte dans la commande d’IA ou attachez votre formulaire ou votre guide. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
    },
    
    settings: [
        {id: "webpageAddress", 
		label: {
			EN: "Webpage URL:", 
			FR: "URL de la page Web :"}, 
			type: "textinput"}
    ],
    
    prompts: {
        EN: `{
            "prompt": "Transform every dense paragraph or wall of text in the provided content into highly readable bullets, numbered steps, tables, or short paragraphs. Deliver precise, actionable rewrites that strictly follow Canada.ca style.",
            "role": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in plain language and readability.",
            "inputs": {
                              "webpage Address": <webpageAddress>
                
            },
            
            "instructions": {
              "step 1" : "Determine which input_type is provided. Accept only ONE source. If none or more than one are filled, reply: 'Please choose exactly one input_type (Webpage address url | text | form | guide) and provide the corresponding content.' and stop.",
              "Step 2A (webpage address url)" : "Fetch the current live URL content. If the URL isn't live, maybe the author is using a Preview or Launch URL for pages in development. If so, verify the captured webpage content of the active tab via the browser embedded copilot. Do not fetch a live equivalent. Only if both URLs are inaccessible, reply: 'Error: Page not accessible. Please provide a valid URL.' and stop.",
              "Step 2B (text)" : "Use the pasted text directly.",
              "Step 2C (form) or 2D (guide)" : "Extract all readable text from the attached file.",
              "Step 3" :  "From the chosen source, extract only the main instructional/taxpayer-facing content (ignore navigation, footers, sidebars, metadata unless they contain dense instructions).",
              "Step 4" :  "If total extracted text is under 250 words, treat it as a dense snippet and scrutinize every sentence. Otherwise scan the full content.",
              "Step 5" : "Identify every paragraph longer than 4 lines or any block that buries multiple rules, conditions, examples, or actions in prose.",
              "Step 6" : "For each dense block:",
              "   • Quote the original exactly",
              "   • Immediately provide the rewritten version using bullets, numbered steps, tables, or short paragraphs (whichever gives maximum clarity)",
              "   • Use active voice, short sentences, one idea per bullet, parallel structure, inclusive language",
              "Step 7: Prioritize high-impact topics: foreign income, joint accounts, term deposits/GICs, treasury bills, life insurance, Canada savings bonds, eligibility rules, calculations.",
              "Step 8: End with a one-paragraph summary: number of dense blocks found + estimated readability improvement (low/medium/high)."
            },
            "output_format": "Clean Markdown with numbered recommendations.\\nExample:\\n1. **Section/Location:** Eligibility rules\\n**Original:** \\\"If you are…\\\"\\n**Improved:**\\n• You qualify if you meet all of these conditions\\n• You are a resident of Canada…\\n• …"
        }`,

        FR: `{
            "prompt": "Transformer tous les paragraphes denses ou « pavés de texte » du contenu fourni en listes à puces, étapes numérotées, tableaux ou paragraphes courts afin d’améliorer considérablement la lisibilité et le balayage. Fournir des réécritures précises et directement utilisables qui respectent strictement le style Canada.ca.",
            "role": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert sur le language clair et simple et la lisibilité.",
            "inputs": {
                             "webpage Address": <webpageAddress>
                
            },
            "instructions": {
              "étape 1": "Déterminer quel input_type est fourni. N’accepter qu’UNE seule source. Si aucun ou plusieurs sont remplis, répondre : « Veuillez choisir exactement un seul type d’entrée (url | texte | formulaire | guide) et fournir le contenu correspondant. » et arrêter.",
              "Étape 2A (webpage address url) : Récupérer le contenu de la page web en direct. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur. Ne pas récupérer une URL équivalente en direct. Seulement si les deux URLs sont inaccessible, répondre : « Erreur : page non accessible. Veuillez fournir une URL valide » et arrêter.", 
              "Étape 2B (texte) : Utiliser directement le texte collé.",
              "Étape 2C (formulaire) ou 2D (guide) : Extraire tout le texte lisible du fichier joint.",
              "Étape 3 : Ne conserver que le contenu principal destiné aux contribuables (privilégier le repère <main> ; ignorer navigation, en-tête, pied de page, barres latérales et métadonnées sauf si elles contiennent des instructions denses).",
              "Étape 4 : Si le texte total extrait fait moins de 250 mots, le traiter comme un extrait dense et l’analyser phrase par phrase. Sinon, balayer l’ensemble du contenu.",
              "Étape 5 : Repérer chaque paragraphe de plus de 4 lignes ou tout bloc qui enfouit plusieurs règles, conditions, exemples ou actions dans un texte suivi.",
              "Étape 6 : Pour chaque bloc dense trouvé :",
              "   • Citer le texte original exactement",
              "   • Proposer immédiatement la version réécrite en puces, étapes numérotées, tableaux ou paragraphes courts (choisir le format qui maximise la clarté)",
              "   • Utiliser la voix active, phrases courtes, une idée par puce, structure parallèle et langage inclusif",
              "Étape 7 : Prioriser les sujets à fort impact : revenus étrangers, comptes conjoints, dépôts à terme/CERT, bons du Trésor, polices d’assurance-vie, obligations d’épargne du Canada, critères d’admissibilité, calculs.",
              "Étape 8 : Terminer par un court résumé d’un paragraphe : nombre de blocs denses repérés + amélioration potentielle de la lisibilité (faible / moyenne / élevée)."
            },
            "output_format": "Markdown propre avec recommandations numérotées.\\nExemple :\\n1. **Section/Emplacement :** Revenus étrangers\\n**Original :** « Si vous avez reçu des intérêts étrangers… »\\n**Version améliorée :**\\n• Déclarez tous les intérêts et dividendes étrangers en dollars canadiens\\n• Convertissez au taux de la Banque du Canada à la date de réception\\n• …"
        }`
    } 
};

window.categories.addTask('access', 'AccessDenseParagraphs', task2);







/*******************************************/
/* Accessibility – Instructions Optimizer */
/*****************************************/

const task3 = {
    name: {
        EN: "All publications – Instructions Optimizer    |  v5",
        FR: "Toutes les publications – Optimiseur d'instructions   | v5"
    },
    
    description: {
        EN: "This prompt instructs the chatbot to analyze the instructions of a specified webpage's URL, or attached form, guide or provided text snippet and provides re-written optimized instructions.", 
        FR: "Cette commande demande au chatbot d’analyser les instructions d’un URL fournit (Web), d’un formulaire, d’un guide en piece jointe ou d’un extrait de texte spécifié. La commandes fournit des instructions optimisés re-écrites."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> You can also copy segments of text along with this prompt directly to the chatbot instead of providing a webpage URL. Paste your text in the prompt or attach a form or a guide. For longer products, you should limit the response to a few pages at a time. For Preview URLs, only use the copilot chatbot embedded into the Edge browser.",
        FR: "<strong>Notez :</strong> Vous pouvez également copier des segments de texte avec cette commande d’IA directement dans le robot conversationnel au lieu de fournir l’URL d’une page Web. Coller votre texte dans la commande d’IA ou attachez votre formulaire ou votre guide. Pour les produits plus long, vous devriez limiter la réponse a quelque pages seulement. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
    },
    
    settings: [
        {id: "webpageaddress", 
		label: {
			EN: "Webpage URL:", 
			FR: "URL de la page Web :"}, 
			type: "textinput"}
    ],
    
    prompts: {
        EN: `{
            "prompt": "Analyze the provided content — whether from a webpage, pasted text snippet, or attached form/guide — and rewrite all user-facing instructions, procedures, or guidance to be as clear, concise, and easy to follow as possible. Use plain language, active voice, descriptive headings, short sentences, numbered steps or bullets when helpful, and preserve every critical detail and official requirement.",
            "role": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in plain language and readability.",
            "inputs": {
                
                "webpage Address": <webpageaddress>
               
            },
            "instructions": {
                "step 1": "Determine which input_type is provided. Accept only ONE source. If none or more than one are filled, reply: 'Please choose exactly one input_type (webpage Address url | text | form | guide) and provide the corresponding content.' and stop.",
                "Step 2A (webpage address url)" : "Fetch the current live URL content. If the URL isn't live, maybe the author is using a Preview or a Launch URL for pages in development. If so, verify the captured webpage content of the active tab via the browser embedded copilot. Do not fetch a live equivalent. Only if both URLs are inaccessible, reply: 'Error: Page not accessible. Please provide a valid URL.' and stop.",
                "step 2B": "If text → Use the pasted text directly.",
                "step 2C": "If form or guide → Extract all readable text from the attached file.",
                "step 3": "Extract only the main taxpayer-facing instructional content. Ignore navigation, headers, footers, sidebars, metadata, and legal disclaimers unless they contain core instructions.",
				"step 4": "If total extracted text exceeds 2,500 words OR if the source is a form or guide, review only 1 to 3 sections at a time. Do not process the entire document in one pass.",
                "step 5": "Identify the main goal and every required action, condition, exception, deadline, or consequence.",
                "step 6": "Spot clarity issues: jargon, long sentences, passive voice, buried steps, ambiguous wording, or poor logical flow.",
                "step 7": "Rewrite using plain language, active voice, short sentences, and descriptive headings. Convert paragraphs into numbered steps or bullets whenever it improves understanding.",
                "step 8": "For forms only: Do NOT recommend nested lists (lists within lists). Use flat structures for clarity.",
				"step 9": "Preserve 100% of the original meaning and all official requirements — never add, remove, or rephrase legal obligations.",
                "step 10": "If language = French, output the improved version in flawless Canadian French.",
                "step 11": "Output ONLY the improved version under the heading 'Improved Instructions:' (or 'Directives améliorées :' in French), followed by the rewritten text. No extra commentary."
            }
        }`,

        FR: `{
            "prompt": "Analyser le contenu fourni — qu’il provienne d’une page Web, d’un extrait de texte collé ou d’un formulaire ou guide joint — et réécrire toutes les instructions, procédures ou consignes destinées aux contribuables pour qu’elles soient aussi claires, concises et faciles à suivre que possible. Utiliser le langage clair, la voix active, des sous-titres descriptifs, des phrases courtes, des étapes numérotées ou des puces lorsque cela aide, tout en conservant absolument chaque détail et exigence officielle.",
            "role": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert sur le language clair et simple et la lisibilité.",
            "inputs": {
               
                "webpage Address": <webpageaddress>
                
                
            },
            "instructions": {
                "étape 1": "Déterminer quel input_type est fourni. N’accepter qu’UNE seule source. Si aucun ou plusieurs sont remplis, répondre : « Veuillez choisir exactement un seul type d’entrée (webpage Address url | texte | formulaire | guide) et fournir le contenu correspondant. » et arrêter.",
                "étape 2A (webpage address url) : Récupérer le contenu de la page web en direct. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur. Ne pas récupérer une URL équivalente en direct. Seulement si les deux URLs sont inaccessible, répondre : « Erreur : page non accessible. Veuillez fournir une URL valide » et arrêter.", 
                "étape 2B": "Si texte → Utiliser directement le texte collé.",
                "étape 2C": "Si formulaire ou guide → Extraire tout le texte lisible du fichier joint.",
                "étape 3": "Ne conserver que le contenu principal d’instructions destiné aux contribuables. Ignorer navigation, en-tête, pied de page, barres latérales, métadonnées et avis juridiques sauf s’ils contiennent des directives essentielles.",
                "étape 4": "Si le texte dépasse 2 500 mots OU si la source est un formulaire ou un guide, ne traiter que 1 à 3 sections à la fois. Ne pas traiter le document complet en une seule fois.",
				"étape 5": "Identifier l’objectif principal ainsi que chaque action requise, condition, exception, délai ou conséquence.",
                "étape 6": "Repérer les problèmes de clarté : jargon, phrases trop longues, voix passive, étapes enfouies, formulations ambiguës ou enchaînements confus.",
                "étape 7": "Réécrire en langage clair, voix active, phrases courtes et sous-titres descriptifs. Transformer les paragraphes en étapes numérotées ou en puces dès que cela améliore la compréhension.",
                "étape 8": "Pour les formulaires uniquement : NE PAS recommander de listes imbriquées (listes dans des listes). Utiliser des structures simples pour la clarté.",
				"étape 9": "Conserver 100 % du sens original et toutes les exigences officielles — ne jamais ajouter, supprimer ou reformuler une obligation légale.",
                "étape 10": "Si langue = Français, produire la version améliorée en français canadien impeccable.",
                "étape 11": "Ne produire QUE la version améliorée précédée du titre « Directives améliorées : » (ou « Improved Instructions: » en anglais), suivi du texte réécrit. Aucun commentaire supplémentaire."
            }
        }`
    } 
};   

window.categories.addTask('access', 'AccessInstructionsOptimizer', task3);





/***************************************************/
/* Accessibility – Descriptive Headings Optimizer */
/*************************************************/

const task4 = {
  name: {
    EN: "All publications – Descriptive Headings Optimizer | v5",
    FR: "Toutes les publications – Optimiseur de titres descriptifs | v5"
  },

  description: {
    EN: "Extracts all H1–H4 headings from a webpage, text, form, or guide and evaluates whether they accurately describe each section. Only flags headings that are generic, not descriptive, or misaligned — then proposes concise improvements while preserving exact hierarchy and order. Outputs a comparison table.",
    FR: "Extrait tous les titres H1 à H4 d’une page Web, d’un texte, d’un formulaire ou d’un guide et évalue s’ils décrivent fidèlement chaque section. Ne signale que les titres génériques, peu descriptifs ou mal alignés — puis propose des améliorations concises en conservant la hiérarchie et l’ordre. Produit un tableau comparatif."
  },

  instructions: {
    EN: "<strong>Note:</strong> Paste a URL, text snippet, or attach a form/guide. Multiple URLs can be separated by commas. For Preview URLs, only use the copilot chatbot embedded into the Edge browser.",
    FR: "<strong>Notez :</strong> Collez une URL, un extrait de texte ou joignez un formulaire/guide. Séparez plusieurs URL par une virgule. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
  },

  settings: [
    {
      id: "webpageAddress",
      label: { EN: "Webpage URL:", FR: "URL de la page Web :" },
      type: "textinput"
    }
  ],

  prompts: {
    EN: `{
  "prompt": "You are a precision heading extractor and optimizer. From provided content (URL, text, or file), extract H1–H4 from main content only. Assess if each heading reflects its section; flag only generic or misaligned ones. Rewrite flagged headings only, using plain language and hierarchy. Use verb-led headings only when guiding user actions; never include brackets.",
  "role": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in plain language and readability.",
  "inputs": {
    "webpage Address": <webpageAddress>
  },
  "instructions": {
    "step 1": "Detect input type: URL if starts with 'http'; text if >50 chars; file if attached; else use explicit input_type.",
	"step 2": "(webpage address url)" : "Fetch the current live URL content. If the URL isn't live, maybe the author is using Preview or a Launch URL for pages in development. If so, verify the captured webpage content of the active tab via the browser embedded copilot. Do not fetch a live equivalent. Only if both URLs are inaccessible, reply: 'Error: Page not accessible. Please provide a valid URL.' and stop.",
    "step 3": "Process: fetch page(s), use text, or extract file content.",
    "step 4": "Extract H1–H4 from <main>; ignore nav/footer/sidebar.",
    "step 5": "For each heading, summarize section (1–2 sentences).",
    "step 6": "Flag: ✅ descriptive; ⚠️ generic; ❌ misaligned. Give rationale for ⚠️/❌.",
    "step 7": "Optimize flagged headings only: ≤70 chars; front-load keywords; plain language; noun phrases for info; verbs only for tasks; preserve hierarchy; no brackets—replace with commas or em dash.",
    "step 8": "Suggest 3–5 H1/page titles; same rules; no brackets.",
    "step 9": "Output strict Markdown table: Level | Original | Summary | Flag | Rationale | Optimized | Char count. Then append heading count and suggested titles."
  },
  "output_format": "Strict — no intro:\n1) Comparison table\n2) Headings count\n3) Suggested page titles"
}`,

    FR: `{
  "prompt": "Vous êtes un extracteur et optimiseur précis de titres. À partir du contenu fourni (URL, texte ou fichier), extrayez les H1–H4 du contenu principal. Évaluez si chaque titre reflète sa section; signalez uniquement les titres génériques ou mal alignés. Réécrivez uniquement les titres signalés en langage clair, en conservant la hiérarchie. Utilisez des verbes seulement pour guider l’action; n’incluez jamais de parenthèses.",
  "role": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert sur le language clair et simple et la lisibilité.",
  "inputs": {
    "webpage Address": <webpageAddress>
  },
  "instructions": {
    "étape 1": "Détecter le type d’entrée : URL si commence par 'http'; texte si >50 caractères; fichier si joint; sinon utiliser input_type explicite.",
	"étape 2": (webpage address url) : Récupérer le contenu de la page web en direct. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur. Ne pas récupérer une URL équivalente en direct. Seulement si les deux URLs sont inaccessible, répondre : « Erreur : page non accessible. Veuillez fournir une URL valide » et arrêter.", 
    "étape 3": "Traiter : récupérer page(s), utiliser texte ou extraire fichier.",
    "étape 4": "Extraire H1–H4 du <main>; ignorer navigation/pied/barre latérale.",
    "étape 5": "Pour chaque titre, résumer la section (1–2 phrases).",
    "étape 6": "Signalement : ✅ descriptif; ⚠️ générique; ❌ mal aligné. Justifier ⚠️/❌.",
    "étape 7": "Optimiser uniquement les titres signalés : ≤70 caractères; mots-clés en tête; langage clair; syntagmes nominaux pour info; verbes seulement pour tâches; conserver hiérarchie; sans parenthèses—remplacer par virgules ou tiret.",
    "étape 8": "Proposer 3–5 titres H1; mêmes règles; sans parenthèses.",
    "étape 9": "Sortie : tableau Markdown strict : Niveau | Original | Résumé | Signalement | Justification | Optimisé | Nb caractères. Puis décompte et suggestions."
  },
  "output_format": "Format strict — aucun texte d’introduction :\n1) Tableau comparatif\n2) Décompte des titres\n3) Suggestions de titre principal"
}
`
  }
};

window.categories.addTask('access', 'DescriptiveHeadingsOptimizer', task4);





/*****************************************************/
/* Accessibility – Acronyms/abbreviations Optimizer */
/***************************************************/

const task5 = {
    name: {
        EN: "All publications – Acronyms-Abbreviations Optimizer    |  v5",
        FR: "Toutes les publications – Optimiseur d'acronymes et d'abréviations   | v5"
    },
    
    description: {
        EN: "This prompt instructs the chatbot to analyze the content of a webpage, form, guide or text snippet and identify every acronym and abbreviation. For each one, it returns the exact short form, its most likely full expansion, the first sentence where it appears, and whether a hover-over definition is needed for accessibility.", 
        FR: "Cette invite demande au chatbot d’analyser le contenu d’une page Web, d’un formulaire, d’un guide ou d’un extrait de texte et de repérer tous les acronymes et abréviations. Pour chacun, elle indique la forme courte exacte, son développement le plus probable, la première phrase où il apparaît et si une info-bulle au survol est nécessaire pour l’accessibilité."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> You can also copy segments of text along with this prompt directly to the chatbot instead of providing a webpage URL. Simply leave the webpage address field empty and paste your text in the prompt or attach a form or a guide. For Preview URLs, only use the copilot chatbot embedded into the Edge browser.",
        FR: "<strong>Notez :</strong> Vous pouvez également copier des segments de texte avec cette commande d’IA directement dans le robot conversationnel au lieu de fournir l’URL d’une page Web. Il suffit de laisser le champ de l’adresse Web vide et de coller votre texte dans la commande d’IA ou attachez votre formulaire ou votre guide. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
    },
    
    settings: [
        {id: "webpage_url", label: {EN: "Webpage URL:", FR: "URL de la page Web:"}, type: "textinput"}
    ],
    
    prompts: {
        EN: `{
            "prompt": "Analyze the provided webpage content, including all visible text, forms, guides, and/or a supplied URL. Identify every acronym and abbreviation (any shortened form of a phrase, including all caps like “API” and capitalized forms like “Govt.”). For each, return: (a) The exact short form as it appears; (b) The most likely expanded full form based on context; (c) The first sentence in which it appears; (d) Whether a hover-over definition is needed for accessibility and clarity. Return all results as a clean, deduplicated list or table.",
            "role": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in plain language and readability.",
            "inputs": {
               "input_type": "If there is no URL provided; determine which input is provided before iniatiting the review: text | form | guide",
                "url": <webpage_url>,
                "language": "English or French (default: English)"
            },
            
            "instructions": [
              "step 1": "Determine which input_type is provided. Accept only ONE source. If none or more than one are filled, reply: 'Please choose exactly one input_type (url | text | form | guide) and provide the corresponding content.' and stop.",
              "Step 2A (webpage address url)" : "Fetch the current live URL content. If the URL isn't live, maybe the author is using Preview or a Launch URL for pages in development. If so, verify the captured webpage content of the active tab via the browser embedded copilot. Do not fetch a live equivalent. Only if both URLs are inaccessible, reply: 'Error: Page not accessible. Please provide a valid URL.' and stop.",
              "Step 2B (text): Use the pasted text directly.",
              "Step 2C (form) or 2D (guide): Extract all readable text from the attached file.",
              "Step 3: Systematically scan all text, forms, and guide content for acronyms/abbreviations—consider all-caps, camel case, and shortened capitalized forms.",
              "Step 4: For each unique acronym or abbreviation detected: (a) record how it appears, (b) infer likely expansion using context, (c) extract its first mention sentence, (d) judge if a hover-over definition would improve clarity/accessibility (output 'Yes' or 'No').",
              "Step 5: Assemble a deduplicated, structured list or table, with columns: [Short Form | Expansion | First Sentence | Needs Hover-over]. Ensure output is clean, concise, and suitable for accessibility reviews.",
              "Step 6: Produce the final result in the requested language. If an URL was tested, indicate so in the output for auditability.",
              
            ],
            
        }`,

        FR: `{
            "prompt": "Analysez le contenu de la page Web fourni, y compris tout le texte visible, les formulaires, les guides ou l’URL fournie. Repérez tous les acronymes et abréviations (toute forme raccourcie d’une expression, y compris les majuscules comme « API » et les formes avec majuscule comme « Gouv. »). Pour chacun, indiquez : (a) la forme courte exacte telle qu’elle apparaît; (b) le développement le plus probable selon le contexte; (c) la première phrase où il apparaît; (d) s’il faut ajouter une info-bulle au survol pour l’accessibilité et la clarté. Présentez tous les résultats dans une liste ou un tableau propre, sans doublons.",
            "role": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert sur le language clair et simple et la lisibilité.",
            "inputs": {
             "input_type": "Si il n'y as pas de URL fournit, determinez quel type de format est fournit avant de commencer l'analyse : texte | formulaire | guide",
                "url": "<webpage_url>",
                
                "langue": "Français ou Anglais (défaut : Français)"
            },
            "instructions": [
              "étape 1": "Déterminer quel input_type est fourni. N’accepter qu’UNE seule source. Si aucun ou plusieurs sont remplis, répondre : « Veuillez choisir exactement un seul type d’entrée (url | texte | formulaire | guide) et fournir le contenu correspondant. » et arrêter.",
              "Étape 2A (webpage address url) : Récupérer le contenu de la page web en direct. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de Prévisualisation ou de Lancement pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur. Ne pas récupérer une URL équivalente en direct. Seulement si les deux URLs sont inaccessible, répondre : « Erreur : page non accessible. Veuillez fournir une URL valide » et arrêter.", 
              "Étape 2B (texte) : Utiliser directement le texte collé.",
              "Étape 2C (formulaire) ou 2D (guide) : Extraire tout le texte lisible du fichier joint.",
              "Étape 3 : Parcourir systématiquement tout le texte, les formulaires et les guides pour repérer les acronymes et abréviations (majuscules complètes, formes camelCase, abréviations avec majuscule).",
              "Étape 4 : Pour chaque acronyme ou abréviation unique détectée : (a) noter la forme exacte, (b) déduire le développement le plus probable selon le contexte, (c) extraire la première phrase où il apparaît, (d) juger s’une info-bulle au survol améliorerait la clarté et l’accessibilité (répondre « Oui » ou « Non »).",
              "Étape 5 : Présenter les résultats dans une liste ou un tableau structuré et sans doublons, avec les colonnes : [Forme courte | Développement | Première phrase d’apparition | Info-bulle nécessaire]. Le rendu doit être clair, concis et prêt pour une revue d’accessibilité.",
              "Étape 6 : Produire la réponse finale dans la langue demandée. Si une URL a été analysée, le préciser dans le résultat pour des fins de traçabilité.",
              
            ],
           
        }`
    } 
};

window.categories.addTask('access', 'AccessAcronymsAbbreviationOptimizer', task5);






/**************************************************************/
/* Accessibility – Contrast and non-text alternatives review */
/************************************************************/

const task6 = {
    name: {
        EN: "Web - Contrast and non-text alternatives review | v4",
        FR: "Web – Vérification du Contraste et des alternatives non textuelles | v4"
    },

    description: {
        EN: "This prompt instructs the chatbot to audit a webpage for accessibility issues related to non-text alternatives (such as missing alt text, captions, and long descriptions) and color contrast problems. Findings are organized into clear sections, explaining why each issue matters and providing actionable recommendations.",
        FR: "Cette commande demande au chatbot de réviser une page Web pour identifier les problèmes d’accessibilité liés aux alternatives non textuelles (comme l’absence de texte alternatif, les légendes et les descriptions longues) ainsi que les problèmes de contraste des couleurs. Les résultats sont organisés en sections distinctes, en expliquant pourquoi chaque problème est important et en fournissant des recommandations concrètes."
    },

    instructions: {
        EN: "<strong>Note:</strong> Add the URL in the field below. For Preview URLs, only use the copilot chatbot embedded into the Edge browser.",
        FR: "<strong>Notez :</strong> Ajouter l'URL dans le champs ci-dessous. Pour les URL de prévisualisation, utiliser uniquement le chatbot Copilot intégré au navigateur Edge."
    },

    settings: [
        { id: "header1", text: { EN: "Check for:", FR: "Vérifiez pour :" }, type: "header" },
        { id: "webpageURL", label: { EN: "Webpage URL:", FR: "URL de la page Web:" }, type: "textinput" }
    ],

    prompts: {
        EN: `{
			
			
  "role": "You are a Senior Content Developer at the Canada Revenue Agency with extensive experience creating accessible forms, guides, and webpages in plain language. You are an expert in the Web Content Accessibility Guidelines (WCAG).",
  "inputs": {
    "language": "<language>",
    "url": "<webpageURL>",
    "wcag_version": "2.2",
    "audit_date": "<ISO timestamp>"
  },	
				
			
  "instructions": {
	"step 1": "(webpage address url)" : "Fetch the current live URL content. If the URL isn't live, maybe the author is using preview URL for pages in development. If so, verify the captured webpage content of the active tab via the browser embedded copilot. Do not fetch a live equivalent. Only if both URLs are inaccessible, reply: 'Error: Page not accessible. Please provide a valid URL.' and stop.",  
    "step 2": "Audit the webpage for accessibility issues related to non-text alternatives (alt text, captions, long descriptions) and color contrast problems.",
    "step 3": "Present findings in plain language and narrative format, organized into clear sections: Page Information, Summary, Detailed Findings, Contrast Issues, Images of Text, and Remediation Plan.",
    "step 4": "Explain why each issue matters for accessibility and provide specific, actionable recommendations.",
    "step 5": "Avoid technical jargon; use short paragraphs and bullet points for clarity.",
	"Step 6": "If the page has mostly no issues, do not provide a remediation plan."
  },
 
  "output_format": {
    "sections": [
      "Page Information",
      "Summary",
      "Detailed Findings",
      "Contrast Issues",
      "Images of Text",
      "Remediation Plan"
    ],
	
    "style": "Narrative, plain language, bullet points for clarity"
  }
}`,


        FR: `{
			
  "rôle": "Vous êtes développeur principal de contenu à l’Agence du revenu du Canada, avec une vaste expérience dans la création de formulaires, guides et pages Web en langage clair. Vous êtes un expert sur les Règles pour l'accessibilité des contenus Web.",
  "entrées": {
    "langue": "<langue>",
    "url": "<webpageURL>",
    "version_wcag": "2.2",
    "date_audit": "<horodatage ISO>"
  },
					
			
  "instructions": {
	"étape 1": (webpage address url) : Récupérer le contenu de la page web en direct. Si l’URL n’est pas accessible en direct, il est possible que l’auteur utilise une URL de prévisualisation pour des pages en cours de développement. Dans ce cas, vérifier plutôt le contenu capturée de l'onglet actif à l’aide du copilote intégré au navigateur. Ne pas récupérer une URL équivalente en direct. Seulement si les deux URLs sont inaccessible, répondre : « Erreur : page non accessible. Veuillez fournir une URL valide » et arrêter.",   
    "étape 2": "Auditer la page Web pour identifier les problèmes d’accessibilité liés aux alternatives non textuelles (texte alternatif, légendes, descriptions longues) ainsi que les problèmes de contraste des couleurs.",
    "étape 3": "Présenter les résultats en langage clair et sous forme narrative, organisés en sections distinctes : Informations sur la page, Résumé, Constatations détaillées, Problèmes de contraste, Images contenant du texte et Plan de remédiation.",
    "étape 4": "Expliquer pourquoi chaque problème est important pour l’accessibilité et fournir des recommandations précises et actionnables.",
    "étape 5": "Éviter le jargon technique ; utiliser des paragraphes courts et des puces pour plus de clarté.",
	"étape 6": "Si le contenue est pratiquement sans erreur, ne pas fournir de plan de remédiation."
  },

  "format_sortie": {
    "sections": [
      "Informations sur la page",
      "Résumé",
      "Constatations détaillées",
      "Problèmes de contraste",
      "Images contenant du texte",
      "Plan de remédiation"
    ],
    "style": "Narratif, langage clair, puces pour la lisibilité"
  }
}`
    }
};

window.categories.addTask('access', 'accessContrast_alt-textReviewer', task6);



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



/************************************************************/
/* Accessibility – Disability Persona Usability Review      */
/************************************************************/

const task7 = {
    name: {
        EN: "All publications – Disability Persona Usability Review   |  v2",
        FR: "Toutes les publications – Révision d'utilisabilité avec personas d'handicap   |  v2"
    },

    description: {
        EN: "This prompt instructs the chatbot to evaluate a publication's assets — text, images, link text, tables, structure, and navigation — against WCAG 2.2 and Government of Canada inclusive design requirements. The chatbot adopts the perspective of users with blindness or low vision, deafness or hearing loss, limited mobility, speech disabilities, photosensitivity, cognitive or learning limitations, and combinations of these. Findings are reported in a structured Markdown table with barrier descriptions, WCAG criteria, disability group impact, and prioritized recommendations.",
        FR: "Cette commande demande au chatbot d'évaluer les éléments d'une publication — texte, images, texte de lien, tableaux, structure et navigation — selon les WCAG 2.2 et les exigences d'accessibilité du gouvernement du Canada. Le chatbot adopte le point de vue d'utilisateurs ayant une cécité ou une basse vision, une surdité ou une perte auditive, une mobilité réduite, un handicap de la parole, une photosensibilité, des limitations cognitives ou d'apprentissage, ou une combinaison de ces conditions. Les résultats sont présentés dans un tableau Markdown structuré avec des descriptions des obstacles, les critères WCAG, l'impact par groupe et des recommandations priorisées."
    },

    instructions: {
        EN: "<strong>Note:</strong> Provide a webpage URL, paste a text excerpt, or attach a form or guide. For longer publications, review a few pages or sections at a time. For Preview URLs, only use the Copilot chatbot embedded in the Edge browser.",
        FR: "<strong>Notez :</strong> Fournissez une URL de page Web, collez un extrait de texte ou joignez un formulaire ou un guide. Pour les publications plus longues, analysez quelques pages ou sections à la fois. Pour les URL de prévisualisation, utilisez uniquement le chatbot Copilot intégré au navigateur Edge."
    },

    settings: [
        { id: "webpage_url", label: { EN: "Webpage URL:", FR: "URL de la page Web :" }, type: "textinput" }
    ],

    prompts: {
        EN: `{
  "prompt": "Evaluate the accessibility and usability of the provided publication — including its text, images, link text, tables, structure, and navigation — from the perspective of users with a range of disabilities. Identify specific barriers, explain their impact on each affected disability group, cite the applicable WCAG 2.2 success criterion, and provide prioritized, actionable recommendations. Present all findings in a structured Markdown table.",

  "role": "You are a Senior Content Developer at the Canada Revenue Agency. You are an expert in publication accessibility who evaluates content using WCAG 2.2, Government of Canada requirements, and established inclusive design principles. You assess whether text, images, link text, tables, structure, and navigation are usable by people with blindness or low vision, deafness or hearing loss, limited mobility, speech disabilities, photosensitivity, cognitive limitations, and combinations of these. You identify specific barriers, explain their impact on users with disabilities, and recommend improvements using only the information provided.",

  "inputs": {
    "input_type": "If no URL is provided, determine which input is provided before starting the review: text | form | guide",
    "url": "<webpage_url>",
    "language": "<language>"
  },

  "instructions": {
    "step 1": "Determine the input type. Accept only ONE source (url | text | form | guide). If none or more than one are provided, reply: 'Please provide exactly one input (URL, text, form, or guide).' and stop.",
    "step 2 (url)": "Fetch the live page content. If the URL is not live, it may be a Preview or Launch URL for a page in development — in that case, read the active browser tab content via the embedded Copilot. Do not substitute a live equivalent. If both are inaccessible, reply: 'Error: Page not accessible. Please provide a valid URL.' and stop.",
    "step 2 (text)": "Use the pasted text directly.",
    "step 2 (form or guide)": "Extract all readable text, labels, headings, and alt text from the attached file.",
    "step 3": "Scope the review to main content only (use the <main> landmark). Exclude global navigation, footers, and site-wide headers unless they contain publication-specific instructional content.",
    "step 4": "Systematically evaluate each of the following asset types against WCAG 2.2 and Government of Canada inclusive design guidance: (a) Body text — plain language, reading level, sentence length, jargon; (b) Images — presence and quality of alt text, decorative vs. informative classification, complex image long descriptions; (c) Link text — descriptive vs. generic ('click here', 'read more'), context independence, purpose clarity; (d) Tables — use of headers (scope, id/headers), captions, summary descriptions, avoidance of layout tables; (e) Structure and headings — logical hierarchy (H1–H4), use of landmarks, skip navigation; (f) Colour and contrast — contrast ratios, reliance on colour alone to convey meaning; (g) Multimedia — captions, transcripts, audio descriptions for video content; (h) Forms and interactive elements — visible labels, error messages, keyboard operability, timeout warnings.",
    "step 5": "For each identified barrier, record: the asset type, a plain-language description of the barrier, the disability groups affected, the applicable WCAG 2.2 success criterion (number and name), the conformance level (A, AA, or AAA), and a specific, actionable recommendation. Assign a priority: High (blocks task completion), Medium (creates significant difficulty), or Low (minor inconvenience).",
    "step 6": "Cover all six disability groups in scope: blindness and low vision; deafness and hearing loss; limited mobility and motor disabilities; speech disabilities; photosensitivity; cognitive and learning disabilities. Where a barrier affects multiple groups, list all affected groups.",
    "step 7": "If no barriers are found for a given asset type, explicitly state 'No issues found' for that category.",
    "step 8": "Output a structured Markdown report using the format specified in output_format. Do not add commentary outside the defined sections.",
    "step 9": "Close with a one-paragraph overall assessment: count of High/Medium/Low issues, the most critical barrier, and whether the publication meets WCAG 2.2 Level AA overall."
  },

  "output_format": {
    "section 1 — Publication Summary": "| Field | Details |\\n|---|---|\\n| Source | [URL or input type] |\\n| Review date | [today's date] |\\n| WCAG version | 2.2 |\\n| Conformance target | Level AA |\\n| Scope | Main content only |",
    "section 2 — Findings Table": "| # | Asset Type | Barrier Description | Disability Groups Affected | WCAG 2.2 Criterion | Level | Priority | Recommendation |\\n|---|---|---|---|---|---|---|---|",
    "section 3 — Asset Coverage Summary": "| Asset Type | Issues Found | Status |\\n|---|---|---|\\n| Body text | [n] | [Pass / Needs work] |\\n| Images | [n] | [Pass / Needs work] |\\n| Link text | [n] | [Pass / Needs work] |\\n| Tables | [n] | [Pass / Needs work] |\\n| Structure and headings | [n] | [Pass / Needs work] |\\n| Colour and contrast | [n] | [Pass / Needs work] |\\n| Multimedia | [n] | [Pass / Needs work] |\\n| Forms and interactive elements | [n] | [Pass / Needs work] |",
    "section 4 — Overall Assessment": "[One paragraph: High/Medium/Low counts, most critical barrier, WCAG 2.2 AA conformance verdict]"
  }
}`,

        FR: `{
  "prompt": "Évaluer l'accessibilité et l'utilisabilité de la publication fournie — incluant le texte, les images, le texte des liens, les tableaux, la structure et la navigation — du point de vue d'utilisateurs ayant divers handicaps. Identifier les obstacles précis, expliquer leur impact sur chaque groupe touché, citer le critère de succès WCAG 2.2 applicable et formuler des recommandations concrètes et priorisées. Présenter toutes les constatations dans un tableau Markdown structuré.",

  "rôle": "Vous êtes développeur principal de contenu à l'Agence du revenu du Canada. Vous êtes un expert en accessibilité des publications qui évalue le contenu selon les WCAG 2.2, les exigences du gouvernement du Canada et les principes de conception inclusive établis. Vous évaluez si le texte, les images, le texte des liens, les tableaux, la structure et la navigation sont utilisables par les personnes ayant une cécité ou une basse vision, une surdité ou une perte auditive, une mobilité réduite, un handicap de la parole, une photosensibilité, des limitations cognitives ou d'apprentissage, ou une combinaison de ces conditions. Vous identifiez les obstacles précis, expliquez leur impact sur les utilisateurs handicapés et recommandez des améliorations en vous basant uniquement sur les informations fournies.",

  "entrées": {
    "input_type": "Si aucune URL n'est fournie, déterminez quel type d'entrée est fourni avant de commencer l'analyse : texte | formulaire | guide",
    "url": "<webpage_url>",
    "langue": "<langue>"
  },

  "instructions": {
    "étape 1": "Déterminer le type d'entrée. N'accepter qu'UNE seule source (url | texte | formulaire | guide). Si aucune ou plusieurs sont fournies, répondre : « Veuillez fournir exactement une entrée (URL, texte, formulaire ou guide). » et arrêter.",
    "étape 2 (url)": "Récupérer le contenu de la page en direct. Si l'URL n'est pas accessible, il est possible que l'auteur utilise une URL de prévisualisation ou de lancement pour une page en développement — dans ce cas, lire le contenu de l'onglet actif via le Copilot intégré au navigateur. Ne pas substituer une URL équivalente en direct. Si les deux sont inaccessibles, répondre : « Erreur : page non accessible. Veuillez fournir une URL valide. » et arrêter.",
    "étape 2 (texte)": "Utiliser directement le texte collé.",
    "étape 2 (formulaire ou guide)": "Extraire tout le texte lisible, les étiquettes, les titres et le texte alternatif du fichier joint.",
    "étape 3": "Limiter l'analyse au contenu principal uniquement (utiliser le repère <main>). Exclure la navigation globale, les pieds de page et les en-têtes généraux sauf s'ils contiennent du contenu instructionnel propre à la publication.",
    "étape 4": "Évaluer systématiquement chacun des types d'éléments suivants selon les WCAG 2.2 et les directives de conception inclusive du gouvernement du Canada : (a) Texte courant — langage clair, niveau de lecture, longueur des phrases, jargon; (b) Images — présence et qualité du texte alternatif, classification décorative ou informative, descriptions longues pour les images complexes; (c) Texte des liens — descriptif vs générique (« cliquez ici », « lire la suite »), compréhension hors contexte, clarté de l'objectif; (d) Tableaux — utilisation des en-têtes (scope, id/headers), légendes, descriptions sommaires, absence de tableaux de mise en page; (e) Structure et titres — hiérarchie logique (H1–H4), utilisation des repères, navigation par saut; (f) Couleur et contraste — ratios de contraste, dépendance à la couleur seule pour transmettre de l'information; (g) Multimédia — sous-titres, transcriptions, audiodescriptions pour les contenus vidéo; (h) Formulaires et éléments interactifs — étiquettes visibles, messages d'erreur, utilisabilité au clavier, avertissements de délai d'expiration.",
    "étape 5": "Pour chaque obstacle identifié, consigner : le type d'élément, une description en langage clair de l'obstacle, les groupes de personnes handicapées touchés, le critère de succès WCAG 2.2 applicable (numéro et intitulé), le niveau de conformité (A, AA ou AAA), et une recommandation précise et actionnable. Attribuer une priorité : Élevée (bloque l'accomplissement de la tâche), Moyenne (crée une difficulté significative) ou Faible (inconvénient mineur).",
    "étape 6": "Couvrir les six groupes de handicaps visés : cécité et basse vision; surdité et perte auditive; mobilité réduite et handicap moteur; handicap de la parole; photosensibilité; handicap cognitif et troubles d'apprentissage. Lorsqu'un obstacle touche plusieurs groupes, les énumérer tous.",
    "étape 7": "Si aucun obstacle n'est trouvé pour un type d'élément donné, indiquer explicitement « Aucun problème détecté » pour cette catégorie.",
    "étape 8": "Produire un rapport Markdown structuré en utilisant le format précisé dans format_sortie. Ne pas ajouter de commentaires en dehors des sections définies.",
    "étape 9": "Conclure par un paragraphe d'évaluation globale : nombre de problèmes Élevés/Moyens/Faibles, l'obstacle le plus critique, et si la publication satisfait globalement au niveau AA des WCAG 2.2."
  },

  "format_sortie": {
    "section 1 — Résumé de la publication": "| Champ | Détails |\\n|---|---|\\n| Source | [URL ou type d'entrée] |\\n| Date de révision | [date du jour] |\\n| Version WCAG | 2.2 |\\n| Cible de conformité | Niveau AA |\\n| Portée | Contenu principal uniquement |",
    "section 2 — Tableau des constatations": "| # | Type d'élément | Description de l'obstacle | Groupes touchés | Critère WCAG 2.2 | Niveau | Priorité | Recommandation |\\n|---|---|---|---|---|---|---|---|",
    "section 3 — Résumé de la couverture des éléments": "| Type d'élément | Problèmes trouvés | Statut |\\n|---|---|---|\\n| Texte courant | [n] | [Conforme / À améliorer] |\\n| Images | [n] | [Conforme / À améliorer] |\\n| Texte des liens | [n] | [Conforme / À améliorer] |\\n| Tableaux | [n] | [Conforme / À améliorer] |\\n| Structure et titres | [n] | [Conforme / À améliorer] |\\n| Couleur et contraste | [n] | [Conforme / À améliorer] |\\n| Multimédia | [n] | [Conforme / À améliorer] |\\n| Formulaires et éléments interactifs | [n] | [Conforme / À améliorer] |",
    "section 4 — Évaluation globale": "[Un paragraphe : décompte Élevés/Moyens/Faibles, obstacle le plus critique, verdict de conformité WCAG 2.2 AA]"
  }
}`
    }
};

window.categories.addTask('access', 'AccessDisabilityPersonaUsabilityReview', task7);
