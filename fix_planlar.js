const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Move id="planlar" to inner div and add scroll margin
        content = content.replace(
            '<section id="planlar" class="py-12 lg:py-16 bg-[#F9F7F3] relative overflow-hidden flex flex-col justify-center min-h-screen">\n    <div class="max-w-[1400px] w-full mx-auto px-6 lg:px-8">',
            '<section class="py-12 lg:py-16 bg-[#F9F7F3] relative overflow-hidden flex flex-col justify-center min-h-screen">\n    <div id="planlar" class="max-w-[1400px] w-full mx-auto px-6 lg:px-8 scroll-mt-24 lg:scroll-mt-32">'
        );
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Moved planlar ID in ${file}`);
    }
});
