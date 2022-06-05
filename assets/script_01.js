function soumettre_mdp01() {
	if (document.getElementById('mdp01').value == 'azé&48Ezdg@$idz18P!') {
		document.location.href = 'etape_02.html';
	} else {
		document.getElementById('mdp01').value = '';
	}
}