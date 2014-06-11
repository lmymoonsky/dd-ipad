$(function () {
   
    $('.ddnewhead_operate_nav li').hover(function () {
        $(this).find('.menu_btn').addClass('hover');
        $(this).find('div').show();
        var w_width = $(this).width()-1;
        var d_width = $(this).find('div').width()-1;
        $(this).find('li').css('width', d_width);
        if (d_width < w_width) {
            $(this).find('li').css('width', w_width -1 );
        };
    }, function () {
        $(this).find('.menu_btn').removeClass('hover');
        $(this).find('div').hide();
        $(this).find('li').css('width', '');
    });

    $('.search_box .select').hover(function () {
        $('.search_box .select_pop').show();
    }, function () {
        $('.search_box .select_pop').hide();
    });


    var new_pub_nav_1 = '<div class="new_pub_nav_pop" style="height:452px;"><i class="new_pub_nav_pop_close"></i><iframe frameborder="0"></iframe><ul class="left left_01"><li class="light"><h4><a href="#">服装服饰</a></h4><div class="e"><a href="#" class="hot">VIISHOW</a><a href="#">黛莉琪</a><a href="#">高筒靴 </a><a href="#">Crucco初刻</a><a href="#">贵人鸟</a><a href="#">VIISHOW</a><a href="#">黛莉琪</a><a href="#">高筒靴 </a><a href="#">Crucco初刻 </a><a href="#">贵人鸟</a></div><h3>品牌：</h3><div class="e"><a href="#">ONLY</a><a href="#">ESEY/逸阳</a><a href="#">三彩</a><a href="#">裂帛</a><a href="#">江南布衣</a><a href="#">VEROMODA</a></div></li><li><h4><a href="#">服装服饰</a></h4><div class="e"><a href="#">VIISHOW</a><a href="#">黛莉琪</a><a href="#">高筒靴 </a><a href="#">Crucco初刻 </a><a href="#">贵人鸟</a></div><h3>品牌：</h3><div class="e"><a href="#">ONLY</a><a href="#">ESEY/逸阳</a><a href="#">三彩</a><a href="#">裂帛</a><a href="#">江南布衣</a><a href="#">VEROMODA</a></div></li></ul><ul class="left left_02"><li><h4><a href="#">服装服饰</a></h4><div class="e"><a href="#">VIISHOW</a><a href="#">黛莉琪</a><a href="#">高筒靴 </a><a href="#">Crucco初刻 </a><a href="#">贵人鸟</a><a href="#">贵人鸟</a></div><h3>品牌：</h3><div class="e"><a href="#">ONLY</a><a href="#">ESEY/逸阳</a><a href="#">三彩</a><a href="#">裂帛</a><a href="#">江南布衣</a><a href="#">VEROMODA</a></div></li><li><h4><a href="#">服装服饰</a></h4><div class="e"><a href="#">VIISHOW</a><a href="#">黛莉琪</a><a href="#">高筒靴 </a><a href="#">Crucco初刻 </a><a href="#">贵人鸟</a><a href="#">贵人鸟</a></div><h3>品牌：</h3><div class="e"><a href="#">ONLY</a><a href="#">ESEY/逸阳</a><a href="#">三彩</a><a href="#">裂帛</a><a href="#">江南布衣</a><a href="#">VEROMODA</a></div></li></ul><ul class="left left_03"><li><h4><a href="##">服装服饰无123</a></h4><div class="e"><a href="#">VIISHOW</a><a href="#">黛莉琪</a><a href="#">高筒靴 </a><a href="#">Crucco初刻 </a><a href="#">贵人鸟</a><a href="#">贵人鸟</a></div><h3>品牌：</h3><div class="e"><a href="#">ONLY</a><a href="#">ESEY/逸阳</a><a href="#">三彩</a><a href="#">裂帛</a><a href="#">江南布衣</a><a href="#">VEROMODA</a></div></li><div class="new_pub_pop_guan"><a href="##">鞋靴馆</a><a href="##">鞋靴馆</a><a href="##">鞋靴馆</a></div><div class="new_pub_pop_img"><a href="#"><img src="images/temp/ad_pic_r.jpg" width="288" height="119" title="宽高为215px*75或212*205，此为示意图" /></a></div></ul></div>';
    $('.new_pub_nav .n_b').hover(function () {
        $(this).addClass('on');
        var len = $(this).find('.new_pub_nav_pop').length;
        if (len > 0) {
            $(this).find('.new_pub_nav_pop').show();
        } else {
            $(this).prepend(new_pub_nav_1);
        }
    }, function () {
        $(this).removeClass('on');
        $(this).find('.new_pub_nav_pop').hide();
    });

    $('.abox .left,.abox .right').hover(function () {
        $(this).animate({ opacity: 0.6 }, 0);
    }, function () {
        $(this).animate({ opacity: 1 }, 0);
    })

    $('.outlets .show_list li,.outlets .list li').hover(function () {
        $(this).addClass('on');
    }, function () {
        $(this).removeClass('on');
    });


    $('.ad_bar .tab').each(function () {
        var tabH = $(this).innerHeight();
        var tabT = parseInt((125 - tabH) / 2 + 4);
        $(this).css('top', tabT);
    });

    $('.week_box .arrow_l,.week_box .arrow_r').hover(function () {
        $(this).animate({ opacity: 0.6 }, 0);
    }, function () {
        $(this).animate({ opacity: 1 }, 0);
    });


    $('.tuanbox .shoplist li').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    $('.sort_title').hover(function () {
        $(this).addClass('sort_title_hover');
        $(this).parent().find('.drop_list').slideDown();
    }, function () {
        $(this).removeClass('sort_title_hover');
        $(this).parent().find('.drop_list').hide();
    });
    $('.book_mode .sort_title').mouseenter(function () {
        var index = Math.round($(this).find('li').index() / 2);
        var liH = $(this).find('li').height();
        var dropH = liH * index + 12;
        $('.book_mode .sort_title iframe').css('height', dropH);
    })
});