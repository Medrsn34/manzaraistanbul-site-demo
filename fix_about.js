const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const replacements = {
    "Manzara İstanbul Hakkında": "About Manzara Istanbul",
    "Vadi'ye karşı,": "Facing the Valley,",
    "size en yakın yaşam.": "the closest life to you.",
    "Kağıthane – Hamidiye Mahallesi'nde, şehrin merkezine yakın, doğayla iç içe seçkin bir yaşam sizi bekliyor.": "An exclusive life intertwined with nature awaits you in Kagithane - Hamidiye Neighborhood, close to the city center.",
    "Tek blokta, modern mimarisi ve yüksek yaşam standartlarıyla Manzara İstanbul; konforu, güveni ve değerli bir geleceği bir araya getiriyor.": "In a single block, with its modern architecture and high living standards, Manzara Istanbul brings together comfort, trust, and a valuable future.",
    "Modern Mimari": "Modern Architecture"
};

for (const [tr, en] of Object.entries(replacements)) {
    // replace all occurrences
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Missing texts replaced via string manipulation.");
