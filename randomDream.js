
$(document).ready(function(){

	// complete file list. this has to be uploaded when i upload a new dream
	var completeDreamList = [
		'./dreams/20200401_metro_lunar.html',
		'./dreams/20200402_discoteca_costurera_macabro_disfraz.html',
		'./dreams/20200409_crystal_teatro_viejo.html',
		'./dreams/20200723_jealousy.html',
		'./dreams/20200804_sigilo_truncado.html',
		'./dreams/20200805_rechazo_pio.html',
		'./dreams/20200807_laberinto_de_hojalata_metallic_fences.html',
		'./dreams/20200809_ciego_enano.html',
		'./dreams/20200811_marabunta.html',
		'./dreams/20200820_nochevieja_en_la_vaguada.html',
		'./dreams/20201129_gravedad_lateral.html'
	];

	// there's no need this time to reject the file name from the list,
	// bc this script is for the index.

	function getRandomDream() {
		var randomIndex = Math.round(completeDreamList.length*Math.random());
		return completeDreamList[randomIndex];
	}
	$("a.dream").each(function () {
		$(this).prop("href", getRandomDream());
	});
	
});