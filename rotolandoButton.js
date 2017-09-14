
$('div#button.off').on('click', function(){
	$('div#boxs').removeClass('active');
	$('div#button.onOff').addClass('buttoNone').siblings('div#button').removeClass('buttoNone');
	$('span.boxxx').addClass('displayNone');
	$('div#box4, div#box_scroll7, div#boxs').addClass('boxShadowLight');
	$('div#box_scroll7').unbind('click', rotolando);
	$('div#box5').unbind();
	
});

function ofBind(){
	$('div#boxs').removeClass('active');
	$('div#button.onOff').addClass('buttoNone').siblings('div#button').removeClass('buttoNone');
	$('span.boxxx').addClass('displayNone');
	$('div#box4, div#box_scroll7, div#boxs').addClass('boxShadowLight');
	$('div#box_scroll7').unbind('click', rotolando);
	$('div#box5').unbind();

}


$('div#button.onOff').on('click', function(){
	$('.rotolando').addClass('active');
	$('div#button.off').addClass('buttoNone').siblings('div#button').removeClass('buttoNone');
	$('span.boxxx').removeClass('displayNone');
	$('div#box4, div#box_scroll7, div#boxs').removeClass('boxShadowLight');
	$('div#boxs').removeClass('lightBackGround');
	bind_l();
});





$('div#box_scroll7').on('click', function(){ 
	$("div#boxee div#boxs").removeClass('active');
	Max_Value = 630;
	
	boxxess = $('div#box4 div#boxee').children('div#boxs');
	boxxess_num = boxxess.size();
	/*confirm(boxxess_num);	*/
	
	CircleScopeValue = Max_Value / boxxess_num;
	/*confirm(CircleScopeValue);*/

	circleToActive = windowScrollTop/CircleScopeValue;
	circleToActive1 = Math.ceil(circleToActive);

	
	/* do not make a fool out if shirt ...*/

	
	var circleItems = ["x","a", "b", "c", "qq", "q", "f", "e", "d", "v"];
	activeClass = circleItems[circleToActive1];
	

	
	
	for(i=0; i < circleToActive1; i++){
		numCircles = circleItems[i];
	
		valuuu = "div#boxs" + "." + numCircles;
		
		$(valuuu).addClass('active');		

	}

	
});






	$('div#box5').scroll(function(){
		 windowScrollTop = jQuery('div#box5').scrollTop(); 
		 windowScrollProcendValueFin = Math.round(  100/ (630 / windowScrollTop) );
		$('span.boxxx').text(windowScrollProcendValueFin);
		
	});

	

$('div#box_scroll7').bind('click', rotolando);
function bind_l(){
	$('div#button.off').bind('click', ofBind);
	$('div#box_scroll7').bind('click', rotolando);	
	$('span.boxxx').removeClass('displayNone');	
	$('div#box5').scroll(function(){
		 windowScrollTop = jQuery('div#box5').scrollTop(); 
		/*$('span.boxxx').text(windowScrollTop);*/
	
		windowScrollProcendValueFin = Math.round(  100/ (630 / windowScrollTop) );
			
		$('span.boxxx').text(windowScrollProcendValueFin);
		
		
	});

}

windowScrollTop1=0;

function rotolando(){
	$('div#button.off').unbind();
	$('span.boxxx').addClass('displayNone');
	$('div#box_scroll7').unbind('click', rotolando);
	$('div#box5').unbind();
	setTimeout(bind_l,1600);
	currentDeg = 0;

	// Create a pseudo jQuery object (not connected to a DOM element)
var po = $({
    deg: windowScrollTop1
});

// This is just the target object we want to change
$elem = $('div#box_scroll7');

// Use animate on the object, to make use of the step callback


po.animate({
    deg: windowScrollProcendValueFin*3.6
}, {
    duration: 1200,
    step: function (now) {
	windowScrollTop1 = windowScrollProcendValueFin*3.6;
        // Take the computed value and use it on a real element!
        $elem.css({
            transform: 'rotate(' + -now + 'deg)'
        });
    }
});
	

}







