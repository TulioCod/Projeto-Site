//Capturar os elementos pelo id
var anterior = document.getElementById("anterior");
var proximo = document.getElementById("proximo");
var imagem = document.getElementById("imagem");
var qtdImagem = new Number(10);

var cont = 0 ;

imagem.src ="/images/Fotos Escola/imagem"+cont+".jpg";

anterior.onclick = function () {
    if(cont > 0){
        imagem.src = "";
        cont--;
        imagem.src = "/images/Fotos Escola/imagem"+cont+".jpg";
    }
};

proximo.onclick = function () {
    if( cont < (qtdImagem - 1)  ){
        imagem.src ="";
        cont++;
        imagem.src = "/images/Fotos Escola/imagem"+cont+".jpg";
    }
};


var imagem = document.getElementById('imagem')
imagem.addEventListener('click',clique)
imagem.addEventListener('mouseout',sair)

    function clique() {
      imagem.style.width = '620px';
      imagem.style.height = '420px';
      imagem.style.left ='536.5px'
}
function sair(){
  imagem.style.width = '400px';
      imagem.style.height = '300px';
    
}
