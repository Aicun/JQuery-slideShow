$(document).ready(function() {

    var image,imageCounter = 0, imageCache = [];

    $("#slides img").each(function(){
        image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCounter] = image;
        imageCounter++;
    });

    imageCounter = 0;
    var nextImage;

    var runSlideShow = function(){
        $("#caption").hide(500);
        $("#slide").slideUp(500,function(){
            imageCounter = (imageCounter + 1) % imageCache.length;
            nextImage = imageCache[imageCounter];
            $("#slide").attr("src",nextImage.src).slideDown(2000);
            $("#caption").text(nextImage.title).show(1000)
        });

    }

    var timer = setInterval(runSlideShow,3000);

    $("#slide").click(function(){
        if(timer != null) {
            clearInterval(timer);
            timer = null;
        }
        else{
            timer = setInterval(runSlideShow,1000);
        }
    });
    
});//end ready