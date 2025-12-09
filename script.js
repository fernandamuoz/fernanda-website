// Mostrar animaciones al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

<script>
  const images = document.querySelectorAll('.hobbies-grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
</script>



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");
  const endpoint = "https://formsubmit.co/ajax/fernanda.muoz@uc.cl";

  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    status.textContent = "Sending...";
    status.className = "contact-form__status is-pending";

    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        status.textContent = "Message sent successfully! ✨";
        status.className = "contact-form__status is-success";
        form.reset();
      } else {
        throw new Error();
      }

    } catch (error) {
      status.textContent = "Error sending message. Please try again.";
      status.className = "contact-form__status is-error";
    }
  });
});

<script>
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
</script>

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Cerrar menú cuando se toca un link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

// ---- HAMBURGER MENU TOGGLE ----
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");    // muestra/oculta el menú
  hamburger.classList.toggle("open");     // animación del ícono
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (!hamburger || !navLinks) {
    console.warn("No se encontró #hamburger o #nav-links en el DOM");
    return;
  }

  hamburger.addEventListener("click", (e) => {
    // Evita que otro elemento absorba el click
    e.stopPropagation();

    // Alterna estado accesible
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));

    // Alterna clase CSS que muestra/oculta el menú
    navLinks.classList.toggle("open");
  });

  // Cerrar menú si se hace click fuera de él (mejora UX)
  document.addEventListener("click", (evt) => {
    if (navLinks.classList.contains("open")) {
      const target = evt.target;
      if (!navLinks.contains(target) && target !== hamburger && !hamburger.contains(target)) {
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});
