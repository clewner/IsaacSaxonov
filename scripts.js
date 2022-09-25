var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }
$(document).ready(function(){


    $(".one").click(function(){
      $(this).toggleClass("is-active");
    });
  
    var navPos = $('.navcon').position().top;
  var lastPos = 0;
  var lockTimer;
  $(window).on('scroll', function() {
      
    
      var pos = $(window).scrollTop();
      var pos2 = pos + 50;
      
      if($("#newthing").hasClass("dropped")){
       
        if (pos >= navPos + $('#navcon').height() && lastPos < pos ) {
          $('#navcon').addClass('fixed');
          //132px
          
        }
        if (pos < navPos && lastPos > pos) {
          $('#navcon').removeClass('fixed');
        }
  
  
      }else{
        if (pos >= navPos + $('#navcon').height() && lastPos < pos) {
          $('#navcon').addClass('fixed');
          
        }
        if (pos < navPos && lastPos > pos) {
          $('#navcon').removeClass('fixed');
        }
        
      }
      lastPos = pos;
    
      clearTimeout(lockTimer);
        if (!$('body').hasClass('disable-hover')) {
          $('body').addClass('disable-hover');
        }
    
        lockTimer = setTimeout(function() {
          $('body').removeClass('disable-hover');
        }, 40);
        
        
  
        if (pos2 > $('#contact').offset().top){
          highlightLink('contact');
        }else if (pos2 > $('#productions').offset().top) {
          highlightLink('productions');
        }else if (pos2 > $('#about').offset().top) {
          highlightLink('about');
        }else if(pos2 > $('#home').offset().top) {
          highlightLink('home');
        }
        
        
  
  
  });
  
    $('.page-link').click(function() {
      
      var anchor = $(this).attr('dest');
      if($(".one").hasClass("is-active")){
        $(".one").removeClass("is-active");
      }
      
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
  
  
  
  
  
function bigdrop(){
    var link = document.getElementById("newthing");
    var glowy = document.getElementById("underglow");
      
    setTimeout(() => {if(link.classList.contains("dropped")){
      link.classList.remove("dropped");
      glowy.classList.remove("dropped");
    }else{
      link.classList.add("dropped");
      glowy.classList.add("dropped");
    }}, 0);
    
  
}

function smalldrop(){
  var link = document.getElementById("newthing");
  var glowy = document.getElementById("underglow");
    
  setTimeout(() => {if(link.classList.contains("dropped")){
    link.classList.remove("dropped");
    glowy.classList.remove("dropped");
  }}, 0);
}

function toggleQuote(){
  console.log("togglequote");
  if(window.innerWidth <= 630){
      var imgquote = document.getElementById("qimg");
      var texbox = document.getElementById("textq");
      
      if(imgquote.classList.contains("infront")){
        imgquote.classList.remove("infront");
        texbox.classList.remove("cardfront");
        
      }else{
        imgquote.classList.add("infront");
        texbox.classList.add("cardfront");
       

      }
  }
}

function toggleQuoteSwerve(){
  console.log("togglequoteserver");
  if(window.innerWidth <= 630){
      var imgquote = document.getElementById("simg");
      var texbox = document.getElementById("swerveq");
      
      if(imgquote.classList.contains("infront")){
        imgquote.classList.remove("infront");
        texbox.classList.remove("cardfront");
        
      }else{
        imgquote.classList.add("infront");
        texbox.classList.add("cardfront");
       

      }
  }
}

function toggleQuoteGrade(){
  console.log("togglequoteserver");
  if(window.innerWidth <= 630){
      var imgquote = document.getElementById("gimg");
      var texbox = document.getElementById("gradeq");
      
      if(imgquote.classList.contains("infront")){
        imgquote.classList.remove("infront");
        texbox.classList.remove("cardfront");
        
      }else{
        imgquote.classList.add("infront");
        texbox.classList.add("cardfront");
       

      }
  }
}

