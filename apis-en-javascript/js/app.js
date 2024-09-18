const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
        } )
})

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            body: 'Codigo con Juan'
        });

        notificacion.onClick = function() {
            window.open('https://portafolio-johnny-mauricio.netlify.app/')
        }
    } 
      
    
});



