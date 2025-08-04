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

const prices = {
  '🐱Карамельна Мурка🐾': 29, // Ціна за кожну
  '🌸Сакурна Лелі💫': 30, 
  '🦋Метелик Мірамелад🍇': 32, 
  '🍃М’ятний Ельф✨': 22, 
  '🌺Трояндова Рожева💞': 34, 
  '🕷️Веномелад🖤': 23,
  '🍌Банан Бомбарб’є🎤': 25,
  '💚Яблучна Іронія🍏': 26,
  '❤️Агент Червоний-Жовтий💛': 25,
  '🍑Персикова Петарда💥': 27,
  '⚓Капітан Лохинобублик🌊': 26,
  '💃Мадам Арбузель🍉': 27,
  '🍋Лимончик-Оптиміст☀️': 25,
  '🐛Кислий Огірчук🍏': 27,
  '🍊Цитрусовий Рикошет🐻': 26,
  '🍓Закохана Полуничка💋': 28,
};

function addToCart(productName, imageSrc) {
  const cartItems = document.getElementById('cartItems');
  const li = document.createElement('li');

  // Видалили блок, який створював <img>

  const span = document.createElement('span');
  span.textContent = productName + ' — ';

  const input = document.createElement('input');
  input.type = 'number';
  input.min = 1;
  input.value = 1;
  input.style.width = '40px';
  input.style.margin = '0 5px';
  input.oninput = updateTotalPrice;

  const priceSpan = document.createElement('span');
  priceSpan.className = 'item-price';
  priceSpan.textContent = prices[productName] + ' грн';

  li.appendChild(span);
  li.appendChild(input);
  li.appendChild(priceSpan);

  cartItems.appendChild(li);
  updateTotalPrice(); // оновлення загальної суми
}
function updateTotalPrice() {
  const cartItems = document.querySelectorAll('#cartItems li');
  let total = 0;

  cartItems.forEach(li => {
    const input = li.querySelector('input[type="number"]');
    const productText = li.querySelector('span').textContent.split(' — ')[0];
    const pricePerItem = prices[productText] || 0;
    const quantity = parseInt(input.value) || 1;
    const itemPriceSpan = li.querySelector('.item-price');
    const itemTotal = pricePerItem * quantity;

    itemPriceSpan.textContent = itemTotal + ' грн';
    total += itemTotal;
  });

  document.getElementById('totalPrice').textContent = 'Загальна сума: ' + total + ' грн';
}

function clearCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = ''; // очищає візуально
  localStorage.removeItem('gummyCart'); // очищає збережені дані
}
