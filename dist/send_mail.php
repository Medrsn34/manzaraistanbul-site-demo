<?php
// send_mail.php

$to = 'info@manzaraistanbul.com.tr';
$subject = 'Yeni İletişim Formu: Manzara İstanbul';

// POST Verilerini Al
$fullname = isset($_POST['fullname']) ? trim($_POST['fullname']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$apartment_type = isset($_POST['apartment_type']) ? trim($_POST['apartment_type']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Hangi dilden gelindiğini bul (Teşekkürler sayfasına yönlendirmek için)
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$isEnglish = strpos($referer, 'en.html') !== false;
$thanksPage = $isEnglish ? 'thanks.html' : 'tesekkurler.html';

// Boş mu kontrolü
if(empty($fullname) || empty($phone)) {
    die("Lütfen zorunlu alanları (Ad Soyad, Telefon) doldurunuz.");
}

// Mail İçeriği Oluştur (HTML)
$mailContent = "
<html>
<head>
  <title>Yeni Form Talebi</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
  <h2 style='color: #cba774;'>Manzara İstanbul - Yeni Talep</h2>
  <table border='0' cellpadding='10' cellspacing='0' style='width: 100%; max-width: 600px; border: 1px solid #eee;'>
    <tr>
      <td style='background: #f9f9f9; width: 30%;'><strong>Ad Soyad:</strong></td>
      <td>{$fullname}</td>
    </tr>
    <tr>
      <td style='background: #f9f9f9;'><strong>Telefon:</strong></td>
      <td>{$phone}</td>
    </tr>
    <tr>
      <td style='background: #f9f9f9;'><strong>E-posta:</strong></td>
      <td>{$email}</td>
    </tr>
    <tr>
      <td style='background: #f9f9f9;'><strong>Daire Tipi:</strong></td>
      <td>{$apartment_type}</td>
    </tr>
    <tr>
      <td style='background: #f9f9f9;'><strong>Mesaj:</strong></td>
      <td>" . nl2br(htmlspecialchars($message)) . "</td>
    </tr>
  </table>
  <p style='font-size: 12px; color: #999; margin-top: 20px;'>Bu e-posta Manzara İstanbul web sitesindeki iletişim formundan gönderilmiştir.</p>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Manzara Istanbul Landing Page <noreply@manzaraistanbul.com.tr>" . "\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: {$email}" . "\r\n";
}

// Mail Gönderimi
@mail($to, $subject, $mailContent, $headers);

// CSV'ye Kaydet (Leads Log) - Güvenli ve gizli isimle kaydedelim
$csvFile = 'manzara_leads_db_9381.csv';
$date = date('Y-m-d H:i:s');
if(!file_exists($csvFile)) {
    $file = fopen($csvFile, 'w');
    // UTF-8 BOM ekle (Excel'de Türkçe karakterler düzgün görünsün)
    fprintf($file, chr(0xEF).chr(0xBB).chr(0xBF));
    fputcsv($file, ['Tarih', 'Ad Soyad', 'Telefon', 'E-posta', 'Daire Tipi', 'Mesaj'], ';');
    fclose($file);
}

$file = fopen($csvFile, 'a');
fputcsv($file, [$date, $fullname, $phone, $email, $apartment_type, $message], ';');
fclose($file);

// Teşekkürler sayfasına yönlendir
header("Location: " . $thanksPage);
exit;
?>
