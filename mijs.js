function main(){
  console.log("que comiencen los juegos del js");

  var boton = document.getElementById('boton')
  boton.onclick = () => {
    console.log("click");
    var display = document.getElementById('display');
    display.innerHTML = "NUEVO TEXTO";
  }
}
