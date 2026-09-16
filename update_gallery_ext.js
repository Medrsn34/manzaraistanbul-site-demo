const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find src="images/Galeri/..." and change the extension to .avif
        // Note: Extrerior and Interior folders.
        // We will match src="images/Galeri/([^"]+)\.(png|jpg|webp)"
        // and replace with src="images/Galeri/$1.avif"
        
        content = content.replace(/src="images\/Galeri\/([^"]+)\.(png|jpg|webp)"/g, 'src="images/Galeri/$1.avif"');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated gallery images to .avif in ${file}`);
    }
});
