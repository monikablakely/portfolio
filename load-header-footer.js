// load-header-footer.js

function loadHTML(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => {
      console.error('Failed to load ' + url, err);
    });
}

loadHTML('header.html', 'header-placeholder');
loadHTML('footer.html', 'footer-placeholder');
