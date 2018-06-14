// SCROLL TO TOP

document.getElementById('scrolltop').onclick = function() {
		window.scrollTo(0, 0);
	};

// STICK NAVBAR

var navbar = document.getElementById('forscroll')
var sticky = navbar.offsetTop;
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st < lastScrollTop){
  		navbar.classList.add("fix")	
   }
   else {
  		navbar.classList.remove("fix")	
	}
   lastScrollTop = st <= 0 ? 0 : st;
}, false);