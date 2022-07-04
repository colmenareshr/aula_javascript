let datos = true;
let nome1 = String;
let idade1 = 0;

while (datos) {
   let nome = prompt("Nome da primeira pessoa");
   let idade = Number( prompt("Idade da primeira pesoa"));
   //sobrenome: prompt("Sobrenome da primeira pessoa"),
   
   
   
   console.log("Registros de " + nome);
   console.log("Idade de " + nome + ": " + idade +"\nIdade de " + nome1 + ": " + idade1);
   
   if( idade === idade1){
      console.log("Qué legal! " + nome + " e " + nome1 + " são da mesma idade!");
   }else if(idade > idade1){
      idade1 = idade;
      nome1 = nome;
      
   }
   console.log(nome1 + " é mais velho/a");
   let respuesta = prompt("Quieres continuar? (Si/No)");

   if (respuesta.toLowerCase(respuesta) == "no"){
      datos = false;
      break;
   }
}