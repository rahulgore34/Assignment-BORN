(function(){
		Carousel = {
			index:0,
			container:document.getElementById("container"),
			childrenCount:document.getElementsByClassName("section").length,

			showName:function(){
				console.log("Hi "+this.name);
			},
			init:function(){
				console.log("Init");
			},
			next:function(){
				slideToNext();
			},
			prev:function(){
				slideToprev();
			}


		}
		function slideToNext(){
			 Carousel.index = (Carousel.index + 1) % Carousel.childrenCount;
			 Carousel.container.style.marginLeft = -1 * Carousel.index * 100 + "%";
		}
		 function slideToprev(){
		 	Carousel.index = (Carousel.index - 1) % Carousel.childrenCount;
		 	 if(Carousel.index == -1){
    			Carousel.index =2;
    		}
    		 Carousel.container.style.marginLeft = -1 * Carousel.index * 100 + "%";
			}
		
		Carousel.init();
		window.addEventListener("keydown",function(e){
			switch(e.keyCode){
			case 37: {//left arrow
				console.log("prev");
				$('#prev').trigger('click');
				break;
			}
			case 39: {//right arrow
				console.log("next");
				$('#next').trigger('click');
				break;
			}
		}
		if(Math.abs(e.keyCode - 38) === 1){
			e.preventDefault();
		}
		});
	})(window);
