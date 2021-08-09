$(document).ready(function(){

    var $btn = $("#top");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 250) {
        $btn.fadeIn();
      } else {
        $btn.fadeOut();
      }
    });
    $btn.on("click", function () {
      $("html, body").animate({
          scrollTop: 0,
        },1000);
    });


    

    let $links = $('.nav_list .nav_item a, .btns');
    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active');
        let id = $(this).addClass('active').attr('href');
        console.log(id);
        let target = $(id).offset().top - 70;
        console.log(target);
        $('html,body').animate({
            scrollTop: target
        }, 1000)



        
    })


    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        console.log(scroll);

        $links.each(function () {
            var target = $(this).attr('href');
            console.log(target);
            var selector = $(target).offset().top - 100;
            console.log(selector);
            if (scroll >= selector) {
                $links.removeClass('active');
                $(this).addClass('active');
            }
        })
    })






 

    
})