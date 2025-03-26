export const initMobileNav = () => {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const header = document.querySelector('#header');

  if (mobileNavToggle && header) {
    mobileNavToggle.addEventListener('click', () => {
      header.classList.toggle('mobile-nav-active');
      mobileNavToggle.classList.toggle('bi-list');
      mobileNavToggle.classList.toggle('bi-x');
    });
  }
};

export const initScrollToTop = () => {
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
  }
}; 