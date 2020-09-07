$('.btn-toggle-top-banner-bar').click(function() {
  $('html').toggleClass('top-bar-visible');
});



$('.page2>.top-slider-1>.page-menu>li').click(function() {
  $('.top-slider-1>.page-menu>li.active').removeClass('active');
  
  $(this).addClass('active');

  var $slider = $(this).parent().parent();
  
  $slider.find(' > .slides > .active').removeClass('active');
  var index = $(this).index();
  $slider.find(' > .slides > *').eq(index).addClass('active');
});




setInterval(function() {
  var $current = $('.page2> .top-slider-1 > .page-menu > li.active');
  var $post = $current.next();
  
  if($post.length == 0){
    $post = $current.siblings(':first-child');
  }
  $post.click();
}, 3000);




function SideBar__init() {
  $('.page3 .btn-toggle-side-bar').click(function() {
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      SideBar__hide();
    }
    else {
      $(this).addClass('active');
      SideBar__show();
    }
  });
}

function SideBar__show() {
  $('html').addClass('side-bar-actived');
}

function SideBar__hide() {
  $('html').removeClass('side-bar-actived');
}

SideBar__init();