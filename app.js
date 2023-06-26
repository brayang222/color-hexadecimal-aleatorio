const boton = document.getElementById('botonColor')
const color = document.getElementById('color')

function genColAleatorio() {
  let digitos = '01231456789ABCDEF';
  let colorHex = '#';
  for(let i = 0; i < 6; i++){
    let indAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indAleatorio];
  }
  return colorHex;
  
}

boton.addEventListener('click', () => {
  let colorAleatorio = genColAleatorio();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
})