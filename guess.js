let guessno = document.getElementById("mytext");
let mes1 = document.getElementById("mes1");
let mes2 = document.getElementById("mes2");
let mes3 = document.getElementById("mes3");
let q = document.getElementById("submit");
let w = document.getElementById("tryagain");
let e = document.getElementById("ng");
let r = document.getElementById("lol");
let t = document.getElementById("play");
let c = 0;
let i = 1;
let z;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function assignint() {
    c = getRandomInt(1, 100);
}
function guess() {
    let gno = parseInt(guessno.value);
    z = gno;
    if (gno === c) {
        mes1.textContent = "Congratulations! You guessed " + c + " correctly!";
        i=1;
        assignint();
        console.log("Correct answer is: "+c);
        e.style.display = 'block';
        q.style.display = 'none';
    }
    else if (gno > c) {
        mes1.textContent = "Try a bit lower!";
    }
    else if (gno < c) {
        mes1.textContent = "Try a bit higher!";
    }
    if (i==11) {
        mes1.textContent = "Out of attempts... Try Again!";
        i = 1;
        assignint();
        console.log("Correct answer is: "+c);
        w.style.display = 'block';
        q.style.display = 'none';
    }
}

function clero() {

        guessno.value = "";

}
document.addEventListener("DOMContentLoaded", function(){
    q.style.display = 'none';
    w.style.display = 'none';
    e.style.display = 'none';
    r.style.display = 'none';
    guessno.style.display = 'none';
})
document.getElementById("ng").addEventListener("click", function() {
    mes1.textContent = "Guess a number";
    e.style.display = 'none';
    q.style.display = 'block';
});

document.getElementById("tryagain").addEventListener("click", function() {
    mes1.textContent = "Guess a number";
    w.style.display = 'none';
    q.style.display = 'block';
});
document.getElementById("play").addEventListener("click", function() {
    assignint();
    console.log("Correct answer is: "+c);
    q.style.display = 'block';
    r.style.display = 'block';
    guessno.style.display = 'block';
    t.style.display = 'none';
});
function allguess(){
    i++;
    guess();
    if(isNaN(z)){
        mes1.textContent = "Please input a number to proceed with the game!";
        i--;
    }
    console.log(i-1);
    console.log("Guess " +(i-1)+ " is: "+ z);
    if(i!=1){
        mes3.textContent = "Attempt "+(i-1);
    }
    else{
        mes3.textContent = "";
    }
    if(i==11){
        mes1.textContent = "Try Again!";
    }
    clero();
}
document.getElementById("submit").addEventListener("click", function () {
    allguess();
});

document.getElementById("mytext").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        allguess();
    }
});