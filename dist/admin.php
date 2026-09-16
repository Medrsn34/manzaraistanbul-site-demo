<?php
session_start();

// --- AYARLAR ---
$admin_user = 'manzara';
$admin_pass = 'Manzara2026!'; // Şifreyi buradan değiştirebilirsiniz
$csv_file = 'manzara_leads_db_9381.csv';
// ---------------

// Çıkış Yap
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: admin.php");
    exit;
}

// Giriş Kontrolü
$error = '';
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['username'])) {
    if ($_POST['username'] === $admin_user && $_POST['password'] === $admin_pass) {
        $_SESSION['logged_in'] = true;
        header("Location: admin.php");
        exit;
    } else {
        $error = 'Kullanıcı adı veya şifre hatalı!';
    }
}

$is_logged_in = isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;

// Eğer CSV indir tuşuna basılırsa
if ($is_logged_in && isset($_GET['export'])) {
    if (file_exists($csv_file)) {
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename=leads_' . date('Y-m-d') . '.csv');
        readfile($csv_file);
        exit;
    }
}

// Leads Verilerini Oku
$leads = [];
if ($is_logged_in && file_exists($csv_file)) {
    if (($handle = fopen($csv_file, "r")) !== FALSE) {
        // İlk satırı (BOM ve Başlıklar) atla veya oku
        $header = fgetcsv($handle, 1000, ";"); 
        while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
            $leads[] = $data;
        }
        fclose($handle);
    }
    // En yeni formlar en üstte görünsün diye diziyi ters çeviriyoruz
    $leads = array_reverse($leads);
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manzara İstanbul - Lead Yönetimi</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f8fafc; }
    </style>
</head>
<body class="text-slate-800">

<?php if (!$is_logged_in): ?>
    <!-- GİRİŞ EKRANI -->
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-bold text-slate-900 mb-2">Yönetim Paneli</h1>
                <p class="text-slate-500 text-sm">Lead (Form) kayıtlarını görmek için giriş yapın.</p>
            </div>
            
            <?php if ($error): ?>
                <div class="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 text-center font-medium">
                    <?php echo $error; ?>
                </div>
            <?php endif; ?>

            <form method="POST" class="space-y-5">
                <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Kullanıcı Adı</label>
                    <input type="text" name="username" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#cba774] focus:border-transparent transition-all">
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Şifre</label>
                    <input type="password" name="password" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#cba774] focus:border-transparent transition-all">
                </div>
                <button type="submit" class="w-full bg-[#1e2722] hover:bg-[#cba774] text-white font-semibold py-3.5 rounded-xl transition-colors duration-300">
                    Giriş Yap
                </button>
            </form>
        </div>
    </div>
<?php else: ?>
    <!-- PANEL EKRANI -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div>
                <h1 class="text-3xl font-bold text-slate-900">Gelen Formlar (Leads)</h1>
                <p class="text-slate-500 mt-1">Web sitesinden doldurulan tüm formlar burada listelenir.</p>
            </div>
            <div class="flex items-center gap-3">
                <a href="?export=1" class="px-5 py-2.5 bg-[#cba774] hover:bg-[#b89565] text-white font-medium rounded-lg transition-colors shadow-sm flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Excel Olarak İndir
                </a>
                <a href="?logout=1" class="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition-colors">
                    Çıkış Yap
                </a>
            </div>
        </div>

        <!-- Table -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                            <th class="py-4 px-6 whitespace-nowrap">Tarih</th>
                            <th class="py-4 px-6 whitespace-nowrap">Ad Soyad</th>
                            <th class="py-4 px-6 whitespace-nowrap">Telefon</th>
                            <th class="py-4 px-6 whitespace-nowrap">E-posta</th>
                            <th class="py-4 px-6 whitespace-nowrap">Daire Tipi</th>
                            <th class="py-4 px-6 min-w-[300px]">Mesaj</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-sm">
                        <?php if (empty($leads)): ?>
                            <tr>
                                <td colspan="6" class="py-12 text-center text-slate-500">
                                    Henüz hiç form doldurulmamış.
                                </td>
                            </tr>
                        <?php else: ?>
                            <?php foreach ($leads as $lead): ?>
                                <tr class="hover:bg-slate-50 transition-colors">
                                    <td class="py-4 px-6 text-slate-500 whitespace-nowrap"><?php echo htmlspecialchars($lead[0] ?? ''); ?></td>
                                    <td class="py-4 px-6 font-medium text-slate-900 whitespace-nowrap"><?php echo htmlspecialchars($lead[1] ?? ''); ?></td>
                                    <td class="py-4 px-6 whitespace-nowrap"><?php echo htmlspecialchars($lead[2] ?? ''); ?></td>
                                    <td class="py-4 px-6 text-blue-600 whitespace-nowrap"><a href="mailto:<?php echo htmlspecialchars($lead[3] ?? ''); ?>"><?php echo htmlspecialchars($lead[3] ?? ''); ?></a></td>
                                    <td class="py-4 px-6 whitespace-nowrap">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#cba774]/10 text-[#cba774] border border-[#cba774]/20">
                                            <?php echo htmlspecialchars($lead[4] ?? '-'); ?>
                                        </span>
                                    </td>
                                    <td class="py-4 px-6 text-slate-600"><?php echo nl2br(htmlspecialchars($lead[5] ?? '')); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
<?php endif; ?>

</body>
</html>
