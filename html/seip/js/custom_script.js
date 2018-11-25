(function (e) {
  // alert('working...')
  
  
  
  
  
  
  
  
  
})(jQuery)

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $('header').addClass('sticky')
  } else {
    $('header').removeClass('sticky')
  }
});