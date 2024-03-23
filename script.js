const maxNum = 100;
const minNum = 1;
const answer = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum
const label = document.getElementById("myLabel");
const submit = document.getElementById("submit");
let attempts = 1;
let running = true;
console.log(answer);

submit.onclick = function () {
    const guess = parseInt(document.getElementById("guess").value);
    switch (running) {
        case (guess < 1 || guess > 100):
            label.textContent = `Between 1 - 100!!!`;
            label.style.color = `red`;
            break;
        case (guess > answer):
            label.textContent = `Too High!`;
            label.style.color = `red`;
            break;
        case (guess < answer):
            label.textContent = `Too Low!`
            label.style.color = `red`;
            break;
        case (guess == answer):
            label.textContent = `Cool! It took you ${attempts} tries to get the answer`;
            label.style.color = `green`;
            running = false;
            break;
    }
    attempts++;
}