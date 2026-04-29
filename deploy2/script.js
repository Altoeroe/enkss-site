// script.js

function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const msg = document.getElementById("msg")?.value || "";

  const text =
    "Hello ENKS Switchgears,%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Requirement: " + encodeURIComponent(msg);

  // Replace with your real WhatsApp number:
  const whatsappNumber = "918610073734";

  window.open(
    "https://wa.me/" + whatsappNumber + "?text=" + text,
    "_blank"
  );
}

/* Smooth reveal animation */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-item");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".card, .stats div, .contact-box, .hero-text, .hero-image")
  .forEach((el) => observer.observe(el));

/* Add animation class dynamically */
const style = document.createElement("style");
style.innerHTML = `
.card,
.stats div,
.contact-box,
.hero-text,
.hero-image{
  opacity:0;
  transform:translateY(30px);
  transition:all .7s ease;
}

.show-item{
  opacity:1 !important;
  transform:translateY(0) !important;
}
`;
document.head.appendChild(style);

/* Navbar shadow on scroll */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    header.style.boxShadow = "none";
  }
});
