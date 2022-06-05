function valider() {
	let reponse = document.getElementById('reponse').value;
	let vrai = 'Leova_Moldavie_7443';
	if (reponse == vrai) {
		document.location.href = 'etape_04.html';
	} else {
		document.getElementById('reponse').value = '';
	}
}