const resultsDiv = document.querySelector(".results");

/** Closures */

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { 
//         resultsDiv.innerHTML += "<br/>" + i;
//     }, i * 1000 );
// }

/** off by one bug */
// const fruits = ["Banana"];
// if (fruits.length > 1) {
//     resultsDiv.innerText = "Have enough fruits";
// } else {
//     resultsDiv.innerText = "Fruits are not there";
// }

/** Conditional breakpointing */


/** what is the value of "this" */

// const hero = {
//     _name: "John",
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// const stoleSecretIdentity = hero.getSecretIdentity;

// resultsDiv.innerHTML += "<br/> Secret identity is " + stoleSecretIdentity();


/** one more "this" example */
// var length = 10;
// function outputLength() {
// 	resultsDiv.innerHTML += "<br/> Length is " + this.length;
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn(); // make it print 5
//     // arguments[0]();
//   }
// };

// obj.method(outputLength, 1);

/** What does this return? */
// function getFruitsCount()
// {
//   return
//   {
//       banana: 2
//   };
// }

// const fruitsCount = getFruitsCount();
// resultsDiv.innerHTML += "<br/> Function value is " + fruitsCount;


