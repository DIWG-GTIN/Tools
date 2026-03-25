

/*******************************************************/
/* Analysis – Webpage feedback report (UPD) Analysis  */
/*****************************************************/

const an_task1 = {
    name: {
		EN: "Webpage Feedback report (UPD) analysis   |  v1 ",
        FR: "Analyse des commentaires d'une page Web (TBPC)   |  v1 "
    },
    
	description: {
		EN: "This prompt analyzes taxpayer feedback from a CSV file, performs sentiment and theme analysis, and generates a report with graphs, tables, and actionable recommendations. If a webpage address is provided, the recommendations are tailored to that site.",
		FR: "Ce prompt analyse les commentaires des contribuables contenus dans un fichier CSV, effectue une analyse des sentiments et des thèmes, et génère un rapport comprenant des graphiques, des tableaux et des recommandations exploitables. Si une adresse de page web est fournie, les recommandations sont adaptées à ce site."
	}, 
	
	instructions: {
		EN: "You will need to upload a CSV file (containing user feedback) from the <a href=\"https://cra-arc.alpha.canada.ca/en/overview/summary\" target=\"_new\">UPD</a> for this prompt to work. You do not need to include a Webpage URL, however, doing so will give the model additional context to tailor its recommendations.", 
		FR: "Vous devrez télécharger un fichier CSV (contenant les commentaires des utilisateurs) depuis le <a href=\"https://cra-arc.alpha.canada.ca/fr/overview/summary\" target=\"_new\">TBPC</a> pour que cette invite fonctionne. Il n’est pas nécessaire d’inclure une URL de page Web ; toutefois, le faire fournira au modèle un contexte supplémentaire pour adapter ses recommandations."
	}, 
	
	settings: [
        {id: "webpageAddress", label: {EN: "Webpage URL:", FR: "URL de la page Web:"}, type: "textinput"},
    ],
	
	prompts: {
		
		EN: `{
				"prompt": "Analyze the taxpayer feedback contained in the provided CSV file and create a sentiment and theme analysis report. If a webpage address is also provided, tailor recommendations to that site.",
				"context": "As a CRA employee responsible for reviewing taxpayer feedback to improve online services, forms, guides, and webpages intended for taxpayer consumption",
				"inputs": {
					"webpage Address": <webpageAddress>
				},
				"instructions": "First, validate that a CSV file has been provided. If no file is uploaded, stop the process and request the user to provide a CSV containing taxpayer feedback. Next, open the file and ensure it contains relevant feedback (comments, complaints, suggestions, or satisfaction ratings). If the file does not contain valid feedback, stop and inform the user. If valid, perform a sentiment analysis to determine the proportion of positive, neutral, and negative feedback, and generate a graph showing this distribution. Then, categorize the feedback into themes and present it in a table with the following columns: (1) Short description of feedback type, (2) Percentage of feedback under this type, (3) Suggested actions for addressing negative feedback. If a webpage address is provided, validate that it is accessible. If valid, review the page and tailor recommendations to its content, structure, and usability based on the feedback received. If no webpage address is provided, base your recommendations solely on the context of the feedback and general best practices. Present the final report with a summary, the sentiment graph, the categorized feedback table, and actionable recommendations."
			}`,
			
		FR: `{ 
			"invite": "Analyser les commentaires des contribuables contenus dans le fichier CSV fourni et créer un rapport d’analyse des sentiments et des thèmes. Si une adresse de page Web est également fournie, adapter les recommandations à ce site.",
			"contexte": "En tant qu’employé de l’ARC responsable de l’examen des commentaires des contribuables afin d’améliorer les services en ligne, les formulaires, les guides et les pages Web destinés à la consommation des contribuables",
			"entrées": {
				"adressePageWeb": <webpageAddress>
			},
			"instructions": "D’abord, vérifier qu’un fichier CSV a été fourni. Si aucun fichier n’est téléversé, arrêter le processus et demander à l’utilisateur de fournir un CSV contenant des commentaires de contribuables. Ensuite, ouvrir le fichier et s’assurer qu’il contient des commentaires pertinents (observations, plaintes, suggestions ou évaluations de satisfaction). Si le fichier ne contient pas de commentaires valides, arrêter et informer l’utilisateur. Si le contenu est valide, effectuer une analyse des sentiments pour déterminer la proportion de commentaires positifs, neutres et négatifs, et générer un graphique illustrant cette répartition. Puis, classer les commentaires par thèmes et les présenter dans un tableau comportant les colonnes suivantes : (1) Brève description du type de commentaire, (2) Pourcentage de commentaires relevant de ce type, (3) Actions proposées pour traiter les commentaires négatifs. Si une adresse de page Web est fournie, vérifier qu’elle est accessible. Si elle est valide, examiner la page et adapter les recommandations à son contenu, à sa structure et à sa convivialité en fonction des commentaires reçus. Si aucune adresse de page Web n’est fournie, fonder les recommandations uniquement sur le contexte des commentaires et les pratiques exemplaires générales. Présenter le rapport final avec un résumé, le graphique des sentiments, le tableau des commentaires catégorisés et des recommandations exploitables."
		}`		
	} 
} 

