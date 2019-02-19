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

    //returns a random number between the provided min and max parameters
    generateRandomNumber: function (minNum, maxNum) {
        var randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        return randomNumber;
    },

    //for each item in the gem class, generate a random number between 1 and 12 and assign to its data-gemvalue attribute.
    assignNumberToGems: function () {
        $(".gem").each(function (index) {
            var gemValue = crystalCollector.generateRandomNumber(crystalCollector.gemMinRange, crystalCollector.gemMaxRange);
            $(this).attr("data-gemValue", gemValue);
            //console.log("gem: " + index + " " + gemValue);
        });
    },

    //pick a random number between 19 and 120 and display on the page 
    assignNumberToMatch: function () {
        crystalCollector.numberToMatch = crystalCollector.generateRandomNumber(crystalCollector.numMinRange, crystalCollector.numMaxRange);
        $("#numToMatch").text(crystalCollector.numberToMatch);
    },

    //Each click on a gem, update the score based on the gem's value (sent as a parameter)
    updateScore: function (pointsToAdd) {
        crystalCollector.score += pointsToAdd;
        $("#sumOfGems").text(crystalCollector.score);
    },

    //Each click on a gem, check to see if score is the number to match or is greater than number to match
    checkScore: function () {
        var isRoundOver = false;
        //if user wins the round, increase score and display on page
        if (crystalCollector.score === crystalCollector.numberToMatch) {
            crystalCollector.wins++;
            isRoundOver = true;
        }

        //if user loses the round, increase losses and display on page
        else if (parseInt(crystalCollector.score) > parseInt(crystalCollector.numberToMatch)) {
            crystalCollector.losses++;
            isRoundOver = true;
        };

        //if the round is over, reset the gems and number to match
        if (isRoundOver === true) {
           crystalCollector.startNewRound(); 
        };
    },

    startNewRound: function(){
        crystalCollector.assignNumberToGems();
        crystalCollector.assignNumberToMatch();
        crystalCollector.score = 0;
        $("#numOfWins").text("Wins: " + crystalCollector.wins);
        $("#numOfLosses").text("Losses: " + crystalCollector.losses);
        $("#sumOfGems").text(crystalCollector.score);
    }
}

//Play the Game!!
$(document).ready(function () {

    crystalCollector.assignNumberToGems();
    crystalCollector.assignNumberToMatch();

    $(".gem").on("click", function () {
        var gemPoints = parseInt($(this).attr("data-gemValue"));
        crystalCollector.updateScore(gemPoints);
        crystalCollector.checkScore();
    });
});
