	
		
		$(document).ready(function(){
		
		var screenHeight = $(window).height();
			if(screenHeight >= 768){
				$(".midContainer .inner").css('min-height', '500px');
			}

  
	  $("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
    	// $(".midContainer .inner ul.schemes > li").removeClass("sel01");

  
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
		
		if(hash == "pune"){
			$("#emiTab").show();
			$(".midContainer .inner ul.schemes > li.emi").addClass("sel01");
			$(".emi").addClass("sel01");
		}else if(hash == "nashik"){
			$("#emiiTab").show();
			$(".midContainer .inner ul.schemes > li.emii").addClass("sel01");
			$(".emii").addClass("sel01");
		}else if(hash == "aurangabad"){
			$("#nocTab").show();
			$(".midContainer .inner ul.schemes > li.noc").addClass("sel01");
			$(".noc").addClass("sel01");
		}else if(hash == "dhule"){
			$("#btalTab").show();
			$(".midContainer .inner ul.schemes > li.btal").addClass("sel01");
			$(".btal").addClass("sel01");
		}else if(hash == "mumbai"){
			$("#sdeTab").show();
			$(".midContainer .inner ul.schemes > li.sde").addClass("sel01");
			$(".sde").addClass("sel01");
		}else if(hash == "nagar"){
			$("#psiTab").show();
			$(".midContainer .inner ul.schemes > li.psi").addClass("sel01");
			$(".psi").addClass("sel01");
		}
		
		
			
	  $(".emi").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#emiTab").show();
		$(".midContainer .inner ul.schemes > li.emi").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".emii").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#emiiTab").show();
		$(".midContainer .inner ul.schemes > li.emii").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".noc").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#nocTab").show();
		$(".midContainer .inner ul.schemes > li.noc").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".btal").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#btalTab").show();
		$(".midContainer .inner ul.schemes > li.btal").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".sde").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#sdeTab").show();
		$(".midContainer .inner ul.schemes > li.sde").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".psi").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#psiTab").show();
		$(".midContainer .inner ul.schemes > li.psi").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".ips").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#ipsTab").show();
		$(".midContainer .inner ul.schemes > li.ips").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".ips_sch").click(function(){
		$(".midContainer .inner ul.schemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#ips_schTab").show();
		$(".midContainer .inner ul.schemes > li.ips_sch").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
 
	  
});

//JS for Explore Maharashtra Starts here

		$(document).ready(function(){
			
	  $("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
    	// $(".midContainer .inner ul.schemes > li").removeClass("sel01");

  
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
		
		if(hash == "pune"){
			$("#emiTab").show();
			$(".midContainer .inner ul.exploreschemes > li.emi").addClass("sel01");
			$(".emi").addClass("sel01");
		}else if(hash == "nashik"){
			$("#emiiTab").show();
			$(".midContainer .inner ul.exploreschemes > li.emii").addClass("sel01");
			$(".emii").addClass("sel01");
		}else if(hash == "aurangabad"){
			$("#nocTab").show();
			$(".midContainer .inner ul.exploreschemes > li.noc").addClass("sel01");
			$(".noc").addClass("sel01");
		}else if(hash == "dhule"){
			$("#btalTab").show();
			$(".midContainer .inner ul.exploreschemes > li.btal").addClass("sel01");
			$(".btal").addClass("sel01");
		}else if(hash == "mumbai"){
			$("#sdeTab").show();
			$(".midContainer .inner ul.exploreschemes > li.sde").addClass("sel01");
			$(".sde").addClass("sel01");
		}else if(hash == "nagar"){
			$("#psiTab").show();
			$(".midContainer .inner ul.exploreschemes > li.psi").addClass("sel01");
			$(".psi").addClass("sel01");
		}
		
		
			
	  $(".emi").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#emiTab").show();
		$(".midContainer .inner ul.exploreschemes > li.emi").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".emii").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#emiiTab").show();
		$(".midContainer .inner ul.exploreschemes > li.emii").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".noc").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#nocTab").show();
		$(".midContainer .inner ul.exploreschemes > li.noc").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".btal").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#btalTab").show();
		$(".midContainer .inner ul.exploreschemes > li.btal").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".sde").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#sdeTab").show();
		$(".midContainer .inner ul.exploreschemes > li.sde").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".psi").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#psiTab").show();
		$(".midContainer .inner ul.exploreschemes > li.psi").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".ips").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#ipsTab").show();
		$(".midContainer .inner ul.exploreschemes > li.ips").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
	  
	  $(".ips_sch").click(function(){
		$(".midContainer .inner ul.exploreschemes > li").removeClass("sel01");
		$(".mobileTab").removeClass("sel01");
		$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
		$("#ips_schTab").show();
		$(".midContainer .inner ul.exploreschemes > li.ips_sch").addClass("sel01");
		$(this).addClass("sel01");
		$("ul.leftMenu > li").removeClass("sel");
		$("ul.leftMenu > li.tab1").addClass("sel");
		$(".tabContent1").show();
		$(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	  });
 
	  
});


