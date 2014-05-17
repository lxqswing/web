
$(function(){
    var bodyHeight = $(document.body).height();
    var subNavHeight = $(window).height()-66;
    $('.nav_wrapper').css("height",bodyHeight);
    $('.sub_nav').css("height",subNavHeight);
    $(document).scroll(function(){
    	var wScroll = $(document).scrollTop();
        var headerTop = $(window).height()-66;
        if(wScroll>headerTop){
        	$(".header").css({"position":"fixed",top:"0",marginTop:"0"});
        }
        if(wScroll<headerTop){
        	$(".header").css({"position":"relative",top:"auto",marginTop:"-60px"});
        }
    });
    $(".sub_nav_first, .sub_nav_second, .sub_nav_third").bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
    });
    $('.navitem').hover(function(){
    	$('.nav_wrapper').css("display","block");
    	$(this).removeClass('move').addClass('current');
    },function(){
    	$('.nav_wrapper').css("display","none");
    	$(this).removeClass('current').addClass('move');
    });
});




