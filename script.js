// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
