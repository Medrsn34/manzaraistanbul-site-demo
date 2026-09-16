const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Add text-white to the header container or nav
        content = content.replace(
            '<header class="fixed w-full top-0 z-50 transition-all duration-300 py-6" id="header">',
            '<header class="fixed w-full top-0 z-50 transition-all duration-300 py-6 text-white" id="header">'
        );
        
        // 2. Add text-white to the mobile menu button if it doesn't inherit
        content = content.replace(
            '<button id="mobileMenuBtn" aria-label="Mobil Menüyü Aç" class="p-2 -mr-2 text-gray-800 lg:hidden">',
            '<button id="mobileMenuBtn" aria-label="Mobil Menüyü Aç" class="p-2 -mr-2 text-white lg:hidden">'
        );

        // Also fix any other <button> that might have hardcoded text-gray-800
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed header text color in ${file}`);
    }
});
