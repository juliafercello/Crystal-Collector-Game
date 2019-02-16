
//Main game object
var crystalCollector = {
    wins: 0,
    losses: 0,
    score: 0,
    numberToMatch: 0,
    gemMinRange: 1,
    gemMaxRange: 12,
    numMinRange: 19,
    numMaxRange: 120,

    generateRandomNumber: function (minNum, maxNum) {
        var randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        return randomNumber;
    },

    assignNumberToGems: function () {
        //for each item in the gem class, generate a random number between 1 and 12 and assign to its data-gemvalue attribute.
        $(".gem").each(function (index) {
            var gemValue = crystalCollector.generateRandomNumber(crystalCollector.gemMinRange, crystalCollector.gemMaxRange);
            $(this).attr("data-gemValue", gemValue);
            console.log("gem: " + index + " " + gemValue);
        });
    },

    //pick a random number between 19 and 120 and display on the page 
    assignNumberToMatch: function() {
        crystalCollector.numberToMatch = crystalCollector.generateRandomNumber(crystalCollector.numMinRange,  crystalCollector.numMaxRange);
        $("#numToMatch").text( crystalCollector.numberToMatch); 
    },

    updateScore: function(pointsToAdd) {
        crystalCollector.score += pointsToAdd; 
        $("#sumOfGems").text(crystalCollector.score); 
    },

    checkScore: function() { 
        if (crystalCollector.score === crystalCollector.numberToMatch) {
            alert("you win");
        }
        else if (parseInt(crystalCollector.score) > parseInt(crystalCollector.numberToMatch)) {
            alert("you lose");
        }; 
    }

}
//Reset Score to Zero
//resetScore: function () {
//    this.score = 0;
// document.getElementById("userScore").innerHTML = wordGuess.score;
//Reset Tries to 12
//resetTries: function () {
//   this.tries = 12;
//  document.getElementById("tries").innerHTML = wordGuess.tries;
// },

//Run the Game!!
$(document).ready(function () {

    crystalCollector.assignNumberToGems();
    crystalCollector.assignNumberToMatch(); 
    //crystalCollector.updateScore(3); 

    $(".gem").on("click", function() {
        var belle = parseInt($(this).attr("data-gemValue")); 
        crystalCollector.updateScore(belle); 
        crystalCollector.checkScore(); 
    }); 

});

//Determine if the letter is in the word
//document.onkeyup = function (event) {
//    var keyPress = event.key;
 //   if (wordToGuess.includes(keyPress)) {
        //then loop through the blanks and replace with the letter in the correct spot(s)
   //     for (var i = 0; i < wordToGuess.length; i++) {
     //       if (keyPress === wordToGuess.charAt(i)) {
       //         wordGuess.rightLetters[i] = wordToGuess.charAt(i);
         //       wordGuess.showWord();
           // }
//         }
//         //check to see if they won
//         var stillGuessing = wordGuess.rightLetters.includes("_ ");
//         if (stillGuessing === false) {
//             //show the matching animal
//             var modalTitleWin = "Great Guess!!"
//             wordGuess.animalImageSource(modalTitleWin);
//             //increase score and reset with a new word.
//             wordGuess.increaseScore();
//             wordGuess.resetTries();
//             wordGuess.resetLetters();
//             wordToGuess = wordGuess.currentWord();
//             wordGuess.prepGuesses();
//         }
//     }
//     else { //no match
//         wordGuess.addGuessedLetter(keyPress.toUpperCase());
//         //check to see if they lost and if so, restart the game.
//         if (wordGuess.tries === 0) {
//             var modalTitleLose = "GAME OVER!!"
//             wordGuess.animalImageSource(modalTitleLose);
//             wordGuess.resetScore();
//             wordGuess.resetTries();
//             wordGuess.resetLetters();
//             wordToGuess = wordGuess.currentWord();
//             wordGuess.prepGuesses();
//         }
//     }

// }