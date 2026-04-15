const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".stklyh-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".stklyh-next",
    prevEl: ".stklyh-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  touchEventsTarget: "container",
  grabCursor: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("stklyexp-trigger");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("stklyexp-visible");
        }
      });
    },
    { threshold: 0.1 },
  );
  observer.observe(container);
});

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Stop observing once animation has triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply observer to elements with reveal class
  const revealElements = document.querySelectorAll(".stklywhy-reveal");
  revealElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger main content
        document
          .getElementById("stklylab-content")
          .classList.add("stklylab-active");

        // Trigger visual elements with their internal delays
        document
          .getElementById("stklylab-microscope")
          .classList.add("stklylab-active");
        document
          .getElementById("stklylab-hexagon")
          .classList.add("stklylab-active");
        document
          .getElementById("stklylab-circle")
          .classList.add("stklylab-active");

        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe the container to trigger animations for the whole section
  const container = document.querySelector(".stklylab-container");
  observer.observe(container);
});

const testimonials = [
  {
    name: "Theresa Webb",
    role: "Senior Doctor",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
    img: "./assets/rv2.webp",
  },
  {
    name: "Albert Flores",
    role: "Biotech Analyst",
    quote:
      "Scientific breakthroughs in modern genetics are often preceded by meticulous research and a deep understanding of cellular mechanisms. This platform bridges that gap.",
    img: "./assets/rv3.webp",
  },
  {
    name: "Eleanor Pena",
    role: "Lab Director",
    quote:
      "The efficiency and accuracy provided by these biotechnological tools have transformed our laboratory workflows, allowing us to focus on innovation and results.",
    img: "./assets/rv4.webp",
  },
];

let currentIndex = 0;
let autoSlideInterval;
const SLIDE_DURATION = 2000; // 2 seconds

const nameEl = document.getElementById("stklyrev-name");
const roleEl = document.getElementById("stklyrev-role");
const quoteEl = document.getElementById("stklyrev-quote");
const imageEl = document.getElementById("stklyrev-main-image");
const contentWrapper = document.querySelector(".stklyrev-content");
const visualWrapper = document.querySelector(".stklyrev-visual");

function updateSlider(index) {
  // Apply fade-out class
  quoteEl.classList.add("stklyrev-fade-out");
  nameEl.parentElement.classList.add("stklyrev-fade-out");
  imageEl.style.opacity = "0.5";

  setTimeout(() => {
    const t = testimonials[index];
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    quoteEl.textContent = t.quote;
    imageEl.style.backgroundImage = `url('${t.img}')`;

    // Remove fade-out class to trigger re-entry
    quoteEl.classList.remove("stklyrev-fade-out");
    nameEl.parentElement.classList.remove("stklyrev-fade-out");
    imageEl.style.opacity = "1";
  }, 300);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider(currentIndex);
}

function startAutoSlide() {
  stopAutoSlide(); // Clear existing to prevent duplicates
  autoSlideInterval = setInterval(nextSlide, SLIDE_DURATION);
}

function stopAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
}

// Manual controls
document.getElementById("stklyrev-next").addEventListener("click", () => {
  nextSlide();
  startAutoSlide(); // Restart timer on click
});

document.getElementById("stklyrev-prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateSlider(currentIndex);
  startAutoSlide(); // Restart timer on click
});

// Pause on hover
const section = document.getElementById("stklyrev-section");
section.addEventListener("mouseenter", stopAutoSlide);
section.addEventListener("mouseleave", startAutoSlide);

// Intersection Observer for Scroll Animations & Start Slider
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("stklyrev-visible");
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  });
}, observerOptions);

observer.observe(section);

document.addEventListener("DOMContentLoaded", () => {
  const obsOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("stklycontact-visible");
        if (entry.target.id === "stklycontact-form") {
          const items = entry.target.querySelectorAll(
            ".stklycontact-input-wrap, .stklycontact-submit",
          );
          items.forEach((item, i) => {
            setTimeout(
              () => item.classList.add("stklycontact-visible"),
              i * 80,
            );
          });
        }
      }
    });
  }, obsOptions);

  observer.observe(document.querySelector(".stklycontact-card"));
  observer.observe(document.querySelector(".stklycontact-form-header"));
  observer.observe(document.getElementById("stklycontact-form"));

  const form = document.getElementById("stklycontact-form");
  const toast = document.getElementById("stkly-toast");

  form.addEventListener("submit", (e) => {
    // e.preventDefault();
    let valid = true;
    const fields = [
      document.getElementById("stkly-field-name"),
      document.getElementById("stkly-field-email"),
      document.getElementById("stkly-field-subject"),
      document.getElementById("stkly-field-msg"),
    ];

    fields.forEach((f) => {
      f.classList.remove("stklycontact-error");
      if (!f.value.trim()) {
        f.classList.add("stklycontact-error");
        valid = false;
      }
      if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value)) {
        f.classList.add("stklycontact-error");
        valid = false;
      }
    });

    if (valid) {
      toast.style.display = "block";
      form.reset();
      setTimeout(() => (toast.style.display = "none"), 3000);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Handle featured card
        if (entry.target.classList.contains("js-reveal")) {
          entry.target.classList.add("stklyblog-animate-in");

          // Child animations within featured
          const badge = entry.target.querySelector(".js-reveal-scale");
          const card = entry.target.querySelector(".js-reveal-up");

          setTimeout(() => badge?.classList.add("stklyblog-animate-in"), 300);
          setTimeout(() => card?.classList.add("stklyblog-animate-in"), 500);
        }

        // Handle staggered list items
        if (entry.target.classList.contains("js-reveal-stagger")) {
          const items = document.querySelectorAll(".js-reveal-stagger");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("stklyblog-animate-in");
            }, index * 150);
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements to watch
  document.querySelectorAll(".js-reveal, .js-reveal-stagger").forEach((el) => {
    observer.observe(el);
  });
});
