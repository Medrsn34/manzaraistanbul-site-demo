const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
let enHtml = fs.readFileSync('en.html', 'utf8');

// Extract the last script block from index.html
const scriptsIndex = indexHtml.match(/<script[^>]*>[\s\S]*?<\/script>/g);
let lastScriptIndex = scriptsIndex[scriptsIndex.length - 1];

// Translate the strings inside the JS block
lastScriptIndex = lastScriptIndex.replace(/Kat Planları Seçenekleri/g, 'Floor Plan Options');
lastScriptIndex = lastScriptIndex.replace(/Daire Tipleri/g, 'Apartment Types');
lastScriptIndex = lastScriptIndex.replace(/'TİP '/g, "'TYPE '");
lastScriptIndex = lastScriptIndex.replace(/'Tip '/g, "'Type '");
lastScriptIndex = lastScriptIndex.replace(/Kat Planları/g, 'Floor Plans');
lastScriptIndex = lastScriptIndex.replace(/Kat Planı/g, 'Floor Plan');

// Replace the broken script block in en.html
const scriptsEn = enHtml.match(/<script[^>]*>[\s\S]*?<\/script>/g);
const lastScriptEn = scriptsEn[scriptsEn.length - 1];

enHtml = enHtml.replace(lastScriptEn, lastScriptIndex);

fs.writeFileSync('en.html', enHtml, 'utf8');
console.log('Fixed JS block in en.html!');
