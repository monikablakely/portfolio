document.addEventListener('DOMContentLoaded', () => {
  fetch('./header.html')
    .then(response => {
      if (!response.ok) throw new Error('Header not found');
      return response.text();
    })
    .then(data => {
      const headerElement = document.querySelector('header');
      if (headerElement) headerElement.innerHTML = data;
    })
    .catch(err => console.error('Error loading header:', err));

  fetch('./footer.html')
    .then(response => {
      if (!response.ok) throw new Error('Footer not found');
      return response.text();
    })
    .then(data => {
      const footerElement = document.querySelector('footer');
      if (footerElement) footerElement.innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
});
