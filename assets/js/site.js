var logoAnimateTimeout;
var logoVivus;
function animateMainLogo()
{
	if(logoAnimateTimeout != null)
	{
		clearTimeout(logoAnimateTimeout);
	}
	setTimeout(function(){
		var rollN = Math.floor(Math.random() * 2) + 1;
		logoVivus = null;
		switch(rollN){
			case 1:
				$('#logo_center').css('opacity','1');
				logoVivus = new Vivus('logo_center', {type: 'oneByOne',duration: 200,animTimingFunction: Vivus.EASE,pathTimingFunction:Vivus.EASE});
			break;
			case 2:
				$('#logo_center').css('opacity','1');
				logoVivus = new Vivus('logo_center', {type: 'delayed',duration: 200,animTimingFunction: Vivus.EASE, pathTimingFunction:Vivus.EASE_OUT});
			break;
			case 3:
				$('#logo_center').css('opacity','0');
				$('#logo_center').animate({opacity: 1}, {
                    duration: 1500,
                    easing: 'swing'
                })
			break;
		}
		logoAnimateTimeout = setTimeout(function(){
			$('#logo_center').animate({opacity: 0}, {
                    duration: 500,
                    easing: 'swing' ,
				complete: function() {
					animateMainLogo();
				}
			});
		},15000);
	},300);
}
animateMainLogo();
	if(logoAnimateTimeout != null)
	{
		clearTimeout(logoAnimateTimeout);
	}
	// browser cycle animation trigger
		setTimeout(function() {
			cycleGo = $(function() {
				browserCycle();
			});
	cycleLoop = setInterval(function() {
		browserCycle();
			}, 6400);
		}, 2400);

	//Browser cycle
	function browserCycle() {
		if ($('.multibrowser').hasClass('cycle')) {
			prepa = setTimeout(function() {
				$('.cycle').addClass('prepa');
			}, 200);
			stepa = setTimeout(function() {
				$('.cycle').removeClass('prepa');
				$('.cycle').removeClass('stepd');
				$('.cycle').addClass('stepa');
			}, 1000);
			prepb = setTimeout(function() {
				$('.cycle').addClass('prepb');
			}, 1800);
			stepb = setTimeout(function() {
				$('.cycle').removeClass('prepb');
				$('.cycle').removeClass('stepa');
				$('.cycle').addClass('stepb');
			}, 2600);
			prepc = setTimeout(function() {
				$('.cycle').addClass('prepc');
			}, 3400);
			stepc = setTimeout(function() {
				$('.cycle').removeClass('prepc');
				$('.cycle').removeClass('stepb');
				$('.cycle').addClass('stepc');
			}, 4200);
			prepd = setTimeout(function() {
				$('.cycle').addClass('prepd');
			}, 5000);
			stepd = setTimeout(function() {
				$('.cycle').removeClass('prepd');
				$('.cycle').removeClass('stepc');
				$('.cycle').addClass('stepd');
			}, 5800);
		}
	}
	$(".scroll").click(function(event){
          event.preventDefault();
          //calculate destination place
          var dest=0;
          if($(this.hash).offset().top > $(document).height()-$(window).height()){
               dest=$(document).height()-$(window).height();
          }else{
               dest=$(this.hash).offset().top;
          }
          //go to destination
          $('html,body').animate({scrollTop:dest}, 1000,'swing');
      });
