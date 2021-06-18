//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo[0]="errorNombre";
arreglo[1]="errorEdad";
arreglo[2]="errorEmail";
arreglo[3]="errorUsuario";
arreglo[4]="errorPassword";
arreglo[5]="errorConfirmar";

function validar(){
    var entrada = new Array();
    entrada[0]=document.getElementById('nombre').value;
    entrada[1]=document.getElementById('edad').value;
    entrada[2]=document.getElementById('email').value;
    entrada[3]=document.getElementById('user').value;
    entrada[4]=document.getElementById('password').value;
    entrada[5]=document.getElementById('confirmarpassword').value;

    var error = new Array();
    error[0] = "<div class='alert alert-danger' role='alert'>Ingrese el nombre!!</div>";
    error[1] = "<div class='alert alert-danger' role='alert'>Ingrese el edad!!</div>";
    error[2] = "<div class='alert alert-danger' role='alert'>Ingrese el email!!</div>";
    error[3] = "<div class='alert alert-danger' role='alert'>Ingrese el usuario!!</div>";
    error[4] = "<div class='alert alert-danger' role='alert'>Ingrese el password!!</div>";
    error[5] = "<div class='alert alert-danger' role='alert'>Ingrese la confirmación del Password!!</div>";

    //Definiendo un ciclo forech
    for(i in entrada){
        var mensajeError = error[i]
        var valorArreglo = arreglo[i]
        //Validando campo requerido
        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }

        //Validar correo
        else if (i==2){
                var arroba = entrada[i].indexOf("@");
                var punto = entrada[i].lastIndexOf(".");

                if(arroba<1 || punto < arroba + 2 || entrada[i].length<punto+2){
                    document.getElementById('errorEmail').innerHTML =
                    "<div class='alert alert-danger' role='alert'>Ingrese un email válido!!</div>";
                }
                else {
                    document.getElementById('errorEmail').innerHTML =
                    "<div class='alert alert-success' role='alert'>Campo válido!!</div>";
                }
        }
        else if (i==5){
            var primero = document.getElementById('password').value;
            var segundo = document.getElementById('confirmarpassword').value;

            if(primero != segundo)
            {
                document.getElementById('errorConfirmar').innerHTML =
                
                "<div class='alert alert-danger' role='alert'>Las passwords no coinciden!!</div>";
            }
            else{
                document.getElementById('errorConfirmar').innerHTML =
                "<div class='alert alert-success' role='alert'>Campo válido!!</div>";
            }

        }
        else if (i==1) {
            if (parseInt(entrada[i])<18) {
                document.getElementById('errorEdad').innerHTML =
                "<div class='alert alert-danger' role='alert'>Debes ser mayor de 18 años!!</div>";
            }else {
                document.getElementById('errorEdad').innerHTML =
                "<div class='alert alert-success' role='alert'>Campo válido!!</div>";
            }
        }
        else {
            document.getElementById(valorArreglo).innerHTML =
            "<div class='alert alert-success' role='alert'>Campo válido!!</div>";
        }

    }

}

function validarTodos(){
    var contador = 0;
    for(i=0; i<6; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo válido!!")
        {
            contador++;
        }
    }
    if(contador == 6){
        document.getElementById('mensajefinal').innerHTML = "Formulario validado!!"
        alert("Usuario creado exitosamente")
    }else {
        document.getElementById('mensajefinal').innerHTML = "Formulario INVÁLIDO!!"
    }
    
}

function guardar(){
    alert("Usuario creado exitosamente")
}

