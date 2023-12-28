  // Obtener la posición actual del usuario
 const obtenerPosicionUsuario = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    localStorage.setItem('posicionUsuario', scrollY);
};

// Restaurar la posición del usuario
const restaurarPosicionUsuario = () => {
    const posicionGuardada = localStorage.getItem('posicionUsuario');
    if (posicionGuardada) {
        window.scrollTo(0, parseInt(posicionGuardada));
    }
};

// Manejar el evento beforeunload para guardar la posición antes de salir
window.addEventListener('beforeunload', obtenerPosicionUsuario);

// Restaurar la posición cuando la página se carga
window.addEventListener('load', restaurarPosicionUsuario);

// //xd

// Mostrar un mensaje emergente
//   alert('¡Bienvenido de nuevo! Continúa desde donde lo dejaste.'); 
//_:_:-.,.;_;.,_.-._: PONER EL MENSAJE ARRIBA PARA QUE SALGA AL INCIO Y FUNCIONE TODO EL CODIGO -,:_.-.:_;




