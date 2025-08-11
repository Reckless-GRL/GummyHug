const images = {
    'Ведмедик_Червоний': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnzRY2JJrMJ1akYmzWAjjo0xMMmX1EgjAkQ&s',
    'Ведмедик_Жовтий': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXkyPviBcM9dx4W7VR3zoRhYqKnh2lAqfMw&s',
    'Ведмедик_Зелений': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMBWR_3NzJDMZbt2grTSaSmlZbPhc8RUsmg&s',
    'Ведмедик_Фіолетовий': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPAyGe4J-6A3YUpfk-kLt4cFUDaL8VNYU-g&s',

    'Черв’ячок_Червоний': 'https://thumbs.dreamstime.com/b/%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D1%80%D0%B2%D1%8F-%D0%B6%D0%B5%D0%BB%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-196426322.jpg',
    'Черв’ячок_Жовтий': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdWVGUSZWNdHZAgz43qx9RgE3fPkdbxrL3caEYnqGfJhD18FUux_PJzIBX-9NpLd0vjg&usqp=CAU',
    'Черв’ячок_Зелений': 'https://m.ideipodarkov.net/reimg/data/gifts/30/715x520/985130-2845.jpg',
    'Черв’ячок_Фіолетовий': 'https://thumbs.dreamstime.com/b/%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%B8-%D1%84%D0%B8%D0%BE%D0%BB%D0%B5%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-%D1%81%D0%B0%D1%85%D0%B0%D1%80-%D0%BE%D1%85%D0%B2%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D1%87%D0%B5%D1%80%D0%B2%D0%B5%D0%B9-%D0%B6%D0%B5%D0%BB%D0%B5-%D0%BD%D0%B0-%D0%B6%D0%B5%D0%BB%D1%82%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81-195897644.jpg',

    'Сердечко_Червоний': 'https://img.freepik.com/premium-photo/red-heart-shape-jelly-candy-isolated-white-background_1004890-105.jpg',
    'Сердечко_Жовтий': 'https://img.freepik.com/premium-photo/yellow-heart-shape-jellys-isolated-white-background_41158-6142.jpg',
    'Сердечко_Зелений': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwXLZTQX59inJWjiLCH0GYOujjQO1E5GOsCUik8BxUJkHxkaFyAS3f-9X6WCmvOfCUYE&usqp=CAU',
    'Сердечко_Фіолетовий': 'https://img.freepik.com/premium-photo/heart-shaped-purple-white-jelly-candies_114160-623.jpg',

    'Зірочка_Червоний': 'https://images.prom.ua/3343007078_w600_h600_3343007078.jpg',
    'Зірочка_Жовтий': 'https://media.istockphoto.com/id/817362756/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%B5%D0%B4-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0-%D0%B6%D0%B5%D0%BB%D0%B5-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%82%D1%8B-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA.jpg?s=612x612&w=0&k=20&c=oymADKTPsUq_9LcMYyNvbVUMZHGSd-oBiQxEp-ZWoGE=',
    'Зірочка_Зелений': 'https://img.freepik.com/premium-vector/jelly-gum-star_444196-20583.jpg',
    'Зірочка_Фіолетовий': 'https://img.joomcdn.net/cc631d10b9b6a8df7f041307d2826a39956808b7_1024_1024.jpeg',
  };

  function updateJelly() {
    const shape = document.getElementById('shape').value;
    const colorSelect = document.getElementById('color');
    const colorName = colorSelect.options[colorSelect.selectedIndex].text;
    const flavor = document.getElementById('flavor').value;

    // Вивід тексту опису желейки
    const jellyText = `Твоя желейка: ${shape}, ${colorName} кольору, зі смаком ${flavor}! 🍭`;
    document.getElementById('jellyOutput').innerText = jellyText;

    // Пошук картинки за ключем
    const key = `${shape}_${colorName}`;
    const imgUrl = images[key] || '';

    // Встановлення картинки як фон блоку
    const jellyBox = document.getElementById('jellyBox');
    if (imgUrl) {
      jellyBox.style.backgroundImage = `url(${imgUrl})`;
      jellyBox.innerText = '';
    } else {
      jellyBox.style.backgroundImage = '';
      jellyBox.innerText = '?';
    }

    // При зміні вибору ховаємо код замовлення
    document.getElementById('orderCode').style.display = 'none';
    document.getElementById('orderCode').innerText = '';
  }

  function createOrder() {
    const shape = document.getElementById('shape').value;
    const colorSelect = document.getElementById('color');
    const colorName = colorSelect.options[colorSelect.selectedIndex].text;
    const flavor = document.getElementById('flavor').value;

    // Формуємо код замовлення (можна зробити унікальнішим)
    const orderCode = `ORDER-${shape.toUpperCase()}-${colorName.toUpperCase()}-${flavor.toUpperCase()}-${Date.now()}`;

    // Виводимо код замовлення на сторінці
    const orderDiv = document.getElementById('orderCode');
    orderDiv.style.display = 'block';
    orderDiv.innerText = `Дякуємо за замовлення!\n\nВаш код замовлення:\n${orderCode}\n\nПараметри желейки:\n- Форма: ${shape}\n- Колір: ${colorName}\n- Смак: ${flavor}`;
  }

  // Початкове оновлення на завантаженні
  window.onload = updateJelly;