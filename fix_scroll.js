const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Add scroll-mt-28 to all <section id="... ">
        // We will replace `<section id="xxx" class="` with `<section id="xxx" class="scroll-mt-24 lg:scroll-mt-28 `
        content = content.replace(/<section id="([a-zA-Z0-9_-]+)" class="/g, '<section id="$1" class="scroll-mt-24 lg:scroll-mt-28 ');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Added scroll margins in ${file}`);
    }
});