//$(document).ready(function(){
//	
//	$(".closeBt").click(function(){
//			$("#emiTab, #emiiTab, #nocTab, #btalTab, #sdeTab, #psiTab, #ipsTab, #ips_schTab").hide();
//			$(".midContainer .inner ul.schemes > li").removeClass("sel01");
//			$(".midContainer .inner ul.schemes > li.emi").addClass("sel01");
//			$("#emiTab").show();
//			$(".mobileTab").removeClass("sel01");
//	  });
//});



$(document).ready(function(){
	 $(".tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
	 $(".tab1").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent1").show();
		  $(this).addClass("sel");
	  });
	  
	  $(".tabObj").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContentObj").show();
		  $(this).addClass("sel");
	  });
	  
	  $(".tab2").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent2").show();
		  $(this).addClass("sel");
	  });
	  
	  $(".tab3").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent3").show();
		  $(this).addClass("sel");
	  });
	  
	  $(".tab4").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent4").show();
		  $(this).addClass("sel");
	  });
	 
	  $(".tab5").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent5").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab6").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent6").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab7").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent7").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab8").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent8").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab9").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent9").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab10").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent10").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab11").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent11").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab12").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent12").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab13").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent13").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab14").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent14").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab15").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent15").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab16").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent16").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab17").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent17").show();
		  $(this).addClass("sel");
	  });
	  
	   $(".tab18").click(function(){
		  $(".tabContent1, .tabContentObj, .tabContent2, .tabContent3, .tabContent4, .tabContent5, .tabContent6, .tabContent7, .tabContent8, .tabContent9, .tabContent10, .tabContent11, .tabContent12, .tabContent13, .tabContent14, .tabContent15, .tabContent16, .tabContent17, .tabContent18").hide();
		  $("ul.leftMenu > li").removeClass("sel");
		  $(".tabContent18").show();
		  $(this).addClass("sel");
	  });
});

$(document).ready(function(){
  // Reset Font Size
 	var	curSizeF = parseInt($('.midContainer .inner p').css('font-size'))
    $(".resetFont").click(function(){
    	$('.midContainer .inner p').css('font-size', curSizeF);
  });
  // Increase Font Size
  
  $(".increaseFont").click(function(){
    curSizeI= parseInt($(' .serviceTabel td, .tendersTabel td, .snapshotTabel td, .contactTable td, .bottomScroller h2, .midContainer .inner p').css('font-size')) + 2;
	  if(curSizeI<=16)
			$('.serviceTabel td, .tendersTabel td, .snapshotTabel td, .bottomScroller h2, .midContainer .inner p').css('font-size', curSizeI);
	  });
  // Decrease Font Size
  
  $(".decreaseFont").click(function(){
     curSized= parseInt($('.serviceTabel td, .tendersTabel td, .snapshotTabel td, .contactTable td,.bottomScroller h2, .midContainer .inner p').css('font-size')) - 2;
	  if(curSized>=12)
			$('.serviceTabel td, .tendersTabel td, .snapshotTabel td, .contactTable td, .bottomScroller h2, .midContainer .inner p').css('font-size', curSized);
	  });
	});
	
	
	$(document).ready(function(){
		$(".dark").click(function(){
			$(".midContainer").addClass("black")
			$.cookie("mode", "dark", { expires: 7 });
		});
		
 		$(".normal").click(function(){
			$(".midContainer").removeClass("black")
			$.cookie("mode", "normal", { expires: 7 });
		});
		
		$(".externalLink").click(function(){
			alert("This link shall take you to a page outsite the http://doi.gov.in. For any query regarding the contents of the linked page, please contact the webmaster of the concerned website.")
		});	 
	});

