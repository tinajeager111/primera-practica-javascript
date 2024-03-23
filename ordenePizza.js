const tamaño = document.querySelector('#tamaño');
const ordenesObj = {
  pizzas: '',
  ingExtras: []

}


tamaño.addEventListener('input', e =>{
    ordenesObj.pizzas = e.target.value;
    

})

form.addEventListener('submit',verPedido);








form.addEventListener('input',extras)



function extras(){

  
    ordenesObj.ingExtras=[]

const ing1 = document.getElementById("champiñones");
const ing2 = document.getElementById("pepperoni");
const ing3 = document.getElementById("jamon");
const ing4 = document.getElementById("maiz");
const ing5 = document.getElementById("aceitunas");
const ing6 = document.getElementById("anchoas");

    
    if (ing1.checked) {
      ordenesObj.ingExtras.push(ing1.id);
    }
    if (ing2.checked) {
      ordenesObj.ingExtras.push(ing2.id);
    }
    if (ing3.checked) {
      ordenesObj.ingExtras.push(ing3.id);
    }
    if (ing4.checked) {
      ordenesObj.ingExtras.push(ing4.id);
    }
    if (ing5.checked) {
      ordenesObj.ingExtras.push(ing5.id);
    }
    if (ing6.checked) {
      ordenesObj.ingExtras.push(ing6.id);
    }


    
}

let costoPreparacion;
let C1;
let C2;
const harina = 0.03;
const manoDeobra = 3;
let pizzaPequeña = Math.PI * 10;
let pizzaMediana = Math.PI * 14;
let pizzaGrande = Math.PI * 16;
const ingExtraP = 1;
const ingExtraM = ingExtraP * 2;
const ingExtraG = ingExtraM * 2;


function calculateTotal(){



  if (ordenesObj.pizzas == "pequeña"){
    costoPreparacion = pizzaPequeña*harina+manoDeobra+ordenesObj.ingExtras.length*ingExtraP;
    C1= costoPreparacion*1.5;
     C2= parseFloat(C1.toFixed(1));

       }

        if (ordenesObj.pizzas == "mediana"){
    costoPreparacion = pizzaMediana*harina+manoDeobra+ordenesObj.ingExtras.length*ingExtraM;
    C1 = costoPreparacion*1.5;
    C2 = parseFloat(C1.toFixed(1));
    }

        if (ordenesObj.pizzas == "grande"){
       costoPreparacion = pizzaGrande*harina+manoDeobra+ordenesObj.ingExtras.length*ingExtraG;
       C1 = costoPreparacion*1.5;
       C2 = parseFloat(C1.toFixed(1));}

       return C2;

      }



function verPedido (e) {
  
 
  if(ordenesObj.pizzas == "pequeña" || ordenesObj.pizzas == "mediana" || ordenesObj.pizzas == "grande"){
     // consultar los valores guardados en el objeto
let total= calculateTotal();
const tamaño = ordenesObj.pizzas;
const ingExtras = ordenesObj.ingExtras;

alert(`usted pidio una pizza: ${tamaño}, ingredientes: ${ingExtras} total ${total}`)
console.log(`usted pidio una pizza: ${tamaño}, ingredientes: ${ingExtras} total ${total}`)

  }
 

  if (ordenesObj.pizzas === '') {

      alert('seleccione un tamaño (obligatorio)')
    
  }

  
  console.log(ordenesObj)
e.preventDefault();
  
}
