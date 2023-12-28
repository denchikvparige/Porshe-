document.getElementById('openFormBtn').addEventListener('click', function() {
  document.getElementById('formWrapper').classList.toggle('hidden');
});

document.getElementById('authForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var savedUsername = localStorage.getItem('username');
  var savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    if (username === savedUsername && password === savedPassword) {
      alert('Вход выполнен успешно!');
      document.getElementById('openFormBtn').classList.add('hidden');
    } else {
      alert('Неправильное имя пользователя или пароль, учетная запись сброшена, зарегистрируйтесь снова.');
      localStorage.clear();
    }
  } else {
    // Сохраняем введенные данные в локальное хранилище
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Данные успешно сохранены. Теперь вы зарегистрированы!');
  }

  // Очищаем форму
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  // Скрsываем форму
  document.getElementById('formWrapper').classList.add('hidden');
});

const slider = document.querySelector('.slider');
let count = 0;
function nextSlide() {
  count++;
  if (count >= slider.children.length) {
    count = 0;
  }
  slider.style.transform = `translateX(-${count * (100 / slider.children.length)}%)`;
}
setInterval(nextSlide, 3000);

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Благодорим Вас за ваше обращение! Мы скоро свяжемся с вами.');
    document.getElementById('contact-form').reset();
});

document.getElementById('shop-now').addEventListener('click', () => {
  window.location.href = '#products';
});
function showText(text) {
document.getElementById("modal-text").innerHTML = text;
document.getElementById("modal").style.display = "block";
}
function closeModal() {
document.getElementById("modal").style.display = "none";
}











