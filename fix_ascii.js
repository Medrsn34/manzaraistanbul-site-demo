const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const dict = {
    "DAHA FAZLASI": "LEARN MORE",
    "Zemin + 9 Kat": "Ground + 9 Floors",
    "Otopark": "Parking",
    "Mevcut": "Available",
    "1 Blok": "1 Block",
    "Zemin Kat": "Ground Floor"
};

for (const [tr, en] of Object.entries(dict)) {
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Fixed ASCII Turkish texts");
