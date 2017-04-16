const module = {};

/* В задании как то так странно сформулировано, что "от пользователя мы получаем входные параметры, например название категории и название региона. Могут быть заданы другие параметры." Как то слишком размыто.
Что значит "параметры"? Если параметры функции - то я не могу себе представить, как пользователь заходит на сайт, вбивает в консоли нечто вроде model.filtering({category:'bal', region:'shoulders'}), бъет enter и ждет реакции. В этом скрипте на всякий случай реализован именно этот вариант. */

module.filtering = function(parameters){
	
	let filteredArray, itemValue, itemObjKey;
	let filtering = function(property){
		
		if(parameters[property]){
			
			filteredArray = filteredArray.filter(item => {
				
				itemValue = false
				
				if(typeof item[property] == 'string'){
					if(item[property].toLowerCase().indexOf(parameters[property].toLowerCase()) !== -1){
						itemValue = true;
					}
				}else if(item[property] instanceof Array){
					item[property].map(i => {
						if(i.toLowerCase().indexOf(parameters[property].toLowerCase()) !== -1){
							itemValue = true
						}
					});
				}else if(typeof item[property] == 'object'){
					for(itemObjKey in item[property]){
						if(item[property][itemObjKey].toLowerCase().indexOf(parameters[property].toLowerCase()) !== -1){
							itemValue = true
						}
					}
				}
				
				return itemValue;
				
			});
		}
	}
	
	submit.addEventListener("click",function(e){
		
		    e.preventDefault();
			
			filteredArray = data.slice();
			
			for(key in parameters){
				filtering(key)
			} 
			
		    console.log(`Найдено ${filteredArray.length} совпадений:`);
			console.log(filteredArray);
			console.log('==========================================');
			
		
	})
	
}