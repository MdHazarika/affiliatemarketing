 window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("fade-in");
  }, 10); 
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || link.target === "_blank") return;

    e.preventDefault();
    document.body.classList.remove("fade-in");

    setTimeout(() => {
      window.location.href = href;
    }, 600); 
  });
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];
const numParticles = 40;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.8) * 0.8;
    this.speedY = (Math.random() - 1) * 1;
    this.opacity = Math.random() * 0.5 + 0.2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, ${this.opacity})';
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const textArray = [
  "Financial tips for your Financial Journey...",
 "Building the Future of the Web...",
  "Creating Beautiful Experiences...",
  "Innovating with Passion...",
  "Powered by Hazarika CloudForge."
];

const typingText = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (!typingText) return; 

  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 1000);
});

const typingOnce = document.getElementById("typing-once");
const textToType = "AFFILUX CF";
let index = 0;

function typeOnceEffect() {
  if (!typingOnce) return; 
  if (index < textToType.length) {
    typingOnce.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeOnceEffect, 100);
  } else {
    typingOnce.style.borderRight = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeOnceEffect, 800);
});


  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuToggle.textContent = menuToggle.classList.contains('active') ? '✖' : '☰';
});

