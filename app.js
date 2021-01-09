const {multiplicar, listarTable} = require('./utils/multiplicar');
const {argv} = require('./config/yargs');

const comando = argv._[0];

switch (comando) {
  case 'crear': {
    multiplicar(argv.base, argv.limite).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    break
  }
  case 'listar': {
    listarTable(argv.base, argv.limite)
    break;
  }
  default:
    console.log('Comando no reconocido')
}
