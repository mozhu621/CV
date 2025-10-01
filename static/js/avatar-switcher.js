// Avatar Switcher Functionality
var avatarState = {
  avatars: [
    { src: 'authors/admin/avatar.jpg', label: 'Professional' },
    { src: 'authors/admin/katong.png', label: 'Katong' },
    { src: 'authors/admin/HAHAHA.jpg', label: 'Fun' }
  ],
  currentIndex: 0,
  
  // Get the correct base path
  getBasePath: function() {
    // Get base URL from current page
    var baseUrl = window.location.href.split('#')[0];
    baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
    return baseUrl;
  },
  
  // Build full URL from relative path
  buildUrl: function(relativePath) {
    var base = this.getBasePath();
    // Remove leading slash if present
    if (relativePath.startsWith('/')) {
      relativePath = relativePath.substring(1);
    }
    return base + relativePath;
  },
  
  updateAvatar: function(index) {
    console.log('Updating avatar to index:', index);
    this.currentIndex = index;
    var img = document.getElementById('avatar-display');
    var label = document.getElementById('avatar-label');
    
    if (img) {
      img.style.opacity = '0';
      var self = this;
      setTimeout(function() {
        var newSrc = self.buildUrl(self.avatars[index].src);
        img.src = newSrc;
        img.style.opacity = '1';
        console.log('Avatar updated to:', newSrc);
      }, 200);
    } else {
      console.error('Avatar image element not found');
    }
    
    if (label) {
      label.textContent = this.avatars[index].label;
    }
    
    // Update indicator dots
    for (var i = 0; i < this.avatars.length; i++) {
      var dot = document.getElementById('dot-' + i);
      if (dot) {
        dot.style.background = (i === index) ? '#0066cc' : '#ccc';
        dot.style.transform = (i === index) ? 'scaleY(1.5)' : 'scaleY(1)';
      }
    }
  },
  
  nextAvatar: function() {
    console.log('Next avatar clicked, current:', this.currentIndex);
    var newIndex = (this.currentIndex + 1) % this.avatars.length;
    this.updateAvatar(newIndex);
  },
  
  prevAvatar: function() {
    console.log('Previous avatar clicked, current:', this.currentIndex);
    var newIndex = (this.currentIndex - 1 + this.avatars.length) % this.avatars.length;
    this.updateAvatar(newIndex);
  }
};

// Initialize when DOM is loaded
(function() {
  function init() {
    console.log('=== Avatar Switcher Initialized ===');
    console.log('Base path:', avatarState.getBasePath());
    
    // Check if avatar image exists
    var img = document.getElementById('avatar-display');
    if (img) {
      console.log('Initial avatar element found');
      console.log('Initial avatar src:', img.src);
      
      // Pre-load all avatars
      console.log('Pre-loading avatars...');
      avatarState.avatars.forEach(function(avatar, index) {
        var preloadImg = new Image();
        var fullPath = avatarState.buildUrl(avatar.src);
        preloadImg.src = fullPath;
        preloadImg.onload = function() {
          console.log('✓ Avatar', index, 'loaded:', avatar.label);
        };
        preloadImg.onerror = function() {
          console.error('✗ Failed to load avatar', index, ':', fullPath);
        };
      });
    } else {
      console.error('Avatar display element not found on init!');
    }
    
    // Test if buttons are accessible
    console.log('avatarState object:', avatarState);
    console.log('Functions available:', typeof avatarState.nextAvatar, typeof avatarState.prevAvatar);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// Make avatarState globally accessible for debugging
if (typeof window !== 'undefined') {
  window.avatarState = avatarState;
  console.log('avatarState is now globally accessible');
}
