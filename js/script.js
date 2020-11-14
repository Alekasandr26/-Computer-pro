// owl carousel
$('.owl-carousel').owlCarousel({
    center: true,
    items:4,
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        320:{
            items:1,
        }
    }
})

// change actice class
$('.nav-link').click(function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})



// masonry
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  })

// animations bloks
new WOW().init()













