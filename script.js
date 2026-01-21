document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add("active");
    }
  });
});
