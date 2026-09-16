const fs = require('fs');

let content = fs.readFileSync('en.html', 'utf-8');

const translations = {
    // Navbar & Drawer
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
    
    // Hero
    'Yatırım için doğru zaman,<br><span class="italic text-gold font-light">doğru adres.</span>': 'Right time for investment,<br><span class="italic text-gold font-light">right address.</span>',
    "Kağıthane'nin merkezi konumu, modern mimari ve yüksek yaşam standartlarıyla Manzara İstanbul, bugün ve yarın için güçlü bir yatırım alternatifi sunar.": "With its central location in Kagithane, modern architecture, and high living standards, Manzara Istanbul offers a strong investment alternative for today and tomorrow.",
    
    // Quick Facts
    "Arsa Alanı": "Plot Area",
    "Tek Blok": "Single Block",
    "Zemin + 9 Kat": "Ground + 9 Floors",
    "Toplam Daire": "Total Flats",
    "Net Tavan Yüksekliği": "Net Ceiling Height",
    "Yeşil Alan": "Green Area",
    
    // About
    "NEDEN MANZARA İSTANBUL?": "WHY MANZARA ISTANBUL?",
    "MERKEZE YAKIN, DOĞAYA KOMŞU": "CLOSE TO THE CENTER, NEIGHBOR TO NATURE",
    "Bölgenin bitki örtüsüyle iç içe, yemyeşil bir manzara eşliğinde yeni bir yaşam.": "A new life accompanied by a lush green landscape, intertwined with the region's flora.",
    "KONFOR VE KALİTE": "COMFORT AND QUALITY",
    "Yüksek tavanlı, geniş ve ferah dairelerle standartların ötesinde bir yaşam.": "A life beyond standards with high-ceiling, spacious, and airy apartments.",
    "GÜVENLİ YATIRIM": "SECURE INVESTMENT",
    "Gelişen Kağıthane'nin en merkezi noktasında, her geçen gün değer kazanan bir proje.": "A project that gains value every day, in the most central point of developing Kagithane.",
    
    // Location
    "ŞEHRİN KALBİNDE": "IN THE HEART OF THE CITY",
    "Her Yere Yakın": "Close to Everywhere",
    "Manzara İstanbul, önemli ulaşım ağlarının ve sosyal yaşam merkezlerinin tam ortasında yer alıyor.": "Manzara Istanbul is located right in the middle of important transportation networks and social life centers.",
    "Eğitim & Sağlık": "Education & Health",
    "Derindere Hastanesi": "Derindere Hospital",
    "Atlas Üniversitesi": "Atlas University",
    "Ulaşım": "Transportation",
    "Vadi İstanbul": "Vadi Istanbul",
    
    // Floor Plans
    "HAYALİNİZDEKİ EV": "YOUR DREAM HOME",
    "Ferah ve Kullanışlı": "Spacious and Practical",
    "Farklı ihtiyaçlara uygun olarak özenle tasarlanmış daire seçenekleri.": "Carefully designed apartment options suited for different needs.",
    "Açık mutfaklı, kompakt ve kullanışlı tasarım.": "Compact and practical design with an open kitchen.",
    "Planı İncele": "View Plan",
    "Geniş balkonlu, ferah yaşam alanları.": "Spacious living areas with large balconies.",
    "Geniş aileler için ideal, ebeveyn banyolu tasarım.": "Ideal for large families, designed with an en-suite bathroom.",
    
    // Lifestyle & Facilities
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
    
    // Investment
    "GELECEĞE GÜVENLİ": "SECURE FOR THE FUTURE",
    "Yatırım Fırsatı": "Investment Opportunity",
    "Sürekli gelişen ve değerlenen Kağıthane bölgesinde, yüksek kira getirisi ve prim potansiyeli sunan karlı bir yatırım.": "A profitable investment offering high rental income and premium potential in the constantly developing and appreciating Kagithane region.",
    
    // Gallery
    "PROJEDEN KARELER": "GLIMPSES FROM THE PROJECT",
    "Görsel Galeri": "Visual Gallery",
    "Dış Cephe": "Exterior",
    "İç Mekan": "Interior",
    "Sosyal Alanlar": "Social Areas",
    
    // Contact
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
    
    // Footer
    "Tüm hakları saklıdır.": "All rights reserved.",
    
    // Form labels & Placeholders
    'placeholder="Ad Soyadınız *"': 'placeholder="Full Name *"',
    'placeholder="E-posta Adresiniz"': 'placeholder="Email Address"',
    'placeholder="Mesajınız"': 'placeholder="Your Message"',
    '>İlgilendiğiniz Daire Tipi</option>': '>Apartment Type of Interest</option>',
    
    // Meta / Title
    "Kağıthane'nin Merkezinde Lüks Konut Projesi": "Luxury Residential Project in the Heart of Kagithane",
    "Kağıthane Hamidiye'de 1+1, 2+1 ve 3+1 daire seçenekleri sunan yeni bir yaşam projesi. Proje detayları, daire planları, yaşam alanları ve yatırım bilgilerini keşfedin.": "A new residential project offering 1+1, 2+1, and 3+1 apartment options in Hamidiye, Kagithane. Discover project details, floor plans, lifestyle amenities, and investment info.",
    "Kağıthane Hamidiye'de 1+1, 2+1 ve 3+1 daire seçenekleri sunan yeni bir yaşam projesi.": "A new residential project offering 1+1, 2+1, and 3+1 apartment options in Hamidiye, Kagithane.",
    
    // Brochure Link
    "Manzara Istanbul - Brochure - Türkçe.pdf": "Manzara Istanbul - Brochure English.pdf"
};

// Sort keys by length descending so longer phrases get replaced first
const keys = Object.keys(translations).sort((a, b) => b.length - a.length);

for (const key of keys) {
    // use split/join to replace all occurrences globally
    content = content.split(key).join(translations[key]);
}

// Special tweaks for lang tags
content = content.replace('<html lang="tr"', '<html lang="en"');

fs.writeFileSync('en.html', content, 'utf-8');
console.log("Translation complete!");
