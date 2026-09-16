const fs = require('fs');

let html = fs.readFileSync('en.html', 'utf-8');

html = html.replace('Kat Planları Seçenekleri', 'Floor Plan Options');
html = html.replace('Daire Tipleri', 'Apartment Types');
html = html.replace('TİP ', 'TYPE ');
html = html.replace('Tip ', 'Type ');
html = html.replace('Kat Planları', 'Floor Plans');
html = html.replace('Kat Planı', 'Floor Plan');
html = html.replace('Normal Kat', 'Standard Floor');
html = html.replace('Zemin Kat', 'Ground Floor');

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Script block strings localized.");
