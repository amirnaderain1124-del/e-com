const products = [
  {
    id: "shoe",
    name: "Apex Carbon Lifter",
    category: "Shoes",
    price: 899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85",
    description: "Locked heel stability for maximal snatches, cleans, and squats."
  },
  {
    id: "sleeves",
    name: "Forge 7mm Knee Sleeves",
    category: "Support",
    price: 289,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=85",
    description: "Dense rebound and warmth for heavy receiving positions."
  },
  {
    id: "wraps",
    name: "Cerakote Wrist Wraps",
    category: "Support",
    price: 149,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=900&q=85",
    description: "Rigid front-rack and pressing support without bulky stitching."
  },
  {
    id: "singlet",
    name: "Competition Grade Singlet",
    category: "Apparel",
    price: 349,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=900&q=85",
    description: "Platform-approved compression fit for meet day."
  },
  {
    id: "shirt",
    name: "Redline Oversized Shirt",
    category: "Apparel",
    price: 189,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=85",
    description: "Heavy cotton pump cover for warmups and training days."
  },
  {
    id: "belt",
    name: "Platform Leather Belt",
    category: "Belts",
    price: 499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=85",
    description: "Premium bracing support for maximal attempts."
  }
];

const state = {
  category: "All",
  query: "",
  cart: JSON.parse(localStorage.getItem("ironApexCart") || "[]")
};

const productGrid = document.querySelector("#productGrid");
const filterRow = document.querySelector("#filterRow");
const searchInput = document.querySelector("#searchInput");
const cartButton = document.querySelector("#cartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const newsletterForm = document.querySelector("#newsletterForm");

const money = (value) => `AED ${value.toLocaleString("en-AE")}`;

function saveCart() {
  localStorage.setItem("ironApexCart", JSON.stringify(state.cart));
}

function renderFilters() {
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  filterRow.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-pill ${state.category === category ? "active" : ""}" type="button" data-category="${category}">${category}</button>`
    )
    .join("");
}

function renderProducts() {
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "All" || product.category === state.category;
    const matchesQuery = [product.name, product.category, product.description].join(" ").toLowerCase().includes(state.query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card">
          <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-info">
            <div class="product-meta">
              <span>${product.category}</span>
              <span>${product.rating} ★</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${money(product.price)}</div>
            <button class="button primary full" type="button" data-add="${product.id}">Add to cart</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = money(total);

  cartItems.innerHTML = state.cart.length
    ? state.cart
        .map(
          (item) => `
            <article class="cart-item">
              <img src="${item.image}" alt="${item.name}">
              <div>
                <strong>${item.name}</strong>
                <p class="muted">${money(item.price)} × ${item.quantity}</p>
              </div>
              <button type="button" data-remove="${item.id}">Remove</button>
            </article>
          `
        )
        .join("")
    : `<p class="muted">Your cart is empty.</p>`;
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existing = state.cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  removeFromCart(button.dataset.remove);
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

cartButton.addEventListener("click", () => {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
});

closeCart.addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
});

checkoutButton.addEventListener("click", () => {
  if (!state.cart.length) {
    alert("Add a product before checkout.");
    return;
  }
  alert("Demo checkout ready. Connect Stripe, Snipcart, Shopify Buy Button, or Netlify Functions for live payments.");
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterForm.reset();
  alert("Thanks. You are on the Iron Apex drop list.");
});

renderFilters();
renderProducts();
renderCart();
