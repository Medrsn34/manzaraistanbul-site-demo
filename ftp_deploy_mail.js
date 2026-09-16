const ftp = require("basic-ftp")
const fs = require('fs')

async function uploadAndTest() {
    const client = new ftp.Client()
    client.ftp.verbose = false
    try {
        console.log("Connecting to FTP...");
        await client.access({
            host: "manzaraistanbul.com.tr",
            user: "manzarai",
            password: "*f&-2O%tr+Y~$s_z",
            secure: false
        });
        
        console.log("Connected! Uploading send_mail.php to public_html...");
        await client.cd("public_html");
        await client.uploadFrom("send_mail.php", "send_mail.php");
        console.log("Upload successful!");
        client.close();
        
        // Now let's trigger a POST request to the live server to test the email!
        console.log("Sending a test POST request to https://manzaraistanbul.com.tr/send_mail.php ...");
        
        const testData = new URLSearchParams();
        testData.append('fullname', 'Test Kullanıcı (Sistem Testi)');
        testData.append('phone', '0 (555) 123 45 67');
        testData.append('email', 'test@example.com');
        testData.append('apartment_type', '2+1');
        testData.append('message', 'Bu otomatik bir test mesajıdır. Mail entegrasyonunun çalışıp çalışmadığını kontrol etmek için gönderilmiştir.');
        
        const response = await fetch('https://manzaraistanbul.com.tr/send_mail.php', {
            method: 'POST',
            body: testData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': 'https://manzaraistanbul.com.tr/index.html'
            },
            redirect: 'manual' // Don't follow redirect so we can see the 302 status
        });
        
        console.log("Server response status:", response.status);
        console.log("Redirect location (should be tesekkurler.html):", response.headers.get('location'));
        
    }
    catch(err) {
        console.log("Failed:", err.message);
        client.close();
    }
}

uploadAndTest()
