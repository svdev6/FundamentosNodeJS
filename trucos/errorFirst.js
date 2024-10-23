function asincrona(callback){
    setTimeout(function(){
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

asincrona(function(err, dato){
    if(err){
        console.error('Tenemos un error');
        console.error(err);
        return false;
        //throw err; // NO VA A FUNCIONAR PORQUE ESTAMOS DENTRO DE UNA FUNCION ASINCRONA
        
    }

    console.log('Todo ha ido bien, mi dato es', dato);
});