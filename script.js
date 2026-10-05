// ===============================
// GSAP SETUP
// ===============================

gsap.registerPlugin(ScrollTrigger);

// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// ===============================
// HERO ANIMATION
// ===============================

const heroTimeline = gsap.timeline();

heroTimeline
  .from(".award", {
    y: 30,
    opacity: 0,
    duration: 0.6,
  })
  .from(
    ".hero-content h1",
    {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.2",
  )
  .from(
    ".hero-content h2",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5",
  )
  .from(
    ".hero-content p",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.4",
  )
  .fromTo(
    ".hero-buttons a",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.5,
      clearProps: "all",
    },
    "-=0.3",
  )
  .from(
    ".hero-image",
    {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.8",
  );

if (document.querySelector(".about")) {
  gsap.from(".about", {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });
}

// ===============================
// PORTFOLIO HEADER
// ===============================

if (document.querySelector(".portfolio-header")) {
  gsap.from(".portfolio-header", {
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 80%",
    },
  });
}

// ===============================
// PORTFOLIO ITEMS
// ===============================

if (document.querySelector(".portfolio-grid")) {
  gsap.from(".portfolio-grid .item", {
    y: 80,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".portfolio-grid",
      start: "top 80%",
    },
  });
}

// ===============================
// CERTIFICATIONS
// ===============================

if (document.querySelector(".cert-item")) {
  gsap.from(".cert-item", {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".certifications",
      start: "top 85%",
    },
  });
}

// ===============================
// STATS COUNTER ANIMATION
// ===============================

document.querySelectorAll(".stat-box h3").forEach((counter) => {
  ScrollTrigger.create({
    trigger: counter,
    start: "top 85%",

    onEnter: () => {
      counter.classList.add("animate");
    },
  });
});

// ===============================
// TESTIMONIAL HEADER
// ===============================

if (document.querySelector(".testimonial-header")) {
  gsap.from(".testimonial-header", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".testimonial-header",
      start: "top 80%",
    },
  });
}

if (document.querySelector(".testimonial-stats")) {
  gsap.from(".testimonial-stats .stat", {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".testimonial-stats",
      start: "top 85%",
    },
  });
}

// ===============================
// FOOTER CTA
// ===============================

if (document.querySelector(".footer-cta")) {
  gsap.from(".footer-cta", {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".footer-cta",
      start: "top 85%",
    },
  });
}

const glow = document.querySelector(".cursor-glow");

if (glow && window.innerWidth > 992) {
  window.addEventListener("mousemove", (e) => {
    gsap.to(glow, {
      x: e.clientX - 150,
      y: e.clientY - 150,
      duration: 0.4,
      ease: "power2.out",
    });
  });
}

// ===============================
// WHATSAPP BOOKING ENQUIRY
// NEW CODE — EXISTING CODE UNTOUCHED
// ===============================

const makeupBookingForm = document.querySelector(".makeup-booking-form");

