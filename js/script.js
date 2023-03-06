const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// to add and modify active class in navbar:
const li = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// to use the animation javascript library
var options = {
  strings: ['Graduate student', 'Software Developer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
};

var typed = new Typed('.titles', options);


// to add and modify active class in navbar:
function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) { }
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);