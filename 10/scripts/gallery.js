function Gallery(sSelector){
	var g = this; 
	console.log(this); 
	g.init(sSelector);

	 /* ***************** свойства *****************  */

	g.pictures = g.findObj(".b-picture");
	g.arrowPrev = g.findObj(".b-preview__arrow_prev");
	g.arrowNext = g.findObj(".b-preview__arrow_next");
	g.preview = g.findObj(".b-preview");
	g.previewImage = g.findObj(".b-preview__image");
	g.previewText = g.findObj(".b-preview__text");
	g.current = 0;
	g.max = g.pictures.length;
	g.currentPlace = g.findObj(".b-preview__currentPlace");
	g.maxPlace = g.findObj(".b-preview__maxPlace");
	g.slideshowBtn = g.findObj(".b-preview__slideshowBtn");
	g.slideshowPeriod = 3; 
	//признак того, что работает setInterval()
	g.slideshowIntervalStart = null;
	//признак запуска слайдшоу
	g.slideshowStart = false;


	/* ***************** методы *****************  */

	g.showPreview 	= function(){
		var currentPicture = $(this);
		g.current = g.pictures.index(currentPicture);
		g.display(currentPicture);
	//console.log(g.current);
	};

	g.closePreview	= function(event){ //event всегда подается на вход, если используется где-то внутри метода или события
		//console.log("this:", $(this).attr("class")); // в данном случае this и event.currentTarget - синонимы
		//console.log("event.currentTarget:", $(event.currentTarget).attr("class"));
		//console.log("event.target:", $(event.target).attr("class")); //элемент, который стал причиной события
		if(!event || $(event.target).hasClass("b-preview")){
			g.preview.removeClass("b-preview_shown");
			g.stopSlideshow();
		}
	};

	g.showImage 	= function(iShift){
		g.current += iShift;
		if(g.current >= g.max){
			g.current = 0;
		}
		else if(g.current < 0){
			g.current = g.max -1;
		}
		//g.display(
		//	g.gallery.find(".b-picture:eq(" + g.current + ")") //тут где-то протупила и ошибка
		//		);
		g.display(g.pictures.eq(g.current)); //второй вариант дисплея, аналогичный верхнему
	};

	g.display		= function(oPicture){
		var smallImage = oPicture.find(".b-picture__image")
			,bigImageSrc = smallImage.attr("src").replace("small_", "");
			//console.log(bigImageSrc);
			g.previewImage.attr("src", bigImageSrc);
			g.previewText.text(smallImage.attr("alt")); //вместо text можно написать html
			console.log(g.previewText);
			g.preview.addClass("b-preview_shown"); //все методы, где class - точку не ставим!
			g.currentPlace.html(g.current + 1);
			g.maxPlace.html(g.max);
	};

	g.showPrevious 	= function(){
		g.showImage(-1)
	};

	g.showNext 		= function(){
		g.showImage(+1)
	};

	g.galleryEvents = function(){
		console.log(event.which, event.altKey, event.ctrlKey, event.shiftKey);
			if(event.which == 27){
				g.closePreview();
			}
			if(event.which == 39){
				g.showNext();
			}
			if(event.which == 37){
				g.showPrevious();
			}
	};

	g.slideshow = function(){
	//	g.slideshowStart ? g.slideshowBtn.text("stop") : g.slideshowBtn.text("start");
		if(g.slideshowStart){
		//	g.slideshowBtn.text("start");
		//	g.slideshowStart = false;
			g.stopSlideshow();
		}
		else{
			g.setSlideshowData("stop", true);
			//g.slideshowBtn.text("stop");
			//g.slideshowStart = true;
			//console.log(g.slideshowStart);
			g.slideshowIntervalStart = setInterval(g.showNext, g.slideshowPeriod*1000);
		}
	};

	g.stopSlideshow = function(){
			g.setSlideshowData("start", false);
			clearInterval(g.slideshowIntervalStart);
	};

	g.setSlideshowData = function(btnText, slideshowStart){//изменение текста на кнопке и признак работы слайдшоу
			g.slideshowBtn.text(btnText);
			g.slideshowStart = slideshowStart;
	};

	/* ***************** события *****************  */

	g.pictures.click(g.showPreview);
	g.preview.click(g.closePreview);
	g.arrowPrev.click(g.showPrevious);
	g.arrowNext.click(g.showNext);
	$("body").keyup(g.galleryEvents); //событие отпускания клавиши
	g.slideshowBtn.click(g.slideshow);

}

Gallery.prototype = new Component();