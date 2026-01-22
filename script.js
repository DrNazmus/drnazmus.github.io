window.addEventListener("scroll", () => {
  // All normal reveal sections
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add("active");
    }
  });

  // Special animation for contact section
  const contact = document.querySelector("#contact .contact-container");
  if (contact) {
    const top = contact.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      contact.classList.add("active");
    }
  }
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Typing effect for hero tagline
const text = "B2B Lead Generation & Cold Email Specialist";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

window.addEventListener("load", typeEffect);

