const resultsDiv = document.querySelector(".results");

function addDiscount(discount, obj = {}) {
    let discountedPrice = obj.price - (obj.price * discount / 100);
    resultsDiv.innerHTML += "<br/>Price: " + obj.price + ", Discounted price is " + discountedPrice;
}

addDiscount(20, {
    price: 100
});

addDiscount(10, {
    price: 200
});

addDiscount(50);




