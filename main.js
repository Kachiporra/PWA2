alert('hola')
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js') 
        .then(function (registration) {
        console.log('Service Worker registrado con éxito.', registration);
        })
        .catch(function (error) {
            console.error('Error al registrar el Service Worker:', error);
        })
} else {
    console.error('Error no soporta el Service Worker: ');
}