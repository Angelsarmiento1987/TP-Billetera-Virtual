/*asignacion de Variables header*/ 
let disponible = document.getElementById("disponible")
let totalIngresos = document.getElementById("totalIngresos")
let totalGastos = document.getElementById("totalGastos")
let idDivGastos = document.getElementById("idDivGastos")



let dinero = 0
let monto = 0
let gasto =``
let gastosSumador = 0
let sumX = 1




function haceClick(){/*genere la funcion q disparon con el evento onclick en la etiqueta q contiene el icono del + hay q modificar eso */ 
    let idInputDinero =  document.getElementById("idInputDinero").value;
    dinero = parseFloat(idInputDinero)
  
    disponible.innerText=`$${dinero}`
    totalIngresos.innerText = `$${dinero}`
}

/*FUNCION AGREGAR DINERO*/ 

function agregarDinero(){
let idInputGasto = document.getElementById("idInputGasto").value;
let idInputMonto = document.getElementById("idInputMonto").value;
gasto = idInputGasto
monto = parseFloat(idInputMonto)
dinero = dinero - monto
gastosSumador = gastosSumador + monto
disponible.innerText=`$${dinero}`
totalGastos.innerText = `$${gastosSumador}`
if(dinero<0){
disponible.style.color = `red`
}
idDivGastos.insertAdjacentHTML("beforeend"/*este dato me da la ubicacion del elemento (antes o posterior)*/,`<div class="gasto" id="idItemGasto${sumX}"  >
<h3 class="gastoRealizado">${gasto}</h3>
<h3 class="precio">${monto}</h3>
<a href="#" class="iconoTacho" id="idEliminarDiv" onclick="eliminarDIV(${sumX})"><i class="fa-regular fa-trash-can iconoEliminar"></i></a>

</div>`) //con insertAdjacentHTML coloco el CONTENIDO HTML uno despues de otro sin que se superpongan como con innerhtml



document.getElementById("idInputGasto").value = `` /*de esta forma retorno el value de los inputs a cero/null para que puedan ser editados y seguir sumando elementos sin que me figuren los anteriores en pantalla*/ 
document.getElementById("idInputMonto").value = ``

sumX = sumX + 1 //sumador para incremento y recorrido de los divs

}

/*FUNCION ELIMINAR DIV*/ 

function eliminarDIV(a){
    console.log("se ejecuta la funcion al apretar tacho")
    let variable = document.getElementById(`idItemGasto${a}`)
    variable.remove()
// con esta funcion guardo en variable el ID idItemGasto(con su respectivo indice que se lo da sumX para lograr identificar por separado cada div ) y el evento haceClik activa la funcion elimiinarDIV(aqui manda la variable sumX guardada para saber luego a que indice corresponde)
}
