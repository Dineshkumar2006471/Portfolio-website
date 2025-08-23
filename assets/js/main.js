// Typed text
const typed = new Typed("#element", {
  strings: ["Web Developer", "Cloud Enthusiast", "DevOps Engineer"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// ParticlesJS config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#9f79f3" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1 }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#9f79f3",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: "none",
      out_mode: "bounce"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