if (makeupBookingForm) {
  const eventDateInput = document.getElementById("makeup-date");
  const phoneInput = document.getElementById("makeup-phone");

  // --------------------------------
  // PREVENT PAST EVENT DATES
  // --------------------------------

  if (eventDateInput) {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    eventDateInput.min = `${year}-${month}-${day}`;
  }

  // --------------------------------
  // FORM SUBMIT
  // --------------------------------

  makeupBookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("makeup-name")?.value.trim();
    const phone = document.getElementById("makeup-phone")?.value.trim();
    const date = document.getElementById("makeup-date")?.value;
    const eventType = document.getElementById("makeup-event")?.value;
    const location = document.getElementById("makeup-location")?.value.trim();
    const message = document.getElementById("makeup-message")?.value.trim();

    // --------------------------------
    // BASIC VALIDATION
    // --------------------------------

    if (!name || !phone || !date || !eventType || !location) {
      alert("Please fill in all required fields.");
      return;
    }

    // --------------------------------
    // PHONE VALIDATION
    // --------------------------------

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      alert("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    // --------------------------------
    // DATE FORMAT
    // --------------------------------

    const selectedDate = new Date(date + "T00:00:00");

    const formattedDate = selectedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    // --------------------------------
    // WHATSAPP MESSAGE
    // --------------------------------

    const whatsappMessage = `
Hello, I would like to enquire about makeup services.

*Booking Details*

Name: ${name}
WhatsApp Number: ${cleanPhone}
Event Type: ${eventType}
Event Date: ${formattedDate}
Event Location: ${location}

Message:
${message || "No additional message."}

Thank you.
    `.trim();

    // --------------------------------
    // YOUR DEMO WHATSAPP NUMBER
    // --------------------------------

    const makeupArtistWhatsApp = "917068575216";

    const whatsappURL =
      `https://wa.me/${makeupArtistWhatsApp}?text=` +
      encodeURIComponent(whatsappMessage);

    // --------------------------------
    // OPEN WHATSAPP
    // --------------------------------

    window.open(whatsappURL, "_blank");
  });
}

// ===============================
// WEBSITE INTERACTIVE BUTTONS
// NEW CODE — EXISTING CODE UNTOUCHED
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // --------------------------------
  // HELPER: SCROLL TO SECTION
  // --------------------------------

  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  // --------------------------------
  // NAVIGATION LINKS
  // --------------------------------

  const navLinks = document.querySelectorAll("#navMenu a");

  const navTargets = [
    ".hero",
    ".about",
    ".makeup-services",
    ".portfolio",
    ".testimonials",
    ".makeup-booking",
  ];

  navLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      if (navTargets[index]) {
        scrollToSection(navTargets[index]);
      }
    });
  });


  // --------------------------------
  // BOOK NOW BUTTON
  // --------------------------------

  document.querySelectorAll(".book-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      scrollToSection(".makeup-booking");
    });
  });


  // --------------------------------
  // HERO — BOOK CONSULTATION
  // --------------------------------

  document.querySelectorAll(".primary-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      scrollToSection(".makeup-booking");
    });
  });


  // --------------------------------
  // HERO — VIEW PORTFOLIO
  // --------------------------------

  document.querySelectorAll(".secondary-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      scrollToSection(".portfolio");
    });
  });


  // --------------------------------
  // SERVICE CARD — ENQUIRE NOW
  // --------------------------------

  document.querySelectorAll(".makeup-service-btn").forEach((button) => {

    button.addEventListener("click", (event) => {
      event.preventDefault();

      const serviceCard = button.closest(".makeup-service-card");
      const serviceTitle =
        serviceCard?.querySelector("h3")?.textContent.trim();

      scrollToSection(".makeup-booking");

      // Automatically select matching event type
      setTimeout(() => {

        const eventSelect = document.getElementById("makeup-event");

        if (!eventSelect || !serviceTitle) return;

        const options = Array.from(eventSelect.options);

        const matchingOption = options.find(
          (option) =>
            option.textContent.trim().toLowerCase() ===
            serviceTitle.toLowerCase()
        );

        if (matchingOption) {
          eventSelect.value = matchingOption.value;
        }

      }, 500);
    });

  });


  // --------------------------------
  // VIEW FULL GALLERY
  // --------------------------------

  document.querySelectorAll(".gallery-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      scrollToSection(".portfolio-grid");
    });
  });


  // --------------------------------
  // VIEW MORE TRANSFORMATIONS
  // --------------------------------

  document.querySelectorAll(".view-more").forEach((item) => {

    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
      scrollToSection(".portfolio-grid");
    });

  });


  // --------------------------------
  // PORTFOLIO FILTER BUTTONS
  // --------------------------------

  const filterButtons = document.querySelectorAll(
    ".portfolio-filter button"
  );

  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

    });

  });


  // --------------------------------
  // FOOTER BOOK CONSULTATION
  // --------------------------------

  document.querySelectorAll(".footer-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      scrollToSection(".makeup-booking");
    });
  });


  // --------------------------------
  // FOOTER QUICK LINKS
  // --------------------------------

  const footerLinks = document.querySelectorAll(
    ".footer-links a"
  );

  footerLinks.forEach((link, index) => {

    link.addEventListener("click", (event) => {
      event.preventDefault();

      if (navTargets[index]) {
        scrollToSection(navTargets[index]);
      }

    });

  });


  // --------------------------------
  // FOOTER CONTACT
  // DEMO PHONE / EMAIL
  // --------------------------------

  const footerContact = document.querySelector(".footer-contact");

  if (footerContact) {

    const contactItems =
      footerContact.querySelectorAll("p");

    contactItems.forEach((item) => {

      const text = item.textContent.trim();

      // Phone
      if (text.includes("+91")) {

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

          window.location.href =
            "tel:+919876543210";

        });

      }

      // Email
      if (text.includes("@")) {

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

          window.location.href =
            "mailto:hello@ritikasharma.com";

        });

      }

    });

  }


  // --------------------------------
  // FOOTER SOCIAL LINKS
  // --------------------------------

  const socialLinks =
    document.querySelectorAll(".footer-social a");

  socialLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      const platform =
        link.textContent.trim().toLowerCase();

      const socialURLs = {

        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        pinterest: "https://www.pinterest.com/",
        youtube: "https://www.youtube.com/"

      };

      if (socialURLs[platform]) {
        window.open(
          socialURLs[platform],
          "_blank",
          "noopener,noreferrer"
        );
      }

    });

  });

});

