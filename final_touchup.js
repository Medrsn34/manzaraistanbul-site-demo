const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('en.html', 'utf-8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Fix Language Switcher Button Display Text
$('button').each(function() {
    const text = $(this).text().trim();
    if (text === 'TR' && $(this).find('svg').length > 0) {
        // This is the language dropdown button!
        $(this).find('span').text('EN');
    }
});

// 2. Fix missed Turkish texts
const dictionary = {
    "Dış Mekan": "Exterior",
    "İç Mekan": "Interior",
    "Tümü": "All",
    "Kat Planları Seçenekleri": "Floor Plan Options",
    "Kat Planları": "Floor Plans",
    "Daire Tipleri": "Apartment Types",
    "Keşfet": "DISCOVER",
    "Detaylı Bilgi Alın": "GET DETAILS",
    "Size Ulaşalım": "CONTACT YOU"
};

$('*').contents().filter(function() {
    return this.nodeType === 3;
}).each(function() {
    let text = $(this).text();
    let originalText = text;
    for (let tr in dictionary) {
        if (text.includes(tr) || text.toUpperCase().includes(tr.toUpperCase())) {
            // Case insensitive replacement for these specific ones
            text = text.replace(new RegExp(tr, 'gi'), dictionary[tr]);
        }
    }
    if (text !== originalText) {
        $(this).replaceWith(text);
    }
});

fs.writeFileSync('en.html', $.html(), 'utf-8');
console.log("Final touchups applied.");
