
const produtosArquivo = require("./produtos.json")
const produtosArquivoJSON = JSON.stringify(produtosArquivo)

function mostraProdutos(){
 produtosArquivo.forEach((produtos)=>{
  console.log(" - NOME: " + produtos.nome + " - VALOR: " + produtos.valor + " - QUANTIDADE: " + produtos.quantidade + " unidades " + "- MARCA: " + produtos.marca + " - CODIGO: " + produtos.codigo)
   })
}

function addProduto(){
 console.log("---PRODUTO ADICIONADO---")
  produtosArquivo.push([{

        nome: "HEADSET REDRAGON",
        valor: 120,
        quantidade: 15,
        marca: "REDRAGON",
        codigo: 3004

 }
  ]
   )

 let i = 0;

 while(i < produtosArquivo.length){

  console.log(produtosArquivo[i])
    i++;

 }

}

function filtraPreco(){
console.log("---FILTRAR PRODUTOS MAIORES QUE 200 REAIS BRASILEIROS---")
const filtro = produtosArquivo.filter((produtosArquivo)=> produtosArquivo.valor > 200)
console.log(filtro)


}

function addDesconto(){
console.log("Produtos com 15% de desconto:")
const desconto = produtosArquivo.map((produto)=> {
    return {...produto, valor: produto.valor * 0.85}}
)
console.log(desconto)
}
    


mostraProdutos();
addProduto();
filtraPreco();
addDesconto();