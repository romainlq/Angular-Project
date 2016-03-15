$(document).ready(function() {
    
	var top_pos = $('#ville').offset().top - 64;
    var logo = $('#top').offset().top;
    var carte = $('#carte').offset().top - 63;

    // Slide à partir du nav item "choisis ta ville"" jusqu'à la section Choix de ville
	$('#bville').click(function() {
		$('html, body').animate({scrollTop:top_pos}, 'slow');
		return false;
	});
    
    // Slide à partir du bouton de départ jusqu'à la section Choix de ville
    $('#start-button').click(function() {
		$('html, body').animate({scrollTop:top_pos}, 'slow');
		return false;
	});
    
    // Slide à partir du nav item "Carte" jusqu'à la section Map
	$('#bcarte').click(function() {
		$('html, body').animate({scrollTop:carte}, 'slow');
		return false;
	});
    
    // Slide à partir de n'importe ou sur la page vers le haut de la page
    $('#logo').click(function() {
		$('html, body').animate({scrollTop:logo}, 'slow');
		return false;
	});
    
    // Slide à partir de la section de choix jusqu'à la section Map
	$('#go').click(function() {
		$('html, body').animate({scrollTop:carte}, 'slow');
		return false;
	});
    
    
    
});