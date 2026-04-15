document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("stklyfoot-visible");
          if (entry.target.classList.contains("stklyfoot-contact")) {
            entry.target
              .querySelectorAll(".stklyfoot-social-icon")
              .forEach((icon, i) => {
                setTimeout(
                  () => icon.classList.add("stklyfoot-visible"),
                  i * 100,
                );
              });
          }
        }
      });
    },
    { threshold: 0.1 },
  );

  observer.observe(document.getElementById("stklyfoot-newsletter"));
  document.querySelectorAll(".stklyfoot-column").forEach((col, i) => {
    col.style.transitionDelay = `${i * 0.15}s`;
    observer.observe(col);
  });
});
