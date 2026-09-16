const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const dict = {
    "*Residence Area net kullanım alanını, Gross Sales Area ise satışa esas brüt alanı ifade etmektedir.": "*Residence Area refers to the net usage area, while Gross Sales Area refers to the gross area subject to sale.",
    "alt=\"Yaşam Alanları\"": "alt=\"Lifestyle Areas\"",
    "alt=\"Yaşam Alanı 1\"": "alt=\"Lifestyle Area 1\"",
    "alt=\"Yaşam Alanı 2\"": "alt=\"Lifestyle Area 2\"",
    "Geniş yeşil alanlar, dinlenme noktaları ve sosyal donatılarla dolu bir yaşam sizi bekliyor.": "A life full of large green areas, resting points and social amenities awaits you.",
    "Manzara Istanbul, konforun ve doğanın bir arada olduğu ayrıcalıklı bir yaşam sunar.": "Manzara Istanbul offers a privileged life where comfort and nature come together.",
    "Indoor &amp; Açık": "Indoor &amp; Outdoor"
};

for (const [tr, en] of Object.entries(dict)) {
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Remaining visible texts handled");
