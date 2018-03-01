var hGallery = null;

function Gallery(){

}

Gallery.Open = function(adr_root, price){
    if(hGallery != null) return;
    var gImg = document.createElement('div');
    gImg.className = "image";
    var gImgA = document.createElement('img');
    gImgA.src = adr_root.style.backgroundImage.replace('url(','').replace(')','').replace('"', '').replace('"', '');
    var screenWidth = Browser.GetWidth();
    var screenHeight = Browser.GetHeight();
    if(gImgA.width >= screenWidth - 100){
        gImgA.height = (screenWidth - 100) * gImgA.height / gImgA.width;
        gImgA.width =  (screenWidth - 100);
    }
    if(gImgA.height >= screenHeight - 100){
        gImgA.width = (screenHeight - 100) * gImgA.width / gImgA.height;
        gImgA.height =  (screenHeight - 100);
    }
    gImg.appendChild(gImgA);
    var gPrice = document.createElement('p');
    gPrice.className = "price";
    gPrice.innerHTML = price + "  Р";
    gImg.appendChild(gPrice);
    hGallery = document.createElement('div');
    hGallery.className = "handco-gallery";
	hGallery.id = "handco-gallery";
    hGallery.onclick = function(){
        Gallery.Close();
    }
    hGallery.innerHTML = '<img src="img/close.png" class="close" onclick="Gallery.Close()" alt="">';
    hGallery.appendChild(gImg);
	hGallery.onkeyup = function(e){
		if(e.keyCode == 27) {
            Gallery.Close();
        }
	};
	$(hGallery).width($(window).width());
	$(hGallery).height($(window).height());
    document.body.appendChild(hGallery);
    $(hGallery).animate({opacity: 1}, 400);
    /*$(document).on('keyup.handco-gallery', function(e){
        if(e.keyCode == 27) {
            Gallery.Close();
        }
    });*/
  		$(".handco-gallery .image").css("margin-left", -$(".handco-gallery .image").width()/2);
  		$(".handco-gallery .image").css("margin-top", -$(".handco-gallery .image").height()/2);
	
};
Gallery.Close = function(){
    if(hGallery == null) return;
    $(hGallery).animate({opacity: 0}, 400, function(){
        document.body.removeChild(document.getElementById("handco-gallery"));
        hGallery = null;
    });
};

function Browser(){
}

Browser.GetWidth = function(){
    return $(window).width();
};
Browser.GetHeight = function(){
    return $(window).height();
};

