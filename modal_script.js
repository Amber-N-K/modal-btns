'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// click Show model 1, 2, and 3 and a modal window displays
// Remove .hidden from modal & overlay class to show modal window
showModalBtns.forEach(showModalBtn => {
  showModalBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

// Close the modal window by the x button, click the overlay, or use the Esc key
// Add .hidden to the modal & overlay class to close modal window
const hideModal = event => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

// Press the ESC key to close the modal window
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
