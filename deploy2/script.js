// script.js
// Existing functionality kept + project plan upgrades added

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

document
  .querySelectorAll(
    ".card, .stats div, .contact-box, .hero-text, .hero-image, .mini-card"
  )
  .forEach((el) => observer.observe(el));

/* Add animation class dynamically */
const style = document.createElement("style");
style.innerHTML = `
.card,
.stats div,
.contact-box,
.hero-text,
.hero-image,
.mini-card{
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

/* Floating WhatsApp Button */
const wa = document.createElement("a");
wa.href = "https://wa.me/918610073734";
wa.target = "_blank";
wa.className = "floating-wa";
wa.innerHTML = "✆";
document.body.appendChild(wa);

/* Active nav auto highlight */
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".menu a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

/* Simple counter animation for stats */
document.querySelectorAll(".stats span").forEach((item) => {
  const raw = item.textContent.replace(/\D/g, "");
  const target = parseInt(raw, 10);

  if (!target) return;

  let count = 0;
  const step = Math.ceil(target / 60);

  const timer = setInterval(() => {
    count += step;

    if (count >= target) {
      item.textContent =
        item.textContent.includes("+") ? target + "+" : target;
      clearInterval(timer);
    } else {
      item.textContent = count;
    }
  }, 25);
});
