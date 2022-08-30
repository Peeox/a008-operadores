let saldo = 15
const recebi = 22.40

//Pergunta: qual o saldo atual?

console.log("antes", saldo)
//imprimi para mostrar o valor do saldo

saldo+= recebi

console.log("depois", saldo)
//imprimi a adição do recebido no saldo

saldo /= 3

console.log("Quanto ficou para cada irmão:", saldo )
// Divisão do saldo em 3, para dividir com meus outros dois irmãos

saldo *= 3.42
console.log("Dinheiro aplicado rendeu e se transformou em:", saldo);
// Multiplicação do saldo em 3.42 (é necessário usar . ao invés de ,)

saldo %= 3

console.log("Dividi em 3 e deixei um din pra comprar chiclete", saldo);
// Divisão do saldo em 3 novamente para mostrar que a % também funciona

// Precedência matemática

let conta1 = 2*2+2
let conta2 = (2+2)*2

console.log(conta1);
console.log(conta2);

/* Exercício mostrando a importância 
do uso da base matemática (uso de parênteses)*/

// Igual ou diferente

/*FAZER 
AQUI 
ESSA PARTE

Maior ou menor

*/

/*Os operadores lógicos costumam ser muito usados 
para condições (tipo os bloquinhos de “se, senão” do Scratch),
e nós podemos usá-los para construir muitas lógicas.
Considere, por exemplo, as afirmações abaixo:

//a: Quero dirigir um Celta 2012;
let quero = confirm("Quer dirigir um celta?")

//b: Sou maior de idade;
let maiorIdade = confirm("É maior de idade?")

//c: Consigo comprar o Celta por 22.000 reais;
let dinheiroComprar = confirm("Tem 22.000 reais?")

//d: Consigo alugar o Celta;
let dinheiroAlugar = confirm("Tem dinheiro para alugar?")

//e: Tenho carteira de motorista;
let cnh = confirm("Tem CNH?")

// crie uma variável integrando todas as outras e imprima true or false
const possoDirigirOCelta = quero && maiorIdade && cnh 
&& (dinheiroComprar || dinheiroAlugar)

console.log("Posso dirigir o celta?", possoDirigirOCelta);
*/

let idade = prompt("Qual sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

const diferenca = idade > idadeMelhorAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", diferenca );
console.log(idade-idadeMelhorAmigo)