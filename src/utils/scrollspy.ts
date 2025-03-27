export const initScrollspy = () => {
  const navLinks = document.querySelectorAll('#navbar .nav-link')

  const updateActiveLink = () => {
    const scrollPosition = window.scrollY

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute('href')
      if (!sectionId || sectionId === '/projects') return

      const section = document.querySelector(sectionId) as HTMLElement
      if (!section) return

      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  window.addEventListener('scroll', updateActiveLink)
  window.addEventListener('load', updateActiveLink)
}
