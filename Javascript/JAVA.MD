## Calculo media aluno

var nota1 = 5; 
var nota2 = 8; 
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4)/ 4;
if (media >= 8){
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")  
}  


## Laços de repetição

for([expressaoInicial]; [condicao]; [incremento])

while( [condicao] ){
    [execucao]
}

var contador = 0;
while ( contador <10){
    contador++
}

var hora = 23;
while (hora > 0){
    hora --;
    console.log(hora):
}

do{
    execução
} while (condição)

### Revisao de carro

'''
// Fazer a revisão do carro aos 10km
var km;
var revisao = 3;

for(km = 0; km < revisao; km++){
    console.log("apenas " + km +"kms então pode rodar")
    if (km > 3){
    console.log("Limite de Km estourado, fazer revisão")
}}

### Cálculo de média de alunoS

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8 ,8],
    [6, 6, 6, 6, 6]
]
var nota = 0
for(var i = 0; i < alunos.length; i++){
    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1));
    console.log("Notas: " + notasAluno);
    
    for (c = 0; c < notasAluno.length; c++){
        nota += notasAluno[c];
    } 
    
    media = nota / 4;
    
    if(media >= 7){
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }
    
    console.log("Media: " + media + " - " + resultado);
}

## Funções
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

console.log(aprovacao([8, 9, 6]))
console.log(aprovacao([8, 9, 4]))
console.log(aprovacao([6, 6, 7]))
console.log(aprovacao([5, 8, 9]))

//console.log("Média: " + calculoMedia ([8, 8]))
//console.log( aprovacao( calculoMedia ([8, 8])))
//console.log("Média: " + calculoMedia ([5, 6]))
//console.log( aprovacao( calculoMedia ([5, 6])))