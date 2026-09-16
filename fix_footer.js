const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const dict = {
    "Contact Bilgilerimiz": "Contact Information",
    "PROJE HAKKINDA": "ABOUT PROJECT",
    "LOKASYON": "LOCATION",
    "LOKASYON": "LOCATION",
    "Contacte Geçin": "Contact Us", // just in case
};

for (const [tr, en] of Object.entries(dict)) {
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Fixed Contact Bilgilerimiz, PROJE HAKKINDA, LOKASYON");
