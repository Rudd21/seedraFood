// let products = document.querySelector(".products")
// let sort = document.querySelector(".sort");
// let rain = document.querySelector(".rain-sort")

let sortText = document.querySelectorAll('.sort-text')
let cardProducts = document.querySelectorAll(".product")
let allCard = document.getElementById("allCards").innerText.toLowerCase();
let sortItem = document.querySelectorAll(".sort-item")

for (let hashtag of sortText) {

    hashtag.addEventListener('click', function() {
        for (let card of cardProducts) {
            card.style.opacity = "1";
        }
        for (let card of cardProducts) {
            let cardHashtag = card.dataset.hashtag.toLowerCase().split(/[,]+/);
            if (hashtag.innerText.toLowerCase() == allCard) {
                card.style.display = "block";
                card.style.opacity = "1";
            } else {

                if (cardHashtag.includes(hashtag.innerText.toLowerCase())) {
                    card.style.display = "block";


                } else {
                    card.style.display = "none";
                }
            }
        }
    })
}

// function toggleStyle(sortItem, background, blue) {
//     sortItem.style[background] = blue;
// }
// sortItem.addEventListener("click", function() {
//     toggleStyle();
// })




//                             11111111111111111
// let heart = document.querySelector(".heart");
// heart.dataset.heart = no;
// alert(heart.dataset.heart);

let hearts = document.querySelectorAll(".heart");
let click = 1;
let products = document.querySelectorAll(".product");
for (let heart of hearts) {
    for (let product of products) {
        heart.addEventListener('click', function() {
            if (click == 1) {
                heart.style.backgroundImage = "url('img/Outline-add.png')";
                product.dataset.heart = "yes";
                click = click + 1;
            } else if (click == 2) {
                heart.style.backgroundImage = "url('img/Outline-yellow.png')";
                product.dataset.heart = "no";
                click = click - 1;
            }
        })
    }
}
let sortHeart = document.querySelector(".sort-heart");
sortHeart.addEventListener('click', function() {
    for (let heart of hearts) {
        for (let product of products) {
            if (product.dataset.heart == "yes") {
                // product.style.display = "block";
                // product.style.opacity = "1";
                product.style.background = "red";


            } else if (heart.dataset.heart == "no") {
                // product.style.display = "none";
                // product.style.opacity = "0";
                product.style.background = "grey";
            }
            alert(product.dataset.heart)
            break
        }
        // alert(heart.dataset.heart)
    }

})