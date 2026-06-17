const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");

function closeMenu() {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
  menuToggle.textContent = "\u2630";
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.textContent = isOpen ? "\u00d7" : "\u2630";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const animatedElements = document.querySelectorAll(
  ".section, .hero-content, .hero-image"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  animatedElements.forEach((element) => {
    element.classList.add("visible");
  });
}
