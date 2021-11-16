// Criar operação de cálculo de área da circunferência criando variáveis e constantes. Colocar constantes com letra maiúscula. PI * raio * raio;
// PI = 3.141592;

let raio = 10;
const PI = 3.141592;

//raio = 20; // Alteração pode ser feita aqui, antes da fórmula;

let areaCircunferencia = PI * raio * raio;

raio = 40; // Percebi que se eu fizer a modificação da variável após a fórmula, o valor de raio não se altera, preciso alterar o valor antes da fórmula criada;

console.log("O valor da área é: " + areaCircunferencia + " m².");
console.log(Math.PI); //Biblioteca do JavaScript de Matemática;
