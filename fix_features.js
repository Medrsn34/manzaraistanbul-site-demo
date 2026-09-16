const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const replacements = {
    "MERKEZE YAKIN, DOĞAYA KOMŞU": "CLOSE TO THE CENTER, NEIGHBOR TO NATURE",
    "Belgrad Ormanı'nın yanı başında, Vadi İstanbul manzarasına hâkim seçkin bir lokasyon.": "An exclusive location right next to the Belgrad Forest, overlooking the Vadi Istanbul view.",
    "KONFOR VE KALİTE": "COMFORT AND QUALITY",
    "Yüksek tavan, geniş cam yüzeyler ve premium malzeme seçenekleriyle üst düzey bir yaşam.": "A high-level life with high ceilings, wide glass surfaces, and premium material options.",
    "GÜVENLİ VE ÖZEL": "SECURE AND PRIVATE",
    "Kapalı otopark, depo alanları ve kontrollü giriş-çıkış sistemi ile güvenli bir yaşam alanı.": "A secure living space with indoor parking, storage areas, and a controlled entry-exit system.",
    "INVESTMENTIN GELECEĞİ": "THE FUTURE OF INVESTMENT",
    "YATIRIMIN GELECEĞİ": "THE FUTURE OF INVESTMENT",
    "Değer kazanan lokasyonu ve güçlü proje yapısıyla uzun vadeli kazanç fırsatı.": "A long-term profit opportunity with its appreciating location and strong project structure."
};

for (const [tr, en] of Object.entries(replacements)) {
    // replace all occurrences
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Feature list texts replaced.");
