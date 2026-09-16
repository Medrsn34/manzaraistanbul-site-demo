const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const dict = {
    "Investment için doğru zaman,<br><span class=\"italic text-gold font-light\">right address.</span>": "The right time for investment,<br><span class=\"italic text-gold font-light\">the right address.</span>",
    "Kağıthane'nin merkezi konumu, modern yaşam alanları ve marka değerine sahip yapısıyla Manzara İstanbul, bugün ve yarın için güçlü bir yatırım alternatifi sunar.": "With its central location in Kagithane, modern living spaces, and strong brand value, Manzara Istanbul offers a powerful investment alternative for today and tomorrow.",
    "Yüksek Kira Getirisi Potansiyeli": "High Rental Income Potential",
    "Modern konut konseptiyle düzenli kira geliri için ideal.": "Ideal for regular rental income with its modern housing concept.",
    "Şehrin Değer Kazanan Bölgesi": "The City's Appreciating Region",
    "Kağıthane, her geçen gün değerini artıran bir yatırım bölgesi.": "Kagithane is an investment region that increases its value day by day.",
    "Güçlü Transportation Ağına Yakınlık": "Close to Strong Transportation Network",
    "Merkezi lokasyonu sayesinde her noktaya hızlı erişim.": "Fast access to everywhere thanks to its central location.",
    "Lifestyle ve Investmentın Buluşma Noktası": "The Meeting Point of Lifestyle and Investment",
    "Konforlu bir yaşam sunarken yatırımınız için güçlü bir gelecek.": "A strong future for your investment while offering a comfortable life.",
    "YATIRIMINIZ DEĞER KAZANSIN": "LET YOUR INVESTMENT GAIN VALUE",
    "Güvenli ve uzun vadeli yatırım": "Secure and long-term investment",
    "Modern, nitelikli projede mülkiyet": "Property in a modern, qualified project",
    "Güçlü yaşam talebi": "Strong lifestyle demand",
    "İstanbul'un yükselen değeri:<br>Kağıthane": "Istanbul's rising value:<br>Kagithane",
    "Aralık 2027": "December 2027",
    "Ödeme Planı": "Payment Plan",
    "%50 Peşinat": "50% Down Payment",
    "+ 24 Ay Taksit İmkânı": "+ 24 Months Installment Option",
    "Tapu Masrafı": "Title Deed Fee",
    "YATIRIM FIRSATLARINI GÖR": "SEE INVESTMENT OPPORTUNITIES",
    "Detaylı bilgi için formu doldurun, uzman ekibimiz sizinle iletişime geçsin.": "Fill out the form for detailed information, our expert team will contact you.",
    "PROJEYİ KEŞFEDİN": "DISCOVER THE PROJECT",
    "Modern mimari, ferah iç mekanlar ve nefes kesen Kağıthane manzarasıyla tanışın.": "Meet modern architecture, spacious interiors and breathtaking Kagithane views.",
    "alt=\"Dış Mekan\"": "alt=\"Exterior\"",
    "alt=\"İç Mekan\"": "alt=\"Interior\"",
    "Geçerli bir telefon numarası giriniz: 0 (5XX) XXX XX XX": "Please enter a valid phone number: 0 (5XX) XXX XX XX",
    "aydınlatma metnini okudum, anladım ve kabul ediyorum.": "I have read, understood and accept the clarification text.",
    "Hayatın ve şehrin merkezinde yeni bir başlangıç.": "A new beginning in the center of life and the city.",
    "DAİRE PLANLARI": "FLOOR PLANS",
    "alt=\"Galeri Görseli\"": "alt=\"Gallery Image\"",
    "alt=\"Büyük Plan\"": "alt=\"Large Plan\"",
    "Manzara İstanbul Gallery": "Manzara Istanbul Gallery",
    "Manzara İstanbul": "Manzara Istanbul",
    "Kağıthane/İstanbul": "Kagithane/Istanbul"
};

for (const [tr, en] of Object.entries(dict)) {
    html = html.split(tr).join(en);
}

fs.writeFileSync('en.html', html, 'utf-8');
console.log("Remaining Turkish texts translated.");
