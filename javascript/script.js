// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// NAVBAR
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-section");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Carousel functionality
// let currentSlide = 0;
// const slides = document.querySelectorAll(".product-card");
// const indicators = document.querySelectorAll(".indicator");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// function showSlide(n) {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   indicators.forEach((indicator) => indicator.classList.remove("active"));
//   slides[currentSlide].classList.add("active");
//   indicators[currentSlide].classList.add("active");
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// Event listeners for carousel controls
// prevBtn.addEventListener("click", prevSlide);
// nextBtn.addEventListener("click", nextSlide);

// Event listeners for indicators
// indicators.forEach((indicator, index) => {
//   indicator.addEventListener("click", () => {
//     currentSlide = index;
//     showSlide(currentSlide);
//   });
// });

// Auto-rotate carousel every 5 seconds
// setInterval(nextSlide, 5000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar-section");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.08)";
  }
});

// Form submission
// const contactForm = document.querySelector(".contact-form");
// if (contactForm) {
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Thank you for your message! We will get back to you soon.");
//     contactForm.reset();
//   });
// }

// Mobile menu toggle enhancement
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

// Animate numbers on scroll
// const observerOptions = {
//   threshold: 0.5,
//   rootMargin: "0px 0px -100px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.animation = "fadeIn 0.6s ease-in-out forwards";
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// document.querySelectorAll("[data-aos]").forEach((el) => {
//   observer.observe(el);
// });

// Add keyboard navigation for carousel
// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowLeft") prevSlide();
//   if (e.key === "ArrowRight") nextSlide();
// });

// Prevent rapid clicks on buttons
// let lastClick = 0;
// const buttons = document.querySelectorAll("button");
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const now = Date.now();
//     if (now - lastClick < 300) {
//       e.preventDefault();
//       return;
//     }
//     lastClick = now;
//   });
// });

// Removed duplicate declaration of currentSlide and slides for the second carousel logic.
// If you need to handle a different set of slides, use different variable names, e.g., currentSecondarySlide, secondarySlides.

// Example for a second carousel (uncomment and adjust if needed):
// let currentSecondarySlide = 0;
// const secondarySlides = document.querySelectorAll(".slide");

// function nextSecondarySlide() {
//   secondarySlides[currentSecondarySlide].classList.remove("active");
//   currentSecondarySlide = (currentSecondarySlide + 1) % secondarySlides.length;
//   secondarySlides[currentSecondarySlide].classList.add("active");
// }

// setInterval(nextSecondarySlide, 4500);

// HOT DEAL SCRIPT
// let index = 0;
// const deals = document.querySelectorAll(".deal-card");

// function showDeal(i) {
//   deals.forEach((deal) => deal.classList.remove("active"));
//   deals[i].classList.add("active");
// }

// function nextDeal() {
//   index++;
//   if (index >= deals.length) index = 0;
//   showDeal(index);
// }

// function prevDeal() {
//   index--;
//   if (index < 0) index = deals.length - 1;
//   showDeal(index);
// }

/* Auto Slide */
// setInterval(nextDeal, 4500);

// TESTIMONIALS SECTION
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonialSlider");

  let scrollAmount = 0;
  let speed = 0.5;
  let speedBackup = 0.5;

  // Clone cards for infinite loop
  slider.innerHTML += slider.innerHTML;

  function autoSlide() {
    scrollAmount += speed;

    if (scrollAmount >= slider.scrollWidth / 2) {
      scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoSlide);
  }

  autoSlide();

  // Pause on hover
  function pauseSlider() {
    speedBackup = speed;
    speed = 0;
  }

  // Resume on mouse leave
  function resumeSlider() {
    speed = speedBackup;
  }

  // Attach Events
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", resumeSlider);
});

// FOOTER IMAGES

document.addEventListener("DOMContentLoaded", () => {
  const scooterWrap = document.querySelector(".scooter-wrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scooterWrap.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(document.querySelector(".footer-animated-images"));
});

// MENU PAGE FILTER SCRIPT

const filterBtns = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active button highlight
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let category = btn.getAttribute("data-category");

    // Filter items
    menuItems.forEach((item) => {
      item.style.display = "none";
      item.querySelector(".menu-card").classList.remove("show");

      if (category === "all" || item.dataset.category === category) {
        setTimeout(() => {
          item.style.display = "block";

          // Smooth fade animation
          setTimeout(() => {
            item.querySelector(".menu-card").classList.add("show");
          }, 50);
        }, 100);
      }
    });
  });
});