// ===============================
// PORTFOLIO CATEGORY FILTER
// NEW CODE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  const filterButtons =
    document.querySelectorAll(".portfolio-filter button");

  const portfolioItems =
    document.querySelectorAll(".portfolio-grid .item");


  if (!filterButtons.length || !portfolioItems.length) {
    return;
  }


  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const selectedFilter =
        button.dataset.filter;


      // -----------------------------
      // ACTIVE BUTTON
      // -----------------------------

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");


      // -----------------------------
      // FILTER IMAGES
      // -----------------------------

      portfolioItems.forEach((item) => {

        const itemCategory =
          item.dataset.category;


        if (
          selectedFilter === "all" ||
          itemCategory === selectedFilter
        ) {

          item.classList.remove("filter-hidden");

        } else {

          item.classList.add("filter-hidden");

        }

      });

    });

  });

});

// ===============================
// CINEMATIC PRELOADER
// NEW CODE — EXISTING CODE UNTOUCHED
// ===============================

window.addEventListener("load", () => {
  const makeupPreloader = document.getElementById("makeupPreloader");

  if (!makeupPreloader) return;

  setTimeout(() => {
    makeupPreloader.classList.add("hide");

    setTimeout(() => {
      makeupPreloader.remove();
    }, 900);
  }, 2200);
});


if (window.innerWidth > 992) {
  const makeupCursor = document.getElementById("makeupCursor");

  if (makeupCursor) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    window.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      makeupCursor.classList.add("cursor-visible");
    });

    function animateMakeupCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      makeupCursor.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(animateMakeupCursor);
    }

    animateMakeupCursor();

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, .portfolio-grid .item"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        makeupCursor.classList.add("cursor-hover");
      });

      element.addEventListener("mouseleave", () => {
        makeupCursor.classList.remove("cursor-hover");
      });
    });

    window.addEventListener("mouseleave", () => {
      makeupCursor.classList.remove("cursor-visible");
    });

    window.addEventListener("mouseenter", () => {
      makeupCursor.classList.add("cursor-visible");
    });
  }
}

window.addEventListener("load", () => {
  const heroReveal = document.getElementById("heroCinematicReveal");

  if (!heroReveal) return;

  setTimeout(() => {
    heroReveal.classList.add("hide");

    setTimeout(() => {
      heroReveal.remove();
    }, 1300);
  }, 2350);
});