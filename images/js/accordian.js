// JavaScript Document

$(document).ready(function () {
    $('.accordion-toggle').on('click', function(event){
    	event.preventDefault();
    	// create accordion variables
    	var accordion = $(this);
    	var accordionContent = accordion.next('.accordion-content');
    	var accordionToggleIcon = $(this).children('.toggle-icon img');
    	// toggle accordion link open class
    	accordion.toggleClass("open");
    	// toggle accordion content
    	accordionContent.slideToggle(500);
    	
    	accordionToggleIcon.attr('src') = "images/minus-32.png";
    });
	
	
	
});

