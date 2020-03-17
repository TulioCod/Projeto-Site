//Capturar os elementos pelo id
var anterior = document.getElementById("anterior");
var proximo = document.getElementById("proximo");
var imagem = document.getElementById("imagem");
var qtdImagem = new Number(55);

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
        //imagens viagens
      imagem.style.width = '45%';
      imagem.style.height = '45%';
      imagem.style.left ='30%';
      imagem.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.336)';
    }
function sair(){
  imagem.style.width = '30%';
      imagem.style.height = '30%';
      imagem.style.left ='500px';
    
    } 





    