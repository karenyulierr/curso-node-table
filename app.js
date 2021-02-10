const { crearArchivo } = require('./helpers/multiplicar');
const  argvg  = require('./config/yargs');

console.clear();
//console.log(process.argv);
console.log(argvg);
//console.log("base:yargs", argvg.b);
/*
const [,,arg3='base=5']=process.argv;
const [,base]=arg3.split('=');
console.log(base);

//const base = 6;
*/
crearArchivo(argvg.b,argvg.l,argvg.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err=>console.log(err));