const fs = require('fs');
let html = fs.readFileSync('en.html', 'utf-8');

const replacements = {
    "Doğayla iç içe,": "Intertwined with nature,",
    "şehre yakın.": "close to the city.",
    "Yeni bir yaşamın": "The starting point",
    "başlangıç noktası.": "of a new life.",
    "DETAYLI BİLGİ ALIN": "GET DETAILS",
    "KEŞFET": "DISCOVER",
    "SİZE ULAŞALIM": "LET US CALL YOU"
};

for (const [tr, en] of Object.entries(replacements)) {
    // using regex for global replacement
    const regex = new RegExp(tr, 'g');
    html = html.replace(regex, en);
}

// Ensure language switcher logic correctly switches
// Nav TR should just say TR, EN should say EN (which they do). 
// But wait, the screenshot showed the TR text in the button on desktop. 
// Let's ensure TR says EN in the active button in en.html if we want EN to be displayed, but wait.
// The dropdown in the screenshot is actually a single button: "TR v". It means they have a dropdown menu for language, not two side-by-side links!
// Ah! In `index.html` there is a dropdown? Let's check `en.html` for "TR" and dropdown SVGs!
fs.writeFileSync('en.html', html, 'utf-8');
console.log("Missing texts replaced.");
