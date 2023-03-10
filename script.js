/* ---- TARGETS && INITIALIZERS ---- */
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "ribs",
    category: "dinner",
    price: 19.99,
    img: "./images/item-9.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 10,
    title: "steak",
    category: "dinner",
    price: 25.99,
    img: "./images/item-10.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
];

const menuWrapper = document.querySelector(".menu-wrapper");
const btnContainer = document.querySelector(".btn-container");

/* ---- FUNCTIONS ---- */

// Reduce unique categories from menu data for dynamic buttons
const categories = menu.reduce(
  function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
);

// Map/load buttons
const categoryBtns = categories
  .map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  })
  .join("");

btnContainer.innerHTML = categoryBtns;
const filterBtns = document.querySelectorAll(".filter-btn");

// Filter buttons functionality
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const category = event.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenu(menu);
    } else {
      displayMenu(menuCategory);
    }
  });
});

// Map/load menu
function displayMenu(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
             <div class="item-info">
                <header>
                 <h4>${item.title}</h4>
                 <h4 class="price">&dollar; ${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
             </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");

  menuWrapper.innerHTML = displayMenu;
}

// Call load menu function
displayMenu(menu);
