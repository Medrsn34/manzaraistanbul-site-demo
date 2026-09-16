const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Add poster to all videos that don't have it
        content = content.replace(/<video /g, '<video poster="images/Galeri/Extrerior/1.png" ');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Added poster to videos in ${file}`);
    }
});
