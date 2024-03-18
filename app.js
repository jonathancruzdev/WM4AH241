let name = 'Jonathan';

// Esto no funciona porque es parte del entorno del navegador
alert(`Hola ${name}`);
localStorage.setItem('nombre', name)
document.write('hola');