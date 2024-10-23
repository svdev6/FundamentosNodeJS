function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Adiós, ' + nombre);
            //resolve();
            reject('Hay un error');
        }, 1000);
    });
}

//--

console.log('Iniciando proceso...');
hola('Klizman')
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('Terminando el proceso...');
    })
    .catch(error=>{
        console.error('Ha habido un error:');
        console.error(error);
    })