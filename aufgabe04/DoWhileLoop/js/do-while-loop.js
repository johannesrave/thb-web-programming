let answer = document.getElementById("answer");
answer.innerHTML = "1";

let i = 1;
const timer = setInterval(() => {
    i++;
    answer.innerHTML = "" + i;
    if (i >= 5) {
        clearInterval(timer);
        answer.style.color = "green";
        answer.style.transformOrigin = "center";
        answer.style.transform = "scale(2, 2)";
    }
}, 1000);


