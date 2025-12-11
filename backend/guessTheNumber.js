const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guessButton").addEventListener("click", function() {

    const guess = Number(document.getElementById("guessInput").value); 
    attempts++;

    if (guess === secretNumber) 
    {
        document.getElementById("feedback").textContent = 
            `Tillykke!🥳 Du gættede rigtigt på ${attempts} forsøg!🏆 Tallet var ${secretNumber}.`;
        document.getElementById("winImage").style.display = "block";
    } 
    else if (guess < secretNumber) 
    {
        document.getElementById("feedback").textContent = 
            "For lavt desværre!😢";
    } 
    else 
    {
        document.getElementById("feedback").textContent = 
            "For højt desværre!😢";
    }
});


function backButton(){
    window.location.href = "categories.html"
}