// load-header-footer.js
document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      const header = document.createElement("div");
      header.innerHTML = data;
      document.body.prepend(header);
    });

  // Load Footer
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      const footer = document.createElement("div");
      footer.innerHTML = data;
      document.body.appendChild(footer);
    });
});
