const fs = require('fs');
const files = ['index.html', 'en.html', 'tesekkurler.html', 'thanks.html', '404.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(
            /<link rel="icon" type="image\/png" href="images\/Galeri\/Extrerior\/1\.png">/g, 
            '<link rel="icon" type="image/webp" href="LOGO.webp">'
        );
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated favicon in ${file}`);
    }
});
