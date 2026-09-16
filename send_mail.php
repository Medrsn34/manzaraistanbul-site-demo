<?php
// send_mail.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$to = 'info@manzaraistanbul.com.tr';
$subject = 'Yeni Iletisim Formu: Manzara Istanbul';

// POST Verilerini Al
$fullname = isset($_POST['fullname']) ? trim($_POST['fullname']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$apartment_type = isset($_POST['apartment_type']) ? trim($_POST['apartment_type']) : '';
$message_body = isset($_POST['message']) ? trim($_POST['message']) : '';

// Hangi dilden gelindigini bul (Tesekkurler sayfasina yonlendirmek icin)
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$isEnglish = strpos($referer, 'en.html') !== false;
$thanksPage = $isEnglish ? 'thanks.html' : 'tesekkurler.html';

// Bos mu kontrolu
if(empty($fullname) || empty($phone)) {
    die("Lutfen zorunlu alanlari (Ad Soyad, Telefon) doldurunuz.");
}

// Mail Icerigi Olustur (HTML)
$mailContent = "
<html>
<head>
  <title>Yeni Form Talebi</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
  <h2 style='color: #cba774;'>Manzara Istanbul - Yeni Talep</h2>
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
      <td>" . nl2br(htmlspecialchars($message_body)) . "</td>
    </tr>
  </table>
  <p style='font-size: 12px; color: #999; margin-top: 20px;'>Bu e-posta Manzara Istanbul web sitesindeki iletisim formundan gonderilmistir.</p>
</body>
</html>
";

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'mail.manzaraistanbul.com.tr';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@manzaraistanbul.com.tr';
    $mail->Password   = 'Manzara4321';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom('info@manzaraistanbul.com.tr', 'Manzara Istanbul Landing Page');
    $mail->addAddress('info@manzaraistanbul.com.tr');
    if (!empty($email)) {
        $mail->addReplyTo($email, $fullname);
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $mailContent;

    $mail->send();
} catch (Exception $e) {
    // Silently fail for the user, but it won't crash the script
    error_log("Mail Error: {$mail->ErrorInfo}");
}

// CSV'ye Kaydet (Leads Log) - Guvenli ve gizli isimle kaydedelim
$csvFile = 'manzara_leads_db_9381.csv';
$date = date('Y-m-d H:i:s');
if(!file_exists($csvFile)) {
    $file = fopen($csvFile, 'w');
    fprintf($file, chr(0xEF).chr(0xBB).chr(0xBF));
    fputcsv($file, ['Tarih', 'Ad Soyad', 'Telefon', 'E-posta', 'Daire Tipi', 'Mesaj'], ';');
    fclose($file);
}

$file = fopen($csvFile, 'a');
fputcsv($file, [$date, $fullname, $phone, $email, $apartment_type, $message_body], ';');
fclose($file);

// Tesekkurler sayfasina yonlendir
header("Location: " . $thanksPage);
exit;
?>
