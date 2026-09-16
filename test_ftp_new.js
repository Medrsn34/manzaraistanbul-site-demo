const ftp = require("basic-ftp")

async function testFTP() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        console.log("Connecting with new credentials...");
        await client.access({
            host: "ftp.manzaraistanbul.com.tr",
            user: "c9536ad3@manzaraistanbul.com.tr",
            password: "}T)Y}q%OLlcECa9n",
            secure: false
        });
        console.log("SUCCESS! Connection established.");
        console.log(await client.list());
        
        // Let's also cd to public_html to verify wp site is there
        await client.cd("public_html");
        console.log("Successfully entered public_html");
        
        client.close();
    }
    catch(err) {
        console.log("Failed:", err.message);
        client.close();
    }
}

testFTP()
