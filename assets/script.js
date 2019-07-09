

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

        
        $(".aanbieding1, .aanbieding2, .aanbieding3").hover(function(){
            $(this).addClass("box-shadow2");
          }, function() {
            $(this).removeClass("box-shadow2");
        });

                
        $(".item").hover(function(){
            $(this).addClass("box-shadow");
          }, function() {
            $(this).removeClass("box-shadow");
        });
