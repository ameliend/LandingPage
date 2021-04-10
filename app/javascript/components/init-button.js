const initButton = () => {
  const toggleBtn = document.querySelector('#toggleBtn');
  const divList = document.querySelectorAll('.discover');

  const addBlock = (e) => {
        e.preventDefault();

    divList.forEach((item) => {
      if (!item.classList.contains('block')) {
        item.classList.add('block');
        toggleBtn.innerHTML = 'Show less <i class="fas fa-chevron-circle-up"></i>'
      } else {
        item.classList.remove('block');
        toggleBtn.innerHTML = 'Discover more <i class="fas fa-chevron-circle-down"></i>'
      }
    });
  }

  toggleBtn.addEventListener('click', addBlock, false);
  toggleBtn.addEventListener('touchend', addBlock, false);
};


export { initButton };


