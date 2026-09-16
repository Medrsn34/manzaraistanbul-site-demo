const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

html = html.replace('<span class="block md:inline">İstanbul</span>', '<span class="block md:inline">Istanbul</span>');
html = html.replace('Vadi İstanbul', 'Vadi Istanbul');

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Istanbul texts fixed.");
