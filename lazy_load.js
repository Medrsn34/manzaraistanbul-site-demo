const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Temporarily replace LOGO.webp to avoid lazy loading it
        content = content.replace(/<img class="h-8 w-auto" src="LOGO\.webp"/g, '<img_temp_logo class="h-8 w-auto" src="LOGO.webp"');
        
        // Now add loading="lazy" to all other images (both static and injected by JS)
        content = content.replace(/<img /g, '<img loading="lazy" ');
        
        // Restore LOGO
        content = content.replace(/<img_temp_logo /g, '<img ');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Added lazy loading to images in ${file}`);
    }
});
