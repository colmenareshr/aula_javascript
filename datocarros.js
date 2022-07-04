var carros = [];

function Carro(marca, date, color){
   this.marca = marca;
   this.date = date;
   this.color = color;
}



function comparar(carros){
   
   
    for (let i = 0; i < carros.length; i++){    
     if ( carros[i].date == carros.date){
        console.log(`La marca ${carros[i].marca} y la marca ${carros[i+=1].marca}, son del mismo año`);
     }else if (carros[i].date > carros.date) {
        console.log(`La marca ${carros[i].marca} es la más nueva`);
     }else {
       console.log(`La marca ${carros[i+=1].marca} es la más vieja`);
     }
  };
};



while(true) {
   const myCar = new Carro (
   this.marca = prompt("Indique la marca de su carro"),
   this.date = Number(prompt("Ahora, indique el año de su carro")),
   this.color = prompt("Por último, indique el color de su carro"),
   )
   
   carros.push(myCar);
   

   let respuesta = prompt("Quieres continuar? (Si/No)");

   if (respuesta.toLowerCase(respuesta) == "no"){
      datos = false;
      break;
   } 

}
console.table(carros);
//comparar();

