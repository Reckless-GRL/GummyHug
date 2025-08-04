const cards = document.querySelectorAll('.flip-card');
const today = new Date().toLocaleDateString();
const alreadyOpened = localStorage.getItem('bearOpenedDate');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (alreadyOpened === today) {
      alert('Ти вже відкрив ведмедика сьогодні 🐻. Завітай завтра!');
      return;
    }

    // Перевертаємо тільки цей
    card.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';

    // Забороняємо інші
    localStorage.setItem('bearOpenedDate', today);

    cards.forEach(c => {
      if (c !== card) {
        c.style.pointerEvents = 'none';
        c.style.opacity = '0.4';
      }
    });
  });
});
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar.classList.toggle('open');
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
}

// Проста логіка додавання товарів (приклад)
function addToCart(productName) {
  const cartItems = document.getElementById('cartItems');
  const li = document.createElement('li');
  li.textContent = productName;
  cartItems.appendChild(li);
}
function addToCart(productName, imageSrc) {
  const cartItems = document.getElementById('cartItems');
  
  const li = document.createElement('li');
  
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = productName;
  img.style.width = "40px";
  img.style.marginRight = "10px";

  li.appendChild(img);
  li.appendChild(document.createTextNode(productName));
  
  cartItems.appendChild(li);
}