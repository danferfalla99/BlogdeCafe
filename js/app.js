// Dark Mode Toggle y Mobile Menu
(function () {
  "use strict";

  // ======================
  // DARK MODE MANAGEMENT
  // ======================

  // Verificar preferencia guardada o del sistema
  function initDarkMode() {
    const darkModePreference = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (
      darkModePreference === "dark" ||
      (!darkModePreference && systemPrefersDark)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Toggle dark mode
  function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark ? "dark" : "light");

    // Añadir animación suave
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
  }

  // ======================
  // MOBILE MENU MANAGEMENT
  // ======================

  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuClose = document.getElementById("mobile-menu-close");

    if (!mobileMenuBtn || !mobileMenu) return;

    // Abrir menú móvil
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      document.body.style.overflow = "hidden"; // Prevenir scroll
    });

    // Cerrar menú móvil
    function closeMobileMenu() {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      document.body.style.overflow = ""; // Restaurar scroll
    }

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu);
    }

    // Cerrar al hacer click fuera del menú
    mobileMenu.addEventListener("click", function (e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });

    // Cerrar con tecla ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        closeMobileMenu();
      }
    });
  }

  // ======================
  // SCROLL EFFECTS
  // ======================

  function initScrollEffects() {
    // Añadir clase al header cuando se hace scroll
    let lastScroll = 0;
    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;

      // Añadir sombra al hacer scroll
      if (currentScroll > 100) {
        header.classList.add("shadow-lg");
      } else {
        header.classList.remove("shadow-lg");
      }

      lastScroll = currentScroll;
    });
  }

  // ======================
  // ANIMACIONES EN SCROLL
  // ======================

  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos con clase .animate-on-scroll
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }

  // ======================
  // SMOOTH SCROLL
  // ======================

  function initSmoothScroll() {
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
  }

  // ======================
  // INICIALIZACIÓN
  // ======================

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    initDarkMode();
    initMobileMenu();
    initScrollEffects();
    initScrollAnimations();
    initSmoothScroll();

    // Configurar botón de dark mode
    const darkModeBtn = document.getElementById("dark-mode-toggle");
    if (darkModeBtn) {
      darkModeBtn.addEventListener("click", toggleDarkMode);
    }
  }

  // Exponer funciones globalmente si es necesario
  window.blogCafe = {
    toggleDarkMode: toggleDarkMode,
  };
})();
