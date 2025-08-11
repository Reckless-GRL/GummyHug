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

// Відкрити / закрити кошик
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
}

// Додати товар до кошика
function addToCart(productName, imageSrc) {
  const cartItems = document.getElementById('cartItems');

  // Створюємо елемент товару
  const li = document.createElement('li');

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

  // Кнопка видалення ❌
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.style.marginLeft = '10px';
  removeBtn.onclick = function() {
    li.remove();
    updateTotalPrice();
  };

  li.appendChild(span);
  li.appendChild(input);
  li.appendChild(priceSpan);
  li.appendChild(removeBtn);

  cartItems.appendChild(li);
  updateTotalPrice();
}

// Оновлення загальної суми
function updateTotalPrice() {
  let total = 0;
  const cartItems = document.querySelectorAll('#cartItems li');

  cartItems.forEach(item => {
    const name = item.querySelector('span').textContent.split(' — ')[0];
    const quantity = parseInt(item.querySelector('input').value);
    const price = prices[name] || 0;
    total += price * quantity;
  });

  document.getElementById('totalPrice').textContent = 'Загальна сума: ' + total + ' грн';
}

// Очистити кошик
function clearCart() {
  document.getElementById('cartItems').innerHTML = '';
  updateTotalPrice();
}

const modal = document.getElementById('orderModal');

function openModal() {
  const cart = getCartItemsFromDOM();
  if (cart.length === 0) {
    alert("Твій кошик порожній 😿");
    return;
  }
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Закрити модалку при кліку поза нею
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

// Функція збирає товари зі списку кошика у DOM
function getCartItemsFromDOM() {
  const cartItemsElements = document.querySelectorAll('#cartItems li');
  const cart = [];

  cartItemsElements.forEach(item => {
    const name = item.querySelector('span').textContent.split(' — ')[0].trim();
    const quantity = parseInt(item.querySelector('input').value);
    const price = prices[name] || 0;

    if (quantity > 0) {
      cart.push({ name, quantity, price });
    }
  });

  return cart;
}

// Обробник відправки форми замовлення
// Словник допустимих промокодів і відсотків знижки
const promoCodes = {
  "SWEET10": 10,   // 10% знижка
  "YUMMY15": 15,   // 15% знижка
  "GUMMY5": 5,
  "HUG20": 20,
  "TASTY30": 30,    
};

document.getElementById('orderForm').onsubmit = function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const comment = this.comment.value.trim();
  const promo = this.promo.value.trim().toUpperCase();

  if (!name || !phone) {
    alert("Будь ласка, заповніть ім'я та телефон.");
    return;
  }

  const cart = getCartItemsFromDOM();

  if (cart.length === 0) {
    alert("Твій кошик порожній 😿");
    return;
  }

  let orderDetails = cart.map(item => `${item.name} — ${item.quantity} шт.`).join("\n");
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discount = 0;
  let promoMessage = "";

  if (promo && promoCodes.hasOwnProperty(promo)) {
    discount = promoCodes[promo];
    if (discount > 0) {
      total = total * (1 - discount / 100);
      promoMessage = `Промокод застосовано! Знижка: ${discount}%\n\n`;
    } else {
      promoMessage = `Промокод "${promo}" застосовано.\n\n`;
    }
  } else if (promo) {
    alert("Промокод недійсний або прострочений.");
    return;
  }

  alert(`${promoMessage}Дякуємо за замовлення, ${name}!\n\nВаші товари:\n${orderDetails}\n\nСума до сплати: ${total.toFixed(2)} грн\n\nТелефон: ${phone}\nКоментар: ${comment || 'немає'}`);

  clearCart();
  closeModal();
  this.reset();
}


// Очищуємо кошик в DOM та оновлюємо суму
function clearCart() {
  document.getElementById('cartItems').innerHTML = '';
  updateTotalPrice();
  console.log("Кошик очищено!");
}