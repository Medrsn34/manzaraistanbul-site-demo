const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find the sticky button span
        content = content.replace(
            'uppercase vertical-text transition-colors',
            'uppercase vertical-text transition-colors whitespace-nowrap'
        );
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Added whitespace-nowrap in ${file}`);
    }
});
