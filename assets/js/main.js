window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 700);
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => revealObserver.observe(el));

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 80) {
    header.style.background = "rgba(2, 8, 23, .94)";
  } else {
    header.style.background = "rgba(2, 8, 23, .72)";
  }
});
