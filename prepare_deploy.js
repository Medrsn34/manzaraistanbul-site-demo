const fs = require('fs');
const path = require('path');
const ftp = require("basic-ftp");

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

const filesToCopy = [
    'index.html', 'en.html', 'tesekkurler.html', 'thanks.html', '404.html',
    'admin.php', 'send_mail.php', '.htaccess', 'LOGO.webp', 'robots.txt', 'sitemap.xml', 'llms.txt'
];

const dirsToCopy = ['images', 'videos'];

// Copy Files
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(distDir, file));
    }
});

// Copy Directories recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

dirsToCopy.forEach(dir => {
    if (fs.existsSync(dir)) {
        copyDir(dir, path.join(distDir, dir));
    }
});
console.log("Dist folder prepared successfully.");

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        console.log("Connecting to FTP...");
        await client.access({
            host: "ftp.manzaraistanbul.com.tr",
            user: "c9536ad3@manzaraistanbul.com.tr",
            password: "}T)Y}q%OLlcECa9n",
            secure: false
        });
        
        await client.cd("public_html");
        console.log("Entered public_html");
        
        // Step 1: Wipe public_html except cgi-bin
        const list = await client.list();
        for (const item of list) {
            if (item.name === '.' || item.name === '..' || item.name === 'cgi-bin') {
                continue;
            }
            console.log(`Deleting ${item.name}...`);
            if (item.isDirectory) {
                await client.removeDir(item.name); // basic-ftp removeDir handles recursive? No, might need clearDir
                // wait, if removeDir isn't recursive, we need to manually clear it or just use clearDir?
                // actually, basic-ftp has removeDir but if it's not empty, it throws error.
            } else {
                await client.remove(item.name);
            }
        }
        
    }
    catch(err) {
        console.log("Failed:", err.message);
    }
    client.close();
}
// deploy();
