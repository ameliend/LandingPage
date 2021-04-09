import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Product and Project Manager", "Fullstack Developer", "Legal Innovation"],
    typeSpeed: 100,
    loop: true,
  });
}

export { loadDynamicBannerText };
