const fs = require('fs');

const files = ['index.html', 'en.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Inline the CSS
        const cssContent = fs.readFileSync('css/style.css', 'utf8');
        const oldCssLinks = /<link rel="preload" href="css\/style\.css" as="style">\s*<link rel="stylesheet" href="css\/style\.css">/g;
        // If it doesn't match the regex perfectly, let's just use string replace
        content = content.replace('<link rel="preload" href="css/style.css" as="style">\n    <link rel="stylesheet" href="css/style.css">', `<style>${cssContent}</style>`);
        content = content.replace('<link rel="preload" href="css/style.css" as="style">\r\n    <link rel="stylesheet" href="css/style.css">', `<style>${cssContent}</style>`);
        
        // 2. Lazy load below-the-fold videos
        // Second video:
        content = content.replace(
            '<video class="w-full h-full object-cover" autoplay loop muted playsinline>\n                      <source src="videos/manzaraistanbul-info.mp4" type="video/mp4">\n                  </video>',
            '<video class="w-full h-full object-cover lazy-video" autoplay loop muted playsinline>\n                      <source data-src="videos/manzaraistanbul-info.mp4" type="video/mp4">\n                  </video>'
        );
        content = content.replace(
            '<video class="w-full h-full object-cover" autoplay loop muted playsinline>\r\n                      <source src="videos/manzaraistanbul-info.mp4" type="video/mp4">\r\n                  </video>',
            '<video class="w-full h-full object-cover lazy-video" autoplay loop muted playsinline>\r\n                      <source data-src="videos/manzaraistanbul-info.mp4" type="video/mp4">\r\n                  </video>'
        );
        
        // Third video:
        content = content.replace(
            '<video class="absolute inset-0 w-full h-full object-cover opacity-70" autoplay loop muted playsinline>\n                  <source src="videos/manzaraistanbul-hero.mp4" type="video/mp4">\n              </video>',
            '<video class="absolute inset-0 w-full h-full object-cover opacity-70 lazy-video" autoplay loop muted playsinline>\n                  <source data-src="videos/manzaraistanbul-hero.mp4" type="video/mp4">\n              </video>'
        );
        content = content.replace(
            '<video class="absolute inset-0 w-full h-full object-cover opacity-70" autoplay loop muted playsinline>\r\n                  <source src="videos/manzaraistanbul-hero.mp4" type="video/mp4">\r\n              </video>',
            '<video class="absolute inset-0 w-full h-full object-cover opacity-70 lazy-video" autoplay loop muted playsinline>\r\n                  <source data-src="videos/manzaraistanbul-hero.mp4" type="video/mp4">\r\n              </video>'
        );
        
        // Add the IntersectionObserver script before </body>
        const lazyScript = `
<script>
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy-video"));
    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }
                    video.target.load();
                    video.target.classList.remove("lazy-video");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });
        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});
</script>
`;
        // Insert script right before </body>
        if (!content.includes('lazyVideoObserver')) {
            content = content.replace('</body>', lazyScript + '</body>');
        }
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Optimized ${file}`);
    }
});
