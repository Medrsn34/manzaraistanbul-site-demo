const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Inline the CSS again (replace the entire <style> tag)
        const cssContent = fs.readFileSync('css/style.css', 'utf8');
        content = content.replace(/<style>[\s\S]*?<\/style>/, `<style>${cssContent}</style>`);
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Re-inlined CSS in ${file}`);
    }
});
