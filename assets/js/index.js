// edad =Number(prompt('Ingrese su edad'))

// if (edad < "18") {
//     alert('No puedes ingresar')
// }




// temp = prompt('Ingrese la tempetura actual')

// if (temp > 30){
//     console.log('UFf que calor ')
// }


// password = '123'

// if (password === 123) {
//     alert('password correcto')
// }else {
//     alert('password incorrecto')
// }


pantalla = prompt("Ingrese el tamaño de la pantalla")

if( pantalla < 576){
 alert('Pantalla tamaño xs')
}else if (pantalla < 768){
    alert('Pantalla tamaño sm')
}else if( pantalla <= 962) {
    alert('Pantalla tamaño md')
}else {
    alert('Pantalla tamaño xl')
}