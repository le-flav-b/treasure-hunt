function is_correct() {
	let mdp = "6871459710";
	let mdp_actuel = document.getElementById('mdp02').value;
	let longueur_mdp_actuel = mdp_actuel.length;
	let lastChar_mdp_actuel = mdp_actuel[mdp_actuel.length-1];

	if (mdp[longueur_mdp_actuel-1] != lastChar_mdp_actuel) {
		document.getElementById('mdp02').value = '';
	}
	if (longueur_mdp_actuel == 10) {
		document.location.href = 'etape_03.html';
	}
}