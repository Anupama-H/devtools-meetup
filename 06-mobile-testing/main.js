const resultsDiv = document.querySelector(".results");
const userAgent = document.querySelector(".user-agent");

document.addEventListener("touchstart", function() {
    resultsDiv.innerHTML += "<br />Touch Start Event";
});

document.addEventListener("click", function() {
    resultsDiv.innerHTML += "<br />Click Event";
});

userAgent.innerText = navigator.userAgent;


