$(document).ready(function(){
$('.page-link').click(function() {
  
  var anchor = $(this).attr('dest');
  

  
  

  $('html, body').animate(
    {
      scrollTop: $('#' + anchor).offset().top
    },
    500
  );
});

});
$(document).ready(function(){
function onScrollInit(items, elemTrigger) {
  var offset = $(window).height() / 1.6;
  items.each(function() {
    var elem = $(this),
      animationClass = elem.attr('data-animation'),
      animationDelay = elem.attr('data-delay');

    elem.css({
      '-webkit-animation-delay': animationDelay,
      '-moz-animation-delay': animationDelay,
      'animation-delay': animationDelay
    });

    var trigger = elemTrigger ? trigger : elem;

    trigger.waypoint(
      function() {
        elem.addClass('animated').addClass(animationClass);
        if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
      },
      {
        triggerOnce: true,
        offset: offset
      }
    );
  });
}

setTimeout(function() {
  onScrollInit($('.waypoint'));
}, 10);


});
var lockTimer;
$(window).on('scroll', function() {
  clearTimeout(lockTimer);
    if (!$('body').hasClass('disable-hover')) {
      $('body').addClass('disable-hover');
    }

    lockTimer = setTimeout(function() {
      $('body').removeClass('disable-hover');
    }, 500);

});
