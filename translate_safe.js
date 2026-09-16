const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('en.html', 'utf-8');
const $ = cheerio.load(html, { decodeEntities: false });

const dictionary = {
    "Proje Hakkında": "About Project",
    "Lokasyon": "Location",
    "Daire Planları": "Floor Plans",
    "Yaşam": "Lifestyle",
    "Yatırım": "Investment",
    "Galeri": "Gallery",
    "İletişim": "Contact",
    "Broşür": "Brochure",
    "PDF İndir": "Download PDF",
    "Bizi Arayın": "Call Us",
    "İletişime Geçin": "Get in Touch",
    "Dil Seçin": "Select Language",
    "Takip Edin": "Follow Us",
    "Arsa Alanı": "Plot Area",
    "Tek Blok": "Single Block",
    "Zemin + 9 Kat": "Ground + 9 Floors",
    "Toplam Daire": "Total Flats",
    "Net Tavan Yüksekliği": "Net Ceiling Height",
    "Yeşil Alan": "Green Area",
    "NEDEN MANZARA İSTANBUL?": "WHY MANZARA ISTANBUL?",
    "MERKEZE YAKIN, DOĞAYA KOMŞU": "CLOSE TO THE CENTER, NEIGHBOR TO NATURE",
    "Bölgenin bitki örtüsüyle iç içe, yemyeşil bir manzara eşliğinde yeni bir yaşam.": "A new life accompanied by a lush green landscape, intertwined with the region's flora.",
    "KONFOR VE KALİTE": "COMFORT AND QUALITY",
    "Yüksek tavanlı, geniş ve ferah dairelerle standartların ötesinde bir yaşam.": "A life beyond standards with high-ceiling, spacious, and airy apartments.",
    "GÜVENLİ YATIRIM": "SECURE INVESTMENT",
    "Gelişen Kağıthane'nin en merkezi noktasında, her geçen gün değer kazanan bir proje.": "A project that gains value every day, in the most central point of developing Kagithane.",
    "ŞEHRİN KALBİNDE": "IN THE HEART OF THE CITY",
    "Her Yere Yakın": "Close to Everywhere",
    "Manzara İstanbul, önemli ulaşım ağlarının ve sosyal yaşam merkezlerinin tam ortasında yer alıyor.": "Manzara Istanbul is located right in the middle of important transportation networks and social life centers.",
    "Eğitim & Sağlık": "Education & Health",
    "Derindere Hastanesi": "Derindere Hospital",
    "Atlas Üniversitesi": "Atlas University",
    "Ulaşım": "Transportation",
    "Vadi İstanbul": "Vadi Istanbul",
    "HAYALİNİZDEKİ EV": "YOUR DREAM HOME",
    "Ferah ve Kullanışlı": "Spacious and Practical",
    "Farklı ihtiyaçlara uygun olarak özenle tasarlanmış daire seçenekleri.": "Carefully designed apartment options suited for different needs.",
    "Açık mutfaklı, kompakt ve kullanışlı tasarım.": "Compact and practical design with an open kitchen.",
    "Planı İncele": "View Plan",
    "Geniş balkonlu, ferah yaşam alanları.": "Spacious living areas with large balconies.",
    "Geniş aileler için ideal, ebeveyn banyolu tasarım.": "Ideal for large families, designed with an en-suite bathroom.",
    "AYRICALIKLI BİR": "AN EXCLUSIVE",
    "Yaşam Alanı": "Living Space",
    "Manzara İstanbul'da her detay, size ve ailenize daha iyi bir yaşam sunmak için tasarlandı.": "Every detail in Manzara Istanbul is designed to offer you and your family a better life.",
    "Kapalı Otopark": "Indoor Parking",
    "Her daireye özel kapalı otopark alanı.": "Dedicated indoor parking space for each apartment.",
    "7/24 Güvenlik": "24/7 Security",
    "Profesyonel güvenlik ekibi ve kamera sistemi.": "Professional security team and camera system.",
    "Fitness Salonu": "Fitness Center",
    "Modern ekipmanlarla donatılmış spor alanı.": "Sports area equipped with modern equipment.",
    "Çocuk Oyun Alanı": "Kids Playground",
    "Çocuklar için güvenli ve eğlenceli park.": "Safe and fun park for children.",
    "Peyzaj Alanları": "Landscaped Areas",
    "Özenle tasarlanmış dinlenme ve yürüyüş yolları.": "Carefully designed resting and walking paths.",
    "GELECEĞE GÜVENLİ": "SECURE FOR THE FUTURE",
    "Yatırım Fırsatı": "Investment Opportunity",
    "Sürekli gelişen ve değerlenen Kağıthane bölgesinde, yüksek kira getirisi ve prim potansiyeli sunan karlı bir yatırım.": "A profitable investment offering high rental income and premium potential in the constantly developing and appreciating Kagithane region.",
    "PROJEDEN KARELER": "GLIMPSES FROM THE PROJECT",
    "Görsel Galeri": "Visual Gallery",
    "Dış Cephe": "Exterior",
    "İç Mekan": "Interior",
    "Sosyal Alanlar": "Social Areas",
    "BİZE ULAŞIN": "CONTACT US",
    "Size ulaşalım.": "Let us contact you.",
    "Formu doldurun, sizinle iletişime geçelim.": "Fill out the form, and we will get back to you.",
    "Ad Soyadınız *": "Full Name *",
    "E-posta Adresiniz": "Email Address",
    "İlgilendiğiniz Daire Tipi": "Apartment Type of Interest",
    "Mesajınız": "Your Message",
    "KVKK aydınlatma metnini okudum, anladım ve kabul ediyorum.": "I have read, understood, and accept the privacy policy.",
    "GÖNDER": "SUBMIT",
    "İletişim Bilgilerimiz": "Contact Information",
    "TELEFON": "PHONE",
    "E-POSTA": "EMAIL",
    "ADRES": "ADDRESS",
    "WHATSAPP": "WHATSAPP",
    "INSTAGRAM": "INSTAGRAM",
    "Tüm hakları saklıdır.": "All rights reserved.",
    "Tümünü Gör": "View All",
    "Tümü": "All"
};

