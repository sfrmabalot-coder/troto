
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        const icon = toggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  const typing = document.querySelector(".typing-text");
  if (typing) {
    const phrases = ["Computer Science Student", "Aspiring Web Developer", "Future Software Developer"];
    let phrase = 0, letter = 0, deleting = false;

    function typeEffect() {
      const current = phrases[phrase];
      typing.textContent = current.substring(0, letter);

      if (!deleting && letter < current.length) {
        letter++;
        setTimeout(typeEffect, 90);
      } else if (!deleting) {
        deleting = true;
        setTimeout(typeEffect, 1400);
      } else if (letter > 0) {
        letter--;
        setTimeout(typeEffect, 45);
      } else {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        setTimeout(typeEffect, 350);
      }
    }
    typeEffect();
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
