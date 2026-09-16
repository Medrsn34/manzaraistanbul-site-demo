const { execSync } = require('child_process');

const pass = "*f&-2O%tr+Y~$s_z";
const user1 = "c9536ad3@manzaraistanbul.com.tr";
const user2 = "manzarai";
const user3 = "c9536ad3";

function test(user) {
    try {
        console.log(`Testing ${user}...`);
        // We write a curl script file to avoid escaping issues
        const fs = require('fs');
        fs.writeFileSync('curl_test.bat', `curl -s --connect-timeout 10 ftp://manzaraistanbul.com.tr --user "${user}:${pass}" -l`);
        const out = execSync('curl_test.bat');
        console.log(`SUCCESS [${user}]:\n`, out.toString());
    } catch(e) {
        console.log(`FAILED [${user}]`, e.message);
    }
}

test(user1);
test(user2);
test(user3);
