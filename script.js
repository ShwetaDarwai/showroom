const items = [ 
    {
        id: 1,
        category: 'Car',
        img: 'car1.jpeg',
    },
    {
        id: 2,
        category: 'Car',
        img: 'car2.jpeg',
    },
    {
        id: 3,
        category: 'Bike',
        img: 'bike1.jpeg',
    },
    {
        id: 4,
        category: 'Bike',
        img: 'bike2.jpeg',
    },
    {
        id: 5,
        category: 'Mobile',
        img: 'mob1.jpeg',
    },
    {
        id: 6,
        category: 'Mobile',
        img: 'mob1.jpeg',
    }
];

const filterBtns = document.querySelectorAll(".filter-btn");
const center = document.querySelector(".center"); 
function displayAllItems(itemsToDisplay) {
    center.innerHTML = itemsToDisplay.map(item => `
        <div class="item">
            <img src="${item.img}" alt="${item.category}">
        </div>
    `).join('');
}

window.addEventListener("DOMContentLoaded", function() {
    displayAllItems(items);
});

filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        if (category === "All") {
            displayAllItems(items);
        } else {
            const itemsCategory = items.filter(item => item.category === category);
            displayAllItems(itemsCategory);
        }
    });
});