

var currentScene = 0;
var changeScene = function(decision){
	if (currentScene == 0) {
		currentScene = 1;
	}else if (currentScene == 1){
		currentScene = decision==1?2:3;
	}else if(currentScene == 2){
		currentScene = decision==1?4:5;
	}else if(currentScene == 3){
		currentScene = decision==1?6:7;
	}else if(currentScene == 4){
		currentScene = decision==1?8:5;
	}else if(currentScene == 7){
		currentScene = decision==1?8:6;
	}

	document.getElementById("sceneimg").src="scene"+currentScene+".png";

}