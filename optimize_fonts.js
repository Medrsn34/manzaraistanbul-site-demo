const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Async load Google Fonts to remove render blocking
        const oldFontLink = '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">';
        const newFontLink = `<link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:wght@400;600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:wght@400;600&display=swap"></noscript>`;
        content = content.replace(oldFontLink, newFontLink);
        
        // 2. Preload the CSS file to remove its blocking time too
        const oldCssLink = '<link rel="stylesheet" href="css/style.css">';
        const newCssLink = `<link rel="preload" href="css/style.css" as="style">\n    <link rel="stylesheet" href="css/style.css">`;
        content = content.replace(oldCssLink, newCssLink);
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Optimized fonts and CSS in ${file}`);
    }
});
