const advantageBtns = document.querySelectorAll('.advantage__btn');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

advantageBtns.forEach((button, i) => {
  button.addEventListener('click', () => {
    advantageItemsContent.forEach((content, j) => {
      if (i === j) {
        advantageBtns[j].classList.add('advantage__btn_active');
        advantageItemsContent[j].classList.add('advantage__item-content_active');
      } else {
        advantageBtns[j].classList.remove('advantage__btn_active');
        advantageItemsContent[j].classList.remove('advantage__item-content_active');
      }
    })
  })
})