function processFiles() {
    const filesInput = document.getElementById('txtFiles');
    const files = filesInput.files;
    const table = [];
  
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];
  
      reader.onload = function(event) {
        const fileContent = event.target.result;
        const rows = fileContent.trim().split('\n');
  
        for (let j = 0; j < rows.length; j++) {
          const columns = rows[j].trim().split('|');
          const row = {};
  
          for (let k = 0; k < columns.length; k++) {
            const keyValue = columns[k].trim().split(' ');
            const key = keyValue[0].trim();
            const value = keyValue[1].trim();
            row[key] = value;
          }
  
          table.push(row);
        }
  
        if (i === files.length - 1) {
          convertToCSV(table);
        }
      };
  
      reader.readAsText(file);
    }
  }
  
  function convertToCSV(table) {
    let csvContent = '';
  
    if (table.length === 0) {
      console.log('No hay datos para convertir a CSV.');
      return;
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
  
    downloadCSV(csvContent);
  }
  
  function downloadCSV(csvContent) {
    const filename = 'table.csv';
    const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
    if (navigator.msSaveBlob) {
      // Para navegadores de Microsoft
      navigator.msSaveBlob(csvBlob, filename);
    } else {
      // Para otros navegadores
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(csvBlob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  