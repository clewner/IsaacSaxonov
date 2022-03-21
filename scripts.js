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
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
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

function highlightLink(anchor) {
        console.log(anchor)
        $('nav .active').removeClass('active');
        $('nav')
          .find('[dest="' + anchor + '"]')
          .addClass('active');
}

var lockTimer;
$(window).on('scroll', function() {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    clearTimeout(lockTimer);
      if (!$('body').hasClass('disable-hover')) {
        $('body').addClass('disable-hover');
      }
  
      lockTimer = setTimeout(function() {
        $('body').removeClass('disable-hover');
      }, 40);
      
      

      
      if (pos2 > $('#productions').offset().top) {
        highlightLink('productions');
      }else if (pos2 > $('#about').offset().top) {
        highlightLink('about');
      }else if(pos2 > $('#home').offset().top) {
        highlightLink('home');
      }
      
      


});



function bigdrop(){
  var link = document.getElementById("newthing");
    
  if(link.classList.contains("dropped")){
    link.classList.remove("dropped");
  }else{
    link.classList.add("dropped");
  }

}
