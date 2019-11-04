
  $('.rating').slick();

  $('.burger-trigger').click(function(){
    $('.nav-for-site').toggleClass('nav-for-site-opened');
  })
  $(document).click(function(event) {
      if ($(event.target).closest(".burger-trigger").length > 0) return;
      $('.nav-for-site').removeClass('nav-for-site-opened');
      event.stopPropagation();
  });