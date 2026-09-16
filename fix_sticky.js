const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Change absolute to fixed and z-20 to z-[99]
        content = content.replace(
            'flex absolute z-20 right-0 top-1/2 -translate-y-1/2 border border-gold border-r-0 rounded-l-xl',
            'flex fixed z-[99] right-0 top-1/2 -translate-y-1/2 border border-gold border-r-0 rounded-l-xl'
        );
        
        // Also just in case they meant the button in the bottom section, let's make sure it's the right one
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated sticky button in ${file}`);
    }
});
