const fs = require('fs');

const modalHtmlTR = `
<!-- KVKK Modal -->
<div id="kvkkModal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-close" aria-hidden="true"></div>
    
    <!-- Modal Content -->
    <div class="relative bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl transform transition-all">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-100">
            <h3 class="text-xl font-bold text-gray-900 font-serif">Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni</h3>
            <button class="modal-close p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100" aria-label="Kapat">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        
        <!-- Body -->
        <div class="p-6 overflow-y-auto text-sm text-gray-600 space-y-5 custom-scrollbar">
            <div>
                <h4 class="font-bold text-gray-900 mb-2">1. Veri Sorumlusu</h4>
                <p>Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla hareket eden <strong>Manzara İstanbul</strong> tarafından hazırlanmıştır.</p>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">2. İşlenen Kişisel Veriler</h4>
                <p>Web sitemiz üzerinden aşağıdaki kişisel verileriniz işlenmektedir:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                    <li>Ad Soyad</li>
                    <li>Telefon Numarası</li>
                    <li>E-Mail Adresi</li>
                    <li>İlgilenilen Daire Tipi</li>
                    <li>Mesaj İçeriği</li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">3. Kişisel Verilerin İşlenme Amaçları</h4>
                <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                    <li>Talep ve başvurularınızın alınması ve yanıtlanması</li>
                    <li>Hizmet süreçlerinin yürütülmesi</li>
                    <li>Müşteri iletişiminin sağlanması</li>
                    <li>İş geliştirme ve pazarlama faaliyetlerinin yürütülmesi</li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h4>
                <p>Kişisel verileriniz, web sitemizde yer alan iletişim formu aracılığıyla elektronik ortamda toplanmaktadır.<br>Bu veriler;</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                    <li>Açık rızanızın bulunması</li>
                    <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
                </ul>
                <p class="mt-1">hukuki sebeplerine dayanarak işlenmektedir.</p>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">5. Kişisel Verilerin Aktarılması</h4>
                <p>Kişisel verileriniz; Yetkili kamu kurum ve kuruluşlarına (yasal yükümlülükler kapsamında) ve Hizmet alınan üçüncü taraf altyapı sağlayıcılarına KVKK’nın 8. ve 9. maddelerine uygun olarak aktarılabilir.</p>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">6. Yurt Dışına Veri Aktarımı</h4>
                <p>Kişisel verileriniz, kullanılan teknik altyapıların yurt dışı sunuculara sahip olması nedeniyle KVKK’nın 9. maddesi kapsamında yurt dışına aktarılabilir.</p>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">7. KVKK Kapsamındaki Haklarınız</h4>
                <p>KVKK’nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                    <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                    <li>KVKK’ya uygun olarak silinmesini veya yok edilmesini isteme</li>
                    <li>İşlenen verilerin aktarıldığı üçüncü kişileri bilme</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                    <li>Zarara uğramanız halinde zararın giderilmesini talep etme</li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">8. İletişim</h4>
                <p>KVKK kapsamındaki taleplerinizi aşağıdaki iletişim kanalları üzerinden bize iletebilirsiniz:</p>
                <p class="mt-1"><strong>E-posta:</strong> <a href="mailto:info@manzaraistanbul.com.tr" class="text-gold hover:underline">info@manzaraistanbul.com.tr</a><br>
                <strong>Telefon:</strong> <a href="tel:+905324211979" class="text-gold hover:underline">0 (532) 421 19 79</a></p>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button class="modal-close px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gold transition-colors font-medium">Anladım, Kapat</button>
        </div>
    </div>
</div>

<script>
    // Modal script
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('kvkkModal');
        const openBtns = document.querySelectorAll('.kvkk-open');
        const closeBtns = document.querySelectorAll('.modal-close');
        
        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });
        
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            });
        });
    });
</script>
`;

// Same modal for English, but we translate the headers
const modalHtmlEN = modalHtmlTR
    .replace('Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni', 'Clarification Text on the Protection and Processing of Personal Data')
    .replace('1. Veri Sorumlusu', '1. Data Controller')
    .replace('Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla hareket eden', 'This clarification text has been prepared by')
    .replace('tarafından hazırlanmıştır.', 'acting as the data controller in accordance with the Personal Data Protection Law No. 6698 (“KVKK”).')
    .replace('Anladım, Kapat', 'I Understand, Close')
    .replace('Kapat', 'Close');

const processFile = (filename, modalHtml) => {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf8');

    // 1. Change the KVKK text to a clickable link class
    // Look for: <span class="text-gold font-semibold">KVKK</span>
    html = html.replace(
        /<span class="text-gold font-semibold">KVKK<\/span>/g,
        '<a href="#" class="kvkk-open text-gold font-bold hover:underline">KVKK</a>'
    );

    // 2. Append modal html right before </body>
    if (!html.includes('id="kvkkModal"')) {
        html = html.replace('</body>', modalHtml + '\n</body>');
    }

    fs.writeFileSync(filename, html, 'utf8');
    console.log(`Added KVKK modal to ${filename}`);
};

processFile('index.html', modalHtmlTR);
processFile('en.html', modalHtmlEN);
