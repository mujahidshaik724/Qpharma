document.addEventListener("DOMContentLoaded", function () {
  fetch('/htmlcomponent/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      // Now that the header is loaded, update the active class and enable menu toggle
      setActiveNavLink();
      setupMobileMenu(); // Ensure the menu toggle works
    })
    .catch(error => console.error('Error loading header:', error));

  fetch('/htmlcomponent/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});



function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop(); // just get the file name like "about.html"
  const navLinks = document.querySelectorAll("#header-placeholder .nav-links a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href").split('/').pop(); // also just get the file name
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
}


function setupMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (event) {
      navLinks.classList.toggle("active");
      event.stopPropagation(); // Prevent click from propagating to the document
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("active");
      }
    });
  }
}

