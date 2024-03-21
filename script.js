function toggleMenu() {
    var nav = document.querySelector("nav");
    var menuIcon = document.querySelector(".menu-icon");
    var closeIcon = document.querySelector(".close-icon");

    nav.classList.toggle("active");
    menuIcon.classList.toggle("hide");
    closeIcon.classList.toggle("hide");

    if (nav.classList.contains("active")) {
      closeIcon.style.display = "block"; // Show the close icon
      menuIcon.style.display = "none"; // Hide the menu icon
    } else {
      closeIcon.style.display = "none"; // Hide the close icon
      menuIcon.style.display = "block"; // Show the menu icon
    }
  }


// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

