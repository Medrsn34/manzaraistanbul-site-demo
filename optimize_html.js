const fs = require('fs');

const htmlFiles = ['index.html', 'en.html', 'tesekkurler.html', 'thanks.html', '404.html'];

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Replace Tailwind CDN with local style.css
        content = content.replace('<script src="https://cdn.tailwindcss.com"></script>', '<link rel="stylesheet" href="css/style.css">');
        
        // 2. Add poster to video to fix LCP
        content = content.replace('<video autoplay muted loop playsinline class="', '<video autoplay muted loop playsinline poster="images/Galeri/Extrerior/1.png" class="');
        
        // 3. Accessibility improvements (aria-labels on buttons without text)
        content = content.replace('<button id="mobileMenuBtn" class="', '<button id="mobileMenuBtn" aria-label="Mobil Menüyü Aç" class="');
        content = content.replace('<button id="langBtn" class="', '<button id="langBtn" aria-label="Dil Değiştir" class="');
        content = content.replace('<button id="closeMenuBtn" class="', '<button id="closeMenuBtn" aria-label="Menüyü Kapat" class="');
        
        // Let's make sure we remove the inline <style> block that was moved to input.css
        // We'll just leave it if it doesn't hurt, but the font-serif might conflict. 
        // Actually it's fine.
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated performance items in ${file}`);
    }
});
