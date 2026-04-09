const container = document.getElementById("products");
const searchInput = document.getElementById("search");

function renderProducts(list = products) {
  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>${product.price} тг</p>
        <button onclick="addToCart(${product.id})">В корзину</button>
      </div>
    `;
  });
}

// поиск
searchInput.addEventListener("input", function () {
  let value = this.value.toLowerCase();

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find(p => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Добавлено в корзину!");
}

renderProducts();