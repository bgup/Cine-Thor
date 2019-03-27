let n = 0; //Variable que se utiliza para pasar al siguiente usuario en la función registro()

// Variable para guardar los datos de los usuarios para el inicio de sesión. Hasta 5 usuarios
// pero se pueden agregar más.
let iniUsuarios = [
  {
    nombre: "",
    contraseña: "",
    usuario: "",
  },
  {
    nombre: "",
    contraseña: "",
    usuario: "",
  },
  {
    nombre: "",
    contraseña: "",
    usuario: "",
  },
  {
    nombre: "",
    contraseña: "",
    usuario: "",
  },
  {
    nombre: "",
    contraseña: "",
    usuario: "",
  }
]
// Variable para realizar el registro de los usuarios hasta 5 usuarios (Se pueden agregar más)
let regUsuarios = [
  {
    nombre: "",
    contraseña: ""
  },
  {
    nombre: "",
    contraseña: ""
  },
  {
    nombre: "",
    contraseña: ""
  },
  {
    nombre: "",
    contraseña: ""
  },
  {
    nombre:"", 
    contraseña: ""
  }
]
//Funcion para el registro de usuario
function registro(){
//Se obtienen los valores ingresados por el usuario para el registro
let nombre = document.getElementById("nombreRegistro").value;
let contraseña = document.getElementById("contraseñaRegistro").value;
let usuario= document.getElementById("usuarioRegistro").value;
var numeros=[1,2,3,4,5,6,7,8,9,0];
var nombre2 = document.getElementById("nombreRegistro").value;
if (nombre2 == numeros){
  alert("Verifique tu nombre")
}
//Validación para que el usuario ingrese valores para el Usuario y Contraseña
if(nombre === "" || contraseña === ""){
  alert("Favor ingrese todos los datos requeridos")
  return
}

//Traspaso de los valores de registro para guardarlos en la variable de inicio de sesión
regUsuarios[n].nombre = nombre
regUsuarios[n].contraseña = contraseña;
regUsuarios[n].usuario = usuario;
iniUsuarios[n].nombre = regUsuarios[n].nombre;
iniUsuarios[n].contraseña = regUsuarios[n].contraseña;

//Confirmación al usuario de su usuario y contraseña
alert("Bienvenido " + iniUsuarios[n].nombre + "tú usuario es: " +regUsuarios[n].usuario)
alert("Su contraseña: " + iniUsuarios[n].contraseña) 
n++; // Se incrementa para registrar un nuevo usuario en el siguiente índice del arreglo regUsuarios[]
}