const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const dict = {
    "Manzara Istanbul, sosyal yaşamı zenginleştiren donatıları ve geniş yeşil alanlarıyla size ve sevdiklerinize daha iyi bir yaşam sunar.": "Manzara Istanbul offers a better life to you and your loved ones with its amenities that enrich social life and its large green areas.",
    "SPOR SALONU": "FITNESS CENTER",
    "Children'slarınız için güvenli ve eğlenceli bir oyun alanı.": "A safe and fun playground for your children.",
    "Manzara İstanbul, sosyal yaşamı": "Manzara Istanbul, sosyal yaşamı" // Catch in case of "İstanbul" instead of "Istanbul"
};

for (const [tr, en] of Object.entries(dict)) {
    html = html.split(tr).join(en);
}

// Extra check just in case
html = html.replace(/Manzara İstanbul, sosyal yaşamı zenginleştiren donatıları ve geniş yeşil alanlarıyla size ve sevdiklerinize daha iyi bir yaşam sunar\./g, "Manzara Istanbul offers a better life to you and your loved ones with its amenities that enrich social life and its large green areas.");
html = html.replace(/Manzara Istanbul, sosyal yaşamı zenginleştiren donatıları ve geniş yeşil alanlarıyla size ve sevdiklerinize daha iyi bir yaşam sunar\./g, "Manzara Istanbul offers a better life to you and your loved ones with its amenities that enrich social life and its large green areas.");

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Fixed lifestyle texts");
