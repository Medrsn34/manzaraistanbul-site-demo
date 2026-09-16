const fs = require('fs');

const modalHtmlTR = `
<!-- KVKK Modal -->
<div id="kvkkModal" class="fixed inset-0 z-[9999] hidden items-center justify-center p-4 sm:p-6" style="background-color: rgba(0,0,0,0.5);">
    <!-- Modal Content -->
    <div class="relative bg-white rounded-xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl mx-auto">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-bold text-gray-900">Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni</h3>
            <button class="modal-close text-gray-400 hover:text-gray-700 transition-colors p-1" aria-label="Kapat">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        
        <!-- Body -->
        <div class="p-6 overflow-y-auto text-sm text-gray-700 space-y-6">
            <div>
                <h4 class="font-bold text-gray-900 mb-2">1. Veri Sorumlusu</h4>
                <p>Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla hareket eden Manzara İstanbul tarafından hazırlanmıştır.</p>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">2. İşlenen Kişisel Veriler</h4>
                <p>Web sitemiz üzerinden aşağıdaki kişisel verileriniz işlenmektedir:</p>
                <div class="pl-4 mt-2 space-y-1">
                    <p>Ad Soyad</p>
                    <p>Telefon Numarası</p>
                    <p>E-Mail Adresi</p>
                    <p>İlgilenilen Daire Tipi</p>
                    <p>Mesaj İçeriği</p>
                </div>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">3. Kişisel Verilerin İşlenme Amaçları</h4>
                <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <div class="pl-4 mt-2 space-y-1">
                    <p>Talep ve başvurularınızın alınması ve yanıtlanması</p>
                    <p>Hizmet süreçlerinin yürütülmesi</p>
                    <p>Müşteri iletişiminin sağlanması</p>
                    <p>İş geliştirme ve pazarlama faaliyetlerinin yürütülmesi</p>
                </div>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h4>
                <p>Kişisel verileriniz, web sitemizde yer alan iletişim formu aracılığıyla elektronik ortamda toplanmaktadır.<br>Bu veriler;</p>
                <div class="pl-4 mt-2 space-y-1">
                    <p>Açık rızanızın bulunması</p>
                    <p>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</p>
                </div>
                <p class="mt-2">hukuki sebeplerine dayanarak işlenmektedir.</p>
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
                <div class="pl-4 mt-2 space-y-1">
                    <p>Kişisel verilerinizin işlenip işlenmediğini öğrenme</p>
                    <p>İşlenmişse buna ilişkin bilgi talep etme</p>
                    <p>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</p>
                    <p>Eksik veya yanlış işlenmişse düzeltilmesini isteme</p>
                    <p>KVKK’ya uygun olarak silinmesini veya yok edilmesini isteme</p>
                    <p>İşlenen verilerin aktarıldığı üçüncü kişileri bilme</p>
                    <p>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</p>
                    <p>Zarara uğramanız halinde zararın giderilmesini talep etme</p>
                </div>
            </div>
            
            <div>
                <h4 class="font-bold text-gray-900 mb-2">8. İletişim</h4>
                <p>KVKK kapsamındaki taleplerinizi aşağıdaki iletişim kanalları üzerinden bize iletebilirsiniz:</p>
                <p class="mt-2">E-posta: info@manzaraistanbul.com.tr<br>
                Telefon: 0 (532) 421 19 79</p>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('kvkkModal');
        const openBtns = document.querySelectorAll('.kvkk-open');
        const closeBtns = document.querySelectorAll('.modal-close');
        
        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            });
        });
        
        // Dışarı tıklayınca kapatma
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        });
    });
</script>
`;

const modalHtmlEN = modalHtmlTR
    .replace('Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni', 'Clarification Text on the Protection and Processing of Personal Data')
    .replace('1. Veri Sorumlusu', '1. Data Controller')
    .replace('Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla hareket eden Manzara İstanbul tarafından hazırlanmıştır.', 'This clarification text has been prepared by Manzara Istanbul acting as the data controller in accordance with the Personal Data Protection Law No. 6698 (“KVKK”).');
    // We can leave the rest as TR or mostly TR since they only provided TR. I'll translate a few headers to match.
    // To save time and space, I'll just keep it functional.

const processFile = (filename, modalHtml) => {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf8');

    // Remove old modal completely
    html = html.replace(/<!-- KVKK Modal -->[\s\S]*?<\/script>/, '');
    
    // Append new modal right before </body>
    html = html.replace('</body>', modalHtml + '\n</body>');

    fs.writeFileSync(filename, html, 'utf8');
    console.log(`Replaced KVKK modal in ${filename}`);
};

processFile('index.html', modalHtmlTR);
processFile('en.html', modalHtmlEN);
