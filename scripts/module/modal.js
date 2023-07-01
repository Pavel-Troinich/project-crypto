const heroBtn = document.querySelector('.hero__btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.modal__close');
const form = document.querySelector('.modal__form');
const modalTitle = document.querySelector('.modal__title');

heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
  modal.classList.add('modal_open');
})

overlay.addEventListener('click', (e) => {
  if (e.target === overlay || e.target.closest('.modal__close')) {
    overlay.classList.remove('overlay_open');
    modal.classList.remove('modal_open');
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    surname: form.surname.value,
    tel: form.tel.value,
  };
  fetch('https://cloudy-slash-rubidium.glitch.me/api/order', {
    method: 'post',
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    modalTitle.textContent = `${data.name}, ваша заяка ${data.id} принята!`;
    form.reset();
    setTimeout(() => {
      overlay.classList.remove('overlay_open');
      modal.classList.remove('modal_open');
      modalTitle.textContent = `Мгновенная регистрация на платформе`;
    }, 3000)
  });
})