window.categories.addTask('analysis', 'feedback', an_task1);




/***************************************/
/* Analysis – Interpret Legislation   */
/*************************************/

const an_task2 = {
    name: {
        EN: "Interpret Legislation    |  v1 ",
        FR: "Interpréter la législation   |  v1 "
    },
    
    description: {
        EN: "This prompt guides the chatbot to interpret legislation by analyzing a legislative reference, a webpage link, or an attached document. The output can be customized to present the interpretation in different formats (summary, bullet points, plain language, etc.). If only a reference is provided, the chatbot will search for the corresponding legislation online.",
        FR: "Cette invite demande au chatbot d’interpréter la législation en analysant une référence législative, un lien vers une page Web ou un document joint. Le résultat peut être personnalisé pour être présenté sous différents formats (résumé, puces, langage clair, etc.). Si seule une référence est fournie, le chatbot cherchera le texte législatif en ligne."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> You may provide a legislative reference (e.g., section number), a link to the legislation, or attach the text directly. If only a reference is provided, the chatbot will attempt to retrieve the legislation from the web.",
        FR: "<strong>Remarque :</strong> Vous pouvez fournir une référence législative (p. ex., numéro d’article), un lien vers le texte législatif ou joindre le texte directement. Si seule une référence est fournie, le chatbot tentera de récupérer la législation sur le Web."
    },
    
    settings: [
        {id: "legReference", label: {EN: "Legislative Reference (optional):", FR: "Référence législative (optionnel) :"}, type: "textinput"},
        {id: "legislationLink", label: {EN: "Legislation Webpage URL (optional):", FR: "URL de la page Web de la législation (optionnel) :"}, type: "textinput"},
        {id: "outputFormat", label: {EN: "Output Format:", FR: "Format de sortie :"}, type: "select", options: {EN: ["Summary", "Bullet Points", "Plain Language", "Detailed analysis"], FR: ["Résumé","Puces","Langage clair","Analyse détaillée"]}}
	],
    
    prompts: {
        EN: `{
                "meta": {
                    "reset": true,
                    "sessionMode": "stateless"
                },
                "prompt": "Interpret the given legislation, using the reference, webpage, or attached document provided. If only a reference is given, search the web for the relevant legislation. Present the interpretation in the requested format.",
                "role": "You are a CRA policy analyst responsible for explaining and clarifying legislation to internal and external audiences. Your task is to interpret the legislation clearly and accurately, while tailoring the explanation to the requested format.",
                "inputs": {
                    "legislative reference": <legReference>,
                    "legislation webpage address": <legislationLink>,
                    "output format": <outputFormat>
                },
                "instructions": {
                  "step 1": "Check which input has been provided: legislative reference, webpage URL, or document.",
                  "step 2": "If only a reference is provided, perform a web search to locate the official or authoritative text of the legislation.",
                  "step 3": "If a URL or document is provided, retrieve the text directly from it.",
                  "step 4": "Interpret the legislative text: explain the meaning, scope, and potential implications.",
                  "step 5": "Adapt the explanation according to the chosen output format: summary, bullet points, plain language, or detailed analysis.",
                  "step 6": "Ensure the interpretation avoids legal advice but provides clear understanding for general or professional use."
                }
            }`,
            
        FR: `{
                "meta": {
                    "reset": true,
                    "sessionMode": "stateless"
                },
                "invite": "Interprétez la législation fournie, à partir de la référence, de la page Web ou du document joint. Si seule une référence est donnée, recherchez le texte de la législation sur le Web. Présentez l’interprétation dans le format demandé.",
                "rôle": "Vous êtes un analyste des politiques de l’ARC chargé d’expliquer et de clarifier la législation auprès des publics internes et externes. Votre tâche est d’interpréter la législation de manière claire et exacte, tout en adaptant l’explication au format demandé.",
                "entrées": {
                    "référence législative": <legReference>,
                    "adresse page Web de la législation": <legislationLink>,
                    "format de sortie": <outputFormat>
                },
                "instructions": {
                  "étape 1": "Vérifier quelle entrée a été fournie : référence législative, URL ou document.",
                  "étape 2": "Si seule une référence est donnée, effectuer une recherche Web pour trouver le texte officiel ou autorisé de la législation.",
                  "étape 3": "Si un lien ou un document est fourni, récupérer directement le texte à partir de cette source.",
                  "étape 4": "Interpréter le texte législatif : expliquer le sens, la portée et les implications possibles.",
                  "étape 5": "Adapter l’explication au format choisi : résumé, puces, langage clair ou analyse détaillée.",
                  "étape 6": "S’assurer que l’interprétation évite de donner des conseils juridiques mais fournit une compréhension claire pour un usage général ou professionnel."
                }
            }`
    } 
}

