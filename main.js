$(document).ready(function (){

    $(".one").on('click',function(){
        $("body").css({ color: "#000", background: " #fff"});
        $(".product-img").attr("src", "./New folder/shoe 1/1.png");

        $(".logo-img img").attr("src", "black.png");

        $(".btn").css({ color: "#fff", background: "#000"});
        $(".btn1").css({ color: "#fff", background: "#000"});

        $(".variant").removeClass("active");
        $(this).addClass("active");

        $(".images").html("");

        for(var i = 1; i<=6; i++){
        $(".images").append(`<img src='./New folder/shoe 1/${i}.png'/>`);
        }
    });

    $(".two").on('click',function (){
        $("body").css({ color: "#000", background: "coral"});
        $(".product-img").attr("src", "./New folder/shoe 2/1.png");
    
        $(".logo-img img").attr("src", "black.png");
    
        $(".btn").css({ color: "#fff", background: "#000"});
        $(".btn1").css({ color: "#fff", background: "#000"});
    
        $(".variant").removeClass("active");
        $(this).addClass("active");
    
        $(".images").html("");
        
        for (var i = 1; i<=6; i++) {
            $(".images").append(`<img src='./New folder/shoe 2/${i}.png'/>`);
        }
    });

    $(".three").on('click',function (){
        $("body").css({ color: "#fff", background: "#818589"});
        $(".product-img").attr("src", "./New folder/shoe 3/1.png");
    
        $(".logo-img img").attr("src", "white.png");
    
        $(".btn").css({ color: "#000", background: "#fff"});
        $(".btn1").css({ color: "#000", background: "#fff"});
    
        $(".variant").removeClass("active");
        $(this).addClass("active");
    
        $(".images").html("");
        
        for (var i = 1; i<=6; i++) {
            $(".images").append(`<img src='./New folder/shoe 3/${i}.png'/>`);
        }
    });
});