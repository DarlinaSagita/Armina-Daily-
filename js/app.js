// ------------------------------------------------------------------- //
// -----------------------  CUSTOM DOT CURSOR  ----------------------- //

var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();

// ---------------------------------------------------------------- //
// -----------------------   WhatsApp  ---------------------------- //  

document.addEventListener("DOMContentLoaded", () => {
  const chatHeader = document.getElementById("chat-header");
  const chatContent = document.getElementById("chat-content");
  const messageInput = document.getElementById("message-input");
  const closeBtn = document.getElementById("close-btn");
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const chatIcon = document.getElementById("chat-icon");
  let isFirstOpen = true;
  let hasBeenOpened = false;

  function showChat() {
    chatIcon.style.display = "flex";
    chatHeader.style.display = "flex";
    chatContent.style.display = "flex";
    messageInput.style.display = "flex";

    setTimeout(() => {
      chatHeader.style.opacity = "1";
      chatHeader.style.transform = "translateY(0)";
      chatContent.style.opacity = "1";
      chatContent.style.transform = "translateY(0)";
      messageInput.style.opacity = "1";
      messageInput.style.transform = "translateY(0)";
    }, 50);

    if (isFirstOpen) {
      setTimeout(showTypingIndicator, 1000);
      isFirstOpen = false;
    }
    hasBeenOpened = true;
  }

  function hideChat() {
    chatHeader.style.opacity = "0";
    chatHeader.style.transform = "translateY(20px)";
    chatContent.style.opacity = "0";
    chatContent.style.transform = "translateY(20px)";
    messageInput.style.opacity = "0";
    messageInput.style.transform = "translateY(20px)";
    setTimeout(() => {
      chatHeader.style.display = "none";
      chatContent.style.display = "flex";
      messageInput.style.display = "flex";
      chatIcon.style.display = "flex";
    }, 500);
  }

  let autoOpenTimeout = setTimeout(() => {
    if (!hasBeenOpened) {
      showChat();
    }
  }, 3000);

  closeBtn.addEventListener("click", hideChat);

  chatIcon.addEventListener("click", (e) => {
    e.preventDefault();
    clearTimeout(autoOpenTimeout); 
    showChat();
  });

  whatsappBtn.addEventListener("click", () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+6281282108525&text=~",
      "_blank"
    );
  });

  function showTypingIndicator() {
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator"; 
    typingIndicator.innerHTML = "<span></span><span></span><span></span>";
    chatContent.appendChild(typingIndicator);
    chatContent.scrollTop = chatContent.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      showIncomingMessage();
    }, 3000);
  }

  function showIncomingMessage() {
    const incomingMessage = document.createElement("div");
    incomingMessage.className = "message received";
    incomingMessage.textContent =
      "Hallo, Saya Darlina, dan ini adalah presentasi penjualan saya untuk solusi digital inovatif yang akan mengubah produktivitas bisnis Anda.";
    chatContent.appendChild(incomingMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
  }
});


