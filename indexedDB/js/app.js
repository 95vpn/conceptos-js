//local storage max 5 MB
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setInterval(() => {
        crearCliente();
    }, 5000);
})

function crmDB() {
    //Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1)

    //Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la BD')
    }


    //si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos Creada')

        DB =crmDB.result
    }


    //configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        //definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });


        console.log('columna creadas')
    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite')

    transaction.oncomplete = function(){
        console.log('Transaction Completada')
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaction')
    }
    
    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 542154,
        nombre: 'gfdf',
        email: 'dfgd@email.com'
    }
    const peticion = objectStore.add(nuevoCliente)

    console.log(peticion)
}