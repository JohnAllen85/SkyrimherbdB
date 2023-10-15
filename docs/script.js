function Menu_Control (which) {
	var ele_root_min = document.getElementById('menu_root_min');
	var ele_root_max = document.getElementById('menu_root_max');
	var ele_main_menu = document.getElementById('main_menu');
	var ele_ingredient = document.getElementById('ingredients');
	var ele_effects = document.getElementById('effects');
	var ele_recipes = document.getElementById('recipes');
	if (which == 0){
		ele_root_min.style.left="-250px";
		ele_root_max.style.left="0px";
		ele_main_menu.style.left="-250px";
		ele_ingredient.style.left="-250px";
		ele_effects.style.left="-250px";
		ele_recipes.style.left="-250px";
	}
	else if (which == 1){
		ele_root_min.style.left="0px";
		ele_root_max.style.left="-250px";
		ele_main_menu.style.left="29px";
		ele_ingredient.style.left="-250px";
		ele_effects.style.left="-250px";
		ele_recipes.style.left="-250px";
	}
	else if (which == 2){
		ele_ingredient.style.left="128px";
		ele_effects.style.left="-250px";
		ele_recipes.style.left="-250px";
	}
	else if (which == 3){
		ele_ingredient.style.left="-250px";
		ele_effects.style.left="128px";
		ele_recipes.style.left="-250px";
	}
	else if (which == 4){
		ele_ingredient.style.left="-250px";
		ele_effects.style.left="-250px";
		ele_recipes.style.left="128px";
	}
	return false;
}

function Filter_Update(){
	var checked_skyrim = document.getElementById("filter_skyrim").checked;
	var checked_hearthfire = document.getElementById("filter_hearthfire").checked;
	var checked_dawnguard = document.getElementById("filter_dawnguard").checked;
	var checked_dragonborn = document.getElementById("filter_dragonborn").checked;
	var checked_cc = document.getElementById("filter_cc").checked;
	var ing_sky = document.getElementsByClassName("ing_skyrim");
	var ing_daw = document.getElementsByClassName("ing_dawnguard");
	var ing_hea = document.getElementsByClassName("ing_hearthfire");
	var ing_dra = document.getElementsByClassName("ing_dragonborn");
	var ing_cc = document.getElementsByClassName("ing_cc");
	if (checked_skyrim){
		for (var i = 0; i < ing_sky.length; i++) {
			ing_sky[i].classList.remove('hide_row');
		}
	}
	else {
		for (var i = 0; i < ing_sky.length; i++) {
			ing_sky[i].classList.add('hide_row');
		}
	}
	if (checked_hearthfire){
		for (var i = 0; i < ing_hea.length; i++) {
			ing_hea[i].classList.remove('hide_row');
		}
	}
	else {
		for (var i = 0; i < ing_hea.length; i++) {
			ing_hea[i].classList.add('hide_row');
		}
	}
	if (checked_dawnguard){
		for (var i = 0; i < ing_daw.length; i++) {
			ing_daw[i].classList.remove('hide_row');
		}
	}
	else {
		for (var i = 0; i < ing_daw.length; i++) {
			ing_daw[i].classList.add('hide_row');
		}
	}
	if (checked_dragonborn){
		for (var i = 0; i < ing_dra.length; i++) {
			ing_dra[i].classList.remove('hide_row');
		}
	}
	else {
		for (var i = 0; i < ing_dra.length; i++) {
			ing_dra[i].classList.add('hide_row');
		}
	}
	if (checked_cc){
		for (var i = 0; i < ing_cc.length; i++) {
			ing_cc[i].classList.remove('hide_row');
		}
	}
	else {
		for (var i = 0; i < ing_cc.length; i++) {
			ing_cc[i].classList.add('hide_row');
		}
	}
}