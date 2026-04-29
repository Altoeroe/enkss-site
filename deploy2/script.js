// script.js
// Existing functionality kept + upgraded interactions + better WhatsApp enquiry

function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name")?.value.trim() || "";
  const phone = document.getElementById("phone")?.value.trim() || "";
  const msg = document.getElementById("msg")?.value.trim() || "";

  const finalName = name || "Customer";
  const finalPhone = phone || "Not Provided";
  const finalMsg = msg || "Need product details";

  const message =
`Hello ENKS Switchgears,

I would like to enquire about your products.

Name: ${finalName}
Phone: ${finalPhone}
Requirement: ${finalMsg}

Please share price, availability and details.

Thank you.`;

  const whatsappNumber = "919443437803";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

/* =========================
   Reveal Animation
========================= */
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
    ".card, .stats div, .contact-box, .hero-text, .hero-image, .mini-card, .about-box, .feature-box"
  )
  .forEach((el) => observer.observe(el));

/* Dynamic Animation CSS */
const style = document.createElement("style");
style.innerHTML = `
.card,
.stats div,
.contact-box,
.hero-text,
.hero-image,
.mini-card,
.about-box,
.feature-box{
  opacity:0;
  transform:translateY(35px);
  transition:all .8s cubic-bezier(.2,.8,.2,1);
}

.show-item{
  opacity:1 !important;
  transform:translateY(0) !important;
}

.floating-wa{
  position:fixed;
  right:22px;
  bottom:22px;
  width:58px;
  height:58px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#25D366;
  color:#fff;
  font-size:24px;
  text-decoration:none;
  box-shadow:0 10px 25px rgba(0,0,0,.35);
  z-index:999;
  transition:.3s ease;
}

.floating-wa:hover{
  transform:translateY(-4px) scale(1.06);
}

.header-glow{
  backdrop-filter: blur(10px);
  background: rgba(0,0,0,.82);
}

.parallax-move{
  transition: transform .15s linear;
}
`;
document.head.appendChild(style);

/* =========================
   Header Shadow + Glow
========================= */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 12px 35px rgba(0,0,0,.45)";
    header.classList.add("header-glow");
  } else {
    header.style.boxShadow = "none";
    header.classList.remove("header-glow");
  }
});

/* =========================
   Floating WhatsApp Button
========================= */
const wa = document.createElement("a");
wa.href =
  "https://wa.me/919443437803?text=" +
  encodeURIComponent(
`Hello ENKS Switchgears,

I would like to know more about your products. Please share details.`
  );
wa.target = "_blank";
wa.className = "floating-wa";
wa.innerHTML = "✆";
document.body.appendChild(wa);

/* =========================
   Active Navbar
========================= */
const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".menu a").forEach((link) => {
  const href = link.getAttribute("href");

  if (
    href === currentPage ||
    (currentPage === "" && href === "index.html")
  ) {
    link.classList.add("active");
  }
});

/* =========================
   Stats Counter Animation
========================= */
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

/* =========================
   Enquire Buttons Auto WhatsApp
========================= */
document.querySelectorAll(".enquire-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const product =
      btn.getAttribute("data-product") ||
      btn.closest(".card")?.querySelector("h3")?.innerText ||
      "Product";

    const text =
`Hello ENKS Switchgears,

I am interested in: ${product}

Please share price, stock availability and full details.

Thank you.`;

    window.open(
      "https://wa.me/918610073734?text=" +
        encodeURIComponent(text),
      "_blank"
    );
  });
});

/* =========================
   Mouse Motion Effect
========================= */
const heroImage = document.querySelector(".hero-image");

if (heroImage) {
  heroImage.classList.add("parallax-move");

  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform =
      `translate(${x}px, ${y}px)`;
  });
}

/* =========================
   Smooth Anchor Scroll
========================= */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================
   Page Fade In
========================= */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
