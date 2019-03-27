function login(){
  var usuario= document.form.user.value;
  var contrasena = document.form.password.value;
  var validarUsuario = document.forms["form"]["user"].value;
  var validarContrasena = document.forms["form"]["password"].value;
  
    if (validarUsuario == "") {
      alert("Debes llenar el campo de usuario");
      return false;
    }

    if (validarContrasena == "") {
      alert("Debes llenar el campo de contraseña");
      return false;
    }
    if (usuario=='mrozomo' && contrasena=='123'){
      // alert('Usuario correcto');
      window.location="indexUsuario.html";
      document.getElementById('usuario').innerHTML = usuario;
    }
    else if (usuario=='jess' && contrasena=='123'){
      // alert('Usuario correcto');
      window.location="PlantillaFuncion.html";
    }
    else if (usuario== 'juan45_lz' && contrasena =='789'){
      // alert('Usuario correcto');
      window.location="PlantillaFuncion.html";
    } 
    else{
      alert('Datos incorrectos');
    }

}
function cerrarsesion() {
  var confirmacion = confirm("Estas Seguro que Deseas Salir?");
  if(confirmacion){
  window.location="index.html";	
     alert("Gracias por visitar nuestro sitio! ¡regresa pronto!");
     } else {
      alert("Has pulsado cancelar");
  }

}

