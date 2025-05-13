document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  // Show menu
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.remove("hidden");
    });
  }

  // Hide menu
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.add("hidden");
    });
  }

  // Hide menu when clicking on links
  const navLinks = document.querySelectorAll("#nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.add("hidden");
    });
  });
});
