document.addEventListener('DOMContentLoaded', () => {
  // Load header.html into existing <header>
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerElement = document.querySelector('header');
      if (headerElement) headerElement.innerHTML = data;
    })
    .catch(err => console.error('Error loading header:', err));

  // Load footer.html into existing <footer>
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerElement = document.querySelector('footer');
      if (footerElement) footerElement.innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
});
