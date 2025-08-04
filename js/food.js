// Create flying food items
function createFlyingFood() {
  const foodContainer = document.getElementById('flyingFood');

  // Create multiple food items with different depths and timing
  for (let i = 0; i < 12; i++) {
    const food = document.createElement('div');
    const depth = Math.random();

    food.className = 'food-item';

    // Assign depth class
    if (depth < 0.33) {
      food.classList.add('far');
    } else if (depth < 0.66) {
      food.classList.add('medium');
    } else {
      food.classList.add('near');
    }

    // Create SVG food item
    const foodType = Math.floor(Math.random() * 6);
    food.innerHTML = createFoodSVG(foodType);

    // Random starting position and timing
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const delay = Math.random() * 8;
    const duration = 6 + Math.random() * 4; // 6-10 seconds

    food.style.left = `${startX}px`;
    food.style.top = `${startY}px`;
    food.style.animationDelay = `${delay}s`;
    food.style.animationDuration = `${duration}s`;

    foodContainer.appendChild(food);
  }
}

// Create SVG food items
function createFoodSVG(type) {
  const foods = [
    // Pizza
    `<svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="25" fill="#FF6B35" stroke="#E55A2B" stroke-width="2"/>
      <circle cx="20" cy="20" r="3" fill="#FFD93D"/>
      <circle cx="40" cy="25" r="2" fill="#FFD93D"/>
      <circle cx="25" cy="40" r="2.5" fill="#FFD93D"/>
      <circle cx="35" cy="35" r="2" fill="#FFD93D"/>
      <path d="M15 15 L45 15 M15 45 L45 45" stroke="#E55A2B" stroke-width="1" opacity="0.3"/>
    </svg>`,

    // Burger
    `<svg width="60" height="60" viewBox="0 0 60 60">
      <rect x="10" y="15" width="40" height="8" fill="#8B4513" rx="2"/>
      <rect x="8" y="23" width="44" height="6" fill="#FFD93D" rx="1"/>
      <rect x="10" y="29" width="40" height="4" fill="#228B22" rx="1"/>
      <rect x="8" y="33" width="44" height="6" fill="#FF6347" rx="1"/>
      <rect x="10" y="39" width="40" height="8" fill="#8B4513" rx="2"/>
      <circle cx="20" cy="20" r="1" fill="#8B4513"/>
      <circle cx="40" cy="20" r="1" fill="#8B4513"/>
    </svg>`,

    // French Fries
    `<svg width="60" height="60" viewBox="0 0 60 60">
      <rect x="25" y="10" width="2" height="35" fill="#FFD93D" rx="1"/>
      <rect x="28" y="8" width="2" height="37" fill="#FFD93D" rx="1"/>
      <rect x="31" y="12" width="2" height="33" fill="#FFD93D" rx="1"/>
      <rect x="34" y="6" width="2" height="39" fill="#FFD93D" rx="1"/>
      <rect x="37" y="10" width="2" height="35" fill="#FFD93D" rx="1"/>
      <rect x="22" y="45" width="16" height="8" fill="#8B4513" rx="2"/>
    </svg>`,

    // Sushi
    `<svg width="60" height="60" viewBox="0 0 60 60">
      <rect x="15" y="25" width="30" height="8" fill="#F5DEB3" rx="2"/>
      <rect x="15" y="33" width="30" height="4" fill="#228B22" rx="1"/>
      <circle cx="20" cy="29" r="2" fill="#FF6B6B"/>
      <circle cx="30" cy="29" r="2" fill="#FF6B6B"/>
      <circle cx="40" cy="29" r="2" fill="#FF6B6B"/>
      <rect x="15" y="37" width="30" height="3" fill="#F5DEB3" rx="1"/>
    </svg>`,

    // Ice Cream
    `<svg width="60" height="60" viewBox="0 0 60 60">
      <path d="M25 40 L35 40 L30 20 Z" fill="#FFB6C1"/>
      <path d="M26 38 L34 38 L30 22 Z" fill="#FF69B4"/>
      <path d="M27 36 L33 36 L30 24 Z" fill="#87CEEB"/>
      <rect x="28" y="40" width="4" height="8" fill="#8B4513" rx="1"/>
      <circle cx="29" cy="42" r="0.5" fill="#8B4513"/>
      <circle cx="31" cy="42" r="0.5" fill="#8B4513"/>
    </svg>`,

    // Coffee Cup
    `<svg width="60" height="60" viewBox="0 0 60 60">
      <rect x="15" y="20" width="20" height="25" fill="#8B4513" rx="2"/>
      <rect x="35" y="25" width="8" height="15" fill="#8B4513" rx="1"/>
      <rect x="16" y="21" width="18" height="23" fill="#DEB887" rx="1"/>
      <path d="M20 25 L30 25 M20 30 L30 30 M20 35 L28 35" stroke="#8B4513" stroke-width="1" opacity="0.5"/>
      <ellipse cx="30" cy="45" rx="12" ry="3" fill="#8B4513" opacity="0.3"/>
    </svg>`
  ];

  return foods[type];
} 