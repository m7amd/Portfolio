$( () =>{

  // Add Class Active For Links Navbar And Remove It From siblings

  $('.header .content nav a').on('click', function (e) {

    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');

  });

  // Create Animated Progress 

  $('.skills .content .col-1 .progress span').each(function () {

    $(this).animate({

      width: $(this).data('progress') + '%' 

    }, 1000);

  });

});
