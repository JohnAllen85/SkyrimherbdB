    function showHerbMenu(whichmenu, behavior){
	if (whichmenu == 0){
		if (behavior == 0){
			document.getElementById('hiddenHerb1').style.left="-250px";
			document.getElementById('hiddenHerb2').style.left="-250px";
			document.getElementById('hiddenHerb3').style.left="-250px";
		}
	}
    else if (whichmenu == 1) {
          var ele=document.getElementById('hiddenHerb1');
          var left = ele.offsetLeft;
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
          var ele=document.getElementById('hiddenHerb2');
          var left = ele.offsetLeft;
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
          var ele=document.getElementById('hiddenHerb3');
          var left = ele.offsetLeft;
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
