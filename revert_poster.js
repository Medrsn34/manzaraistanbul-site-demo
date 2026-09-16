const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove the poster attribute from all video tags
        content = content.replace(/poster="images\/Galeri\/Extrerior\/1\.png" /g, '');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Reverted poster in ${file}`);
    }
});
