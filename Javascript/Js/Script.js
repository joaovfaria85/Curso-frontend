function calculoMedia ( notas ){
		
    let soma = 0;
    for (c=0; c < notas.length; c++){
            soma += notas [c];
    
    }
    
    media = soma / notas.length
    
    return media;
}
    function aprovacao ( notas ){
    
            let media = calculoMedia ( notas );
            
            let condicao = media >= 7 ? "aprovado" : "reprovado";
        
            return "Média: " + media + " - Resultado: " + condicao;
        
}
// Função recursiva

    function contagemRegressiva(numero){

        console.log(numero);

        let proximoNumero = numero -1;

        if(numero > 0)
        contagemRegressiva(proximoNumero);
    
    }

    //contagemRegressiva(10);

    /* 
      *Formulário envio de dados para cálculo da média
    */

    const formulario1 = document.getElementById('formulario-01')
    if(formulario1){
    formulario1.addEventListener('submit', function( evento ){
        
        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/)){
            return false;
        }

        let dados = new FormData(this);

        let notas = [];

        for (let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)): 0; // É um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }
        }

        console.log(notas);

        document.getElementById('resultado').innerHTML = aprovacao(notas);

    });
}


   /* Formulario 02*/ 
    
    function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });
}

function validaCampoNumerico(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let numero = this.value

        if(numero !== "" && numero.match(/[0-9]*/) && numero >=0 && numero <=10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro')
            return false;
        }

    });
}

function validaEmail(elemento){
    
    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let mail = this.value

        if( mail !== "" && mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro')
            return false;
        }
 });
}
function validaCep(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let cep = this.value

        if(cep !== "" && cep.match(/\d{5}-?\d{3}/gi)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro')
            return false;
        }

    });
}


function validaUF(elemento){
    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let UF = this.value

        if(UF !== "" && UF.match(/\D{2}/gi)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro')
            return false;
             }
        });
    }




let camposObrigatorios = document.querySelectorAll('input.obrigatorio');   
let camposNumericos = document.querySelectorAll('input.numero');
let campoCep = document.querySelectorAll('input.numerico')
let camposEmail = document.querySelectorAll('input.email');
let campoUF = document.querySelectorAll('input.uf')

for (let emFoco of camposObrigatorios){
    validaCampo(emFoco)
}
for(let emFoco of campoCep){
    validaCep(emFoco)
}
for (let emFoco of camposNumericos){
    validaCampoNumerico(emFoco)
}

for (let emFoco of camposEmail){
    validaEmail(emFoco);
}
for (let emFoco of campoUF){
    validaUF(emFoco)
}