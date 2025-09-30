// Avatar Switcher Functionality
var avatarState = {
  avatars: [
    { src: '/authors/admin/avatar.jpg', label: 'Professional' },
    { src: '/authors/admin/katong.png', label: 'Katong' },
    { src: '/authors/admin/HAHAHA.jpg', label: 'Fun' }
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
        img.src = self.avatars[index].src;
        img.style.opacity = '1';
        console.log('Avatar updated to:', self.avatars[index].src);
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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Avatar switcher initialized');
  });
} else {
  console.log('Avatar switcher ready');
}
