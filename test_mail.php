<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'mail.manzaraistanbul.com.tr';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@manzaraistanbul.com.tr';
    $mail->Password   = 'Manzara4321';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('info@manzaraistanbul.com.tr', 'Test Bot');
    $mail->addAddress('info@manzaraistanbul.com.tr');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'SMTP Test';
    $mail->Body    = 'Bu mail SMTP ayarlarinin dogru calistigini test etmek amaciyla sistem tarafindan otomatik gonderilmistir.';

    $mail->send();
    echo 'BASARILI: Mail SMTP uzerinden basariyla gonderildi!';
} catch (Exception $e) {
    echo "HATA: Mail gonderilemedi. Hata detayi: {$mail->ErrorInfo}";
}
?>
