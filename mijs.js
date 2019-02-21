function main(){

  var gui ={
    //BOTONES QUE HAY EN LA CALCULADORA

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
    resultado: document.getElementById('resultado'),
    AC: document.getElementById('AC'),
    DEL: document.getElementById('DEL')
    }

  var calculadora = {
    //OPERACIONES QUE REALIZA LA calculadora

    //variable que se mostrará en el display de la calculadora
    operaciondisplay: "",
    //variable que irá formando un número introducido por el usuario
    numero: "",
    //array donde se guardan numeros y operaciones
    array_oper: [],

    //función que borra un numero
    ACfunction: function(){
      this.array_oper = [];
      this.operaciondisplay = "";
      gui.display.innerHTML = 0;
      this.numero = "";
    },

    //función que borra todo el display
    DELfunction:function(){
      if (this.numero != ""){
        var length = this.numero.length;
        this.numero = this.numero.slice(0, length-1);
        var length = this.operaciondisplay.length;
        this.operaciondisplay = this.operaciondisplay.slice(0, length-1);

      }else{
        this.array_oper.pop();
        var length = this.operaciondisplay.length;
        this.operaciondisplay = this.operaciondisplay.slice(0, length-1);
      }
      //Si se borra todo el número el display se pone a 0
      if (this.operaciondisplay != ""){
        gui.display.innerHTML = this.operaciondisplay;
      }else{
        gui.display.innerHTML = 0;
      }
    },

    //función que añade un numero cuando pulsas un boton de la calculadora
    addnumber: function(valor){
      this.operaciondisplay = this.operaciondisplay + valor;
      this.numero = this.numero + valor;
      gui.display.innerHTML = this.operaciondisplay;
    },

    //función que añade un operador cuando pulsas un boton de la calculadora
    addoper: function(valor){
      //cuando pulsen un tipo de operacion, el numero que se estaba formando
      //se incluye al array
      this.array_oper.push(this.numero);
      this.numero = "";
      this.array_oper.push(valor);
      this.operaciondisplay = this.operaciondisplay + valor;
      gui.display.innerHTML = this.operaciondisplay;
    },

    //funcion que te da el resultado final
    resultadofinal: function(){

      var resultado_final = 0.0;

      var multposition = this.array_oper.indexOf("x");
      resulmult = null;
      //si no está "x" devuelve un -1, y tiene que haber un numero antes del operador
      //por ello la condicion será extrictamente mayor que 0
      while (multposition>0){
        resulmult = parseInt(this.array_oper[multposition-1]) * parseInt(this.array_oper[multposition+1]);
        this.array_oper[multposition] = resulmult;

        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la multiplicación
        this.array_oper.splice(multposition-1, 1);
        this.array_oper.splice(multposition, 1);
        var multposition = this.array_oper.indexOf("x");
      }
      if (resulmult!=null){
        resultado_final = resulmult;
      }

      var sumaposition = this.array_oper.indexOf("+");
      var resultsuma = null;
      while (sumaposition>0){
        resultsuma = parseInt(this.array_oper[sumaposition-1]) + parseInt(this.array_oper[sumaposition+1]);
        this.array_oper[sumaposition] = resultsuma;
        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la suma
        this.array_oper.splice(sumaposition-1, 1);
        this.array_oper.splice(sumaposition, 1);
        var sumaposition = this.array_oper.indexOf("+");
      }
      if (resultsuma!=null){
        resultado_final = resultsuma;
      }
      gui.display.innerHTML = resultado_final;
    }
  }


  console.log("CALCULADORA en javascript");

  gui.boton1.onclick = () => {
    calculadora.addnumber(1);
  }

  gui.boton2.onclick = () => {
    calculadora.addnumber(2);
  }

  gui.boton3.onclick = () => {
    calculadora.addnumber(3);
  }

  gui.boton4.onclick = () => {
    calculadora.addnumber(4);
  }

  gui.boton5.onclick = () => {
    calculadora.addnumber(5);
  }

  gui.boton6.onclick = () => {
    calculadora.addnumber(6);
  }

  gui.boton7.onclick = () => {
    calculadora.addnumber(7);
  }

  gui.boton8.onclick = () => {
    calculadora.addnumber(8);
  }

  gui.boton9.onclick = () => {
    calculadora.addnumber(9);
  }

  gui.suma.onclick = () => {
    calculadora.addoper("+");
  }

  gui.multiplicacion.onclick = () => {
    calculadora.addoper("x");
  }

  gui.AC.onclick = () => {
    calculadora.ACfunction();
  }

  gui.DEL.onclick = () => {
    calculadora.DELfunction();
  }

  gui.resultado.onclick = () => {

    calculadora.addoper("=");
    calculadora.resultadofinal();
  }

}
