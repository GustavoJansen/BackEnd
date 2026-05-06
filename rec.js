let nome = "Gustavo Alexandre Jansen"
let altura = 1.75
let serie = "Segundo"
let turma = "DSB"
let altura_professor = 1.73

let esportes = ["Tẽnis de Mesa", "Futebol", "Basquete"]

/* Prova prática de recuperação do nivelamento (AV1) + prova (AV2).
Pode consultar o seu GitHub ou o do professor: https://github.com/profpatrickoli
Cópia de outros colegas ou uso de outros sites na internet (Google, IA, etc) = zero na recuperação! 
A prova pode ser realizada em duplas! Responder cada questão com as informações de cada integrante da dupla, basta criar variáveis com nomes diferentes. Exemplo: aluno1 e aluno2 
Para enviar a atividade, poste o código no GitHub de algum integrante da dupla e envie o link na atividade do Class. */

/* 1) (1,0 p) Crie variáveis para armazenar seu nome completo, altura, série e turma. Após isso, mostre no terminal uma mensagem personalizada se apresentando. */

/* 2) (1,0 p) Crie uma lista com 3 esportes que você gosta e mostre-os no terminal, usando o laço de repetição que preferir */

/* 3) (1,5 p) Crie uma condição que verifica se você é maior que o professor Patrick, que possui 1.73 de altura */

/* 4) (1,5 p) Crie um laço de repetição que conta de 0 até -10 */

function mostraApresentacao(){

  console.log("Olá, meu nome é " + nome + ", tenho " + altura + " de altura, estou no " + serie + " ano do ensino medio, estou na turma " + turma + ".")
}

function mostraEsporte(){
        console.log("Lista de Esportes")
         let i = 0 
          while(i < esportes.length){ 
           console.log(esportes[i])
            i++;
             }
              }

function minhaAltura(){

   if(altura < altura_professor) {

    console.log("Minha altura é MENOR que a do professor.")

   } else if(altura == altura_professor){

   console.log("Sua altura é IGUAL a do professor.")

   } else{

    console.log("Você é MAIOR que o professor.")

   }

}

function contadorDez(){

let i = 0
while(i > -11){

 console.log(i--)

}

}

mostraApresentacao();
mostraEsporte();
minhaAltura();
contadorDez();
