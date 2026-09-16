const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

html = html.replace('Spor Salonu', 'Fitness Center');
html = html.replace('alt="Spor Salonu"', 'alt="Fitness Center"');

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Fixed Spor Salonu");
