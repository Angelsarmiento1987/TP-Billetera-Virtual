/*asignacion de Variables */ 
let disponible = document.getElementById("disponible")
let totalIngresos = document.getElementById("totalIngresos")
let idFootIngresos = document.getElementById("idFootIngresos")
let idFootGastos = document.getElementById("idFootGastos")
let totalGastos = document.getElementById("totalGastos")
let idDivGastos = document.getElementById("idDivGastos")
let idDarkMode = document.getElementById("idDarkMode")
let body = document.getElementById("body")
let billeteraStyle = document.getElementById("billeteraStyle")
let gastoMontoStyle =  document.getElementById("gastoMontoStyle")
let headerStyle = document.getElementById("headerStyle")
let idFootResponsive = document.getElementById("idFootResponsive")
let idStyleIconoDinero = document.getElementById("idStyleIconoDinero")
let idStyleIconoAgregar = document.getElementById("idStyleIconoAgregar")




let dinero = 0
let monto = 0
let gasto =``
let gastosSumador = 0
let sumX = 1
let restarString = ``
let restar = 0
let darkSum = 0




function haceClick(){/*genere la funcion q disparon con el evento onclick en la etiqueta q contiene el icono del + hay q modificar eso */ 
    let idInputDinero =  document.getElementById("idInputDinero").value;
    dinero = parseFloat(idInputDinero)
  
    disponible.innerText=`$${dinero}`
    totalIngresos.innerText = `$${dinero}`
    idFootIngresos.innerText = `$${dinero}`
}

/*FUNCION AGREGAR DINERO*/ 

function agregarDinero(){
    if(dinero > 0 || sumX>1){
let idInputGasto = document.getElementById("idInputGasto").value;
let idInputMonto = document.getElementById("idInputMonto").value;
gasto = idInputGasto
monto = parseFloat(idInputMonto)
dinero = dinero - monto
gastosSumador = gastosSumador + monto
disponible.innerText=`$${dinero}`
totalGastos.innerText = `$${gastosSumador}`
idFootGastos.innerText = `$${gastosSumador}`
if(dinero<0){
disponible.style.color = `red`
}
idDivGastos.insertAdjacentHTML("beforeend"/*este dato me da la ubicacion del elemento (antes o posterior)*/,`<div class="gasto" id="idItemGasto${sumX}"  >
<h3 class="gastoRealizado">${gasto}</h3>
<h3 class="precio" id="idMontos${sumX}" >$${monto}</h3>
<a href="#" class="iconoTacho" id="idEliminarDiv" onclick="eliminarDIV(${sumX})"><i class="fa-regular fa-trash-can iconoEliminar"></i></a>

</div>`) //con insertAdjacentHTML coloco el CONTENIDO HTML uno despues de otro sin que se superpongan como con innerhtml



document.getElementById("idInputGasto").value = `` /*de esta forma retorno el value de los inputs a cero/null para que puedan ser editados y seguir sumando elementos sin que me figuren los anteriores en pantalla*/ 
document.getElementById("idInputMonto").value = ``

sumX = sumX + 1 //sumador para incremento y recorrido de los divs
    }
    else{
        alert("Ingrese dinero a su cuenta para empezar a calcular sus gastos!!")
    }

}

/*FUNCION ELIMINAR DIV*/ 

function eliminarDIV(a){/*"a" recibe el valor de sumX enviado por onClick */
    

    let idMontos = document.getElementById(`idMontos${a}`).innerHTML.slice(1)/*utilice slice para quitar el $ al guarda*/ 
    restar = parseFloat(idMontos)
    gastosSumador = gastosSumador - restar
    dinero = dinero + restar
    disponible.innerText=`$${dinero}`
    totalGastos.innerText = `$${gastosSumador}`
    idFootGastos.innerText = `$${gastosSumador}`
    
    if(dinero>=0){
        disponible.style.color = `green`
    }

    /*las operaciones con los valores las realizo antes de ejecutar la eliminacion del contenedor en esta funcion, ya que si el codigo estuviera despues lo tomaria como NULL*/




    let elimino = document.getElementById(`idItemGasto${a}`)
    elimino.remove();



/*con esta funcion guardo en variable el ID idItemGasto(con su respectivo indice que se lo da sumX para lograr identificar por separado cada div ) y el evento haceClik activa la funcion elimiinarDIV(aqui manda la variable sumX guardada para saber luego a que indice corresponde)*/

}

/* FUNCION MODO OSCURO */

function onOffMode(){
    if(darkSum == 0){
    
    idDarkMode.innerHTML = `<i class="fa-solid fa-toggle-on light"></i>`
   
    body.style.backgroundColor="#f8efc4"
    billeteraStyle.style.backgroundColor = "#e4b987"
    gastoMontoStyle.style.backgroundColor = "#e4b987"
    headerStyle.style.backgroundColor = "#c8825b"
   idInputDinero.style.backgroundColor="#f8efec"
   idInputGasto.style.backgroundColor="#f8efec"
   idInputMonto.style.backgroundColor ="#f8efec"
   idFootResponsive.style.backgroundColor = "#c8825b"
   idInputDinero.style.color = "black"
   idInputGasto.style.color="black"
   idInputMonto.style.color = "black"
   document.documentElement.style.setProperty(`--colorIconos`, `#b55b52`)
   document.documentElement.style.setProperty(`--colorPlaceholder`, `#b55b52`) //de esta forma coloco el color al placeholder al cambiar de modo a claro, y para eso le coloque una variable para el color en el root del style(directamente realizo el cambio de color sobre la variable colorPlaceholder creada en el CSS)
   document.documentElement.style.setProperty(`--contColorResponsive`, `#c8825b`)
   document.documentElement.style.setProperty(`--lineaDiv`, `#b55b52`)
   document.documentElement.style.setProperty(`--txtColor`, `#b55b52`)
  
   
   
   
   
   
darkSum = darkSum + 1

    }
    else if(darkSum == 1){

        idDarkMode.innerHTML = `<i class="fa-solid fa-toggle-off dark"></i>`
        body.style.backgroundColor=" #0D0E0F"
        billeteraStyle.style.backgroundColor = "#131415"
        gastoMontoStyle.style.backgroundColor ="#131415"
        headerStyle.style.backgroundColor = "#C5FC6B"
        idInputDinero.style.backgroundColor="#1B1C1E"
        idInputGasto.style.backgroundColor="#1B1C1E"
        idInputMonto.style.backgroundColor ="#1B1C1E"
        idFootResponsive.style.backgroundColor = "#C5FC6B"
        idInputDinero.style.color = "white"
        idInputGasto.style.color="white"
        idInputMonto.style.color = "white"
        
        document.documentElement.style.setProperty(`--colorPlaceholder`, `#C5FC6B`)
        document.documentElement.style.setProperty(`--contColorResponsive`, `#1B1C1E`)
        document.documentElement.style.setProperty(`--colorIconos`, `#C5FC6B`)
        document.documentElement.style.setProperty(`--lineaDiv`, `silver`)
        document.documentElement.style.setProperty(`--txtColor`, `white`)

        darkSum = darkSum - 1
    }
    
}
