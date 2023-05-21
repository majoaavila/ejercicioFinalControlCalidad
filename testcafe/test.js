const { Selector } = require('testcafe');

fixture`Prueba de carga de archivos`.page`C:\Users\majoj\OneDrive\Escritorio\controlCalidad\ejercicioFinalControlCalidad\index.html`;

test('Cargar archivos y verificar tabla', async t => {
  await t
    .setFilesToUpload('#txtFiles', ['archivo1.txt', 'archivo2.txt'])
    .click('#processButton');

  const table = await Selector('#csvTable');
  await t.expect(table.exists).ok();
});
