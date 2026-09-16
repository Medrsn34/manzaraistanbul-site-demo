const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find the hero h1 and add text-white
        content = content.replace(
            '<h1 class="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 drop-shadow-lg leading-[1.1]">',
            '<h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow-lg leading-[1.1]">'
        );
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed h1 text color in ${file}`);
    }
});
