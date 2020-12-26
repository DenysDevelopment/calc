let count_particles, clicked = [],
	input = document.querySelector('.calc__input'),
	inputOut = document.querySelector('.calc__out');

function changeBackground() {
	document.querySelector('#particles-js').style.background = `hsl(${Math.random() * 20000},30%,67%)`;
}
setInterval(changeBackground, 1000);
changeBackground();


function equal() {
	if(input.value)	input.value = eval(input.value);
}


function remove() {
	input.value = input.value.substring(0,input.value.length - 1);
}

function addNumberInput(event) {
 let target = event.target;

 if(target.classList.contains('grid__item')&&
 	 !target.classList.contains('equal') &&
 	 !target.classList.contains('remove') &&
 	 !target.classList.contains('delete'))
 {
	input.value += target.innerHTML;
 }else if(target.classList.contains('equal')) {
 	equal();
 }else if(target.classList.contains('remove')) {
 	input.value = '';
 }else if(target.classList.contains('delete')) {
 	remove();
 }
}


window.addEventListener('click',addNumberInput)
input.addEventListener('input',equal)

particlesJS("particles-js", {
  particles: {
    number: {
      value: 197,
      density: { enable: true, value_area: 3077.6758023658635 }
    },
    color: { value: "#fff" },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#fff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 6.413648243462092,
      direction: "bottom-left",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 3206.8241217310456, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

count_particles = document.querySelector(".js-count-particles");
