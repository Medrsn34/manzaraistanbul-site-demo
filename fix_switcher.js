const fs = require('fs');

let content = fs.readFileSync('en.html', 'utf-8');

// Nav Desktop Switcher
content = content.replace(
    '<a href="#" class="block px-4 py-2.5 text-xs font-medium text-gold hover:bg-white/5 transition-colors text-center tracking-widest">TR</a>',
    '<a href="index.html" class="block px-4 py-2.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-center tracking-widest">TR</a>'
);
content = content.replace(
    '<a href="en.html" class="block px-4 py-2.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-center tracking-widest">EN</a>',
    '<a href="#" class="block px-4 py-2.5 text-xs font-medium text-gold hover:bg-white/5 transition-colors text-center tracking-widest">EN</a>'
);

// Drawer Mobile Switcher
// It has this structure:
// <a href="#" class="flex flex-col items-center gap-1.5 group">...TR</a>
// <a href="en.html" class="flex flex-col items-center gap-1.5 group opacity-50 hover:opacity-100 transition-opacity">...EN</a>
content = content.replace(
    '<a href="#" class="flex flex-col items-center gap-1.5 group">',
    '<a href="index.html" class="flex flex-col items-center gap-1.5 group opacity-50 hover:opacity-100 transition-opacity">'
);
content = content.replace(
    '<a href="en.html" class="flex flex-col items-center gap-1.5 group opacity-50 hover:opacity-100 transition-opacity">',
    '<a href="#" class="flex flex-col items-center gap-1.5 group">'
);
content = content.replace(
    '<div class="w-7 h-7 rounded-full overflow-hidden border border-gold shadow-sm transition-transform group-hover:scale-110 bg-[#e30a17]">',
    '<div class="w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-sm transition-transform group-hover:scale-110 group-hover:border-gold bg-[#e30a17]">'
);
content = content.replace(
    '<div class="w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-sm transition-transform group-hover:scale-110 group-hover:border-gold bg-[#012169]">',
    '<div class="w-7 h-7 rounded-full overflow-hidden border border-gold shadow-sm transition-transform group-hover:scale-110 bg-[#012169]">'
);
content = content.replace(
    '<span class="text-[9px] text-white font-medium tracking-widest">TR</span>',
    '<span class="text-[9px] text-gray-300 font-medium tracking-widest group-hover:text-white">TR</span>'
);
content = content.replace(
    '<span class="text-[9px] text-gray-300 font-medium tracking-widest group-hover:text-white">EN</span>',
    '<span class="text-[9px] text-white font-medium tracking-widest">EN</span>'
);


fs.writeFileSync('en.html', content, 'utf-8');
console.log("Switcher state updated");
