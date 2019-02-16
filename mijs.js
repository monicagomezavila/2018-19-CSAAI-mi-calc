function main(){

  console.log("CALCULADORA en javascript");

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
    numero = numero +"1";
    display.innerHTML = operaciondisplay;
  }

  boton2.onclick = () => {
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "2";
    numero = numero +"2";
    display.innerHTML = operaciondisplay;
  }

  boton3.onclick = () => {
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "3";
    numero = numero +"3";
    display.innerHTML = operaciondisplay;
  }


  suma.onclick = () => {
    //cuando pulsen un tipo de operacion, el numero que se estaba formando
    //se incluye al array
    array_oper.push(numero);
    numero = "";
    //se incluye después del número en el array el operador
    //que se va a utilizar "+"
    array_oper.push("+");
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "+";
    display.innerHTML = operaciondisplay;
  }

  multiplicacion.onclick = () => {
    //cuando pulsen un tipo de operacion, el numero que se estaba formando
    //se incluye al array
    array_oper.push(numero);
    numero = "";
    //se incluye después del número en el array el operador
    //que se va a utilizar "x"
    array_oper.push("x");
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "x";
    display.innerHTML = operaciondisplay;
  }


  AC.onclick = () => {
    //si se pulsa este botón borra todo el array_oper
    array_oper = [];
    operaciondisplay = "";
    display.innerHTML = 0;
    numero = "";
  }


  resultado.onclick = () => {

    array_oper.push(numero);
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "=";
    display.innerHTML = operaciondisplay;


    var resultado_final = 0.0;
    //realizar operaciones


    var multposition = array_oper.indexOf("x");
    resulmult = null;
    //si no está "x" devuelve un -1, y tiene que haber un numero antes del operador
    //por ello la condicion será extrictamente mayor que 0
    while (multposition>0){
      resulmult = parseInt(array_oper[multposition-1]) * parseInt(array_oper[multposition+1]);
      array_oper[multposition] = resulmult;

      //elimino las posiciones del array de los numeros que se han utilizado
      //para realizar la multiplicación
      array_oper.splice(multposition-1, 1);
      array_oper.splice(multposition, 1);
      var multposition = array_oper.indexOf("x");
    }
    if (resulmult!=null){
      resultado_final = resulmult;
    }

    var sumaposition = array_oper.indexOf("+");
    var resultsuma = null;
    while (sumaposition>0){
      resultsuma = parseInt(array_oper[sumaposition-1]) + parseInt(array_oper[sumaposition+1]);
      array_oper[sumaposition] = resultsuma;
      //elimino las posiciones del array de los numeros que se han utilizado
      //para realizar la suma
      array_oper.splice(sumaposition-1, 1);
      array_oper.splice(sumaposition, 1);
      var sumaposition = array_oper.indexOf("+");
    }
    if (resultsuma!=null){
      resultado_final = resultsuma;
    }
    //var length = array_oper.length;
    //var i = 0;
    //while (i<length) {
      //console.log(array_oper[i]);
      //i += 1;
    display.innerHTML = resultado_final;
  }

}
