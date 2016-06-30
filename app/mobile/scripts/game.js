var home_score = 0;
var away_score = 0;

$(document).ready(function () {
    $(".vote__group--button").click(function () {
        $("#predict-board").slideDown();
    });
});

$(document).ready(function () {
    $("#home-score").text(home_score);
    $("#away-score").text(away_score);
});

function increaseHome() {
    home_score++;
    $("#home-score").text(home_score);
    if (home_score > 0) {
        $("#home-decrease").removeClass("disabled");
    }

}
function decreaseHome() {
    if (home_score > 0) {
        home_score--;
    }
    if (home_score == 0) {
        $("#home-decrease").addClass("disabled");
    }
    $("#home-score").text(home_score);

}

function increaseAway() {
    away_score++;
    $("#away-score").text(away_score);
    if (away_score > 0) {
        $("#away-decrease").removeClass("disabled");
    }

}

function decreaseAway() {
    if (away_score > 0) {
        away_score--;
    }
    if (away_score == 0) {
        $("#away-decrease").addClass("disabled");
    }
    $("#away-score").text(away_score);
}
