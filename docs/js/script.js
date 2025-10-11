function showHerbMenu(whichmenu, behavior){
	var left;
	var ele;
	if (whichmenu == 0){
		if (behavior == 0){
			document.getElementById('hiddenHerb1').style.left="-250px";
			document.getElementById('hiddenHerb2').style.left="-250px";
			document.getElementById('hiddenHerb3').style.left="-250px";
		}
	}
    else if (whichmenu == 1) {
        ele=document.getElementById('hiddenHerb1');
        left = ele.offsetLeft;
        if (left == 100 && (behavior == 0 || behavior == 2)){
            ele.style.left="-250px";
        }
		else if (behavior == 1 || behavior == 2){
            ele.style.left="100px";
            document.getElementById('hiddenHerb2').style.left="-250px";
            document.getElementById('hiddenHerb3').style.left="-250px";
        }
    }
    else if (whichmenu == 2) {
        ele=document.getElementById('hiddenHerb2');
        left = ele.offsetLeft;
        if (left == 100 && (behavior == 0 || behavior == 2)){
            ele.style.left="-250px";
        }
        else if (behavior == 1 || behavior == 2){
            ele.style.left="100px";
            document.getElementById('hiddenHerb1').style.left="-250px";
            document.getElementById('hiddenHerb3').style.left="-250px";
        }
    }
    else if (whichmenu == 3) {
        ele=document.getElementById('hiddenHerb3');
        left = ele.offsetLeft;
        if (left == 100 && (behavior == 0 || behavior == 2)){
            ele.style.left="-250px";
        }
        else if (behavior == 1 || behavior == 2){
            ele.style.left="100px";
            document.getElementById('hiddenHerb1').style.left="-250px";
            document.getElementById('hiddenHerb2').style.left="-250px";
        }
    }
      else {
        document.getElementById('hiddenHerb1').style.left="-250px";
        document.getElementById('hiddenHerb2').style.left="-250px";
        document.getElementById('hiddenHerb3').style.left="-250px";
    }
	return false;
}


function ShowIngredients(whichClicked){
	var checkboxFromID;
	var trList;
	var tdList;

	if (whichClicked == 1){
		checkboxFromID = document.getElementById('ViewCreationClub');
		trList = document.querySelectorAll("tr.creationClub");
		tdList = document.querySelectorAll("td.creationClub");
	}
	else if (whichClicked == 2){
		checkboxFromID = document.getElementById('ViewQuest');
		trList = document.querySelectorAll("tr.quest");
		tdList = document.querySelectorAll("td.quest");
	}
	else if (whichClicked == 3){
		checkboxFromID = document.getElementById('ViewVanilla');
		trList = document.querySelectorAll("tr.vanilla");
		tdList = document.querySelectorAll("td.vanilla");
	}
	
	var update = !checkboxFromID.checked;
	
	trList.forEach((tableRow) => {
				tableRow.hidden=update;
	});
	
	tdList.forEach((tableCell) => {
				tableCell.hidden=update;
	});
}

/*
function ShowIngredients(whichClicked){
	var elementFromID;
	var elementList;
	var update;
	if (whichClicked == 1){
		elementFromID = document.getElementById('ViewCreationClub');
		if (elementFromID.checked){
			elementList = document.querySelectorAll("tr.creationClub");
			elementList.forEach((tableRow) => {
				tableRow.hidden=false;
			});
			elementList = document.querySelectorAll("td.creationClub");
			elementList.forEach((tableCell) => {
				tableCell.hidden=false;
			});
		}
		else {
			elementList = document.querySelectorAll("tr.creationClub");
			elementList.forEach((tableRow) => {
				tableRow.hidden=true;
			});
			elementList = document.querySelectorAll("td.creationClub");
			elementList.forEach((tableCell) => {
				tableCell.hidden=true;
			});
		}
	}
	else if (whichClicked == 2){
		elementFromID = document.getElementById('ViewQuest');
		if (elementFromID.checked){
			elementList = document.querySelectorAll("tr.quest");
			elementList.forEach((tableRow) => {
				tableRow.hidden=false;
			});
			elementList = document.querySelectorAll("td.quest");
			elementList.forEach((tableCell) => {
				tableCell.hidden=false;
			});
		}
		else {
			elementList = document.querySelectorAll("tr.quest");
			elementList.forEach((tableRow) => {
				tableRow.hidden=true;
			});
			elementList = document.querySelectorAll("td.quest");
			elementList.forEach((tableCell) => {
				tableCell.hidden=true;
			});
		}
	}
}
*/
