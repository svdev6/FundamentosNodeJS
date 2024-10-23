async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Adiós, ' + nombre);
            //resolve();
            resolve('Hay un error');
        }, 1000);
    });
}

//--

async function main(){
    let nombre= await hola('Klizman');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminando proceso...');
}

console.log('Iniciando proceso...');
main();
console.log('Va a ser la segunda instrucción en ejecutarse...');