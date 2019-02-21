function main(){

  //objeto calculadora con todos los elementos(numeros, operador, igual y display)
  //atributos: operandos operador y eatado=init
  var gui ={
    display: document.getElementById('display'),
    boton1: document.getElementById('boton1'),
    boton2: document.getElementById('boton2'),
    boton3: document.getElementById('boton3'),
    boton4: document.getElementById('boton4'),
    boton5: document.getElementById('boton5'),
    boton6: document.getElementById('boton6'),
    boton7: document.getElementById('boton7'),
    boton8: document.getElementById('boton8'),
    boton9: document.getElementById('boton9'),
    suma: document.getElementById('suma'),
    multiplicacion: document.getElementById('multiplicacion'),
    AC: document.getElementById('AC'),
    DEL: document.getElementById('DEL'),
    resultado: document.getElementById('resultado'),
    //variable que se mostrará en el display de la calculadora
    operacionesdisplay:"",
    //variable que irá formando un número introducido por el usuario
    numero: "",
    //array donde se guardas numeros y operaciones en cada posicion según
    //el orden introducido por el usuario
    array_oper: []
  }

  console.log("CALCULADORA en javascript");


  gui.boton1.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "1";
    gui.numero = gui.numero +"1";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton2.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "2";
    gui.numero = gui.numero +"2";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton3.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "3";
    gui.numero = gui.numero +"3";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton4.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "4";
    gui.numero = gui.numero +"4";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton5.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "5";
    gui.numero = gui.numero +"5";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton6.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "6";
    gui.numero = gui.numero +"6";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton7.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "7";
    gui.numero = gui.numero +"7";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton8.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "8";
    gui.numero = gui.numero +"8";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.boton9.onclick = () => {
    gui.operaciondisplay = gui.operaciondisplay + "9";
    gui.numero = gui.numero +"9";
    gui.display.innerHTML = gui.operaciondisplay;
  }


  gui.suma.onclick = () => {
    //cuando pulsen un tipo de operacion, el numero que se estaba formando
    //se incluye al array
    gui.array_oper.push(gui.numero);
    gui.numero = "";
    //se incluye después del número en el array el operador
    //que se va a utilizar "+"
    gui.array_oper.push("+");
    gui.operaciondisplay = gui.operaciondisplay + "+";
    gui.display.innerHTML = gui.operaciondisplay;
  }

  gui.multiplicacion.onclick = () => {
    //cuando pulsen un tipo de operacion, el numero que se estaba formando
    //se incluye al array
    gui.array_oper.push(gui.numero);
    gui.numero = "";
    //se incluye después del número en el array el operador
    //que se va a utilizar "x"
    gui.array_oper.push("x");
    gui.operaciondisplay = gui.operaciondisplay + "x";
    gui.display.innerHTML = gui.operaciondisplay;
  }


  gui.AC.onclick = () => {
    //si se pulsa este botón borra todo el array_oper
    gui.array_oper = [];
    gui.operaciondisplay = "";
    gui.display.innerHTML = 0;
    gui.numero = "";
  }

  gui.DEL.onclick = () => {
    //si se pulsa este botón borra el último elemento que esté en el display
    if (gui.numero != ""){
      var length = gui.numero.length;
      gui.numero = gui.numero.slice(0, length-1);
      var length = gui.operaciondisplay.length;
      gui.operaciondisplay = gui.operaciondisplay.slice(0, length-1);

    }else{
      gui.array_oper.pop();
      var length = gui.operaciondisplay.length;
      gui.operaciondisplay = gui.operaciondisplay.slice(0, length-1);
    }
    //Si se borra todo el número el display se pone a 0
    if (gui.operaciondisplay != ""){
      gui.display.innerHTML = gui.operaciondisplay;
    }else{
      gui.display.innerHTML = 0;
    }
  }

  gui.resultado.onclick = () => {

    gui.array_oper.push(gui.numero);
    gui.operaciondisplay = gui.operaciondisplay + "=";
    gui.display.innerHTML = gui.operaciondisplay;


    var resultado_final = 0.0;
    //realizar operaciones


    var multposition = gui.array_oper.indexOf("x");
    resulmult = null;
    //si no está "x" devuelve un -1, y tiene que haber un numero antes del operador
    //por ello la condicion será extrictamente mayor que 0
    while (multposition>0){
      resulmult = parseInt(gui.array_oper[multposition-1]) * parseInt(gui.array_oper[multposition+1]);
      gui.array_oper[multposition] = resulmult;

      //elimino las posiciones del array de los numeros que se han utilizado
      //para realizar la multiplicación
      gui.array_oper.splice(multposition-1, 1);
      gui.array_oper.splice(multposition, 1);
      var multposition = gui.array_oper.indexOf("x");
    }
    if (resulmult!=null){
      resultado_final = resulmult;
    }

    var sumaposition = gui.array_oper.indexOf("+");
    var resultsuma = null;
    while (sumaposition>0){
      resultsuma = parseInt(gui.array_oper[sumaposition-1]) + parseInt(gui.array_oper[sumaposition+1]);
      gui.array_oper[sumaposition] = resultsuma;
      //elimino las posiciones del array de los numeros que se han utilizado
      //para realizar la suma
      gui.array_oper.splice(sumaposition-1, 1);
      gui.array_oper.splice(sumaposition, 1);
      var sumaposition = gui.array_oper.indexOf("+");
    }
    if (resultsuma!=null){
      resultado_final = resultsuma;
    }
    //var length = array_oper.length;
    //var i = 0;
    //while (i<length) {
      //console.log(array_oper[i]);
      //i += 1;
    gui.display.innerHTML = resultado_final;
  }

}
