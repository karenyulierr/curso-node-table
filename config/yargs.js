const { describe } = require('yargs');

const argvg = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la tabla de la bsse de multiplicar'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default:false,
        describe:'muestra la tabla de multiplicar en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default:10,
        describe:'nos dice hasta que numero va'
    })
    .check((argvg, options) => {
       if(isNaN(argvg.b)){ 
           throw 'la base tiene que ser un número'
       }
       return true;
    }).argv;


    module.exports=argvg;