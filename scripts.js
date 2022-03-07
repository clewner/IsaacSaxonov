function reveal() {
  var reveals = document.querySelectorAll(".detector");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function effreveal(){ 
  debounce(reveal(), 250);

};

window.addEventListener("scroll", effreveal);

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      window.removeEventListener("scroll", effreveal);
      // Store hash
      var hash = this.hash;
      setTimeout(function(){$(".detector").addClass("active")}, 690);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      setTimeout(function(){window.addEventListener("scroll", effreveal);}, 900);        // Add hash (#) to URL when done scrolling (default click behavior)
        
       
      });
    } // End if
  });
});
