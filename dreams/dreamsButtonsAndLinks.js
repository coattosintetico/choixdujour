
$(document).ready(function(){
	$("button.changepcolortowhite").click(function(){
		$("p").css("animation", "blacktowhite 1s linear 0s 1 normal");
		$("p").css("animation-fill-mode", "forwards");
		$("hr").css("animation", "hrblacktowhite 1s linear 0s 1 normal");
		$("hr").css("animation-fill-mode", "forwards");
		$("button.changepcolortowhite").hide();
		$("button.changepcolortoblack").show();
	});
	$("button.changepcolortoblack").click(function(){
		$("p").css("animation", "whitetoblack 1s linear 0s 1 normal");
		$("hr").css("animation", "hrwhitetoblack 1s linear 0s 1 normal");
		$("button.changepcolortoblack").hide();
		$("button.changepcolortowhite").show();
	});

	// complete file list. this has to be uploaded when i upload a new dream
	var completeDreamList = [
		'20200401_metro_lunar.html',
		'20200402_discoteca_costurera_macabro_disfraz.html',
		'20200409_crystal_teatro_viejo.html',
		'20200723_jealousy.html',
		'20200804_sigilo_truncado.html',
		'20200805_rechazo_pio.html',
		'20200807_laberinto_de_hojalata_metallic_fences.html',
		'20200809_ciego_enano.html',
		'20200811_marabunta.html',
		'20200820_nochevieja_en_la_vaguada.html',
		'20201129_gravedad_lateral.html'
	];

	// create the new list without current file:
	var filename = 	location.pathname.split('/').slice(-1);
	/*console.log(filename);*/
	var dreamList = [];
	var i;
	for (i = 0; i < completeDreamList.length; i++) {
		if (completeDreamList[i] != filename) {
			dreamList.push(completeDreamList[i])
		}
	}
	/*console.log(dreamList);*/
	function getRandomDream() {
		var randomIndex = Math.round(dreamList.length*Math.random());
		return dreamList[randomIndex];
	}
	$("a.dream").each(function () {
		$(this).prop("href", getRandomDream());
	});
});