const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find img: "images/kat planlari/..." and change .png to .avif
        content = content.replace(/(img:\s*"images\/kat planlari\/[^"]+)\.png"/g, '$1.avif"');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated kat planlari images to .avif in ${file}`);
    }
});
