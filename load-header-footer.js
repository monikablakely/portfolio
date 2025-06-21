document.addEventListener('DOMContentLoaded', () => {
  // Load header.html and replace or prepend <header>
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const existingHeader = document.querySelector('header');
      if (existingHeader) {
        existingHeader.outerHTML = data;
      } else {
        const headerContainer = document.createElement('header');
        headerContainer.innerHTML = data;
        document.body.prepend(headerContainer);
      }
    })
    .catch(err => console.error('Error loading header:', err));

  // Load footer.html and replace or append <footer>
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const existingFooter = document.querySelector('footer');
      if (existingFooter) {
        existingFooter.outerHTML = data;
      } else {
        const footerContainer = document.createElement('footer');
        footerContainer.innerHTML = data;
        document.body.appendChild(footerContainer);
      }
    })
    .catch(err => console.error('Error loading footer:', err));
});
