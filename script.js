$( document ).ready(function() {

    // Correctly showing / hiding carousel arrows 
    $('.carousel').carousel({
      wrap: false
    }).on('slid.bs.carousel', function () {
    curSlide = $('.active');

    if(curSlide.is( ':first-child' )) {
      $('.left').hide();
      return;
    } else {
      $('.left').show();   
    }
    if (curSlide.is( ':last-child' )) {
      $('.right').hide();
      return;
    } else {
      $('.right').show();      
    }
  });
});
