// Create animated particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 100;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const isRed = Math.random() > 0.5;
    particle.className = `particle ${isRed ? 'red' : 'purple'}`;

    // Random properties
    const size = Math.random() * 8 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 10;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
}

// Add mouse move effect for particles
function initParticleInteraction() {
  document.addEventListener('mousemove', function(e) {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    particles.forEach((particle, index) => {
      const rect = particle.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const deltaX = mouseX - x;
      const deltaY = mouseY - y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.style.transform = `translate(${deltaX * force * 0.1}px, ${deltaY * force * 0.1}px)`;
      }
    });
  });
}

// Add scroll reveal effect
function initScrollEffect() {
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.particles');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  });
} 