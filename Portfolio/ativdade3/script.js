function calcular(){
    let nota1trime = Number(prompt("Digite a Nota do Primeiro trismestre:"));
    let nota2trime = Number(prompt("Digite a Nota do segundo trimestre:"));

    let resultado = 180-(nota1trime+nota2trime);
    alert("Você precisa de " + resultado + " para ser aprovado.");

    if(resultado <= 0){
    alert("Parabéns! Você está aprovado por nota!!");
    }
}