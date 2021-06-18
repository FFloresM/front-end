//Definiendo un arreglo nombre de errores
var arreglo = new Array();
arreglo[0]="errorNota1";
arreglo[1]="errorNota2";
arreglo[2]="errorNota3";
arreglo[3]="errorNota4";
arreglo[4]="errorNotaExamen";

function validar() {
    var entrada = new Array();
    entrada[0]=document.getElementById('nota1').value;
    entrada[1]=document.getElementById('nota2').value;
    entrada[2]=document.getElementById('nota3').value;
    entrada[3]=document.getElementById('nota4').value;
    entrada[4]=document.getElementById('notaExamen').value;

    var error = new Array();
    error[0] = "<span style='color: red'>Ingrese nota 1!!</span>";
    error[1] = "<span style='color: red'>Ingrese nota 2!!</span>";
    error[2] = "<span style='color: red'>Ingrese nota 3!!</span>";
    error[3] = "<span style='color: red'>Ingrese nota 4!!</span>";
    error[4] = "<span style='color: red'>Ingrese nota examen!!</span>";

    for(i in entrada) {
        var mensajeError = error[i];
        var valorArreglo = arreglo[i];

        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }
        else if(isNaN( entrada[i] )){
            document.getElementById(valorArreglo).innerHTML =
                    "<span style='color: red'>Ingrese un valor numérico</span>";
        }
        else if(parseFloat( entrada[i])<1 || parseFloat( entrada[i])>7 ){
            document.getElementById(valorArreglo).innerHTML =
                    "<span style='color: red'>Ingrese un valor entre 1 y 7</span>";
        }
        else {
            document.getElementById(valorArreglo).innerHTML =
                "Campo válido!!";
        }

    }

}

function validarTodos(){
    var contador = 0;
    for(i=0; i<5; i++){
        var valorArreglo = arreglo[i];
        if( document.getElementById(valorArreglo).innerHTML == "Campo válido!!")
        {
            contador++;
        }
    }
    if(contador == 5){
        document.getElementById('mensajefinal').innerHTML = "Formulario validado!!"
    }else {
        document.getElementById('mensajefinal').innerHTML = "Formulario INVÁLIDO!!"
    }
}

function calcularPromedio() {
    var entrada = new Array();
    entrada[0]=document.getElementById('nota1').value;
    entrada[1]=document.getElementById('nota2').value;
    entrada[2]=document.getElementById('nota3').value;
    entrada[3]=document.getElementById('nota4').value;

    var examen=document.getElementById('notaExamen').value;
    var suma = 0;
    for(i in entrada){
        suma += parseFloat(entrada[i]);
    }
    var promedio = (suma/4)*0.6 + examen*0.4;
    if (suma/4 > 4 && examen > 4) {
        document.getElementById('promedio').innerHTML = 
            "<p>Alumno APROBADO con promedio "+promedio+"</p>";
    }else{
        document.getElementById('promedio').innerHTML = 
            "<p>Alumno REPROBADO con promedio "+promedio+"</p>";
    }

    


}