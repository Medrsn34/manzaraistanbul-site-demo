<?php
$dir = __DIR__;
function deleteDirectory($dirPath) {
    if (!is_dir($dirPath)) {
        return;
    }
    $files = scandir($dirPath);
    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..') {
            $filePath = $dirPath . '/' . $file;
            if (is_dir($filePath)) {
                deleteDirectory($filePath);
            } else {
                unlink($filePath);
            }
        }
    }
    rmdir($dirPath);
}

$items = scandir($dir);
$deleted = [];
$skipped = [];

foreach ($items as $item) {
    if ($item === '.' || $item === '..') continue;
    
    // Kurallar: cgi-bin silme, backup-*.tar.gz silme, cleaner.php silme
    if ($item === 'cgi-bin' || strpos($item, 'backup-') === 0 || $item === 'cleaner.php') {
        $skipped[] = $item;
        continue;
    }

    $path = $dir . '/' . $item;
    if (is_dir($path)) {
        deleteDirectory($path);
    } else {
        unlink($path);
    }
    $deleted[] = $item;
}

echo json_encode(['status' => 'success', 'deleted' => $deleted, 'skipped' => $skipped]);
?>
