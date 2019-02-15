function main(){
  console.log("que comiencen los juegos del js");

  var boton1 = document.getElementById('boton1');
  var boton2 = document.getElementById('boton2');
  var boton3 = document.getElementById('boton3');
  var suma = document.getElementById('suma');


  //variable que se mostrará en el display de la calculadora
  var operaciondisplay = "";
  //variable que irá formando un número introducido por el usuario
  var numero = "";
  //array donde se guardas numeros y operaciones en cada posicion según
  //el orden introducido por el usuario
  var array_oper = [];

  boton1.onclick = () => {
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "1";
    //añade al numero que se esté formando un 1
    numero = numero +"1";
    display.innerHTML = operaciondisplay;
  }

  boton2.onclick = () => {
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "2";
    //añade al numero que se esté formando un 2
    numero = numero +"2";
    display.innerHTML = operaciondisplay;
  }

  boton3.onclick = () => {
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "3";
    //añade al numero que se esté formando un 3
    numero = numero +"3";
    display.innerHTML = operaciondisplay;
  }

  suma.onclick = () => {
    //cuando pulsen un tipo de operacion, el numero que se estaba formando
    //se incluye al array
    array_oper.push(numero);
    numero = "";
    //se incluye después del número en el array el operador
    //que se va a utilizar "+""
    array_oper.push("+");
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "+";
    display.innerHTML = operaciondisplay;
  }

  resultado.onclick = () => {
    array_oper.push(numero);
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "=";
    display.innerHTML = operaciondisplay;


    //realizar operaciones
    var length = array_oper.length;
    var sumaposition = array_oper.indexOf("+");

    //si no está "+" devuelve un -1, y tiene que haber un numero antes de la sumaposition
    //por ello la condicion será extrictamente mayor que 0
    while (sumaposition>0){
      resulsuma = parseInt(array_oper[sumaposition-1]) + parseInt(array_oper[sumaposition+1]);
      array_oper[sumaposition] = resulsuma;

      //elimino las posiciones del array de los numeros que se han utilizado
      //para realizar la suma
      array_oper.splice(sumaposition-1, 1);
      array_oper.splice(sumaposition, 1);
      var length = array_oper.length;
      var sumaposition = array_oper.indexOf("+");
      //i = 0;
      //while (i<length) {
        //console.log(i);
        //console.log(array_oper[i]);
        //i += 1;
      //}
    }
    console.log(resulsuma);


    }

}
