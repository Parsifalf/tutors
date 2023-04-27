$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop:true,
        margin: 30
    });
  });



  var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop:true,
    margin: 30
});
// Go to the next item
$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider-btn-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})