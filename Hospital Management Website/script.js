const bars = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  nav.classList.toggle("nav-toggle");
});

nav.addEventListener("click", () => {
  nav.classList.remove("nav-toggle");
  bars.classList.remove("fa-times");
});

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
});

$(".facility").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});

// document.addEventListener("DOMContentLoaded", () => {
//   const facility = document.querySelector(".facility");

//   if (facility) {
//     const links = facility.querySelectorAll("a");
//     links.forEach((link) => {
//       link.setAttribute("data-lightbox", "gallery");
//     });
//   }
// });
