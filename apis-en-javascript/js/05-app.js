document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState)
    if(document.visibilityState === 'visible') {
        console.log('ejecutar la funcion para resproducir el video')
    } else {
        console.log('Pausar el video')
    }
})