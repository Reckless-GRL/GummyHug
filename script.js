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
