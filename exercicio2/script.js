/*
Feita perguntas para o usuário retornar com números
*/

let numero1 = prompt("Insira um número inteiro")
let numero2 = prompt("Agora insira mais um número inteiro")

//A
console.log("O primeiro número é maior que o segundo?", numero1 > numero2);

/*
Imprime uma string e relaciona (se falso ou verdadeiro) se
a variável numero1 é maior que a variável numero2
*/

//B
console.log("O primeiro número é igual ao segundo?", (numero1 === numero2) );

/*
Imprime uma string e relaciona (se falso ou verdadeiro) se
a variável numero2 é maior que a variável numero1
*/

//C
let numero3 = (numero1 % numero2) === 0
console.log("O primeiro número é divisível pelo segundo?" , numero3)

/*
Primeiramente foi definido uma nova variável para descobrir se o resto
da divisão (módulo) do numero1 pelo numero2 é igual a zero,
sendo que se for 0, o valor é par, se for 1, o valor é ímpar. 
Depois fiz uma comparação com um operador relacional para averiguar
se o resultado for igual a 0, trouxer "true", se não, "false"
*/

//D
let numero4 = (numero2 % numero1) === 0
console.log("O segundo número é divisível pelo primeiro?" , numero4)

/*
Primeiramente foi definido uma nova variável para descobrir se o resto
da divisão (módulo) do numero2 pelo numero1 é igual a zero,
sendo que se for 0, o valor é par, se for 1, o valor é ímpar. 
Depois fiz uma comparação com um operador relacional para averiguar
se o resultado for igual a 0, trouxer "true", se não, "false"
*/