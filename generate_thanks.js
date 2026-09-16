const fs = require('fs');

const createThankYouPage = (lang) => {
    const isEng = lang === 'en';
    const filename = isEng ? 'thanks.html' : 'tesekkurler.html';
    const langAttr = isEng ? 'en' : 'tr';
    const title = isEng ? 'Thank You | Manzara Istanbul' : 'Teşekkürler | Manzara İstanbul';
    const mainHeading = isEng ? 'Thank you.' : 'Teşekkürler.';
    const subHeading = isEng ? 'Your request has been successfully received.' : 'Talebiniz başarıyla alınmıştır.';
    const descText = isEng ? 'Our customer representative will review your request and contact you as soon as possible.' : 'Müşteri temsilcimiz, talebinizi inceleyerek en kısa sürede sizinle iletişime geçecektir.';
    const btnHome = isEng ? 'Back to Home' : 'Ana Sayfaya Dön';
    const btnWa = isEng ? 'Contact via WhatsApp' : 'WhatsApp\'tan Bize Ulaşın';
    const homeLink = isEng ? 'en.html' : 'index.html';

    const html = `<!DOCTYPE html>
<html lang="${langAttr}" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="icon" type="image/png" href="images/Galeri/Extrerior/1.png">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        serif: ['"Playfair Display"', 'serif'],
                    },
                    colors: {
                        gold: '#cba774',
                    }
                }
            }
        }
    </script>
    <style>
        .hero-section {
            height: 100vh;
            height: 100dvh;
        }
    </style>
</head>
<body class="bg-gray-900 text-white font-sans antialiased overflow-hidden">
    <!-- Navbar -->
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-4 lg:py-6 bg-black/40 backdrop-blur-sm border-b border-white/10">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex-shrink-0 z-50">
                    <a href="${homeLink}" class="flex items-center">
                        <img class="h-8 w-auto" src="LOGO.webp" alt="Manzara Logo">
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <section class="relative hero-section w-full flex flex-col justify-center items-center overflow-hidden">
        <!-- Background Video -->
        <video class="absolute inset-0 w-full h-full object-cover z-0 opacity-40" autoplay loop muted playsinline>
            <source src="videos/manzaraistanbul-hero.mp4" type="video/mp4">
        </video>
        
        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/95 z-10"></div>
        
        <div class="relative z-20 max-w-3xl mx-auto px-6 text-center pt-20">
            <!-- Icon -->
            <div class="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border border-gold flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(203,167,116,0.3)]">
                <svg class="w-10 h-10 md:w-12 md:h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            
            <!-- Headings -->
            <h1 class="text-5xl md:text-7xl font-serif text-gold mb-4 drop-shadow-md">
                ${mainHeading}
            </h1>
            <h2 class="text-xl md:text-2xl font-light text-white mb-8 tracking-wide drop-shadow-sm">
                ${subHeading}
            </h2>
            
            <!-- Divider -->
            <div class="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-8 relative">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold"></div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed font-light mb-12 drop-shadow-sm">
                ${descText}
            </p>
            
            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <!-- Home Button -->
                <a href="${homeLink}" class="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full bg-[#cba774] hover:bg-[#b89565] text-gray-900 font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span>${btnHome}</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                
                <!-- WhatsApp Button -->
                <a href="https://wa.me/905324211979" target="_blank" class="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full bg-transparent border border-gray-600 hover:border-gold hover:bg-gold/5 text-white font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    <span>${btnWa}</span>
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</body>
</html>`;

    fs.writeFileSync(filename, html, 'utf-8');
    console.log(`Created ${filename}`);
};

createThankYouPage('tr');
createThankYouPage('en');
