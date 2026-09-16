const fs = require('fs');

const fixFooterAlignment = (filename) => {
    let html = fs.readFileSync(filename, 'utf-8');

    // Find the footer links container
    const searchString = '<div class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 w-full lg:w-auto">';
    const replacementString = '<div class="relative z-10 flex justify-center w-full lg:w-auto"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-8 lg:gap-12 w-max">';

    if (html.includes(searchString)) {
        html = html.replace(searchString, replacementString);
        
        // Now we need to add the closing </div> for the new wrapper we added.
        // We know the links container ends just before "<!-- Bottom Bar -->"
        // Let's find the closing tag of this container. It's right before </section> maybe?
        // Wait, the container is inside a flex row:
        // <div class="bg-[#1e2722] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 relative overflow-hidden shadow-2xl">
        // Let's just find the closing </div> of the links container.
        // Or we can do it by regex.
    }

    // A safer way is to just replace the class string of the existing container:
    const searchClass = 'class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 w-full lg:w-auto"';
    const replaceClass = 'class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-8 lg:gap-12 w-max mx-auto lg:mx-0"';
    
    // Instead of wrapper, let's just use `w-max mx-auto` on the existing container and change `items-center` to `items-start` for mobile.
    let fixedHtml = fs.readFileSync(filename, 'utf-8');
    fixedHtml = fixedHtml.replace(
        'class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 w-full lg:w-auto"',
        'class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 sm:gap-8 lg:gap-12 w-max mx-auto lg:mx-0 lg:w-auto"'
    );
    
    fs.writeFileSync(filename, fixedHtml, 'utf-8');
    console.log(`Fixed ${filename}`);
};

fixFooterAlignment('index.html');
fixFooterAlignment('en.html');
