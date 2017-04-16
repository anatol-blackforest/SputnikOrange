const module = {};

/* В задании как то так странно сформулировано, что "от пользователя мы получаем входные параметры, например название категории и название региона. Могут быть заданы другие параметры." Как то слишком размыто.
Что значит "параметры"? Если параметры функции - то я не могу себе представить, как пользователь заходит на сайт, вбивает в консоли нечто вроде model.filtering({category:'bal', region:'shoulders'}), бъет enter и ждет реакции. Или я чего-то недопонимаю, или тут никакого юзер икспириенс. Так что будем считать что параметры - это просто данные запроса введенные пользователем через форму фильтров. Модуль обходит и фильтрует как строки, так вложенные массивы и объекты в дате, выводя результат в консоль. 
Вввел доп. объект parameters, раз уж так нужно, хоть и не понимаю зачем. Вроде ничего не забыл :) */

module.filtering = function(){
	
	const submit = document.getElementById('submit');
	const elements = document.querySelectorAll("input[type=text]");
	
	let filteredArray, parameters, itemValue, filteringEnable;
	let filtering = function(propertyElem, property){
		
		if(propertyElem.value.trim().length > 0){
			
			filteredArray = filteredArray.filter(item => {
				
				itemValue = false
				
				if(typeof item[property] == 'string'){
					if(item[property].toLowerCase().indexOf(parameters[property]) !== -1){
						itemValue = true;
					}
				}else if(item[property] instanceof Array){
					item[property].map(i => {
						if(i.toLowerCase().indexOf(parameters[property]) !== -1){
							itemValue = true
						}
					});
				}else if(typeof item[property] == 'object'){
					let itemObjKey 
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
		filteredArray = data.slice();
		filteringEnable = false;
		parameters = {};
		
		Array.prototype.map.call(elements, function(item){
			if(item.dataset.info){
				parameters[item.dataset.info] = item.value.toLowerCase();
				filtering(item, item.dataset.info);
			}
			if(item.value.length > 0){
				filteringEnable = true
			}
		})
		
		if(filteringEnable){
			console.log(`Найдено ${filteredArray.length} совпадений:`);
			console.log(filteredArray);
			console.log('==========================================');
		}
			
	})
	
}