$(document).ready(function(){
	$(".top").hide();
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $(".top").fadeIn("slow");
    }
    else {
        $(".top").fadeOut("fast");
    }
});
});

$(document).ready(function(){
	$('#downloadDropdownOption').on('change', function() {
      if ( this.value == 'GEN')
           {
        $("#downloadSection1").show();
		$("#downloadSection2").hide();
		$("#downloadSection3").hide();
		$("#downloadSection4").hide();
		$("#downloadSection5").hide();
		$("#downloadSection6").hide();
		$("#downloadSection7").hide();
		$("#downloadSection8").hide();
      }
	  else if ( this.value == 'PSI')
           {
        $("#downloadSection1").show();
		$("#downloadSection2").hide();
		$("#downloadSection3").hide();
		$("#downloadSection4").hide();
		$("#downloadSection5").hide();
		$("#downloadSection6").hide();
		$("#downloadSection7").hide();
		$("#downloadSection8").hide();
      }
      else if ( this.value == 'MTAL')
      {
       $("#downloadSection1").hide();
		$("#downloadSection2").show();
		$("#downloadSection3").hide();
		$("#downloadSection4").hide();
		$("#downloadSection5").hide();
		$("#downloadSection6").hide();
		$("#downloadSection7").hide();
		$("#downloadSection8").hide();
      }
	   else if ( this.value == 'CSPO')
      {
       $("#downloadSection1").hide();
		$("#downloadSection2").hide();
		$("#downloadSection3").show();
		$("#downloadSection4").hide();
		$("#downloadSection5").hide();
		$("#downloadSection6").hide();
		$("#downloadSection7").hide();
		$("#downloadSection8").hide();
      }
	  else if ( this.value == 'IT/ITES')
      {
       $("#downloadSection1").hide();
		$("#downloadSection2").hide();
		$("#downloadSection3").hide();
		$("#downloadSection4").show();
		$("#downloadSection5").hide();
		$("#downloadSection6").hide();
		$("#downloadSection7").hide();
		$("#downloadSection8").hide();
      }
	  else if ( this.value == 'SUC')
      {
       $("#downloadSection1").hide();
		$("#downloadSection2").hide();
		$("#downloadSection3").hide();
		$("#downloadSection4").hide();
		$("#downloadSection5").show();
		$("#downloadSection6").hide();
		$("#downloadSection7").hide();
		$("#downloadSection8").hide();
      }
	  else if ( this.value == 'LUB')
      {
       $("#downloadSection1").hide();
		$("#downloadSection2").hide();
		$("#downloadSection3").hide();
		$("#downloadSection4").hide();
		$("#downloadSection5").hide();
		$("#downloadSection6").show();
		$("#downloadSection7").hide();
		$("#downloadSection8").hide();
      }
	  else if ( this.value == 'EXPORT')
      {
       $("#downloadSection1").hide();
		$("#downloadSection2").hide();
		$("#downloadSection3").hide();
		$("#downloadSection4").hide();
		$("#downloadSection5").hide();
		$("#downloadSection6").hide();
		$("#downloadSection7").show();
		$("#downloadSection8").hide();
      }
	  else if ( this.value == 'DIC')
      {
       $("#downloadSection1").hide();
		$("#downloadSection2").hide();
		$("#downloadSection3").hide();
		$("#downloadSection4").hide();
		$("#downloadSection5").hide();
		$("#downloadSection6").hide();
		$("#downloadSection7").hide();
		$("#downloadSection8").show();
      }
    });
});