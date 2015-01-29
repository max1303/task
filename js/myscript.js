// var navItem1 = document.getElementById('item1');
// var navItem2 = document.getElementById('item2');
// var navItem3 = document.getElementById('item3');
// var tab1 = document.getElementById('tab1');
// var tab2 = document.getElementById('tab2');
// var tab3 = document.getElementById('tab3');
// 
//  смотри правило одного  var
// все модули оборочивать контейнером (function(){
// 
//      CODE::::
// 
// })();
(function(){
	var tabGroup = document.getElementsByClassName('tab'),
		mainNavigation = document.getElementsByClassName('main-navigation')[0],
		navContainer = document.createElement("ul"),
		previousTab, previousItemMenu;

		mainNavigation.appendChild(navContainer);

		[].forEach.call(tabGroup, function(tab){
			var itemMenu = document.createElement("li");
			itemMenu.innerText = tab.dataset.title;
			itemMenu.addEventListener("click", function(){
				if(previousTab){
					previousTab.classList.remove('active');
				}
				if(previousItemMenu){
					previousItemMenu.classList.remove('active');
				}
				tab.classList.add('active');
				itemMenu.classList.add('active');
				previousTab = tab;
				previousItemMenu = itemMenu;
			});
			navContainer.appendChild(itemMenu);
		});

})();
/*РАЗБИРАЙСЯ !!!*/

//     navItem1.onclick = function(){
//         this.className = 'item_active nav_item';
//         navItem2.className = 'nav_item';
//         navItem3.className = 'nav_item';
//         tab1.style.visibility = 'visible';
//         tab2.style.visibility = 'hidden';
//         tab3.style.visibility = 'hidden';
//     }

// navItem1.onclick устарело, времена интернет ИЕ6, addEventListener на замену
// испльзуй classList вместо className
// tab1.style в данном примере лучше не испльзуй, лучше плюс минус класс, а стили задавать в CSS. это инлайновые стили, в задании разве указано?

//     navItem2.onclick = function(){
//         this.className = 'item_active nav_item';
//         navItem1.className = 'nav_item';
//         navItem3.className = 'nav_item';
//         tab2.style.visibility = 'visible';
//         tab1.style.visibility = 'hidden';
//         tab3.style.visibility = 'hidden';
//     }

//     navItem3.onclick = function(){
//         this.className = 'item_active nav_item';
//         navItem1.className = 'nav_item';
//         navItem2.className = 'nav_item';
//         tab3.style.visibility = 'visible';
//         tab2.style.visibility = 'hidden';
//         tab1.style.visibility = 'hidden';
// }