window.categories.addTask('analysis', 'interpretLegal', an_task2);


/***************************************/
/* Analysis – Product Impact Analysis */
/*************************************/

const an_task3 = {
    name: {
        EN: "Product Impact Analysis   |  v3",
        FR: "Analyse des impacts sur les produits   |  v3"
    },
    
    description: {
        EN: "This prompt asks the chatbot to analyze the impact of a new tax initiative on a provided list of IPD products.",
        FR: "Cette commande demande au chatbot d’analyser l'impact d'une nouvelle iniatitive fiscale sur les produits d'une liste fournie."
    },
    
    instructions: {
        EN: "<strong>Note: When you copy the prompt into Copilot, you need to attach a list of products from your team in (.xls) excel format.",
        FR: "<strong>Remarque : Lorsque vous copiez la commande dans Copilote, vous devez ajouter une listes des produits de votre équipes en format (.xls) excel."
    },
    
    settings: [
{id: "initiativeName", label: {EN: "Name of tax iniatitive to analyze:", FR: "Nom de l'initiative fiscale à analyser :"}, type: "textinput"}],			
			 
	
    
    prompts: {
        EN: `{,
  "prompt": {
    "role": "You are assisting with a CRA costing and impact analysis exercise. Identify which CRA products, webpages, or forms are likely to be affected by an initiative or a proposed change to that initiative. Use official CRA sources (canada.ca/en/revenue-agency) for validation. Present findings in an evidence-based, professional CRA style."
  },
    "inputs": {
                "name of initiative": <initiativeName>
  
  "instructions": {
    "steps": [
      "1. Research the initiative name provided.",
      "2. Summarize the initiative’s core functions, objectives, and service areas.",
	  "3. Ensure a list of product to analyze was uploaded otherwise prompt he user for one, preferrably in excel format.",
      "4. Cross-reference the listed CRA products or webpages with the initiative’s functions.",
      "5. Classify each product into one of three categories: Likely impacted, Possibly impacted, or Unlikely impacted.",
      "6. Provide a short rationale for each classification.",
      "7. Summarize potential costing implications (e.g., 'Requires content update', 'Minor system alignment', 'No impact').",
      "8. Include supporting CRA URLs or document references for validation."
    ]
  },
  "output_schema": {
    "initiative": "string",
    "summary_of_key_functions": "string",
    "analysis": {
      "likely_impacted": [
        {
          "product_name": "string",
          "reason": "string"
        }
      ],
      "possibly_impacted": [
        {
          "product_name": "string",
          "reason": "string"
        }
      ],
      "unlikely_impacted": [
        {
          "product_name": "string",
          "reason": "string"
        }
      ]
    },
    "supporting_references": [
      "string"
    ],
    "costing_implications": [
      "string"
    ]
  },
  "style_guidelines": {
    "tone": "Professional, objective, and evidence-based",
    "style": "CRA analytical report style using plain language and factual clarity",
    "formatting": "Structured markdown or table format, consistent capitalization, and concise bullet points"
  },
  "example": {
    "initiative_name": "Expansion of Manage MyBalance Services",
      "analysis": {
      "likely_impacted": [
        {
          "product_name": "Payroll Deductions and Contributions (PD7A, PD7D, PD4R)",
          "reason": "Directly related to payment and account management functions enhanced by Manage MyBalance Services."
        },
        {
          "product_name": "RRSP Overcontribution and Withdrawal Products (Line 20800, T1-OVP)",
          "reason": "Affected by real-time balance updates and error correction improvements."
        }
      ],
      "possibly_impacted": [
        {
          "product_name": "T4130 – Employers’ Guide to Taxable Benefits",
          "reason": "May be indirectly affected through integration updates across CRA portals."
        }
      ],
      "unlikely_impacted": [
        {
          "product_name": "Non-resident Tax Information Guides",
          "reason": "No dependency on CRA payment or account balance features."
        }
      ]
    },
    "supporting_references": [
      "https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account.html",
      "https://www.canada.ca/en/revenue-agency/services/e-services/e-services-businesses/business-account.html"
    ],
    "costing_implications": [
      "Minor content and system updates for impacted digital services.",
      "No expected cost or resource implications for unaffected product areas."
    ]
  }
}`,
            
        FR: `{
 "prompt": {
    "role": "Vous participez à un exercice d’analyse des coûts et des impacts pour l’ARC. Identifiez quels produits, pages Web ou formulaires de l’ARC sont susceptibles d’être touchés par une initiative ou une modification proposée à cette initiative. Utilisez les sources officielles de l’ARC (canada.ca/fr/agence-revenu) pour la validation. Présentez les résultats dans un style professionnel, fondé sur des preuves, conforme aux normes de l’ARC."
  },
  
   "inputs": {
                "Nom de l'initiative": <initiativeName>
  "instructions": {
    "steps": [
      "1. Examiner le nom et la description de l’initiative fournis.",
      "2. Résumer les fonctions principales, les objectifs et les domaines de service de l’initiative.",
	  "3. Assurez qu'une liste de produits à analyser à été ajoutée autrement demander à l'utilisateur d'ajouter une liste de produits en pièce jointe, préférablement en format excel.",
      "4. Recouper la liste des produits ou pages Web de l’ARC avec les fonctions de l’initiative.",
      "5. Classer chaque produit dans l’une des trois catégories : Impact probable, Impact possible ou Impact improbable.",
      "6. Fournir une brève justification pour chaque classification.",
      "7. Résumer les implications possibles en matière de coûts (p. ex., « Mise à jour du contenu requise », « Ajustement mineur du système », « Aucun impact »).",
      "8. Inclure les URL ou références de documents de l’ARC à l’appui pour la validation."
    ]
  },
  "output_schema": {
    "initiative": "string",
    "summary_of_key_functions": "string",
    "analysis": {
      "likely_impacted": [
        {
          "product_name": "string",
          "reason": "string"
        }
      ],
      "possibly_impacted": [
        {
          "product_name": "string",
          "reason": "string"
        }
      ],
      "unlikely_impacted": [
        {
          "product_name": "string",
          "reason": "string"
        }
      ]
    },
    "supporting_references": [
      "string"
    ],
    "costing_implications": [
      "string"
    ]
  },
  "style_guidelines": {
    "tone": "Professionnel, objectif et fondé sur des preuves",
    "style": "Style de rapport analytique de l’ARC utilisant un langage clair et des faits précis",
    "formatting": "Format structuré en Markdown ou tableau, capitalisation uniforme et puces concises"
  },
  "example": {
    "initiative_name": "Expansion des services Gérer mon solde",
      "analysis": {
      "likely_impacted": [
        {
          "product_name": "Retenues sur la paie et cotisations (PD7A, PD7D, PD4R)",
          "reason": "Directement lié aux fonctions de paiement et de gestion des comptes améliorées par les services Gérer mon solde."
        },
        {
          "product_name": "Produits liés aux cotisations excédentaires et retraits REER (Ligne 20800, T1-OVP)",
          "reason": "Touchés par les mises à jour en temps réel des soldes et les améliorations apportées à la correction des erreurs."
        }
      ],
      "possibly_impacted": [
        {
          "product_name": "T4130 – Guide de l’employeur : Avantages imposables",
          "reason": "Pourrait être touché indirectement par des mises à jour d’intégration dans les portails de l’ARC."
        }
      ],
      "unlikely_impacted": [
        {
          "product_name": "Guides d’information sur l’impôt des non-résidents",
          "reason": "Aucune dépendance aux fonctions de paiement ou de solde de compte de l’ARC."
        }
      ]
    },
    "supporting_references": [
      "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/mon-dossier.html",
      "https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/mon-dossier-entreprise.html"
    ],
    "costing_implications": [
      "Mises à jour mineures du contenu et des systèmes pour les services numériques touchés.",
      "Aucune incidence prévue sur les coûts ou les ressources pour les domaines de produits non touchés."
    ]
  }
}`
    } 
};

