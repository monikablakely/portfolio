document.addEventListener('DOMContentLoaded', () => {
  // Load header.html into <header> element
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.createElement('header');
      headerContainer.innerHTML = data;
      // Remove any existing <header> to avoid duplicates
      const oldHeader = document.querySelector('header');
      if (oldHeader) oldHeader.remove();
      document.body.prepend(headerContainer);
    })
    .catch(err => console.error('Error loading header:', err));

  // Load footer.html into <footer> element
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.createElement('footer');
      footerContainer.innerHTML = data;
      // Remove any existing <footer> to avoid duplicates
      const oldFooter = document.querySelector('footer');
      if (oldFooter) oldFooter.remove();
      document.body.appendChild(footerContainer);
    })
    .catch(err => console.error('Error loading footer:', err));
});
