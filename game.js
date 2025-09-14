let score = {
    win: Number(localStorage.getItem("win")) || 0,
    tie: Number(localStorage.getItem("tie")) || 0,
    loss: Number(localStorage.getItem("loss")) || 0,

    totalScore: function () {
        document.querySelector("#score").innerText =
            `Score : Wins = ${score.win}, Ties = ${score.tie}, Losses = ${score.loss}`;
    }
};

function botsMove() {
    let deviceChoice = Math.random() * 3;
    console.log(deviceChoice);
    if (deviceChoice <= 1) {
        return 'rock';
    }

    else if (deviceChoice > 1 && deviceChoice <= 2) {
        return 'paper';
    }

    else if (deviceChoice > 2 && deviceChoice <= 3) {
        return 'scissors';
    }
}


function result(mychoice) {

    const botsChoice = botsMove();
    document.querySelector("#botschoice").innerText = `Bots Choice : ${botsChoice}`;
    if (mychoice === botsChoice) {
        score.tie++;
        document.querySelector("#result").innerText = "Result : Its Tie";
    }
    else if (
        mychoice == 'rock' && botsChoice == 'scissors' ||
        mychoice == 'scissors' && botsChoice == 'paper' ||
        mychoice == 'paper' && botsChoice == 'rock'
    ) {
        score.win++;
        document.querySelector("#result").innerText = "Result : You Win";
    }
    else {
        score.loss++;
        document.querySelector("#result").innerText = "Result : You lose";

    }

    localStorage.setItem("win", score.win);
    localStorage.setItem("tie", score.tie);
    localStorage.setItem("loss", score.loss);

    score.totalScore();

}
score.totalScore();

function freshGame(){
    score.win = 0;
    score.tie = 0;
    score.loss = 0;

score.totalScore();
}

