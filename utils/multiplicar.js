const fs = require('fs');
const colors = require('colors');

const listarTable = (base, limite = 10) => {
  console.log('========================='.green)
  console.log('=== Tabla del ${base} ==='.green)
  console.log('========================='.green)
  for (let i = 0; i < limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`.cyan)
  }
}

const multiplicar = (base, limite = 10) => {
  let data = '';

  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      return reject(`el valor introducido ${base} no es un numero`);
    }

    for (let i = 0; i < limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) return reject(err);
      return resolve('Archivo creado'.green);
    })
  })
}

module.exports = {
  multiplicar,
  listarTable
}