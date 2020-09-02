const keys = Array.from(document.querySelectorAll(".key"))
/* keys.forEach(key => key.addEventListener('transitionend', transitionEnd)) */

function transitionEnded(e){
  e.target.classList.remove("keyPressed")
}
function play(k){
  var key = document.querySelector(`div[data-key = ${k}]`)
  var audio = document.querySelector(`audio[data-key=${k}]`)

  key.classList.add("keyPressed")
  audio.currentTime = 0
  audio.play()
}

keys.forEach(key => key.addEventListener('transitionend', transitionEnded))
window.addEventListener('keypress', function(e){
  play(e.key)
  /* Cuando aprieto un boton, tengo que hacer la transicion, que es cambiar la clase de la key para mostrar el borde sombreado
    , correr el audio y volver el boton a su estado inicial */
})