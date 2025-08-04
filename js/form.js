// Email form handling
function initEmailForm() {
  document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Add success animation
    const btn = this.querySelector('.notify-btn');
    const originalText = btn.textContent;
    btn.textContent = '🎉 Thanks!';
    btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = 'linear-gradient(135deg, #ff6b6b, #ff4757)';
      this.reset();
    }, 3000);
  });
} 