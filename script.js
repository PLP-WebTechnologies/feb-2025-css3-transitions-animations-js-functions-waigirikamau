document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const animationTypeSelect = document.getElementById('animation-type');
  const animationSpeedSelect = document.getElementById('animation-speed');
  const saveBtn = document.getElementById('save-btn');
  const animateBtn = document.getElementById('animate-btn');
  const animatedElement = document.getElementById('animated-element');
  
  // Load saved preferences
  loadPreferences();
  
  // Save preferences to localStorage
  saveBtn.addEventListener('click', function() {
      const preferences = {
          animationType: animationTypeSelect.value,
          animationSpeed: animationSpeedSelect.value
      };
      
      localStorage.setItem('animationPreferences', JSON.stringify(preferences));
      alert('Preferences saved!');
  });
  
  // Trigger animation based on preferences
  animateBtn.addEventListener('click', function() {
      // Remove all animation classes first
      animatedElement.className = 'animation-box';
      
      // Get current values (in case they weren't saved)
      const animationType = animationTypeSelect.value;
      const animationSpeed = animationSpeedSelect.value;
      
      // Apply animation classes
      animatedElement.classList.add(animationType);
      animatedElement.classList.add(animationSpeed);
  });
  
  // Load preferences from localStorage
  function loadPreferences() {
      const savedPreferences = localStorage.getItem('animationPreferences');
      
      if (savedPreferences) {
          const preferences = JSON.parse(savedPreferences);
          
          // Set the select values
          animationTypeSelect.value = preferences.animationType;
          animationSpeedSelect.value = preferences.animationSpeed;
          
          // Apply the animation immediately if you want
          // animatedElement.classList.add(preferences.animationType);
          // animatedElement.classList.add(preferences.animationSpeed);
      }
  }
  
  // Bonus: Add hover effect with transition
  animatedElement.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  });
  
  animatedElement.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
  });
});