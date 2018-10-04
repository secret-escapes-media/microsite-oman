// general js for the project that wouldn't be a reuseable component


///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////

/*
$(document).ready(function() {
	$('a[*|href^="#"]').on('click',function () {
	//	e.preventDefault();

		var target = $(this).attr('xlink:href');
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    console.log(event);

    		var target = $(this).attr('xlink:href');
    		var $target = $(target);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
//alert();
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
/*
  $('a[*|href^="#"]').on('click',function (e) {
  		e.preventDefault();

  		var target = $(this).attr('xlink:href');
  		var $target = $(target);

  		$('html, body').stop().animate({
  			'scrollTop': $target.offset().top
  		}, 900, 'swing', function () {
  			window.location.hash = target;
  		});
  	});*/

});