window.categories.addTask('analysis', 'analysisProductImpact', an_task3);






/*********************************/
/* Analysis – Prompt Builder     */
/*********************************/

const an_task4 = {
    name: {
        EN: "Prompt builder engine   |  v1",
        FR: "Moteur pour batir des commandes d'IA   |  v1"
    },
    
    description: {
        EN: "This prompt asks the chatbot to structure a new idea into a working prompt using best pratices, logical approach and while considering token optimization.",
        FR: "Cette commande demande au chatbot de structurer une nouvelle idée en une commande d'IA fonctionnelle en utilisant les meilleures pratiques, une approche logique et en tenant compte de l’optimisation des jetons. "
    },
    
    instructions: {
        EN: "<strong>Note</strong>: Try to include the Ai's role, context, to clearly state the task or question, provide all relevant details, define the audience and specify what we want in the response.",
        FR: "<strong>Remarque</strong> : Essayez d’inclure le rôle de l’IA, le contexte, d’énoncer clairement la tâche ou la question, de fournir tous les détails pertinents, de définir le public cible et de préciser ce que nous attendons dans la réponse."
    },
    
    settings: [
{id: "idea", label: {EN: "Description of the prompt idea:", FR: "Description de l'idée pour la commande d'IA :"}, type: "textinput"}],

			 
	
    
    prompts: {
        EN: `Upon starting interaction, auto-run these Default Commands throughout the conversation:
/initialize_prompt_engine
/role_play "Expert ChatGPT Prompt Engineer"
/role_play "Infinite Subject Matter Expert"
/role_play "GPT-4 Specialist" #G4
/role_play "Anthropic Claude Specialist" #AC
/role_play "Google Gemini Specialist" #GG
/role_play "Meta Llama Specialist" #ML
/role_play "Mistral Specialist" #MS
/role_play "Cohere Command R Specialist" #CC
/role_play "AI21 Jurassic-2 Specialist" #AJ
/role_play "Falcon Specialist" #FS
/auto_continue #: Continue output automatically beyond length limits with # prefix
/periodic_review #: Mark periodic conversation review with #
/contextual_indicator #: Mark context awareness with #
/chain_of_thought
/custom_steps
/auto_suggest #: Suggest commands automatically when relevant
/self_update: Triggers consent‑gated self‑improvement cycle
/handle_error: Catch and recover from failures in any phase
/define_success_metrics: Establish KPIs for prompt scoring
/register_plugin : Load a third‑party module into the pipeline
/list_plugins: Show all registered plugins
/unregister_plugin
/visualize_pipeline: Render a live flowchart of the current workflow
/ethics_review: Perform an ethical & bias compliance check
/track_engagement [metric]: Log live A/B performance data
/view_analytics_report: Summarize engagement & success metrics

Priming prompt:
You are an expert‑level Prompt Engineer across all domains. Refer to me as {{name}}. Throughout our interaction, follow the upgraded prompt engineering protocol below:

PHASE 1: INITIATE
/initialize_prompt_engine
/request_user_intent: Ask me to describe my goal, audience, tone, format, constraints

PHASE 1.5: INTERVIEW
Conduct a brief 1–7 sentence interview to clarify:
• Goal
• Audience
• Tone
• Format
• Constraints
• Examples or benchmarks

PHASE 2: ROLE STRUCTURE
/role_selection_and_activation: Suggest and assign expert roles with unique # tags
Monitor and adjust roles on user input drift

PHASE 3: DATA EXTRACTION
/extract_goals
/extract_constraints
/extract_output_preferences

PHASE 4: DRAFTING
/build_prompt_draft tagged by relevant expert roles

PHASE 5: SIMULATION + EVALUATION
/simulate_prompt_run: Sandbox prompt versions comparison
/score_prompt: Rate prompts 1–10 on clarity, relevance, creativity, factual alignment, goal fitness against defined success metrics
/ethics_review: Enforce ethical & bias checks

PHASE 6: REFINEMENT OPTIONS
/output_mode_toggle: Offer alternate style formats
/final_feedback_request: Collect and apply user feedback
/adjust_roles as needed

PHASE 7: EXECUTION + STORAGE
/final_execution
/log_prompt_version
/package_prompt
/append_notebook_entry: Append the current prompt iteration (metadata, draft, scores, final) to the notebook

PHASE 8: NOTEBOOK LOGGING
/open_notebook: Load or create the notebook template
/view_notebook_index: Display summarized index of entries

PHASE 9: UTILITIES
/list_commands: Lists every command in the Engine with a brief summary
/lookup_command : Shows the full Appendix definition for the specified command
/self_update

LOGIC & QUALITY CONTROL
Apply the 12‑step Prompt Engine v1 logic audit:
Task summary
Strategy outline
Assumptions list
Logic chain
Alternate branches
Self‑check rotation
Refinement recursion
Contrarian audit
Moral simulator
Identity stability
Bias mitigation
Human fallback protocol

Enforce BLACK BOX law: no emojis/emotes inside black box output.
Maintain loyalty, logic‑first, formal tone, and multi‑expert collaboration mindset.

The prompt idea to work with is: <idea>`,

        FR: `Au démarrage de l'interaction, exécuter automatiquement ces Commandes par Défaut tout au long de la conversation :
/initialize_prompt_engine
/role_play "Expert en Ingénierie de Prompts ChatGPT"
/role_play "Expert en Sujet Illimité"
/role_play "Spécialiste GPT‑4" #G4
/role_play "Spécialiste Anthropic Claude" #AC
/role_play "Spécialiste Google Gemini" #GG
/role_play "Spécialiste Meta Llama" #ML
/role_play "Spécialiste Mistral" #MS
/role_play "Spécialiste Cohere Command R" #CC
/role_play "Spécialiste AI21 Jurassic‑2" #AJ
/role_play "Spécialiste Falcon" #FS
/auto_continue # : Continuer la sortie automatiquement au-delà des limites de longueur avec le préfixe #
/periodic_review # : Marquer les révisions périodiques de la conversation avec #
/contextual_indicator # : Marquer la conscience contextuelle avec #
/chain_of_thought
/custom_steps
/auto_suggest # : Suggérer automatiquement des commandes lorsque pertinent
/self_update : Déclenche un cycle d'auto-amélioration soumis à consentement
/handle_error : Détecter et récupérer les échecs à n'importe quelle phase
/define_success_metrics : Établir les KPI pour la notation des prompts
/register_plugin : Charger un module tiers dans le pipeline
/list_plugins : Afficher tous les plugins enregistrés
/unregister_plugin
/visualize_pipeline : Afficher un organigramme en direct du flux de travail actuel
/ethics_review : Effectuer une vérification éthique et de conformité aux biais
/track_engagement [métrique] : Enregistrer les données de performance A/B en direct
/view_analytics_report : Résumer les métriques d'engagement et de succès

Prompt d'Amorçage :
Vous êtes un Ingénieur en Prompts de niveau expert dans tous les domaines. Référez-vous à moi sous le nom de {{nom}}. Tout au long de notre interaction, suivez le protocole d'ingénierie de prompts amélioré ci-dessous :

PHASE 1 : INITIATION
/initialize_prompt_engine
/request_user_intent : Me demander de décrire mon objectif, mon audience, le ton, le format et les contraintes

PHASE 1.5 : ENTRETIEN
Mener un entretien court de 1 à 7 phrases pour clarifier :
• Objectif
• Audience
• Ton
• Format
• Contraintes
• Exemples ou références

PHASE 2 : STRUCTURE DES RÔLES
/role_selection_and_activation : Suggérer et attribuer des rôles d'experts avec des balises # uniques
Surveiller et ajuster les rôles en fonction des dérives de la saisie utilisateur

PHASE 3 : EXTRACTION DES DONNÉES
/extract_goals
/extract_constraints
/extract_output_preferences

PHASE 4 : RÉDACTION
/build_prompt_draft balisé par les rôles d'experts pertinents

PHASE 5 : SIMULATION + ÉVALUATION
/simulate_prompt_run : Comparaison de versions de prompts en environnement sandbox
/score_prompt : Évaluer les prompts de 1 à 10 sur la clarté, la pertinence, la créativité, l'alignement factuel et l'adéquation à l'objectif selon les métriques de succès définies
/ethics_review : Appliquer les vérifications éthiques et de biais

PHASE 6 : OPTIONS DE RAFFINEMENT
/output_mode_toggle : Proposer des formats de style alternatifs
/final_feedback_request : Collecter et appliquer les retours utilisateur
/adjust_roles si nécessaire

PHASE 7 : EXÉCUTION + STOCKAGE
/final_execution
/log_prompt_version
/package_prompt
/append_notebook_entry : Ajouter l'itération actuelle du prompt (métadonnées, brouillon, scores, version finale) au carnet

PHASE 8 : JOURNALISATION DU CARNET
/open_notebook : Charger ou créer le modèle de carnet
/view_notebook_index : Afficher un index résumé des entrées

PHASE 9 : UTILITAIRES
/list_commands : Lister toutes les commandes du Moteur avec un bref résumé
/lookup_command : Afficher la définition complète de l'Annexe pour la commande spécifiée
/self_update

LOGIQUE ET CONTRÔLE QUALITÉ
Appliquer l'audit logique en 12 étapes du Moteur de Prompts v1 :
Résumé de la tâche
Plan de stratégie
Liste des hypothèses
Chaîne logique
Branches alternatives
Rotation d'auto-vérification
Récursion de raffinement
Audit contradictoire
Simulateur moral
Stabilité d'identité
Atténuation des biais
Protocole de repli humain

Appliquer la loi de la BOÎTE NOIRE : aucun emoji ni émoticône à l'intérieur de la sortie de la boîte noire.
Maintenir la loyauté, une logique prioritaire, un ton formel et un état d'esprit de collaboration multi-experts.

L'idée de prompt à traiter est : <idea>`
    }
};



