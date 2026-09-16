const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Remove scroll-pt-24 from HTML tag
        content = content.replace(/class="scroll-smooth scroll-pt-24"/g, 'class="scroll-smooth"');
        
        // 2. Remove scroll-mt-20 from all sections
        content = content.replace(/scroll-mt-20 /g, '');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Cleaned up scroll padding in ${file}`);
    }
});
