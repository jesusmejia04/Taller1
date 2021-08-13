//Todo el módulo se encuentra dentro de una función
//conocida como función inmediata, en este caso
//también anónima que provoca que todo se ejecute
//de una vez.
(function(){
    
      if (nombre = "") {
            alert("no ingreso su nombre");
        }else{
             if(window.addEventListener){
        window.addEventListener("load", iniciar, false);
        }
        else{
            window.attachEvent("onload", iniciar);
        }
        }
   
    //Variables utilizadas para interactuar
    //con los elementos img presentes en la página
    var imagenDado1;
    var nombre = prompt(' Ingrese su nombre','');
    var imagenDado2;
    var imagenDado3;
    var sumadados = 0;
    var puntajes = new Array(3);
    var i;
    var hoy = new Date();
    //Registrar componentes de escucha del evento clic
    //al presionar el botón denominado botonTirar y obtener
    
    //todos los elementos img presentes en el documento
    function iniciar(){

    var boton = document.getElementById("botonTirar");
    if(boton.addEventListener){
    boton.addEventListener("click", tirarDados,
    false);
    }
    else{
    boton.attachEvent("onclick", tirarDados);
    }
    imagenDado = document.getElementById("dado1");
    imagenDado = document.getElementById("dado2");
    imagenDado = document.getElementById("dado3");
    }
    function tirarDados(){
    establecerImagen(imagenDado);
    establecerImagen(imagenDado);
    establecerImagen(imagenDado);
    alert("la suma es "+sumadados)
    //document.write("<h1>La suma de la primera tirada de dados es de:"+sumadados+"</h1>")
    puntajes[i]==valorDado;
    i++;
    alert(i)
    }

    function establecerImagen(imgDado){
    var valorDado = Math.floor(1+Math.random()*6);
    //Estableciendo el atributo src de la imagen
    imgDado.setAttribute("src", "img/dice" + valorDado
    + ".png");

    //Estableciendo el atributo alt de la imagen
    imgDado.setAttribute("alt", "Imagen del dato con el valor " + valorDado);
    alert(" Hola " +nombre+ " el valor del dado es: " + valorDado);
    sumadados += valorDado;
    
    }

    }
    )();