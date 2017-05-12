var botoesAmei = document.querySelectorAll (".botao.amei");

function amar () {

	if (this.className == "botao amei") {
		this.className = "botao amei vermelho";
	}

	else {
		this.className = "botao amei";
	}
};

for (var i = 0; i < botoesAmei.length; i++) {
	botoesAmei[i].onclick = amar;
}


// botoesAmei [0].onclick = amar;
// botoesAmei [1].onclick = amar;
// botoesAmei [2].onclick = amar;
// botoesAmei [3].onclick = amar;
// botoesAmei [4].onclick = amar;