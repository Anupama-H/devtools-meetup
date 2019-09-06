const resultsDiv = document.querySelector(".results");
const fetchUserBtn = document.querySelector(".fetch-user-btn");
const fetchCommentBtn = document.querySelector(".fetch-comment-btn");
const fetchTodoBtn = document.querySelector(".fetch-todo-btn");

const fetchData = function (url) {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        resultsDiv.innerText = JSON.stringify(json);
    })
}

fetchUserBtn.addEventListener("click", function() {
    fetchData("https://jsonplaceholder.typicode.com/users");
});

fetchCommentBtn.addEventListener("click", function() {
    fetchData("https://jsonplaceholder.typicode.com/comments");
});

fetchTodoBtn.addEventListener("click", function() {
    fetchData("https://jsonplaceholder.typicode.com/todos");
});



