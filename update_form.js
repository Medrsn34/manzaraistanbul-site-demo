const fs = require('fs');

const updateForm = (filename) => {
    let html = fs.readFileSync(filename, 'utf8');

    // 1. Update <form> tag
    html = html.replace('<form class="space-y-4">', '<form action="send_mail.php" method="POST" class="space-y-4">');

    // 2. Add name attributes to inputs (index.html has Turkish placeholders, en.html has English)
    // We can use a regex to inject name="..." right after the input type or class
    
    // Ad Soyad
    html = html.replace(/<input type="text" placeholder="([^"]+)" required/g, '<input type="text" name="fullname" placeholder="$1" required');
    
    // Telefon
    html = html.replace(/<input type="tel" placeholder="([^"]+)" required/g, '<input type="tel" name="phone" placeholder="$1" required');
    
    // E-posta
    html = html.replace(/<input type="email" placeholder="([^"]+)" class=/g, '<input type="email" name="email" placeholder="$1" class=');
    
    // Select
    html = html.replace(/<select class="/g, '<select name="apartment_type" required class="');
    
    // Textarea
    html = html.replace(/<textarea placeholder="([^"]+)" rows="3" class="/g, '<textarea name="message" placeholder="$1" rows="3" class="');

    fs.writeFileSync(filename, html, 'utf8');
    console.log(`Updated form in ${filename}`);
};

updateForm('index.html');
updateForm('en.html');
