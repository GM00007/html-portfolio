var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


var swiper = new Swiper('.blog-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},
	// autoHeight: true,
	pagination: {
	  el: '.blog-slider__pagination',
	  clickable: true,
	}
  });
// vue js script

new Vue({
  el:".box",
  data:{
     skills:[
       { lang:"HTML5",      	percent:90,   color:"#ec407a"	},
       { lang:"CSS3", 			percent:76,   color:"#f4511e"	},
       { lang:"JAVASCRIPT", 	percent:84,   color:"#512da8"	},
       { lang:"MATERIALIZE",	percent:94,   color:"#f57c00"	},
     { lang:"VUE",		 	percent:93,   color:"#0288d1"	},
       { lang:"MONGODB", 		percent:87,   color:"#388e3c"	}
     ]
  }
})

$('.slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1008,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			// settings: "unslick"
		}

	]
});
			