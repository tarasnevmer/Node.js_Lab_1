const fs = require('fs');

const newLine = 'Hello, World\n'
fs.appendFile('playground/task02.txt', newLine, (err) => {
    if (err) throw err;
    console.log('Рядок додано до файлу!');
  });

