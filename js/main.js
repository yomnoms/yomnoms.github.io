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
  
  // Initialize dark mode
  initDarkMode();
}

// Dark mode functionality
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const toggleIcon = toggle.querySelector('.toggle-icon');
  
  // Update toggle icon based on current mode
  function updateToggleIcon() {
    const isDark = document.documentElement.classList.contains('dark-mode');
    toggleIcon.textContent = isDark ? '☀️' : '🌙';
  }
  
  // Toggle dark mode
  function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateToggleIcon();
  }
  
  // Listen for system preference changes
  function handleSystemPreferenceChange(e) {
    // Only auto-switch if user hasn't manually set a preference
    if (localStorage.getItem('darkMode') === null) {
      const shouldBeDark = e.matches;
      const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
      
      if (shouldBeDark !== isCurrentlyDark) {
        if (shouldBeDark) {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
        updateToggleIcon();
      }
    }
  }
  
  // Set up system preference listener
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', handleSystemPreferenceChange);
  
  toggle.addEventListener('click', toggleDarkMode);
  updateToggleIcon();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 