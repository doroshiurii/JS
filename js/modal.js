const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal'),
modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(function(element) {
  element.addEventListener('click', () => {
          // modal.style.display = 'block';
          modal.classList.add('show');
          modal.classList.remove('hide');
          document.body.style.overflow = "hidden";
  });
});

modalCloseBtn.addEventListener('click', () => {
 // modal.style.display = 'none';
 modal.classList.add('hide');
 modal.classList.remove('show');
 document.body.style.overflow = "";
});