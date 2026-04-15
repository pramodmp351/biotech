window.addEventListener("scroll", () => {
  const header = document.getElementById("stklynav-header");
  if (window.scrollY > 50) {
    header.classList.add("stklynav-scrolled");
  } else {
    header.classList.remove("stklynav-scrolled");
  }
});

const hamburgerBtn = document.getElementById("stklynav-hamburger-btn");
const closeBtn = document.getElementById("stklynav-close-btn");
const mobileOverlay = document.getElementById("stklynav-mobile-overlay");

hamburgerBtn.addEventListener("click", () => {
  mobileOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

document.querySelectorAll(".stklynav-mobile-item").forEach((link) => {
  link.addEventListener("click", () => {
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
