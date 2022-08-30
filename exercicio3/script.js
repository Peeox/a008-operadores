//A

const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)
/*Explicação
Falso pq 5 é menor que 20 e maior que 2, logo retorna dois "false",
constando como false*/

//B

const operacao2 = 5 === 5 || 5 === "5"
console.log(operacao2)

/*Explicação
Verdadeiro pq 5 é igual a 5 na primeira parte e o booleano utilizado
é o "OU", logo só há necessidade de confirmar verdadeiro em um cenário*/

//C

const operacao3 = 20 > 50
console.log(!operacao3)

/*
Verdadeiro pois utilizamos a negação, senão seria falso (false) */

//D 

const operacao4 = 20 > 50 || 50 > 60
console.log(!operacao4)

/*
Verdadeiro pois utilizamos a negação, senão seria falso */