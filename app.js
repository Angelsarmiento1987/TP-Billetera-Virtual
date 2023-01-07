/*asignacion de Variables header*/ 
let disponible = document.getElementById("disponible")

let dinero = 0



function haceClick(){/*genere la funcion q disparon con el evento onclick en la etiqueta q contiene el icono del + hay q modificar eso */ 
    let idInputDinero =  document.getElementById("idInputDinero").value;
    dinero = parseFloat(idInputDinero)
  
    disponible.innerText=`$${dinero}`
}