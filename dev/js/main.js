$(function() {
  $('.mobile-menu li a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('> .dropdown-menu').stop().toggle();
  });
  $('.mobile-toggler').on('click', function(e) {
    e.preventDefault();
    $('.mobile-menu').stop().toggle();
  })
});
