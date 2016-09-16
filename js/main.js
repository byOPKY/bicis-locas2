

function validateForm(){

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;
    var formControl = document.querySelector("select.form-control").value;
    var cuadroDeValidación = document.createElement("span");
    var cuadroDeValidación2 = document.createElement("span");
    var cuadroDeValidación3 = document.createElement("span");
    var cuadroDeValidación4 = document.createElement("span");
    var cuadroDeValidación5 = document.createElement("span");
    var cuadroDeValidación6 = document.createElement("span");
    var cuadroDeValidación7 = document.createElement("span");
	var email = document.getElementById("input-email").value; 

    if(name.length == 0 && lastname.length == 0 && email.length == 0 && inputPassword.length == 0)
        alert("Ingrese los campos") 
        //Email
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

     if (expr.test(email))
        true;

    else if(email == ""){
    	var cuadroNegro = document.getElementsByClassName("input-box")[2];
    	cuadroDeValidación.innerHTML= "Ingrese su correo por favor.";
    	cuadroNegro.appendChild(cuadroDeValidación);
    	cuadroNegro.classList.toggle("error");
    }
    else{
    	var cuadroNegro = document.getElementsByClassName("input-box")[2];
        cuadroNegro.appendChild(cuadroDeValidación);
        cuadroDeValidación.innerHTML= "Verifique su E-mail";
        cuadroNegro.classList.add("error");
        }

        //Seleccionar una opción

    if( document.querySelector("select").value == 0 )
    	var cuadroNegro = document.getElementsByClassName("input-box")[4];
        cuadroDeValidación2.innerHTML= "Seleccione un tipo de Bici";
    	cuadroNegro.appendChild(cuadroDeValidación2);
    	cuadroNegro.classList.toggle("error");

        //Contraseña
        var contra = document.getElementById("input-password").value;
    if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")) 
       var cuadroNegro = document.getElementsByClassName("input-box")[3];
        cuadroDeValidación3.innerHTML= "Password no valido";
    	cuadroNegro.appendChild(cuadroDeValidación3);
    	cuadroNegro.classList.toggle("error");


        // Para los campos nombre y apellido la primera letra debe ser mayúscula
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;

        /*name*/  
    if (name.charAt(0) == name.charAt(0).toLowerCase()){
    	  var cuadroNegro = document.getElementsByClassName("input-box")[0];
        cuadroDeValidación4.innerHTML= "La primera letra debe ser Mayuscula";
    	cuadroNegro.appendChild(cuadroDeValidación4);
    	cuadroNegro.classList.toggle("error");
      }

    else
        return true;
        
        /* lastname*/  
    if (lastname.charAt(0) == lastname.charAt(0).toLowerCase()){
    	var cuadroNegro = document.getElementsByClassName("input-box")[1];
        cuadroDeValidación5.innerHTML= "La primera apellido debe ser Mayuscula";
    	cuadroNegro.appendChild(cuadroDeValidación5);
    	cuadroNegro.classList.toggle("error");
      }
       
    else
        return true;

    var expreg = /^[a-z][a-z]*/;

    if(expreg.test(name))
        true
    else{
    	var cuadroNegro = document.getElementsByClassName("input-box")[0];
        cuadroDeValidación6.innerHTML= "El campo nombre sólo permiten caracteres de la A-Z";
    	cuadroNegro.appendChild(cuadroDeValidación6);
    	cuadroNegro.classList.toggle("error");
      }
        
        
    if(expreg.test(lastname))
        true    
    else{
    	var cuadroNegro = document.getElementsByClassName("input-box")[1];
        cuadroDeValidación7.innerHTML= "El campo apellido sólo permiten caracteres de la A-Z";
    	cuadroNegro.appendChild(cuadroDeValidación7);
    	cuadroNegro.classList.toggle("error");
      }
}






/*
    function validateForm(){
	/* Escribe tú código aquí */ /*} 
*/