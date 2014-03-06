$(document).ready( function() {

	/* 
		Here is some good jQuery code for debugging, takes
		whatever info you want and injects it into the title
	*/
	// var variable = "Debugging test";
	// $("title").html("Info: "+variable);


//when we have links that have a reference ending in .html, do something
	$("a[href$='.html']").click(function(clickEvent){


	clickEvent.preventDefault();

	//make a variable called file
	// jquery go get it and get the attribute for href (the link value)
	var file = $(this).attr("href");
	//$("title").html("info: "+file);

	$("section#main").load(file+" #content");

	});

});