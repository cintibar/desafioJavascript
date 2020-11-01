var descripcionPaseDia = " Pase por dia a ";
var descripcionPaseTodosLosDias = " Pase todos los dias a ";
var descripcionPaseDosDias = " Pase por 2 dias a ";
var moneda = "$ ";
var boletoUnDiaPrecio = 30;
var boletoCompletoPrecio = 50;
var boletoDosDiasPrecio = 45;
var precioCamisaEvento = 10;
var precioPaqueteEtiquetas = 2;
var descripcionCamisa = " Camisa del evento a ";
var descripcionEtiquetas = " Paquete de 10 etiquetas a ";
var espacio = " // ";



/*EVENTO CALCULAR*/
var calcularSubtotal=document.getElementById("calcular");
calcularSubtotal.addEventListener("click", funcionCalcular);

/*FUNCION CALCULAR*/
function funcionCalcular() {

    var cantidadPaseDia = document.getElementById("pase_dia");
    var cantidadPDia = cantidadPaseDia.value; 
    var subtotalPaseDia = cantidadPDia * boletoUnDiaPrecio;

    var cantidadPaseTodosLosDias = document.getElementById("pase_completo");
    var cantidadTDias = cantidadPaseTodosLosDias.value;
    var subtotalPaseTodosLosDias = cantidadTDias * boletoCompletoPrecio;

    var cantidadPaseDosDias = document.getElementById("pase_dosdias"); 
    var cantidadDosDias = cantidadPaseDosDias.value;
    var subtotalPaseDosDias = cantidadDosDias * boletoDosDiasPrecio;

    var camisaEvento = document.getElementById("camisa_evento");
    var cantidadCamisaEvento = camisaEvento.value;
    var subtotalCamisaEvento = cantidadCamisaEvento * precioCamisaEvento;
    
    var etiquetas = document.getElementById("etiquetas");
    var cantidadEtiquetas = etiquetas.value;
    var subtotalEtiquetas = cantidadEtiquetas * precioPaqueteEtiquetas;


   if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias == 0 && cantidadCamisaEvento == 0 && cantidadEtiquetas == 0) {
        var mostrarSubtotalDia = document.getElementById("lista-productos");
        mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio;

   } else if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias == 0 && cantidadCamisaEvento >= 1 && cantidadEtiquetas == 0) {
     var mostrarSubtotalDia = document.getElementById("lista-productos");
     mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento;

   } else if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias == 0 && cantidadCamisaEvento == 0 && cantidadEtiquetas >= 1) {
     var mostrarSubtotalDia = document.getElementById("lista-productos");
     mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias == 0 && cantidadCamisaEvento >= 1 && cantidadEtiquetas >= 1) {
     var mostrarSubtotalDia = document.getElementById("lista-productos");
     mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento == 0 && cantidadEtiquetas == 0) {
     var mostrarSubtotalDia = document.getElementById("lista-productos");
     mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio;
  
   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento >= 1 && cantidadEtiquetas == 0) {
     var mostrarSubtotalDia = document.getElementById("lista-productos");
     mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento;

   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento >= 1 && cantidadEtiquetas >= 1) {
     var mostrarSubtotalDia = document.getElementById("lista-productos");
     mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento == 0 && cantidadEtiquetas >= 1) {
     var mostrarSubtotalDia = document.getElementById("lista-productos");
     mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas == 0) {
        var mostrarSubtotalDia = document.getElementById("lista-productos");
        mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio; 

   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento >= 1 && cantidadEtiquetas == 0) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento; 

   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas; 
  
   } else if (cantidadPDia >= 1 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento >=1 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas; 

   } else if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas == 0) {
        var mostrarSubtotalDia = document.getElementById("lista-productos");
        mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio; 

   } else if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento >= 1 && cantidadEtiquetas == 0) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento; 

     } else if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas; 

     } else if (cantidadPDia >= 1 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento >=1 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadPDia + descripcionPaseDia + moneda + boletoUnDiaPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas; 

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas == 0) {
        var mostrarSubtotalDia = document.getElementById("lista-productos");
        mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio; 

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento >= 1 && cantidadEtiquetas == 0) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento;

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias >= 1 && cantidadCamisaEvento >= 1 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento == 0 && cantidadEtiquetas == 0) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio;

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento >= 1 && cantidadEtiquetas == 0) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento;

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento >= 1 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia == 0 && cantidadTDias >= 1 && cantidadDosDias == 0 && cantidadCamisaEvento == 0 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadTDias + descripcionPaseTodosLosDias + moneda + boletoCompletoPrecio + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia == 0 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas == 0) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio;

   } else if (cantidadPDia == 0 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento >= 1 && cantidadEtiquetas == 0) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento;

   } else if (cantidadPDia == 0 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento >= 1 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadCamisaEvento + descripcionCamisa + moneda + precioCamisaEvento + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   } else if (cantidadPDia == 0 && cantidadTDias == 0 && cantidadDosDias >= 1 && cantidadCamisaEvento == 0 && cantidadEtiquetas >= 1) {
          var mostrarSubtotalDia = document.getElementById("lista-productos");
          mostrarSubtotalDia.textContent = cantidadDosDias + descripcionPaseDosDias + moneda + boletoDosDiasPrecio + espacio + cantidadEtiquetas + descripcionEtiquetas + moneda + precioPaqueteEtiquetas;

   }

   var total = subtotalPaseDia + subtotalPaseTodosLosDias + subtotalPaseDosDias + subtotalCamisaEvento + subtotalEtiquetas;
       
   var sumaTotal = document.getElementById("suma-total");
   sumaTotal.textContent = moneda + total;
   

}







