const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


var options = {
    strings: ['Graduate student', 'Software Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  };
  
  var typed = new Typed('.titles', options);