var blueScore = 8;
		var redScore = 9;
		
		function colorRed(red){
  			document.getElementById(red).style.color = "white"; // forecolor
			document.getElementById(red).style.backgroundColor = "red"; // backcolor
			document.getElementById("redScore").innerHTML = redScore - 1;
			redScore = redScore - 1;
			document.getElementById("playerTurn").innerHTML = "red's turn";
			document.getElementById("playerTurn").style.color = "red";
			if (redScore == 0 && blueScore > 0){
				alert("RED WON!");
			}
		}
		function colorBlue(blue){
  			document.getElementById(blue).style.color = "white"; // forecolor
  			document.getElementById(blue).style.backgroundColor = "blue"; // backcolor
			document.getElementById("blueScore").innerHTML = blueScore - 1 + " - ";
			blueScore = blueScore - 1;
			document.getElementById("playerTurn").innerHTML = "blue's turn";
			document.getElementById("playerTurn").style.color = "blue";
			if (blueScore == 0 && redScore > 0){
				alert("BLUE WON!");
			}
			
		}
		function colorTan(tan){
  			document.getElementById(tan).style.color = "white"; // forecolor
  			document.getElementById(tan).style.backgroundColor = "#fff0c7"; // backcolor
			if(document.getElementById("playerTurn").innerHTML == "red's turn"){
				document.getElementById("playerTurn").innerHTML = "blue's turn";
				document.getElementById("playerTurn").style.color = "blue";
			}else{
				document.getElementById("playerTurn").innerHTML = "red's turn";
				document.getElementById("playerTurn").style.color = "red";
			}
			
		}
		function colorBlack(black){
  			document.getElementById(black).style.color = "white"; // forecolor
  			document.getElementById(black).style.backgroundColor = "black"; // backcolor
			alert("GAME OVER");
		}
		