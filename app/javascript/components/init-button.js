const initButton = () => {
  const toggleBtn = document.querySelector('#toggleBtn');
  const divList = document.querySelectorAll('.discover');



  toggleBtn.addEventListener('click', () => {
    divList.forEach((item) => {
      item.classList.add('block');
    });
  });
};

export { initButton };


// divList.classList.add('block');
