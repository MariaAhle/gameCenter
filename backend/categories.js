let playerName = localStorage.getItem("playerName");

if (!playerName) {
    window.location.href = "index.html";
} else {
    
    let formattedName = playerName.charAt(0).toUpperCase() + playerName.slice(1);

    document.getElementById("welcomeText").textContent =
    "Welcome, " + formattedName + "! Choose a game from the categories below"
}

function updateTimestamp() {
    const now = new Date();
    const formatted = now.toLocaleString();
    document.getElementById("timestamp").textContent = "Current date and time: " + formatted;
}

updateTimestamp();
setInterval(updateTimestamp, 1000);

function goToStartSite(){
    window.location.href = "index.html"
}

function toToGuessTheNumber(){
    window.location.href = "guessTheNumber.html"
}

function toToRockPaperScissors(){
    window.location.href = "rockPaperScissors.html"
}

function toToSimpleQuiz(){
    window.location.href = "simpleQuiz.html"
}

function toToCounterClicker(){
    window.location.href = "counterClicker.html"
}

function toToCoinFlipSimulator(){
    window.location.href = "coinFlipSimulator.html"
}

function toToSimpleHangman(){
    window.location.href = "simpleHangman.html"
}

function toToSimpleDiceRoll(){
    window.location.href = "simpleDiceRoll.html"
}