// Translate Text Nodes
$('*').contents().filter(function() {
    return this.nodeType === 3;
}).each(function() {
    let text = $(this).text();
    let originalText = text;
    for (let tr in dictionary) {
        if (text.includes(tr)) {
            text = text.replace(new RegExp(tr, 'g'), dictionary[tr]);
        }
    }
    // Also handle Hero complex texts manually since they have HTML inside
    text = text.replace("Yatırım için doğru zaman,", "Right time for investment,");
    text = text.replace("doğru adres.", "right address.");
    text = text.replace("Kağıthane'nin merkezi konumu, modern mimari ve yüksek yaşam standartlarıyla Manzara İstanbul, bugün ve yarın için güçlü bir yatırım alternatifi sunar.", "With its central location in Kagithane, modern architecture, and high living standards, Manzara Istanbul offers a strong investment alternative for today and tomorrow.");
    
    if (text !== originalText) {
        $(this).replaceWith(text);
    }
});

// Translate Placeholders
$('[placeholder]').each(function() {
    let text = $(this).attr('placeholder');
    if (dictionary[text]) {
        $(this).attr('placeholder', dictionary[text]);
    }
});

// Fix meta and html tag
$('html').attr('lang', 'en');
$('title').text("Manzara Istanbul | Luxury Residential Project in the Heart of Kagithane");
$('meta[name="description"]').attr('content', "A new residential project offering 1+1, 2+1, and 3+1 apartment options in Hamidiye, Kagithane. Discover project details, floor plans, lifestyle amenities, and investment info.");
$('meta[property="og:title"]').attr('content', "Manzara Istanbul | Luxury Residential Project in the Heart of Kagithane");
$('meta[property="og:description"]').attr('content', "A new residential project offering 1+1, 2+1, and 3+1 apartment options in Hamidiye, Kagithane. Discover project details, floor plans, lifestyle amenities, and investment info.");
$('meta[name="twitter:title"]').attr('content', "Manzara Istanbul | Luxury Residential Project in the Heart of Kagithane");
$('meta[name="twitter:description"]').attr('content', "A new residential project offering 1+1, 2+1, and 3+1 apartment options in Hamidiye, Kagithane. Discover project details, floor plans, lifestyle amenities, and investment info.");

// Fix brochure links
$('a[href*="Türkçe.pdf"]').each(function() {
    $(this).attr('href', $(this).attr('href').replace('Türkçe.pdf', 'English.pdf'));
});

// Write to en.html
fs.writeFileSync('en.html', $.html(), 'utf-8');
console.log("Safe translation complete!");
