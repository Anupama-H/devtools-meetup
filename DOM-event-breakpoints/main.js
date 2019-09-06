const resultsDiv = document.querySelector(".results");
const modifyTextBtn = document.querySelector(".modify-txt-btn");
const modifyAttrBtn = document.querySelector(".modify-attr-btn");
const removeNodeBtn = document.querySelector(".remove-node-btn");

/** DOM & Event breakpoints */
modifyTextBtn.addEventListener("click", function() {
    resultsDiv.innerText = "Random number " + Math.random() * 100;
});

modifyAttrBtn.addEventListener("click", function() {
    resultsDiv.setAttribute("data-random", Math.random() * 100);
});

removeNodeBtn.addEventListener("click", function() {
    const parent = resultsDiv.parentNode;
    parent.removeChild(resultsDiv);
});



