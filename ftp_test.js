const ftp = require("basic-ftp")

async function testFTP() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        console.log("Connecting as manzarai...");
        await client.access({
            host: "manzaraistanbul.com.tr", // or ftp.manzaraistanbul.com.tr
            user: "manzarai",
            password: "*f&-2O%tr+Y~$s_z",
            secure: false
        });
        console.log("SUCCESS manzarai!");
        console.log(await client.list());
        client.close();
        return;
    }
    catch(err) {
        console.log("Failed manzarai:", err.message);
    }
    client.close();

    const client2 = new ftp.Client()
    try {
        console.log("Connecting as c9536ad3@manzaraistanbul.com.tr...");
        await client2.access({
            host: "manzaraistanbul.com.tr",
            user: "c9536ad3@manzaraistanbul.com.tr",
            password: "*f&-2O%tr+Y~$s_z",
            secure: false
        });
        console.log("SUCCESS c9536ad3@manzaraistanbul.com.tr!");
        console.log(await client2.list());
    }
    catch(err) {
        console.log("Failed c9536ad3:", err.message);
    }
    client2.close();
}

testFTP()
