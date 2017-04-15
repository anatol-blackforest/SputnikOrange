var module = {};

/* В задании как то так странно сформулировано, что "от пользователя мы получаем входные параметры, например название категории и название региона. Могут быть заданы другие параметры." Как то слишком размыто.
Что значит "параметры"? Если параметры функции - то я не могу себе представить, как пользователь заходит на сайт, вбивает в консоли нечто вроде model.filtering({category:'bal', region:'shoulders'}), бъет enter и ждет реакции. Или я чего-то недопонимаю, или тут никакого юзер икспириенс. Так что будем считать что параметры - это просто данные запроса введенные пользователем через форму фильтров. Модуль обходит и фильтрует как строки, так вложенные массивы и объекты в дате, выводя результат в консоль. 
Вввел доп. объект parameters, раз уж так нужно, хоть и не понимаю зачем. Вроде ничего не забыл :) */

module.filtering = function(){
	
	let category = document.getElementById('category');
	let regions = document.getElementById('regions');
	let ID = document.getElementById('id');
	let name = document.getElementById('name');
	let submit = document.getElementById('submit');
	let filteredArray, parameters, itemValue;
	
	let filtering = function(propertyElem, property){
		
		if(propertyElem.value.trim().length > 0){
			
			filteredArray = filteredArray.filter(function(item){
				
				itemValue = false
				
				if(typeof item[property] == 'string'){
					if(item[property].toLowerCase().indexOf(parameters[property]) !== -1){
						itemValue = true;
					}
				}else if(item[property] instanceof Array){
					item[property].map(function(i){
						if(i.toLowerCase().indexOf(parameters[property]) !== -1){
							itemValue = true
						}
					});
				}else if(typeof item[property] == 'object'){
					var itemObjKey 
					for(itemObjKey in item[property]){
						if(item[property][itemObjKey].toLowerCase().indexOf(parameters[property]) !== -1){
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
		
		if(category.value || regions.value || ID.value || name.value || video.value){
			
			parameters = {
				category:category.value.toLowerCase(), 
				regions:regions.value.toLowerCase(), 
				ID:ID.value.toLowerCase(), 
				name:name.value.toLowerCase(), 
				video:video.value.toLowerCase()
			}
			
			filteredArray = data.slice();
			
			filtering(category,"category");
			filtering(regions,"regions");
			filtering(ID,"ID");
			filtering(name,"name");
			filtering(video,"video");
			
		    console.log(`Найдено ${filteredArray.length} совпадений:`);
			console.log(filteredArray);
			console.log('==========================================');
			
		}
		
	})
	
}