const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

html = html.replace('Konfor ve Kalite', 'Comfort and Quality');
html = html.replace('KONFOR VE KALİTE', 'COMFORT AND QUALITY');

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Fixed Konfor ve Kalite");
