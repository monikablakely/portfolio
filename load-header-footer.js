document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error loading header:', err));

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
});
