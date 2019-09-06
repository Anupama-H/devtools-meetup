var resultsDiv = document.querySelector(".results");

/* Inspecting scope variables */
/** Example 1 */
// var a = 20;

// function foo() {
//     resultsDiv.innerHTML = "Starting execution";
//     a = 10;
//     resultsDiv.innerHTML += "<br/>Value of 'a' is <b>" + a + "<b>";
//     return;
//     function a() {}
// }

// foo();
// resultsDiv.innerHTML += "<br/>Value of 'a' after execution is <b>" + a + "<b>";

/** Example 2 */
// (function () {
//     console.log("BEGIN");
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         resultsDiv.innerHTML += "<br/>Value of x inside catch block is " + x;
//     }
//     resultsDiv.innerHTML += "<br/>Value of x is " + x;
//     resultsDiv.innerHTML += "<br/>Value of y is " + y;
// })();