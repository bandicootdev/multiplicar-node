const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')


const opts = {
  base: {
    demand: true,
    alias: 'b',
    description: 'Base del numero para multiplicar'
  },
  limite: {
    alias: 'l',
    default: 10,
    description: 'limite del rango hasta donde se multiplicara'
  }
}

const argv = yargs(hideBin(process.argv))
  .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
  .command('crear', 'Genera un archivo de la tabla de multiplicar', opts)
  .help()
  .argv


module.exports = {
  argv
};