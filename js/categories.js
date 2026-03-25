window.categories = {
	
	categories: {
		
		email: {}, 
		access: {}, 
		forms: {}, 
		guides: {},
		web: {}, 
		translate: {}, 
		analysis: {},
        system: {}, 		
		
	},	
	
	/* METHODS */
	
	getListOfTasks: function(category) {
		
		// Check that the category exists
		if(!this.categories.hasOwnProperty(category)) {
			return false; 
		} 
		
		// Create an array of keys
		const taskIDs = [];
		
		// Get the keys
		Object.keys(this.categories[category]).forEach(key => {
			taskIDs.push(key);			
		});
		
		// Return the array
		return taskIDs;
		
	}, 
	
	getTask: function(taskID) {
		
		const task = Object.values(this.categories).find(obj => taskID in obj)?.[taskID];
		
		if(!task) {
			return false;
		} else {
			return task;
		}
			
	}, 
	
	addTask: function (category, taskID, task) {
		
		// Check if category exists
		if(!this.categories.hasOwnProperty(category)) {
			console.log(`Failed to add task called '${taskID}' to category '${category}' because the category does not exist.`);
			return false; 
		} 
		
		// Check if the taskID already exists in entire library of tasks
		const hasTaskId = Object.values(this.categories).every(subObj =>
			subObj.hasOwnProperty(taskID)
		); 
		
		if(hasTaskId) {
			console.log(`Failed to add task called '${taskID}' because another task with this name already exists in the category '${category}'.`); 
			return false; 			
		} 
		
		// Add the task to the category
		this.categories[category][taskID] = task; 
		
		// Update the console
		console.log(`Task named '${taskID}' was successfully added to the category '${category}'`);
				
	}, 
	
	getCategory: function(taskID) {
		
		const category = Object.entries(this.categories).find(
			([, value]) =>
				value && 
				typeof value === 'object' &&
				Object.hasOwn(value, taskID)
			)?.[0];
		
		if(!category) {
			return false;
		} else {
			return category;
		}		
	}, 
	
	loadCategory: function(category, event) {

		// Get the current language variable
		const language = window.craConfig.currentLanguage;
		
		// Get tasks
		const tasks = window.categories.getListOfTasks(category);
		
		// Check that there are tasks
		if(!tasks) {
			console.log (`Could not load tasks for the category '${category}'.`);
			return false; 
		}
		
		// Get the task drop down element
		const taskSelect = document.getElementById('taskSelect');
		
		// Clear the task drop down element
		taskSelect.innerHTML = `<option value="" disabled selected>${window.language.getText('selectTask')}</option>`;
				
		// Add tasks to the list
		tasks.forEach(taskID => {
			
			// Get the task
			const task = window.categories.getTask(taskID); 
			
			// Skip if task not found
			if(!task) { 
				return; 
			}
			
			const option = document.createElement('option'); 
			option.value = taskID; 
			option.textContent = task.name[language];
			taskSelect.appendChild(option);
		});
		
		// Update active category
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        if (event && event.target) {
            event.target.closest('.category-card').classList.add('active');
        }
		
		// Display the task window
		//document.getElementById('taskWindow').style.display = "block";
		document.getElementById('taskWindow').classList.remove('hidden');
		document.getElementById('settingWindow').classList.add('hidden');
		
    }, 
	
	loadTask: function(taskID, event) {
		
		// Find the task
		const task = this.getTask(taskID); 
		
		// Check if task was found
		if(!task) {
			console.log('Task could not be loaded.');
			return false; 
		}
		
		// Get the settings window and clear it
		const settingsWindow = document.getElementById('settingWindow'); 
		const settingsWindowControls = document.getElementById('settings'); 
		settingsWindowControls.innerHTML = ''; 
		
		// Add descrption to the Prompt
		if('description' in task) {
			const description = document.createElement('p');
			description.classList.add('description');
			description.innerHTML = task.description[window.craConfig.currentLanguage]
			
			// Add instructions if present
			if('instructions' in task) {
				description.innerHTML += '<span class="instructions">' + task.instructions[window.craConfig.currentLanguage] + '</span>';
			}
			
			settingsWindowControls.appendChild(description);
		}
		
		// Add special instructions to the Prompt
		/*if('instructions' in task) {
			const instructions = document.createElement('p');
			instructions.classList.add('instructions');
			instructions.innerHTML = <br>task.instructions[window.craConfig.currentLanguage]
			settingsWindowControls.appendChild(instructions);
						
		}*/
		
		
		// Get the settings for the task
		const settings = task.settings;
			
		// Go through each setting for the task and create the HTML
		const settingsHTML = [];		
		settings.forEach(setting => {
			
			// Create a div wrapper
			const div = document.createElement('div');
			div.classList.add('settingDiv');
			
			// Text Area
			if(setting.type == 'textarea') {
											
				const input = document.createElement('textarea'); 
				input.id = 'set_' + setting.id; 
				
				const label = document.createElement('label'); 
				label.setAttribute('for', 'set_' + setting.id); 
				label.textContent = setting.label[window.craConfig.currentLanguage]; 
				
				div.appendChild(label); 
				div.appendChild(input); 
				settingsWindowControls.appendChild(div);
				
			}
						
			// Dropdown (Select)
			else if(setting.type == 'select') {
				
				const input = document.createElement('select'); 
				input.id = 'set_' + setting.id; 
				
				// Populate the select
				// Check if there's a values 
				
				let count = 0; 
				
				setting.options[window.craConfig.currentLanguage].forEach(optionValue => {
					const option = document.createElement('option');
					
					// Check if there's a custom value for the option
					if("values" in setting) {
						option.value = setting.values[window.craConfig.currentLanguage][count];
						count++;
					} else {
						option.value = optionValue;
					}					
										
					option.innerText = optionValue;
					input.appendChild(option);					
				});
				
				
				const label = document.createElement('label'); 
				label.setAttribute('for', 'set_' + setting.id); 
				label.textContent = setting.label[window.craConfig.currentLanguage]; 
				
				div.appendChild(label); 
				div.appendChild(input); 
				settingsWindowControls.appendChild(div);
			
			// Text input			
			} else if(setting.type == 'textinput') {
				
				const input = document.createElement('input'); 
				input.id = 'set_' + setting.id; 
				input.type = 'text';
												
				const label = document.createElement('label'); 
				label.setAttribute('for', 'set_' + setting.id); 
				label.textContent = setting.label[window.craConfig.currentLanguage]; 
				
				div.appendChild(label); 
				div.appendChild(input); 
				settingsWindowControls.appendChild(div);
				
			// Switch
			} else if(setting.type == 'switch') {
											
				const input = document.createElement('input'); 
				input.id = 'set_' + setting.id; 
				input.type = 'checkbox';
				
				// Default setting
				if(setting.default == "true") {
					input.checked = true;
				} else {
					input.checked = false;
				} 
				
				const label = document.createElement('label'); 
				label.setAttribute('for', 'set_' + setting.id); 
				label.textContent = setting.label[window.craConfig.currentLanguage]; 
				
				div.appendChild(label); 
				div.appendChild(input); 
				settingsWindowControls.appendChild(div);
				
			} else if(setting.type == 'header') {
											
				const header = document.createElement('h2'); 
				header.innerText = setting.text[window.craConfig.currentLanguage];
							
				div.appendChild(header); 
				settingsWindowControls.appendChild(div);
				
			}	
			
		});
		
		
		
		// Display the settings window
		settingWindow.classList.remove('hidden');
		
		// Show the category 
		document.getElementById('taskCode').innerHTML = taskID;
		
		
	}, 
	
	generatePrompt: function() {
		
		// Get the task
		const taskID = document.getElementById('taskSelect').value; 

		// Get the task
		const task = window.categories.getTask(taskID);
		
		// Check if task was found
		if(!task) {
			window.craApp.showNotification('promptNotGenerated');
			return false;
		}
		
		// Get the prompts
		const unfilledPrompt = task.prompts[window.craConfig.currentLanguage];
		let prompt = unfilledPrompt;
		
		// Fill in the blanks
		Object.values(task.settings).forEach(setting => {
			
			const settingId = setting.id;
			
			// Get the element
			const settingElement = document.getElementById('set_' + settingId); 
			
			// Check if found
			if(!settingElement) {
				console.log('Setting element could not be found. Skipping...'); 
				return; 
			} 
			
			let settingValue;
			
			// Get the value
			if(settingElement instanceof HTMLInputElement && settingElement.type == "checkbox") {
				settingValue = (settingElement.checked) ? "true":"false"; 
				settingValue = JSON.stringify(settingValue);
			} else { 
				settingValue = JSON.stringify(settingElement.value); 
			}
			
			// Replace the placeholder with the value of the setting
			prompt = prompt.replace(`<${settingId}>`, settingValue); 
					
		});
		
		// Copy the prompt to the clipboard
		navigator.clipboard.writeText(prompt)
			.then(() => {
				console.log('Prompt copied to clipboard.'); 
				window.craApp.showNotification('promptCopiedToClipboard')
			})
			.catch(err => {
				console.error('Failed to copy: ', err) ; 
				window.craApp.showNotification('promptNotGenerated')
			});

	},
	
	loadParam: function(taskID) {
		
		const category = this.getCategory(taskID);
		
		if(category) {
			this.loadCategory(category);
			document.getElementById('taskSelect').value = taskID;
			this.loadTask(taskID);
		} else {
			alert("Error - Prompt not found");
		}
		
	}
		
}