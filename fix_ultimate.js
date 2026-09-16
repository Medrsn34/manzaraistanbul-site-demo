const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const dict = {
    "Contacte Geçin": "Contact Us",
    "Merkeze Yakın, Doğaya Komşu": "Close to Center, Neighbor to Nature",
    "Belgrad Ormanı'nın yanı başında, Vadi Istanbul manzarasına hâkim seçkin bir lokasyon.": "An exclusive location right next to the Belgrad Forest, overlooking the Vadi Istanbul view.",
    "Güvenli ve Özel": "Secure and Private",
    "Investmentın Geleceği": "The Future of Investment",
    "Şişli": "Sisli",
    "Yürüme Mesafesinde": "Walking Distance",
    "Lifestyleınıza uygun planı keşfedin.": "Discover the plan that fits your lifestyle.",
    "Planı Büyüt": "Enlarge Plan",
    "Size uygun yaşam alanını keşfedin.": "Discover the living space that suits you.",
    "Tavan Yüksekliği": "Ceiling Height",
    "Yerden Isıtma": "Underfloor Heating",
    "Isıtma Sistemi": "Heating System",
    "Depo Alanı": "Storage Area",
    "Her Daireye Özel": "Private for Each Flat",
    "Her Daireye 1 Araç": "1 Vehicle per Flat",
    "YAŞAM": "LIFESTYLE",
    "Lifestyle alanlarını": "Discover",
    "keşfedin.": "lifestyle areas.",
    "Kapalı": "Indoor",
    "Yüzme Havuzu": "Swimming Pool",
    "Dört mevsim keyifle kullanabileceğiniz kapalı yüzme havuzu.": "An indoor swimming pool you can enjoy in all four seasons.",
    "Günün yorgunluğunu atacağınız rahatlatıcı sauna keyfi.": "A relaxing sauna experience to relieve the tiredness of the day.",
    "Modern ekipmanlarıyla formda kalmanız için tasarlandı.": "Designed for you to stay in shape with modern equipment.",
    "Çocuk": "Children's",
    "Oyun Alanı": "Playground",
    "Çocuklarınız için güvenli ve eğlenceli bir oyun alanı.": "A safe and fun playground for your children.",
    "konfor dolu bir yaşam.": "a life full of comfort.",
    "Seçkin Daire": "Exclusive Flats",
    "Kapalı &amp; Açık": "Indoor &amp; Outdoor",
    "Kapalı & Açık": "Indoor & Outdoor",
    "Depo Alanları": "Storage Areas",
    "DEĞERİ BUGÜNDEN YAKALAYIN": "CAPTURE THE VALUE TODAY",
    "geleceğinize": "invest",
    "yatırım yapın.": "in your future.",
    "Yüksek Kira Getirisi": "High Rental Income",
    "Değer Kazanan": "Appreciating",
    "Bölge": "Region",
    "Güçlü Transportation Ağına": "Close to Strong",
    "Yakınlık": "Transportation Network",
    "Lifestyle ve Investmentın": "The Meeting Point of",
    "Buluşma Noktası": "Lifestyle and Investment"
};

for (const [tr, en] of Object.entries(dict)) {
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Ultimate translation complete!");
