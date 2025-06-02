let nome = "Ana";
let idade = 15;

let novaIdade = idade + 1;

if (idade >= 18) {
    console.log(nome + " é maior de idade.");
} else {
    console.log(nome + " é menor de idade.");
}

if (idade < 12 || idade > 60) {
    console.log(nome + " tem direito a meia-entrada.");
}

console.log("Ano que vem, " + nome + " terá " + novaIdade + " anos.");