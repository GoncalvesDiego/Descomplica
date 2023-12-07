var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("Array invertifo: " + valores.reverse());

for (var pos = 0; pos < valores.length; pos++){
    console.log("Posicao: " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";
carros[2] = "Toyota";

console.log(carros[2]);

var motos = new Array("Honda", "Yamaha");


// Calcular a média de todos os números de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];

}

var media = soma/valores.length;

console.log(media);

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posiçao do numero 3: " + arr1.indexOf(5));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(1,1);

console.log(arr2);

var nomes = ["Maria", "João", "Pedro", "Lucas"];
var novos = nomes.splice(1,1,"Luiz");
console.log(novos);
console.log(nomes);

var pessoa = ["Eduardo", "Joana", "Wallace", "Maria"];
var gerente = ["Davi", "Daniel"];

var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);

var meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
var trimestre1 = meses.slice(0,3);
var trimestre2 = meses.slice(3,6);
var trimestre3 = meses.slice(6,9);
var trimestre4 = meses.slice(9,12);



console.log(trimestre1);
console.log(trimestre2);
console.log(trimestre3);
console.log(trimestre4);


