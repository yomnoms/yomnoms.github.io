// Main initialization
function init() {
  // Initialize particles
  createParticles();
  initParticleInteraction();
  initScrollEffect();
  
  // Initialize food-themed dynamic effects
  initFoodEffects();
  
  // Initialize email form
  initEmailForm();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 