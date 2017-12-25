$(document).ready(loadPage);
var target = 0;


function loadPage() {
  var $buton = $('.control');
  var $previous = $('.previous');
  var $next = $('.next');


  // eventos
  $buton.click(changeImg);
  $previous.click(changePrev);
  $next.click(changeNext);
}

function showImage(target) {  
  var $lastSlide = $("div.active");
  var $slide = $("div[data-slide='" + target + "']");
  $lastSlide.removeClass("active");
  $slide.addClass("active");
}

function changeImg(e) {  
  target = parseInt($(this).data('target'));
  showImage(target);
}

function changePrev(e) {  
  e.preventDefault();
  target = target -1; 
  target = (target<0) ? 4 : target;
  showImage(target); 
}

function changeNext(e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 4) ? 0 : target;
  showImage(target);
}
