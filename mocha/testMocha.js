const assert = require('assert');

describe('Prueba de Código Síncrono', function () {
  it('debería convertir los archivos a CSV', function () {
    // Preparar datos de entrada
    const table = [
      { Name: 'John', Age: '25', City: 'New York' },
      { Name: 'Jane', Age: '30', City: 'Los Angeles' },
    ];

    // Ejecutar la función
    const csvContent = convertToCSV(table);

    // Verificar el resultado
    const expectedCSV = 'Name,Age,City\nJohn,25,New York\nJane,30,Los Angeles\n';
    assert.strictEqual(csvContent, expectedCSV);
  });
});

describe('Prueba de Código Asíncrono', function () {
  it('debería convertir los archivos a CSV', function (done) {
    // Preparar datos de entrada
    const table = [
      { Name: 'John', Age: '25', City: 'New York' },
      { Name: 'Jane', Age: '30', City: 'Los Angeles' },
    ];

    // Ejecutar la función
    convertToCSVAsync(table, function (csvContent) {
      // Verificar el resultado
      const expectedCSV = 'Name,Age,City\nJohn,25,New York\nJane,30,Los Angeles\n';
      assert.strictEqual(csvContent, expectedCSV);

      // Indicar que la prueba asíncrona ha finalizado
      done();
    });
  });
});

function convertToCSV(table) {
  let csvContent = '';

  if (table.length === 0) {
    console.log('No hay datos para convertir a CSV.');
    return csvContent;
  }

  const headers = Object.keys(table[0]);
  csvContent += headers.join(',') + '\n';

  for (let i = 0; i < table.length; i++) {
    const values = [];

    for (let j = 0; j < headers.length; j++) {
      values.push(table[i][headers[j]] || ''); // Si no hay valor para una columna, se añade una cadena vacía
    }

    csvContent += values.join(',') + '\n';
  }

  return csvContent;
}

function convertToCSVAsync(table, callback) {
  setTimeout(function () {
    const csvContent = convertToCSV(table);
    callback(csvContent);
  }, 1000);
}
