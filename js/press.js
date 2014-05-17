
$(function(){
    var popHeight = $('.pop_press').height();
    var bodyHeight = $(window).height()-15;
    $('.pop_press').css("top",-popHeight)
    $('.popclose').live('click',function(){
        $('.shade').fadeOut(500);
        $('.pop_press').animate({"top":-popHeight},1000,function(){
            $('.pop_action').animate({"right":"0"});
        });
    })
    $(".pop_list img").height(bodyHeight);
    $('.pop_presspho').width($(".pop_list img").width());
    var popWidth = ($(".pop_list img").width())/2+47;
    $('.press_action').hover(function(){

        $(this).addClass('current').animate({width:"162px",height:"224px",marginLeft:"-45%",marginTop:"-62%"});
    },
    function(){
        $(this).removeClass('current').animate({width:"26px",height:"26px",marginLeft:"-13px",marginTop:"-13px"});
    });
    $('.press_action').click(function(){
        var thisPress = $(this).offset().top;
        //alert(thisPress);
        $('.shade').fadeIn(500);
        $('.pop_press').animate({"top":"5px",marginLeft:-popWidth},1000,function(){
            $('.pop_action').animate({"right":"-95px"});
        });
    });

    var popSlider = $('.pop_list').bxSlider();
    var count = popSlider.getSlideCount();
     $("#pop_list_total").html(count);
     $('.pop_presspho .bx-prev, .pop_presspho .bx-next').click(function(){
        $("#pop_list_current").html($('.pop_presspho .active').html());
    });

    //css3 效果
    $(".pop_presspho .bx-prev").hover(function(){
        $(".popprev").addClass("current");
    },
    function(){
        $(".popprev").removeClass("current");
    });
    $(".pop_presspho .bx-next").hover(function(){
        $(".popnext").addClass("current");
    },
    function(){
        $(".popnext").removeClass("current");
    });
    $(".popclose").hover(function(){
        $(this).addClass("current");
    },
    function(){
        $(this).removeClass("current");
    });
    
});




