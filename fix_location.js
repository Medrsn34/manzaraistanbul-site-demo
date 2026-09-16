const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const dict = {
    "Manzara Istanbul<br>Kağıthane’de.": "Manzara Istanbul<br>is in Kagithane.",
    "Manzara Istanbul, İstanbul’un Kağıthane ilçesinde, Hamidiye Mahallesi’nde yer alıyor. Şehrin kalbine bağlanan yollarıyla hayatın merkezinde.": "Manzara Istanbul is located in the Hamidiye Neighborhood of Kagithane district in Istanbul. In the center of life with roads connecting to the heart of the city.",
    "<strong class=\"text-gray-900 font-medium\">Kağıthane</strong> – Hamidiye Mahallesi'nde, şehrin merkezine yakın, doğayla iç içe seçkin bir yaşam sizi bekliyor.": "<strong class=\"text-gray-900 font-medium\">Kagithane</strong> – An exclusive life intertwined with nature awaits you in the Hamidiye Neighborhood, close to the city center.",
    "İstanbul'un hızla değer kazanan Kağıthane bölgesinde, yaşam kalitesi yüksek, güçlü altyapısı ve ayrıcalıklı lokasyonuyla Manzara Istanbul, uzun vadeli ve güvenli bir yatırım fırsatı sunuyor.": "In the rapidly appreciating Kagithane region of Istanbul, with its high quality of life, strong infrastructure, and privileged location, Manzara Istanbul offers a long-term and secure investment opportunity.",
    " 5 dk": " 5 min",
    " 10 dk": " 10 min",
    " 20 dk": " 20 min",
    "İstanbul Havalimanı": "Istanbul Airport",
    "Metro hattı": "Metro Line",
    "İki Boğaz Köprüsü": "Two Bosphorus Bridges",
    "YÜRÜME MESAFESİNDE": "WALKING DISTANCE"
};

for (const [tr, en] of Object.entries(dict)) {
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Location and extra texts translated.");
