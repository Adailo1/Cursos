const nome = "Adailo";
const sobrenome = "Melo";
const nascimento = 2003;
let idade = 21;
let peso = 87;
let altura = 1.7
const imc = (peso / (altura ** 2)).toFixed(2)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura}m de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${nascimento}`)