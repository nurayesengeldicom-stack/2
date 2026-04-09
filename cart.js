let cartDiv = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartDiv.innerHTML += `
      <div>
        <h3>${item.name}</h3>
        <p>${item.price} тг</p>
        <button onclick="removeItem(${index})">Удалить</button>
      </div>
    `;
  });

  cartDiv.innerHTML += `<h2>Итого: ${total} тг</h2>`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// оформление заказа
function order() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Заполните все поля!");
    return;
  }

  alert(`Спасибо за заказ, ${name}!`);

  cart = [];
  localStorage.removeItem("cart");

  renderCart();
}

renderCart();