const fs = require('fs');
const path = require('path');

test('El archivo index.html contiene el texto "Hola Mundo"', () => {
    const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
    expect(html).toMatch(/Hola Mundo/);
});
