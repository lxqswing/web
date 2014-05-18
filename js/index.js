/**
 *
 * FF
 * zx 2014 04 307
 *
 */
(function ($) {
    var Index={
        /**
         * 初始化方法,用于功能函数的入口
         * @param {string}
         * @example
         **/
        init:function(){
            //事件绑定
            this.bindEvent();
        },
        /**
         * 事件绑定
         * @param {string}
         * @example
         **/
        bindEvent:function(){
            $('.popclose').live('click',function(){
                $('.pop,.shade').fadeOut(500)
            })
        }
    };
    Index.init();  
})(jQuery);

/*home number 数字滚动*/
$(function(){
    $(window).stellar({
        positionProperty:'transform',
        hideDistantElements: false});
    function show_num(n,s){ 
        var it = $(s+" i"); 
        var len = String(n).length;
        for(var i=0;i<len;i++){ 
            if(it.length<=i){ 
                $(s).append("<i></i>"); 
            }
            var num=String(n).charAt(i); 
            var y = -parseInt(num)*50; //y轴位置 
            var obj = $(s+" i").eq(i);
            obj.animate({ //滚动动画 
                backgroundPosition :'(0 '+String(y)+'px)'  
                }, 'slow','swing',function(){} 
            ); 
        } 
    }
    show_num(12126,".num_one");
    show_num(15,".num_two");
    show_num(211,".num_three");
    show_num(11,".num_four");                                             
    show_num(211,".num_five");
    $(document).scroll(function(){
        var wScroll = $(document).scrollTop();
        var homeNumTop = $(".home_num").offset().top;
        var featureTop = $(".home_campaign").offset().top-100;
        var blogTop = $(".home_bio").offset().top-100;
        var bannerFootTop = $(".banner_footer").offset().top-100;
        var backValue = wScroll - blogTop - 393;
        var bannerFootValue = wScroll - bannerFootTop;

        if(wScroll > homeNumTop){
            show_num(12566,".num_one");
            show_num(135,".num_two");
            show_num(700,".num_three");
            show_num(24,".num_four");                                             
            show_num(256,".num_five");
        }
        if(wScroll > featureTop){
            $(".first").animate({top:"0"},
            function(){
                $(".second").css("display","block").animate({top:"0"},
                    function(){
                        $(".third").css("display","block").animate({top:"0"},
                            function(){
                                $(".home_cambtn").css("display","block").animate({top:"0"});
                            });
                    });
            });
        }
        // if((wScroll > blogTop)&&(backValue > 0)){
            
        //     //$('.home_bio').stellar({verticalOffset:"1655"});
        //     //.animate({backgroundPosition:'0 '+backValue+'px'},10);
        //  }
        // if((wScroll > bannerFootTop)&&(360 > bannerFootValue)&&(bannerFootValue > 0)){
        //     //console.log(bannerFootValue);
        //     //$('.footer').animate({marginTop:bannerFootValue+'px'},10);
        //     $('.footer').css({
        //         '-webkit-transform':'translate3d(0,'+bannerFootValue+'px,0)',
        //         '-moz-transform':'translate3d(0,'+bannerFootValue+'px,0)',
        //         '-ms-transform':'translate3d(0,'+bannerFootValue+'px,0)',
        //         '-o-transform':'translate3d(0,'+bannerFootValue+'px,0)',
        //         'transform':'translate3d(0,'+bannerFootValue+'px,0)'});
        // }
    });
    // var bannerItemWidth = $(".banner_list li").width();
    // var bannerItem = $(".banner_list li").length;
    // var bannerWidth = bannerItemWidth*bannerItem;
    // $(".banner_list").css("width",bannerWidth);
    // $(".banner_list li").css("width",bannerItemWidth);
    // $(".banner_action .next").click(function(){
    //     //alert(bannerItem);
    //     $(".banner_list").animate({"left":-bannerItemWidth});
    // });
    var bodyHeight = $(window).height();
    $('.banner_list img').height(bodyHeight);
    $('.banner_list').bxSlider();
    var slider = $('.news_list').bxSlider();
    var count = slider.getSlideCount();
    $("#news_total").html(count);
    $('.home_news .bx-prev, .home_news .bx-next').click(function(){
        $("#news_current").html($('.home_news .active').html());
    });

    //css3 效果
    $(".banner_action li,  .home_cambtn").hover(function(){
        $(this).addClass("current");
    },
    function(){
        $(this).removeClass("current");
    });
    //banner hover action
    $(".banpho .bx-prev").hover(function(){
        $(".banner_action .prev").addClass("current");
    },
    function(){
        $(".banner_action .prev").removeClass("current");
    });
    $(".banpho .bx-next").hover(function(){
        $(".banner_action .next").addClass("current");
    },
    function(){
        $(".banner_action .next").removeClass("current");
    });
    // news hover action
    $(".home_news .bx-prev").hover(function(){
        $(".news_prev").addClass("current");
    },
    function(){
        $(".news_prev").removeClass("current");
    });
    $(".home_news .bx-next").hover(function(){
        $(".news_next").addClass("current");
    },
    function(){
        $(".news_next").removeClass("current");
    });
    
    $(".home_news .bx-controls-direction a").click(function(e){
        e.preventDefault();
        $(".home_news .bx-viewport").fadeOut("fast");
        $(".home_news .bx-viewport").fadeIn("slow");
    });
    $(".home_cambtn").click(function(e){
        e.preventDefault();
        $(".home_camcon").append('<div class="cam_item first opic"><img src="images/campaign_demo2.jpg" /><p>All starts with an Audi</p></div><div class="cam_item second opic"><img src="images/campaign_demo1.jpg" /><p>All starts with an Audi</p></div><div class="cam_item third opic"><img src="images/campaign_demo2.jpg" /><p>All starts with an Audi</p></div>');
        $(".first").animate({top:"0"},
            function(){
                $(".second").css("display","block").animate({top:"0"},
                    function(){
                        $(".third").css("display","block").animate({top:"0"});
                    });
            });
    });
});




