$(function(){
    mobileAberto = false;


    //ativarMobile
    verificarMobile();
    function verificarMobile(){
        var btn = $('.mobile__button');
        var mobile = $('.mobile__menu');
        var span = $('.mobile__button span');
        var line1 = $('.line1');
        var line2 = $('.line2');
        var line3 = $('.line3');
        var dark = $('div.dark');
        var link = $('.mobile a');
        var animacao = false;

        btn.click(function(){
            if(animacao)return
            animacao = true;

            if(mobileAberto){
                mobileAberto = false;
                dark.fadeOut()
                line1.css("transform",'rotate(0)').css("top","0px")
                line2.css("display","block");
                line3.css("transform","rotate(0)").css("top","16px");
                span.css("background-color","transparent");
                mobile.toggle("slide",{direction: 'up'},"slow",function(){
                    animacao = false;
                });
            }else{
                mobileAberto = true;
                dark.fadeIn()
                line1.css("transform",'rotate(45deg)').css("top","13px")
                line2.css("display","none");
                line3.css("transform","rotate(-45deg)").css("top","10px");
                span.css("background-color","red");
                mobile.toggle("slide",{direction: 'up'},"slow",function(){
                    animacao = false;
                });
            }
        });

        dark.click(function(){
            if(animacao)return
            animacao = true;

            if(mobileAberto){
                mobileAberto = false;
                dark.fadeOut()
                line1.css("transform",'rotate(0)').css("top","0px")
                line2.css("display","block");
                line3.css("transform","rotate(0)").css("top","16px");
                span.css("background-color","transparent");
                mobile.toggle("slide",{direction: 'up'},"slow",function(){
                    animacao = false;
                });
            }
        });

        link.click(function(){
            if(animacao)return
            animacao = true;

            if(mobileAberto){
                mobileAberto = false;
                dark.fadeOut()
                line1.css("transform",'rotate(0)').css("top","0px")
                line2.css("display","block");
                line3.css("transform","rotate(0)").css("top","16px");
                span.css("background-color","transparent");
                mobile.toggle("slide",{direction: 'up'},"slow",function(){
                    animacao = false;
                });
            }
        });
        
        $(window).resize(function(){
            if($(this).width() >= 760){
                if(mobileAberto){
                    mobileAberto = false;
                    dark.fadeOut()
                    line1.css("transform",'rotate(0)').css("top","0px")
                    line2.css("display","block");
                    line3.css("transform","rotate(0)").css("top","16px");
                    span.css("background-color","transparent");
                    mobile.fadeOut();
                }
            }
        });
    };

    //scrollingEffect
    navegation($('nav a'),120);
    function navegation(el,res){
        el.click(function(event){
            var ancora = $(this);
            var calculo = $(ancora.attr('href')).offset().top;

            if(res){
                animacao = calculo - res;
            }else{
                animacao = calculo
            }

            $('html,body').stop().animate({
                scrollTop: animacao,
            },1000);

            event.preventDefault()
        });
    }

});
