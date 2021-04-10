const initButton = () => {
  const toggleBtn = document.querySelector('#toggleBtn');
  const divList = document.querySelectorAll('.discover');

  const addBlock = (e) => {
        e.preventDefault();

    divList.forEach((item) => {
      item.classList.add('block');
    });
  }

  toggleBtn.addEventListener('click', addBlock, false);
  toggleBtn.addEventListener('touchend', addBlock, false);
};


export { initButton };


