// general js for the project that wouldn't be a reuseable component


///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////

/**/
$('a[*|href^="#"]').on('click',function (e) {
    e.preventDefault();


      //  var target = $(this).attr('xlink:href');
        var target = $(this).attr('href');

        console.log(e);
    //  alert(target+target2);



    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });
