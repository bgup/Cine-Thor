
/****************************************************************************************/
 /*SILLAS */
 // Array con todas las imágenes que deseamos que se vayan cambiando a
 var imagenes = Array("./Imagenes/img_1.png", "./Imagenes/img_2.png");
 var imagenVisible = 0; 
 // variables utilizadas para almacenar data de cada clic
 var x = []
 var y = []
 var mem;
 // variables de conteo
 var count=1;
 var i;
 // Función que cambia la imagen 
 function cambiar(img) {
   mem=img.src;
   if (mem=='file:///C:/Users/joanjess/Desktop/cinema/Imagenes/img_2.png') {
     img.src = imagenes[0]
   } else {
     img.src = imagenes[1]
   }
 }
 // funcion que almacena el id de la imagen que se clickeo
 function numera(number) {
   x.push(number);
 }
 // función del boton para mostrar 
 function activar() {
 // para entender este codigo descomentarea los alert(...)
   for (n = 0; n < x.length-1; n++) {
     i=n+1;
     // TAREA!! acortar usando frutas.forEach(function (elemento, indice, array) {
     do{
       if (x[n]==x[i]) {
         // alert("si "+x+" n"+n+" i"+i)
         x.splice(i,1)
         // alert(x+" borrado!")
         count++
       }else{
         // alert("no "+x+" n"+n+" i"+i)
         i++;
       }
     }while (i < x.length);
     y.push(count);
     count=1;
   }
   // este codigo diferencia las que quedaron azules para no mostrarlas en la selección 
   i=0;
   do{
     if (y[i]%2==0) {
       // alert("si "+x+" i "+i)
       x.splice(i,1)
       y.splice(i,1)
       // alert(x+" borrado!")
       count++
     }else{
       // alert("no "+x+" n"+n+" i"+i)
       i++;
     }
   }while (i < x.length);
   alert("seleccionaste "+x.length+" sillas, las sillas que seleccionaste son "+x);
   }
   /*Fin de sillas */

/*********************************************************************************************/
/////BUSCAR OBJETO///////

function buscarobjeto(){ 
  var transaction = db.transaction(["gente"],"readonly"); 
  var objectStore = transaction.objectStore("gente"); 
  var ob = objectStore.get(numero); 
  bd.onsuccess = function(e) { }
}
// calendario
  function getData(){
       let dater = document.getElementById("datepicker").value;
       console.log(dater);
       document.getElementById("impresion").innerHTML=dater;
      
    }  
//CALCULAR//
function calcula() {
  var total;
  var hora= document.getElementById("t1").value;
    var fecha = function getData() {
  

    
  
  }
  {
    alert()
  }
  
}


