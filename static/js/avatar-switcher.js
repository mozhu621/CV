// Avatar Switcher Functionality
// Get base path dynamically
var getBasePath = function() {
  var base = document.querySelector('base');
  if (base && base.href) {
    return base.href;
  }
  // Fallback to current origin
  return window.location.origin + '/';
};

var avatarState = {
  basePath: getBasePath(),
  avatars: [
    { src: 'authors/admin/avatar.jpg', label: 'Professional' },
    { src: 'authors/admin/katong.png', label: 'Katong' },
    { src: 'authors/admin/HAHAHA.jpg', label: 'Fun' }
  ],
  currentIndex: 0,
  
  updateAvatar: function(index) {
    console.log('Updating avatar to index:', index);
    this.currentIndex = index;
    var img = document.getElementById('avatar-display');
    var label = document.getElementById('avatar-label');
    
    if (img) {
      img.style.opacity = '0';
      var self = this;
      setTimeout(function() {
        // Use base path + relative path
        var fullPath = self.basePath + self.avatars[index].src;
        img.src = fullPath;
        img.style.opacity = '1';
        console.log('Avatar updated to:', fullPath);
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
    console.log('Next avatar clicked');
    this.updateAvatar((this.currentIndex + 1) % this.avatars.length);
  },
  
  prevAvatar: function() {
    console.log('Previous avatar clicked');
    this.updateAvatar((this.currentIndex - 1 + this.avatars.length) % this.avatars.length);
  }
};

// Initialize when DOM is loaded
(function() {
  function init() {
    console.log('Avatar switcher initialized');
    console.log('Base path:', avatarState.basePath);
    
    // Ensure initial avatar is loaded
    var img = document.getElementById('avatar-display');
    if (img) {
      console.log('Initial avatar src:', img.src);
      // Pre-load all avatars
      avatarState.avatars.forEach(function(avatar, index) {
        var preloadImg = new Image();
        var fullPath = avatarState.basePath + avatar.src;
        preloadImg.src = fullPath;
        console.log('Pre-loading avatar', index, ':', fullPath);
      });
    } else {
      console.error('Avatar display element not found on init');
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
