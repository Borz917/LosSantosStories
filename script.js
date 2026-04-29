const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.textContent = "☰";
    });
  });
}
