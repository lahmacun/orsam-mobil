$(function() {
  $('.mobile-menu li a').on('click', function(e) {
    if ($(this).parent().find('.dropdown-menu').length) {
      e.preventDefault();
      $(this).parent().find('> .dropdown-menu').stop().slideToggle();
    }
    return;
  });

  $('.mobile-menu li a').on('dblclick', function(e) {
    window.location.href = $(this).attr('href');
  });

  $('.mobile-toggler').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.mobile-menu').stop().slideToggle();
  });

  $('.section-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      450:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });

  $('.bulletin-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      450:{
        items:2
      }
    }
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    responsive:{
      0:{
        items:1
      }
    }
  });

  var relatedContentsWidth = 0;
  $('.related-contents .tab-header li').each(function (index, item) {
    relatedContentsWidth += $(item).outerWidth() + 2;
  });

  $('.related-contents .tab-header ul').width(relatedContentsWidth);

//  Tab Controls

  $.loadTabContent = function() {
    $('.related-contents .tab-content .tab-content-inner').stop().slideUp();
    $('.related-contents .tab-content .tab-content-inner:eq(' + currentIndex + ')').stop().slideDown();
  }

  var currentIndex = $('.related-contents .tab-header li.active:first').index();
  $.loadTabContent();

  $('.tab-header li a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().addClass('active');
    currentIndex = $(this).parent().index();
    $.loadTabContent();
  })
});
