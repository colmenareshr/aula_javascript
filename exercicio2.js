let firstPeople = Object();
   nome = prompt("Nome da primeira pessoa");
   sobrenome = prompt("Sobrenome da primeira pessoa");
   idade = prompt("Idade da primeira pesoa");
Number(idade);

let secondPeople = new Object();
   nome1 = prompt("Nome da segunda pessoa");
   sobrenome1 = prompt("Sobrenome da segunda pessoa");
   idade1 = prompt("Idade da segunda pesoa");
Number(idade1);

console.log("Registros de " + nome + " e "+ nome1);
console.log("Idade de " + nome + ": " + idade +"\nIdade de " + nome1 + ": " + idade1);

if( idade === idade1){
   console.log("Qué legal! " + nome + " e " + nome1 + " são da mesma idade!");
}else if(idade > idade1){
   console.log(nome + " é mais velho/a que " + nome1);
}else{
   console.log(nome + " é mais novo/a do que " + nome1);
}





