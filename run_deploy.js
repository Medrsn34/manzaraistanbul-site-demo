const ftp = require("basic-ftp");
const fs = require('fs');
const path = require('path');

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = false
    try {
        console.log("1. Connecting to FTP...");
        await client.access({
            host: "ftp.manzaraistanbul.com.tr",
            user: "c9536ad3@manzaraistanbul.com.tr",
            password: "}T)Y}q%OLlcECa9n",
            secure: false
        });
        
        await client.cd("public_html");
        console.log("2. Uploading cleaner.php...");
        await client.uploadFrom(path.join(__dirname, 'dist', 'cleaner.php'), "cleaner.php");
        
        console.log("3. Executing cleaner.php via HTTP...");
        const response = await fetch('https://manzaraistanbul.com.tr/cleaner.php');
        const result = await response.json();
        console.log("Server Cleanup Result:", result);
        
        console.log("4. Deleting cleaner.php from server...");
        await client.remove("cleaner.php");
        
        console.log("5. Uploading new project files...");
        // Upload all files from dist EXCEPT cleaner.php
        await client.uploadFromDir(path.join(__dirname, 'dist'));
        
        // Remove cleaner.php from server again just in case uploadFromDir uploaded it
        try { await client.remove("cleaner.php"); } catch(e){}
        
        console.log("6. Finalizing... Fetching current directory structure.");
        const finalFiles = await client.list();
        console.log("\n--- SERVER FILES NOW ---");
        finalFiles.forEach(f => {
            console.log(f.isDirectory ? `[DIR] ${f.name}` : `[FILE] ${f.name}`);
        });
        
        console.log("\nDEPLOYMENT SUCCESSFUL!");
    }
    catch(err) {
        console.log("Deploy Failed:", err.message);
    }
    client.close();
}

deploy();
