let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }

        $('document').ready(function () {
            $('.video1').click(function () {
                currentSlide(1);
                vid1.play();
                vid2.pause();
                vid3.pause();
                vid4.pause();
                vid5.pause();
            });
        });
        $('document').ready(function () {
            $('.video2').click(function () {
                currentSlide(2);
                vid1.pause();
                vid2.play();
                vid3.pause();
                vid4.pause();
                vid5.pause();
            });
        });
        $('document').ready(function () {
            $('.video3').click(function () {
                currentSlide(3);
                vid3.play();
                vid1.pause();
                vid2.pause();
                vid4.pause();
                vid5.pause();
            });
        });
        $('document').ready(function () {
            $('.video4').click(function () {
                currentSlide(4);
                vid4.play();
                vid1.pause();
                vid2.pause();
                vid3.pause();
                vid5.pause();
            });
        });
        $('document').ready(function () {
            $('.video5').click(function () {
                currentSlide(5);
                vid5.play();
                vid1.pause();
                vid2.pause();
                vid3.pause();
                vid4.pause();
            });
        });
         
        

        let vid1 = document.getElementById("myVideo1");
        let vid2 = document.getElementById("myVideo2");
        let vid3 = document.getElementById("myVideo3");
        let vid4 = document.getElementById("myVideo4");
        let vid5 = document.getElementById("myVideo5");


// -------------------------------  Floating Menu  ----------------------------- //
//------------------------------------------------------------------------------ //

// Get all menu from document
document.querySelectorAll('.fabTrigger').forEach(OpenMenu);

// Menu Open and Close function
function OpenMenu(active) {
  if(active.classList.contains('fabTrigger') === true){
    active.addEventListener('click', function (e) {
      e.preventDefault();        

      if (this.parentElement.classList.contains('active') === true) {
        // Close the clicked dropdown
        this.parentElement.classList.remove('active');

      } else {
        // Close the opend dropdown
        closeMenu();
        // add the open and active class(Opening the DropDown)
        this.parentElement.classList.add('active');
      }
    });
  }
};

// Close the openend Menu
function closeMenu() { 
  // remove the open and active class from other opened Moenu (Closing the opend Menu)
  document.querySelectorAll('.fab').forEach(function (container) { 
    container.classList.remove('active')
  });
}

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

 