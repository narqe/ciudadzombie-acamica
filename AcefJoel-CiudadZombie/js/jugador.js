/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 5,
  vidas: 10,
  mover: function(teclaPresionada, x, y){
    switch (teclaPresionada) {
      case 'izq': 
        this.x = this.x + x;
        this.y = this.y;
        this.alto = 15;
        this.ancho = 30;
        this.sprite = 'imagenes/auto_rojo_izquierda.png';
        break;
      case 'arriba':
        this.y = this.y + y;
        this.x = this.x;
        this.alto = 30;
        this.ancho = 15;
        this.sprite = 'imagenes/auto_rojo_arriba.png';
        break;
      case 'der':
        this.x = this.x - x;
        this.y = this.y;
        this.alto = 15;
        this.ancho = 30;
        this.sprite = 'imagenes/auto_rojo_derecha.png';
        break;
      case 'abajo':
        this.y = this.y - y;
        this.x = this.x;
        this.alto = 30;
        this.ancho = 15;
        this.sprite = 'imagenes/auto_rojo_abajo.png';
        break;
      default:
        break;
    }
  },
  perderVidas: function(cantVidas){
    this.vidas = this.vidas - cantVidas;
    return this.vidas;
  },
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
