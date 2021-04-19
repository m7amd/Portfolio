$( () =>{

  // Add Class Active For Links Navbar And Remove It From siblings

  $('.header .content nav a').on('click', function (e) {

    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');


    // Smooth Scroll 

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

    }, 1000);

  });

    // Sync Navbar Links With Sections

    $(window).on('scroll', function () {

      $('.block').each(function () {
  
        if ($(window).scrollTop() > $(this).offset().top) {
          
          $('.navbar li a').removeClass('active');
  
          let blockId = $(this).attr('id');
  
          $('.header .content nav a[data-scroll="' + blockId + '"]').addClass('active').siblings().removeClass('active');
  
        }
  
      });
  
    });

  // Create Animated Progress 

  $('.skills .content .col-1 .progress span').each(function () {

    $(this).animate({

      width: $(this).data('progress') + '%' 

    }, 1000);

  });

  // Nice Scroll 

  $('html').niceScroll({
    touchbhavior: true,
    zindex: '999999',
    scrollspeed: '5', // 30
    cursorcolor:"#e58e26",
    background:"#353b48",
    cursorborder:"1px solid #F9CA24",
    cursorborderradius: '3px',
    cursorwidth:"7px",
  });

  // Add Class Active For Links The Shuflle Image And Remove It From siblings

  $('.latest .container .links a').on('click', function (e) {

    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');

  });

  // Scroll To Top Button 

  const btn = $('.top');

  $(window).on('scroll', function () {

    if ($(window).scrollTop() >= 1200) {
      
      if (btn.is(':hidden')) {
        
        btn.fadeIn(500);

      }

    } else {
      
      btn.fadeOut(500);

    }

  });

  btn.on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: 0

    }, 1000);

  });

  // Toggle Humbrger Menu On Click 

  const humbrger = $('.header .link');

  $('.humbrger').on('click', function () {

    $(this).toggleClass('show');

    if (humbrger.is(':hidden')) {
      
      humbrger.show()

    } else {
      
      humbrger.hide()

    }
  });

});
