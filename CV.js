var _window = $(window),
    _header = $('#head'),
    heroBottom;
 
_window.on('scroll',function(){
    headerBottom = $('.header').height();
    if(_window.scrollTop() > headerBottom){
        _header.addClass('transform');   
        _header.addClass('fixed');  
    }
    else{
        _header.removeClass('transform');   
        _header.removeClass('fixed');   
    }
});
 
_window.trigger('scroll');

$(window).on('scroll',function(){
    $(".lineAnimation").each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180){
        $(this).addClass('isActive');
      }
    });
});