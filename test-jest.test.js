// Importar las funciones que se van a probar
const { processFiles } = require('./script');

// Mock del elemento 'txtFiles'
document.getElementById = jest.fn(() => ({
  files: new Array(10) // Simula 10 archivos subidos
}));

describe('Proceso de archivos', () => {
  it('debe tener 10 archivos subidos', () => {
    processFiles(); // Ejecutar la función que procesa los archivos
    
    // Verificar que se hayan subido 10 archivos
    expect(document.getElementById).toHaveBeenCalledTimes(1); // Verificar que se llamó a getElementById
    expect(document.getElementById).toHaveBeenCalledWith('txtFiles'); // Verificar que se llamó con el ID correcto
    expect(document.getElementById('txtFiles').files.length).toBe(10); // Verificar que hay 10 archivos subidos
  });
});
