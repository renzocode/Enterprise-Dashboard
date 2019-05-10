(function(root, factory){
	if(typeof define === 'function' && define.amd){
		define([], factory);
		console.log( factory());
	}else if(typeof module === 'object' && module.exports){
		console.log("module : " +factory());
	    module.exports = factory();
	}else{
		console.log(factory());

		var bsn = factory();
	}
}(this, function(){
	//console.log(this.process.env);
		"use strict";
		var globalObject = typeof global !== 'undefined' ? global : this||window,
    	DOC = document, HTML = DOC.documentElement, body = 'body',
    	BSN = globalObject.BSN = {},
    	supports = BSN.supports = [];
	

		var navigation_menu_id = document.getElementById("navigation-menu-id");
		var sticky =  navigation_menu_id.offsetTop;

		var left_content_id_1block = document.getElementById("left-content-id");
		var sticky1 = left_content_id_1block.offsetTop;

		var main_content_id =  document.getElementById("main-content-id");

		var title_block_id = document.getElementById("title-block-id").offsetHeight;
		var section_block_id = document.getElementById("section-block-id").offsetHeight;
		var high_left_content = (title_block_id + section_block_id) - navigation_menu_id.offsetHeight;

		var width_left = document.querySelector('.col-2');
		var measure_width = window.getComputedStyle(width_left);
		var col_left_id = document.getElementById('col-left-id');
		var col_main_id = document.getElementById('col-main-id');

		var functionSticky = function(){

			console.log("title-block-id : " + title_block_id);
			console.log("title-section-id : " + section_block_id);
			console.log("navigation-menu-id : " +  navigation_menu_id.offsetHeight);

			console.log("pageYoffset : " + window.pageYOffset + " high_left_content : " + high_left_content);
			if(window.pageYOffset > sticky-1){
				navigation_menu_id.classList.add("sticky");
				if(window.pageYOffset > high_left_content && window.pageYOffset > section_block_id - 9){
					//>256
					//col_main_id.style.marginLeft = 225 + "px";
					console.log("col-main : " + col_main_id.style.marginLeft);

					left_content_id_1block.classList.add("sticky-left-side");					
					main_content_id.classList.add("add-to-main-content");
					console.log(window.pageYOffset + "--- >656");
					/*
					if(window.pageYOffset > 656){
						left_content_id_1block.style.height = 581 - (window.pageYOffset - 658) + "px";
					}else{
						left_content_id_1block.style.height = 100 + "%";
					}
					*/
				}else{
					col_main_id.style.marginLeft = 0 + "px";
					left_content_id_1block.classList.remove("sticky-left-side");
					main_content_id.classList.remove("add-to-main-content")
				}
			}else{
				navigation_menu_id.classList.remove("sticky");
			}
			
		};

		var stickyleft = function (){
				var left_content_id_1block = document.getElementById("left-content-id");
				left_content_id_1block.classList.add("sticky-left-side1");
		};

		return {
			functionSticky : functionSticky	
		}
}));