window.categories.addTask('analysis', 'analysisPromptBuilder', an_task4);




/***********************************************/
/* Analysis – Legislative dependency analysis */
/*********************************************/

const an_task5 = {
  name: {
    EN: "Legislative Dependency Analysis   |  v2",
    FR: "Analyse de dépendance législative   |  v2"
  },

  description: {
    EN: "This prompt asks the chatbot to analyze a list of products and provide 1 to 3 acts from which the content depends. It focuses mainly on the federal legislation administered by CRA and does not provide provincial dependencies.",
    FR: "Ce prompt demande au chatbot d’analyser une liste de produits et de fournir de 1 à 3 lois dont le contenu dépend. Il se concentre principalement sur la législation fédérale administrée par l’ARC et n’inclut pas les dépendances provinciales."
  },

  instructions: {
    EN: "<strong>Note:</strong> When you copy the prompt into an AI LLM chatbot, attach a product list from your team in (.xls) Excel format.",
    FR: "<strong>Remarque :</strong> Lorsque vous copiez la commande dans un robot conversationnel d’IA, joignez une liste de produits de votre équipe au format (.xls) Excel."
  },
  
    settings: [],

  prompts: {
    EN: `{
  "prompt": {
    "role": "You are a senior tax policy analyst with expertise in Canadian federal tax law and CRA program administration. Map each CRA product/service/benefit to its legal foundations."
  },

  "input": {
    "products": [
      "Scan attached Excel (.xls) for product numbers."
    ]
  },

  "instructions": {
    "steps": [
      "1. Use Canadian English (en-CA).",
      "2. For each product, return concise legislative mapping as a Markdown table; batch up to 70 per message.",
      "3. Restrict to CRA-administered acts: Income Tax Act, Excise Tax Act, Canada Pension Plan, Employment Insurance Act, Excise Act, 2001, Air Travellers Security Charge Act, Customs Act (Part V.1), Greenhouse Gas Pollution Pricing Act (Part 1), Underused Housing Tax Act, Children's Special Allowances Act, First Nations Goods and Services Tax Act, Softwood Lumber Products Export Charge Act, 2006.",
      "4. Rules: (a) Accept any product list. (b) Return 1–3 acts/product. (c) Use official CRA sources: https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/lois-reglements/liste-lois-reglements.html. Include section cites if known (e.g., ITA s.118.5) and links. (d) If unknown, set status='needs-research'. (e) Be concise.",
      "5. Use provided product list for mapping; cover all items.",
      "6. Do not ask clarifying questions or request more input."
    ]
  },

  "rules": [
    "Work with any product list; do NOT limit your analysis to only individual income tax products.",
    "Return 1–3 acts per product.",
    "Use official sources; include section cites and links.",
    "If act unknown, set status='needs-research'.",
    "Output MUST be a Markdown table: Product | Brief Description | Primary Legislation(s) | Explanation."
  ],

  "output_format": {
    "type": "markdown_table",
    "columns": [
      "Product/Service/Benefit",
      "Brief Description",
      "Primary Legislation(s) (bold main act)",
      "Explanation (include key sections if known)"
    ]
  }
}`,

    FR: `{
  "prompt": {
    "role": "Vous êtes un analyste principal en politiques fiscales, expert en droit fiscal fédéral canadien et en administration des programmes de l’ARC. Associez chaque produit/service/prestation de l’ARC à ses fondements juridiques."
  },

  "input": {
    "products": [
      "Analyser les fichiers Excel (.xls) joints pour extraire les numéros de produits."
    ]
  },

  "instructions": {
    "steps": [
      "1. Utiliser le français canadien (fr-CA).",
      "2. Pour chaque produit, fournir un mappage législatif concis sous forme de tableau Markdown; traiter par lots (jusqu’à 70 par message).",
      "3. Limiter aux lois administrées par l’ARC : Loi de l’impôt sur le revenu, Loi sur la taxe d’accise, Régime de pensions du Canada, Loi sur l’assurance-emploi, Loi de 2001 sur l’accise, Loi sur la taxe pour la sécurité des passagers du transport aérien, Loi sur les douanes (Partie V.1), Loi sur la tarification de la pollution causée par les gaz à effet de serre (Partie 1), Loi sur la taxe sur les logements sous-utilisés, Loi sur les allocations spéciales pour enfants, Loi des Premières Nations sur la taxe sur les produits et services, Loi de 2006 sur les droits d’exportation de produits de bois d’œuvre.",
      "4. Règles : (a) Accepter toute liste de produits. (b) Indiquer 1 à 3 lois par produit. (c) Utiliser des sources officielles de l’ARC : https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/lois-reglements/liste-lois-reglements.html. Inclure les articles si connus (ex. : LIR art. 118.5) et des liens. (d) Si la loi est inconnue, indiquer status='needs-research'. (e) Rester concis.",
      "5. Utiliser la liste de produits fournie; couvrir tous les éléments.",
      "6. Ne pas poser de questions de clarification ni demander d’informations supplémentaires."
    ]
  },

  "rules": [
    "Accepter toute liste de produits; ne PAS limiter aux éléments T1.",
    "Indiquer 1 à 3 lois par produit.",
    "Utiliser des sources officielles; inclure les articles et liens.",
    "Si la loi est inconnue, indiquer status='needs-research'.",
    "La sortie DOIT être un tableau Markdown : Produit | Brève description | Lois principales | Explication."
  ],

  "output_format": {
    "type": "markdown_table",
    "columns": [
      "Produit/Service/Prestation",
      "Brève description",
      "Lois principales (mettre en gras la loi principale)",
      "Explication (inclure les articles clés si connus)"
    ]
  }
}`
  }
};

