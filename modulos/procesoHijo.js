const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, stderr) => {
//     if (err) {
//         console.error('Error en el proceso hijo');
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function () {
    console.log('El proceso terminó');
    console.log(proceso.killed);
});