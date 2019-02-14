function main(){
  console.log("que comiencen los juegos del js");

  var boton1 = document.getElementById('boton1');
  var boton2 = document.getElementById('boton2');
  var boton3 = document.getElementById('boton3');
  var suma = document.getElementById('suma');


  var operaciondisplay = "";
  var numero = "";
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
    array_oper.push(numero);
    numero = "";
    array_oper.push("+");
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "+";
    display.innerHTML = operaciondisplay;
  }

  resultado.onclick = () => {
    var display = document.getElementById('display');
    operaciondisplay = operaciondisplay + "=";
    display.innerHTML = operaciondisplay;
    console.log(operaciondisplay);
  }

}
