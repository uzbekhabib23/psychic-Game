// pseudo code



// Declare variables(player & comp)

// Declare variables for alphabets array

// some how make computer choose random alphabets

// player selects one of alphabets, whic updates guessed letter and also updates

// wins and how many attempts left

// code must able to read an event using onkeyup

// need algorithm to declare if player is winner or loser

// need algorithm to reset game.



// Declaring variables and initial values

var wins = 0;

var losses = 0;

var pGuesses = 10; 

var pGuessRemain = 10;

var pGuessUsed = [];

var letterToGuess = null;



// Declare variables for alphabets array

var pcLetterDb = ['a','b','c','d','e','f','g',

'h','i','j','k','l','m','n','o','p','q','r','s','t',

'u','v','w','x','y','z'];



//Before start of game, put memory in pc



var pcMemGuess = pcLetterDb[Math.floor(Math.random() * pcLetterDb.length)];



//update win, loose, playerguessremain, playedguessused, pc, player on playing



var updatePGuessRemain = function(){

	 document.querySelector('#remain').innerHTML = "Guesses Left: " + pGuessRemain;

	//console.log(reh); - to check value of updatePGuessRemain.

};



var updatePGuessUsed = function(){

	document.querySelector('#used').innerHTML = "Your Guesses so far: " + pGuessUsed.join(", ");

	//console.log(kuch); -- gets value for var if its assigned value is docu.query

};



var updateLetterToGuess = function(){

	this.letterToGuess = this.pcLetterDb[Math.floor(Math.random() * this.pcLetterDb.length)];

};



//Now reseting the game



var resetGame = function(){

	pGuesses = 10;

	pGuessRemain = 10;

	pGuessUsed = [];



	updatePGuessRemain();

	updatePGuessUsed();

	updateLetterToGuess();

}

	updatePGuessRemain();

	updateLetterToGuess();



var resetWholeGame = function(){

	wins = 0;

	losses = 0;

	pGuesses = 10; 

	pGuessRemain = 10;

	pGuessUsed = [];

	letterToGuess = null;

	document.querySelector('#win').innerHTML = "Wins: " + "";

	document.querySelector('#lost').innerHTML = "Losses: " + "";

}







//on pressing any key

document.onkeyup = function(event){

	pGuessRemain--;

	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase(); // also convert keystroke from any case to lower case.



	pGuessUsed.push(playerGuess);

	updatePGuessRemain();

	updatePGuessUsed();



	if (pGuessRemain> 0){



            if (playerGuess == letterToGuess){



                wins++;



                document.querySelector('#win').innerHTML = "Wins: " + wins;



                alert("Yes, you have psychic powers similar to mine!");



                resetGame();



            }



        }else if(pGuessRemain == 0){



            // Then we will loss and we'll update the html to display the loss 



            losses++;



            document.querySelector('#lost').innerHTML = "Losses: " + losses;



            alert("May be as of now, you do not have psychic powers like mine, please try again?");



            // Then we'll call the reset. 



            resetGame();



}



if(wins === 5){

	alert("You are winner!!!");

	resetWholeGame();

}

if(losses === 5){

	alert("You lost the game!")

	resetWholeGame();

}





};