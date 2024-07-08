const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "CAT TRUCK",
        images: "CAT truc.png",
        price: 3000,
    },
    {
        id: 2,
        name: "Dolls",
        images: "dolls.webp",
        price: 2000,
    },
    {
        id: 3,
        name: "Race Car",
        images: "race car.png",
        price: 1000,
    },
    {
        id: 4,
        name: "Table Tennis Racket",
        images: "TT racket.png",
        price: 3000,
    },
    {
        id: 5,
        name: "Figurines",
        images: "figurerines.png",
        price: 500,
    },
    {
        id: 6,
        name: "Bricks",
        images: "building brick.png",
        price: 3000,
    },
    {
        id: 7,
        name: "Monster truck",
        images: "monster truck.png",
        price: 3000,
    },
    {
        id: 8,
        name: "Cards",
        images: "playing-cards.png",
        price: 300,
    },
    {
        id: 9,
        name: "Puzzles",
        images: "puzzel.webp",
        price: 5000,
    },
];

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src="img/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
};

initApp();

const addToCard = (key) => {
    if (!listCards[key]) {
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity += 1;
    }
    reloadCard();
};

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((item, key) => {
        if (item) {
            totalPrice += item.price * item.quantity;
            count += item.quantity;

            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="img/${item.images}"></div>
                <div class="cardTitle">${item.name}</div>
                <div class="cardPrice">${(item.price * item.quantity).toLocaleString()}</div>
                <div>
                    <button style="background-color: #560bad" class="cardButton" onClick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
                    <div class="count">${item.quantity}</div>
                    <button style="background-color: #560bad" class="cardButton" onClick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};

const changeQuantity = (key, newQuantity) => {
    if (newQuantity <= 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
    }
    reloadCard();
};


document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.slide-in-image');
    // Remove visibility hidden to ensure the image can be animated
    image.style.visibility = 'visible';
    // Trigger a reflow to restart the animation
    void image.offsetWidth;
    // Add the animation class
    image.style.animation = 'slideIn 1s ease-in-out forwards';
});