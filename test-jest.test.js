const { processFiles } = require('./script');

// Mock del elemento 'txtFiles'
document.getElementById = jest.fn(() => ({
  files: new Array(10) // Simula 10 archivos subidos
}));

describe('Pruebas de carga de archivos', () => {
  it('debe tener más de 10 respuestas', () => {
    processFiles(); // Ejecutar la función que procesa los archivos
    
    // Verificar que haya más de 10 respuestas
    expect(document.getElementById).toHaveBeenCalledTimes(1); // Verificar que se llamó a getElementById
    expect(document.getElementById).toHaveBeenCalledWith('txtFiles'); // Verificar que se llamó con el ID correcto
    expect(document.getElementById('txtFiles').files.length).toBeGreaterThan(10); // Verificar que hay más de 10 archivos subidos
  });
});