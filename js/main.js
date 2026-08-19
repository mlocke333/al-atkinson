const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

const form = document.querySelector("#inquiry-form");
const success = document.querySelector("#form-success");
if (form && success) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\n${email}`);
    // Replace this address once Al’s preferred inbox is confirmed.
    window.location.href = `mailto:hello@alatkinsonbooks.com?subject=${subject}&body=${body}`;
    success.classList.add("show");
    form.reset();
  });
}
