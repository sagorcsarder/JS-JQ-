// toggleClass
$(document).ready(function(){

$( "h4" ).click(function() {
  $( this ).toggleClass( "highlight" );
});

});


//onclick text change
function textChange() {
	document.getElementById('h1').innerHTML="Hello World";
}

//ondblclick text change
function textChange1() {
	document.getElementById('h2').innerHTML="Hello World";
}

//add backgroundcolor
function textChange2() {
	document.getElementById('h3').innerHTML="Hello World";
}
// jquery
$(document).ready(function(){

	// hide
	$('#hide').click(function(){		
		$('h4').hide();
	});

	// show
	$('#show').click(function(){		
		$('h4').show();
	});

	// toggle
	$('#toggle').click(function(){		
		$('h4').toggle();
	});

});
// jquery
$(document).ready(function(){

	// hide
	$('#fout').click(function(){		
		$('h5').fadeOut();
	});

	// show
	$('#fin').click(function(){		
		$('h5').fadeIn();
	});

	// toggle
	$('#ftoggle').click(function(){		
		$('h5').fadeToggle();
	});

	// to
	$('#fto').click(function(){		
		$('h5').fadeTo(1000, .5);
	});

	// accordian
	$('.panel').click(function(){
		$('.content').slideToggle(1000);
	});

	// addclass
	$('.h6').addClass('h6');

	// passcheck
	$('#login').click(function(){

		var password1 = $('#pass1').val();
		var password2 = $('#pass2').val();

		if (password1 != "" && password2 != "") {

			if (password1 == password2) {
				alert("login successfully.");
			}
			else{
				alert("password incorrect.")
			}

		}
		else{
			alert("Please enter your password.....");
		}

	});

	// animate
	$('#go').click(function(){
		$('#block').animate({
			width: "80%",
		    opacity: 0.4,
		    marginLeft: "100px",
		    fontSize: "3em",
		    borderWidth: "10px"
		}, 1500);
	});

	// append
	$('.p').append("<strong>Hello</strong>");

	// radiobutton
	$('input').click(function(){
		$('#log').html($("input:checked").val() + " is checked!");
	});

	// slideup
	$('.slideup').click(function(){
		$(this).slideUp();
	});

});