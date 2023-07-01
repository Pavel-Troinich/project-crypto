const faqList = document.querySelector('.faq__list');
const faqItems = document.querySelectorAll('.faq__item');

faqList.addEventListener('click', (e) => {
  const button = e.target.closest('.faq__question');
  if (button) {
    const item = button.closest('.faq__item');

    faqItems.forEach((faqItem, i) => {
      const answer = faqItem.querySelector('.faq__answer');
      if (item === faqItem) {
        item.classList.toggle('faq__item_show');
      } else {
        faqItem.classList.remove('faq__item_show');
      }
    })

    
  }
})