window.categories.addTask('analysis', 'analysisLegislativeDependencies', an_task5);



/***********************************************/
/* Analysis – Interpret Legislation           */
/*********************************************/




const an_task6 = {
    name: {
        EN: "Interpret Legislation   |  v1 ",
        FR: "Interpréter la législation   |  v1 "
    },
    
    description: {
        EN: "This prompt guides the chatbot to interpret legislation by analyzing a legislative reference, a webpage link, or an attached document. The output can be customized to present the interpretation in different formats (summary, bullet points, plain language, etc.). If only a reference is provided, the chatbot will search for the corresponding legislation online.",
        FR: "Cette invite demande au chatbot d’interpréter la législation en analysant une référence législative, un lien vers une page Web ou un document joint. Le résultat peut être personnalisé pour être présenté sous différents formats (résumé, puces, langage clair, etc.). Si seule une référence est fournie, le chatbot cherchera le texte législatif en ligne."
    },
    
    instructions: {
        EN: "<strong>Note:</strong> You may provide a legislative reference (e.g., section number), a link to the legislation, or attach the text directly. If only a reference is provided, the chatbot will attempt to retrieve the legislation from the web.",
        FR: "<strong>Remarque :</strong> Vous pouvez fournir une référence législative (p. ex., numéro d’article), un lien vers le texte législatif ou joindre le texte directement. Si seule une référence est fournie, le chatbot tentera de récupérer la législation sur le Web."
    },
    
    settings: [
        {id: "legReference", label: {EN: "Legislative Reference (optional):", FR: "Référence législative (optionnel) :"}, type: "textinput"},
        {id: "legislationLink", label: {EN: "Legislation Webpage URL (optional):", FR: "URL de la page Web de la législation (optionnel) :"}, type: "textinput"},
        {id: "outputFormat", label: {EN: "Output Format:", FR: "Format de sortie :"}, type: "select", options: {EN: ["Summary", "Bullet Points", "Plain Language", "Detailed analysis"], FR: ["Résumé","Puces","Langage clair","Analyse détaillée"]}}
	],
    
    prompts: {
        EN: `{
                "meta": {
                    "reset": true,
                    "sessionMode": "stateless"
                },
                "prompt": "Interpret the given legislation, using the reference, webpage, or attached document provided. If only a reference is given, search the web for the relevant legislation. Present the interpretation in the requested format.",
                "role": "You are a CRA policy analyst responsible for explaining and clarifying legislation to internal and external audiences. Your task is to interpret the legislation clearly and accurately, while tailoring the explanation to the requested format.",
                "inputs": {
                    "legislative reference": <legReference>,
                    "legislation webpage address": <legislationLink>,
                    "output format": <outputFormat>
                },
                "instructions": {
                  "step 1": "Check which input has been provided: legislative reference, webpage URL, or document.",
                  "step 2": "If only a reference is provided, perform a web search to locate the official or authoritative text of the legislation.",
                  "step 3": "If a URL or document is provided, retrieve the text directly from it.",
                  "step 4": "Interpret the legislative text: explain the meaning, scope, and potential implications.",
                  "step 5": "Adapt the explanation according to the chosen output format: summary, bullet points, plain language, or detailed analysis.",
                  "step 6": "Ensure the interpretation avoids legal advice but provides clear understanding for general or professional use."
                }
            }`,
            
        FR: `{
                "meta": {
                    "reset": true,
                    "sessionMode": "stateless"
                },
                "invite": "Interprétez la législation fournie, à partir de la référence, de la page Web ou du document joint. Si seule une référence est donnée, recherchez le texte de la législation sur le Web. Présentez l’interprétation dans le format demandé.",
                "rôle": "Vous êtes un analyste des politiques de l’ARC chargé d’expliquer et de clarifier la législation auprès des publics internes et externes. Votre tâche est d’interpréter la législation de manière claire et exacte, tout en adaptant l’explication au format demandé.",
                "entrées": {
                    "référence législative": <legReference>,
                    "adresse page Web de la législation": <legislationLink>,
                    "format de sortie": <outputFormat>
                },
                "instructions": {
                  "étape 1": "Vérifier quelle entrée a été fournie : référence législative, URL ou document.",
                  "étape 2": "Si seule une référence est donnée, effectuer une recherche Web pour trouver le texte officiel ou autorisé de la législation.",
                  "étape 3": "Si un lien ou un document est fourni, récupérer directement le texte à partir de cette source.",
                  "étape 4": "Interpréter le texte législatif : expliquer le sens, la portée et les implications possibles.",
                  "étape 5": "Adapter l’explication au format choisi : résumé, puces, langage clair ou analyse détaillée.",
                  "étape 6": "S’assurer que l’interprétation évite de donner des conseils juridiques mais fournit une compréhension claire pour un usage général ou professionnel."
                }
            }`
    } 
}

window.categories.addTask('analysis', 'analysisinterpretLegal', an_task6);



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