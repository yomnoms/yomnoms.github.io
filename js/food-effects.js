// Food-themed dynamic effects
function initFoodEffects() {
  createFloatingFoodIcons();
  createFoodGradientAnimation();
  createHungerPulse();
}

// Create floating food icons with CSS animations
function createFloatingFoodIcons() {
  const foodIcons = ['🍕', '🍔', '🍟', '🌮', '🍜', '🍣', '🍖', '🍗', '🥩', '🥓', '🍳', '🥞', '🧀', '🥪', '🌭', '🍿', '🍩', '🍰', '🍦', '🍧', '🍨', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🥛', '☕', '🍵', '🥤', '🍺', '🍷', '🍸', '🍹', '🥂', '🍾'];
  
  const container = document.createElement('div');
  container.className = 'floating-food-container';
  document.body.appendChild(container);
  
  // Limit icons based on screen size
  const isMobile = window.innerWidth <= 768;
  const iconCount = isMobile ? 4 : 8;
  
  for (let i = 0; i < iconCount; i++) {
    const icon = document.createElement('div');
    icon.className = 'floating-food-icon';
    icon.textContent = foodIcons[Math.floor(Math.random() * foodIcons.length)];
    
    // More random positioning with better distribution
    const x = Math.random() * 120 - 10; // -10% to 110% for overflow
    const y = Math.random() * 120 - 10; // -10% to 110% for overflow
    icon.style.left = x + '%';
    icon.style.top = y + '%';
    
    // Random timing with more variation
    icon.style.animationDelay = Math.random() * 15 + 's';
    icon.style.animationDuration = (15 + Math.random() * 20) + 's';
    icon.style.fontSize = (3 + Math.random() * 3) + 'rem';
    icon.style.opacity = 0.15 + Math.random() * 0.25;
    
    container.appendChild(icon);
  }
}

// Create animated food gradient background
function createFoodGradientAnimation() {
  const gradientContainer = document.createElement('div');
  gradientContainer.className = 'food-gradient-bg';
  document.body.appendChild(gradientContainer);
  
  // Add CSS animation for gradient movement
  const style = document.createElement('style');
  style.textContent = `
    .food-gradient-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(255, 107, 107, 0.03) 0%,
        rgba(255, 193, 7, 0.03) 25%,
        rgba(76, 175, 80, 0.03) 50%,
        rgba(33, 150, 243, 0.03) 75%,
        rgba(156, 39, 176, 0.03) 100%
      );
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
      pointer-events: none;
      z-index: 0;
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .floating-food-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .floating-food-icon {
      position: absolute;
      animation: floatFood 20s ease-in-out infinite;
      filter: blur(2px);
      text-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }
    
    @keyframes floatFood {
      0%, 100% {
        transform: translateY(0px) rotate(0deg) scale(1);
        opacity: 0.3;
      }
      25% {
        transform: translateY(-20px) rotate(90deg) scale(1.1);
        opacity: 0.6;
      }
      50% {
        transform: translateY(-40px) rotate(180deg) scale(1.2);
        opacity: 0.8;
      }
      75% {
        transform: translateY(-20px) rotate(270deg) scale(1.1);
        opacity: 0.6;
      }
    }
  `;
  document.head.appendChild(style);
}

// Create hunger pulse effect on the logo
function createHungerPulse() {
  const logo = document.querySelector('.logo');
  if (logo) {
    const style = document.createElement('style');
    style.textContent = `
      .logo {
        animation: glow 2s ease-in-out infinite alternate, hungerPulse 4s ease-in-out infinite;
      }
      
      @keyframes hungerPulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
      
      .app-icon {
        animation: bounce 3s ease-in-out infinite, foodGlow 6s ease-in-out infinite;
      }
      
      @keyframes foodGlow {
        0%, 100% {
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.4));
        }
        50% {
          filter: drop-shadow(0 0 50px rgba(255, 107, 107, 0.6));
        }
      }
      
      .tagline {
        animation: fadeInUp 1s ease-out 0.5s both, taglineGlow 8s ease-in-out infinite;
      }
      
      @keyframes taglineGlow {
        0%, 100% {
          text-shadow: 0 0 10px rgba(78, 205, 196, 0.5);
        }
        50% {
          text-shadow: 0 0 20px rgba(78, 205, 196, 0.8), 0 0 30px rgba(78, 205, 196, 0.4);
        }
      }
      
      .signup-section {
        animation: fadeInUp 1s ease-out 1.5s both, signupPulse 10s ease-in-out infinite;
      }
      
      @keyframes signupPulse {
        0%, 100% {
          box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
        }
        50% {
          box-shadow: 0 8px 32px rgba(255, 107, 107, 0.2);
        }
      }
    `;
    document.head.appendChild(style);
  }
} 