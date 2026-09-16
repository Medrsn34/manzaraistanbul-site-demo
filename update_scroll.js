const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace scroll-mt-24 lg:scroll-mt-28 with just scroll-mt-20
        content = content.replace(/scroll-mt-24 lg:scroll-mt-28/g, 'scroll-mt-20');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated scroll margins in ${file}`);
    }
});
