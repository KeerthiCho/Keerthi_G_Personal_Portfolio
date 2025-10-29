// Handle current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const mode = document.documentElement.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// Form submission (demo)
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Message sent (demo).";
});
