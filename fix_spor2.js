const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

html = html.replace(/Spor Salonu/g, 'Fitness Center');
html = html.replace(/SPOR SALONU/g, 'FITNESS CENTER');

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Fixed Spor Salonu properly");
