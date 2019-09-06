const a = 100;
const resultsDiv = document.querySelector(".results");

// window.onerror = function(message, source, lineNo, colNo) {
//     console.error("Error '" + message + "' from window event on line " +  lineNo + ", column " + colNo);
// }

// const result = a / b;
// resultsDiv.innerText = "Result is " + result;

try {
    const result = a / b;
    resultsDiv.innerText = "Result is " + result;
}
catch ( e ) {
    console.error("Caught an error: " + e );
}
