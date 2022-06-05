function valider() {
	let reponse = document.getElementById('reponse').value;
	let vrai = 'Robert Louis Stevenson';
	if (reponse == vrai) {
		document.location.href = 'etape_05.html';
	} else {
		document.getElementById('reponse').value = "";
	}
}