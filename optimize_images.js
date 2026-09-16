const sharp = require('sharp');
const fs = require('fs');

async function optimizeImages() {
    const imagesToOptimize = [
        'images/Galeri/Extrerior/1.png',
        'images/Extrerior/F13F.jpg',
        'images/Delivered_project/manzara-istanbul.jpg'
    ];

    for (let img of imagesToOptimize) {
        if (fs.existsSync(img)) {
            const outPath = img.substring(0, img.lastIndexOf('.')) + '.webp';
            await sharp(img)
                .resize({ width: 1200, withoutEnlargement: true }) // resize large images
                .webp({ quality: 80 })
                .toFile(outPath);
            console.log(`Optimized ${img} -> ${outPath}`);
            
            // Replace the references in HTML files
            const files = ['index.html', 'en.html'];
            files.forEach(file => {
                if (fs.existsSync(file)) {
                    let content = fs.readFileSync(file, 'utf8');
                    // simple replace of the extension
                    content = content.replace(new RegExp(img, 'g'), outPath);
                    fs.writeFileSync(file, content, 'utf8');
                }
            });
            console.log(`Updated HTML files for ${img}`);
        } else {
            console.log(`Not found: ${img}`);
        }
    }
}

optimizeImages();
