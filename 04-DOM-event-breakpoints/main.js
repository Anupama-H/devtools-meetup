const resultsDiv = document.querySelector(".results");
const modifyAttrBtn = document.querySelector(".modify-attr-btn");
const removeNodeBtn = document.querySelector(".remove-node-btn");

/** DOM & Event breakpoints */
modifyAttrBtn.addEventListener("click", function() {
    resultsDiv.setAttribute("data-random", Math.random() * 100);
});

removeNodeBtn.addEventListener("click", function() {
    const parent = resultsDiv.parentNode;
    parent.removeChild(resultsDiv);
});


const startTimer = function() {
    var count = 1;
    var i = setInterval(function() {
        var el = document.querySelector(".timer");
        if (!el) clearInterval(i);
        el.innerHTML = ++count;
    }, 1000);
};

startTimer();



