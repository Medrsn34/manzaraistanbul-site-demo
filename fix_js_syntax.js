const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Fix the JS syntax error caused by lazy_load script
        content = content.replace(/<img loading="lazy" src='/g, "<img loading='lazy' src='");
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed JS syntax error in ${file}`);
    }
});
