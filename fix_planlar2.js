const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove id="planlar" from <section>
        content = content.replace(/<section id="planlar"/g, '<section');
        
        // Add id="planlar" to the inner div
        // The inner div looks like: <div class="max-w-[1400px] w-full mx-auto px-6 lg:px-8">
        // It's immediately inside the section (which is min-h-screen).
        
        // Let's use a regex to find the section and then the inner div
        const regex = /(<section[^>]*min-h-screen[^>]*>\s*)<div class="max-w-\[1400px\] w-full mx-auto px-6 lg:px-8">/g;
        content = content.replace(regex, '$1<div id="planlar" class="max-w-[1400px] w-full mx-auto px-6 lg:px-8 scroll-mt-24 lg:scroll-mt-32">');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Actually moved planlar ID in ${file}`);
    }
});
