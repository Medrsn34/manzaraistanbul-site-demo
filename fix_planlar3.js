const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find the div with id="planlar" and replace its scroll-mt classes with an inline style
        content = content.replace(
            /<div id="planlar" class="max-w-\[1400px\] w-full mx-auto px-6 lg:px-8 scroll-mt-24 lg:scroll-mt-32">/g,
            '<div id="planlar" class="max-w-[1400px] w-full mx-auto px-6 lg:px-8" style="scroll-margin-top: 140px;">'
        );
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated scroll-margin for planlar in ${file}`);
    }
});
