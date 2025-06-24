function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
  updateCartView();
}
function updateCartView() {
  const items = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const totalBox = document.getElementById('cart-total');
  if (!container) return;
  container.innerHTML = '';
  let total = 0;
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<strong>${item.name}</strong> - $${item.price}`;
    container.appendChild(div);
    total += item.price;
  });
  totalBox.innerText = `Total: $${total.toFixed(2)}`;
}
window.onload = updateCartView;
