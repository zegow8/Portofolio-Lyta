// Data Projects (10 Best Projects - Urutan Prioritas)
const projects = [
    // ====== 7 PROYEK YANG DIROMBAK (NAIK KE ATAS) ======
    {
        title: "Raiental",
        desc: `Platform penyewaan website dan game berbasis web dengan sistem multi-user yang terdiri dari admin dan user. Aplikasi dilengkapi dengan fitur autentikasi login dan registrasi berdasarkan role serta sistem penyewaan digital dengan pilihan durasi per jam, hari, minggu, dan bulan.

Admin memiliki dashboard yang menampilkan informasi total pengguna, total pendapatan, total pesanan, pesanan aktif, pesanan kadaluarsa, dan pesanan pending. Selain itu, admin dapat melihat seluruh data pengguna, memantau peminjaman aktif, mengelola produk melalui fitur CRUD, serta memverifikasi pesanan yang masuk dari pengguna. Sistem pesanan menerapkan tiga status, yaitu menunggu konfirmasi, aktif, dan kadaluarsa, yang dikelola melalui halaman manajemen pesanan dan riwayat transaksi.

Pada sisi pengguna, tersedia dashboard yang menampilkan total transaksi, total pengeluaran, pesanan aktif, dan pesanan kadaluarsa. Pengguna dapat melihat daftar produk yang tersedia, melakukan pencarian berdasarkan nama, kategori, dan rentang harga, melihat detail produk, menambahkan produk ke keranjang, memilih durasi sewa, serta melakukan checkout. Sistem akan menghitung total biaya secara otomatis berdasarkan harga dan durasi yang dipilih.

Pengguna juga dapat melihat riwayat penyewaan, memantau status pesanan, mengakses tautan produk selama masa sewa masih aktif, serta mengelola akun melalui fitur ubah username, email, dan kata sandi. Masa sewa akan mulai dihitung setelah pesanan disetujui oleh admin dan akses produk akan otomatis berakhir ketika durasi sewa telah habis.`,
        tech: "Next.js, Prisma, PostgreSQL",
        github: "https://github.com/zegow8/Raiental.git",
        demo: null,
        images: ["assets/raiental1.png", "assets/raiental2.png"]
    },
    {
        title: "Olshop Prog Lyta",
        desc: `Aplikasi ini merupakan platform e-commerce berbasis web dengan sistem multi-user yang terdiri dari admin dan user. Sistem menyediakan fitur autentikasi login dan registrasi, manajemen produk, keranjang belanja, checkout, serta pengelolaan pesanan secara terintegrasi.

Pada sisi admin, tersedia dashboard yang menampilkan total produk, total pengguna, total pesanan, dan total pendapatan. Admin juga dapat melihat seluruh daftar pengguna yang terdaftar dalam sistem. Fitur manajemen produk memungkinkan admin melakukan create, read, update, dan delete (CRUD) data produk yang mencakup gambar, nama produk, harga, stok, dan deskripsi. Stok produk akan berkurang secara otomatis setelah pesanan berhasil dibuat oleh pengguna. Selain itu, admin dapat mengelola pesanan dengan fitur pencarian berdasarkan nama pelanggan, email, ID pesanan, maupun status pesanan. Sistem mendukung alur status pesanan mulai dari Pending, Paid, Shipped, Delivered, hingga Cancelled.

Pada sisi pengguna, tersedia halaman katalog produk dengan fitur pencarian, pengurutan berdasarkan harga, tanggal, dan jumlah stok, serta filter rentang harga. Produk ditampilkan menggunakan sistem pagination dan produk yang kehabisan stok secara otomatis ditempatkan pada urutan terakhir. Pengguna dapat menambahkan produk ke keranjang, memberikan catatan khusus kepada penjual, melakukan checkout dengan mengisi alamat dan metode pembayaran, serta mengonfirmasi pesanan. Selain itu, pengguna dapat melihat riwayat pesanan, memantau status transaksi secara real-time, melihat detail pesanan, dan mengelola akun melalui fitur perubahan username, email, dan kata sandi.`,
        tech: "Next.js, PostgreSQL, Prisma",
        github: "https://github.com/zegow8/olshop-prog-lyta.git",
        demo: null,
        images: ["assets/olshop1.png", "assets/olshop2.png"]
    },
    {
        title: "Gamestorelyta",
        desc: `Aplikasi ini merupakan platform distribusi game dan aplikasi Android berbasis web dengan sistem multi-user yang terdiri dari admin dan user. Sistem mendukung publikasi aplikasi gratis maupun berbayar, pengelolaan library pengguna, serta fitur rating untuk menilai aplikasi yang telah diunduh.

Pada sisi admin, tersedia fitur manajemen game yang memungkinkan pengelolaan data aplikasi melalui operasi create, read, update, dan delete (CRUD). Setiap aplikasi memiliki informasi berupa nama, deskripsi, harga, tautan unduhan, thumbnail, beberapa screenshot, serta satu atau lebih genre. Admin dapat melihat detail aplikasi, jumlah unduhan, daftar pengguna yang telah mengunduh aplikasi, rating yang diberikan oleh masing-masing pengguna, serta tanggal dan waktu pengunduhan. Selain itu, sistem menyediakan statistik berupa total aplikasi, total aplikasi berbayar, dan total aplikasi gratis.

Pada sisi pengguna, tersedia dashboard yang menampilkan jumlah aplikasi yang telah diunduh, jumlah aplikasi yang telah diberi rating, total pengeluaran, serta aktivitas terbaru seperti pengunduhan, pemberian rating, dan penghapusan aplikasi dari library. Pengguna dapat menjelajahi katalog aplikasi melalui halaman Game Store dengan fitur pencarian, melihat detail aplikasi, jumlah unduhan, genre, dan rating rata-rata dari pengguna lain. Untuk aplikasi berbayar, pengguna harus melalui proses checkout dan pembayaran terlebih dahulu, sedangkan aplikasi gratis dapat langsung ditambahkan ke library.

Sistem juga menyediakan fitur My Library yang berisi seluruh aplikasi yang telah dimiliki pengguna. Melalui halaman ini, pengguna dapat mengakses detail aplikasi, memberikan rating, atau menghapus aplikasi dari library. Selain itu, tersedia halaman History yang menampilkan riwayat transaksi, status aplikasi, rating, tanggal aktivitas, serta total pengeluaran. Pengguna juga dapat mengelola akun melalui fitur perubahan username, email, kata sandi, dan penghapusan akun.`,
        tech: "Laravel, MySQL",
        github: "https://github.com/zegow8/gamestorelyta.git",
        demo: null,
        images: ["assets/gstore1.png", "assets/gstore2.png"]
    },
    {
        title: "Rainnawr Pet Shop",
        desc: `Rainnawr Pet Shop merupakan aplikasi e-commerce berbasis web dengan sistem multi-user yang terdiri dari admin dan user. Sistem ini dirancang untuk mendukung pengelolaan produk pet shop, transaksi pembelian, serta pemantauan pesanan secara terintegrasi.

Pada sisi admin, tersedia dashboard yang menampilkan informasi total produk, total pengguna, total pesanan, dan total pendapatan. Dashboard juga menyediakan notifikasi stok produk yang berada di bawah batas minimum, daftar pengguna terbaru, serta pesanan terbaru. Admin dapat mengelola data produk melalui fitur CRUD yang mencakup nama produk, gambar, deskripsi, harga, stok, dan kategori. Selain itu, tersedia fitur manajemen kategori yang memungkinkan pengelolaan kategori produk beserta statistik jumlah produk pada setiap kategori. Admin juga dapat memantau dan mengelola pesanan melalui halaman Orders, termasuk melihat detail pesanan dan memperbarui status pesanan.

Pada sisi pengguna, tersedia dashboard yang menampilkan informasi mengenai Rainnawr Pet Shop, produk terbaru, dan produk terlaris. Pengguna dapat menjelajahi katalog produk dengan fitur pencarian berdasarkan nama, filter kategori, filter rentang harga, serta pengurutan berdasarkan produk terbaru, harga, jumlah penjualan, dan rating. Setiap produk memiliki halaman detail yang menampilkan informasi lengkap seperti kategori, rating, jumlah penjualan, deskripsi, dan jumlah pembelian yang dapat dipilih sebelum ditambahkan ke keranjang. Sistem juga menampilkan rekomendasi produk serupa untuk membantu pengguna menemukan produk lain yang relevan.

Fitur keranjang belanja memungkinkan pengguna mengatur jumlah pembelian dan melihat ringkasan pesanan sebelum melakukan checkout. Pada proses checkout, pengguna diminta mengisi informasi pelanggan, nomor telepon, alamat, dan metode pembayaran. Selain itu, tersedia halaman riwayat pesanan yang menampilkan daftar transaksi beserta detail lengkap setiap pesanan, total pengeluaran, dan jumlah pesanan yang telah dibuat. Pengguna juga dapat memberikan rating terhadap produk yang telah dibeli setelah pesanan berstatus Delivered.`,
        tech: "Laravel, MySQL, Bootstrap",
        github: "https://github.com/zegow8/rainnawr-pet-shop.git",
        demo: null,
        images: ["assets/pshop1.png", "assets/pshop2.png"]
    },
    {
        title: "Washify",
        desc: `Aplikasi ini merupakan sistem manajemen laundry berbasis web dengan konsep multi-user yang terdiri dari admin dan pelanggan. Sistem dirancang untuk membantu proses pencatatan pesanan, pengelolaan pelanggan, pembayaran, serta pemantauan status pengantaran laundry secara terintegrasi.

Pada sisi admin, tersedia dashboard yang menampilkan total pelanggan, total transaksi, dan total pendapatan. Dashboard juga menyediakan informasi jumlah transaksi yang belum dibayar serta jumlah pesanan yang belum diantar, disertai daftar transaksi terbaru yang menampilkan detail pelanggan, layanan, berat cucian, total biaya, status pembayaran, status pengantaran, dan tanggal pemesanan. Selain itu, admin dapat mengelola data pelanggan yang berisi informasi akun, alamat, nomor telepon, dan tanggal pendaftaran. Melalui halaman manajemen pesanan, admin dapat memantau seluruh transaksi berdasarkan status pembayaran dan pengantaran, serta memperbarui status pesanan hingga proses pengantaran selesai.

Pada sisi pelanggan, sistem menyediakan fitur pengelolaan profil yang digunakan sebagai data utama dalam proses pemesanan laundry. Setelah registrasi, pelanggan diwajibkan melengkapi informasi profil seperti alamat dan nomor telepon sebelum dapat menggunakan layanan. Pelanggan juga dapat mengubah kata sandi melalui halaman profil.

Untuk proses pemesanan, pelanggan dapat membuat order laundry dengan memilih jenis layanan, memasukkan berat cucian, menentukan metode pembayaran, serta melihat total biaya yang dihitung secara otomatis oleh sistem. Dashboard pelanggan menampilkan ringkasan total transaksi, total berat cucian, dan total pengeluaran. Selain itu, tersedia halaman riwayat pesanan yang memuat informasi lengkap mengenai transaksi, termasuk status pembayaran dan status pengantaran. Jika pesanan belum dibayar, pelanggan dapat melakukan pembayaran melalui tombol "Bayar Sekarang". Setelah pesanan selesai diantar, sistem menyediakan invoice dalam format PDF yang dapat diunduh atau dicetak sebagai bukti transaksi.`,
        tech: "PHP Native, MySQL, CSS Native",
        github: "https://github.com/zegow8/washify.git",
        demo: "http://washify.free.nf",
        images: ["assets/wash1.png", "assets/wash2.png"]
    },
    {
        title: "Kasir Cafe",
        desc: `Rain's Café POS merupakan aplikasi kasir berbasis web yang dirancang untuk mendukung proses transaksi penjualan secara real-time di lingkungan café. Sistem dilengkapi dengan fitur autentikasi sehingga setiap transaksi dapat tercatat berdasarkan kasir yang melayani pelanggan.

Halaman utama menampilkan ringkasan informasi berupa jumlah transaksi hari ini, total pendapatan harian, dan jumlah menu yang tersedia. Sistem juga menyediakan fitur manajemen menu yang memungkinkan kasir melakukan pengelolaan data menu melalui operasi create, read, update, dan delete (CRUD), termasuk pengaturan nama menu, harga, dan gambar produk.

Fitur transaksi digunakan untuk melayani pelanggan secara langsung di lokasi café. Kasir dapat memilih menu yang dipesan, mengatur jumlah item, serta mengelola keranjang belanja sesuai pesanan pelanggan. Sistem secara otomatis menghitung total harga, jumlah pembayaran yang diberikan pelanggan, dan nilai kembalian. Setelah transaksi selesai, sistem akan menghasilkan invoice yang memuat informasi café, ID transaksi, tanggal transaksi, nama kasir yang melayani, daftar pesanan, total pembayaran, jumlah uang yang diterima, dan kembalian.

Selain itu, seluruh transaksi yang telah dilakukan akan tersimpan pada halaman riwayat transaksi. Halaman ini dilengkapi dengan filter rentang tanggal, informasi total transaksi dan total pendapatan, serta daftar transaksi yang dapat ditinjau kembali melalui fitur lihat struk untuk keperluan pencatatan dan pelaporan.`,
        tech: "PHP Native, MySQL, Bootstrap",
        github: "https://github.com/zegow8/kasir-cafe.git",
        demo: null,
        images: ["assets/kascafe1.png"]
    },
    {
        title: "Lassavore Restaurant",
        desc: "Website profil restoran yang memperkenalkan informasi dan layanan restoran. Terdapat menu makanan, minuman, dessert dengan animasi interaktif, serta fitur pesan sekarang terhubung ke Instagram.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/lassavore-restaurant.git",
        demo: "https://zegow8.github.io/lassavore-restaurant",
        images: null
    },

    // ====== 3 PROYEK ANDROID (TURUN KE BAWAH) ======
    {
        title: "Librify",
        desc: "Aplikasi peminjaman buku berbasis Android dengan dua role (Admin & User), dilengkapi fitur CRUD buku, upload cover, peminjaman buku, dan konfirmasi pengembalian menggunakan database SQLite.",
        tech: "Android Studio, Java, SQLite",
        github: "https://github.com/zegow8/Librify.git",
        demo: null,
        images: null
    },
    {
        title: "DeepFocus",
        desc: "APK Manajemen Timer Belajar berbasis android. Dilengkapi fitur timer belajar + istirahat, preset cepat, statistik, profile, dan goals.",
        tech: "Android Studio, Java",
        github: "https://github.com/zegow8/DeepFocus.git",
        demo: null,
        images: null
    },
    {
        title: "Taskify",
        desc: "Aplikasi personal untuk siswa dalam mengelola tugas atau pekerjaan rumah (PR). Membantu mengorganisasi tugas berdasarkan status penyelesaiannya, dilengkapi fitur catatan motivasi.",
        tech: "Android Studio, Java",
        github: "https://github.com/zegow8/Taskify.git",
        demo: null,
        images: null
    }
];

// Data Design Gallery (8 Best Design)
const designs = [
    {
        title: "Raiental",
        desc: "UI Web Penyewaan Game & Aplikasi Android",
        imgFile: "assets/design-raiental.png",
        figmaUrl: "https://www.figma.com/design/xSAGoQEJEHgmIatoJ72F0c/RAIENTAL-NEXT-JS?t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "Librify",
        desc: "UI Aplikasi Peminjaman Buku Android",
        imgFile: "assets/design-librify.png",
        figmaUrl: "https://www.figma.com/design/zzv5EiF66McfZbsjwgL2Mo/LIBRIFY-ANDROID-STUDIO?t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "DeepFocus",
        desc: "UI Manajemen Timer Belajar Android",
        imgFile: "assets/design-deepfocus.png",
        figmaUrl: "https://www.figma.com/design/V1veFYxIJ1Ny0Dm3bvxyoT/DeepFocus?t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "AppStore",
        desc: "UI App Store (Personal Project)",
        imgFile: "assets/design-appstore.png",
        figmaUrl: "https://www.figma.com/design/VezA7NIrmUStKZ3Sp6GpFD/AppStoreLyta?node-id=0-1&p=f&t=pMNI5Cw47BnaeKfm-0"
    },
    {
        title: "Taskify",
        desc: "UI Aplikasi Manajemen Tugas Android",
        imgFile: "assets/design-taskify.png",
        figmaUrl: "https://www.figma.com/design/RBkNQMvNPpYpAOUczeAhID/Taskify-Android-Studio?t=pMNI5Cw47BnaeKfm-0"
    },
    {
        title: "Lassavore Hotel",
        desc: "UI Website Hotel & Restoran",
        imgFile: "assets/lassavore hotel.png",
        figmaUrl: "https://www.figma.com/design/sEYITVlZ0Al1JTiGAvN9R4/skibidi-hotel?node-id=1-5&t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "Koperasi 21",
        desc: "UI Sistem Koperasi Sekolah",
        imgFile: "assets/design-koperasi 21.png",
        figmaUrl: "https://www.figma.com/design/S3N9182xrcLbV7cc0odFDa/KOPERASI-11-EARLYTA?node-id=0-1&t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "IT Club Komik",
        desc: "UI Komik Digital (IT Club Project)",
        imgFile: "assets/itkomik.png",
        figmaUrl: "https://www.figma.com/design/EraJYu2GyywCHkzz1PRlKJ/figmay-it-komik?node-id=1-2&t=pMNI5Cw47BnaeKfm-1"
    }
];

// Data Games (5 Games)
const games = [
    {
        title: "MEOWMORY GAME",
        desc: "Game memory match 4×4 dengan gambar kucing. Pemain harus mencocokkan 8 pasang kartu dalam waktu 60 detik. Setiap kartu menampilkan foto kucing yang unik, dan pemain ditantang untuk mengingat posisi setiap gambar. Fitur: timer 60 detik, hitungan langkah, high score tersimpan di localStorage, dan kontrol tap/klik yang responsif di desktop maupun HP.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/meowmorygame.git",
        demo: "https://zegow8.github.io/meowmorygame/",
        img: "assets/meow1.png"
    },
    {
        title: "MAZE GAME",
        desc: "Game labirin interaktif dengan generate maze procedural (40×40) pake algoritma recursive backtracking. Pemain punya 3 nyawa, kalo nabrak tembok reset ke start. Multi-platform: arrow keys buat desktop, tombol sentuh buat HP.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/maze-game.git",
        demo: "https://zegow8.github.io/maze-game/",
        img: "assets/maze1.png"
    },
    {
        title: "OHIO BLOCK",
        desc: "Game puzzle blok dengan grid 8×8. Pemain drag & drop blok warna-warni ke dalam grid untuk mengisi baris atau kolom penuh. Setiap kali baris/kolom penuh, blok akan hilang dan pemain mendapat poin. Fitur: score & high score (localStorage), level naik setiap 100 poin, hint untuk menunjukkan tempat yang bisa diisi, new shapes untuk mengganti blok yang tersedia, dan kontrol drag & drop yang responsif di desktop (mouse) maupun HP (touch).",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/ohioblock.git",
        demo: "https://zegow8.github.io/ohioblock/",
        img: "assets/ohio1.png"
    },
    {
        title: "FLAPPY BIRD",
        desc: "Game arcade klasik dengan kontrol sederhana. Pemain mengontrol burung yang terbang melewati rintangan pipa dengan cara mengetuk/klik untuk melompat. Fitur: 7 tipe rintangan (normal, narrow, wide, moving, double, zigzag, gapChange) yang semakin sulit seiring bertambahnya score, gravity & jump physics, high score tersimpan di localStorage, dan kontrol multi-platform: klik/tap di desktop, swipe up di HP.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/flappy-bird-hand-gesture.git",
        demo: "https://zegow8.github.io/flappy-bird-hand-gesture/",
        img: "assets/flappy1.png"
    },
    {
        title: "PLATFORMER FINAL",
        desc: "Aplikasi ini merupakan game platformer 2D yang dikembangkan menggunakan GDevelop 5. Pemain harus menjelajahi level, mengalahkan musuh, mengumpulkan koin, dan mencapai portal tujuan sebelum waktu habis. Game dilengkapi dengan sistem 5 nyawa, timer permainan, checkpoint untuk menyimpan progres, serta dua jenis skor yang memengaruhi kemenangan pemain.\n\nScore A diperoleh dengan mengalahkan monster Fly, sedangkan Score B diperoleh dengan mengalahkan monster Fire dan mengumpulkan koin. Setiap koin memberikan 10 poin, monster Fly memberikan 20 poin, dan monster Fire memberikan 25 poin.\n\nPemain dinyatakan menang apabila berhasil mencapai portal dengan Score A lebih dari 200 poin dan Score B lebih dari 175 poin sebelum waktu permainan berakhir. Sebaliknya, pemain akan kalah apabila gagal mencapai target skor atau tidak berhasil mencapai portal sebelum batas waktu yang tersedia.\n\nGame juga dilengkapi dengan halaman petunjuk permainan, scene menu utama, sistem checkpoint, serta tampilan kemenangan dan kekalahan yang muncul berdasarkan hasil permainan pemain.",
        tech: "GDevelop 5",
        github: null,
        demo: "https://zegow8.itch.io/platformer-final",
        img: "assets/plat1.png"
    }
];

// Render Projects dengan Slideshow + Read More
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => {
        let imageHtml = '';
        if (project.images && project.images.length > 0) {
            if (project.images.length === 1) {
                imageHtml = `<img src="${project.images[0]}" alt="${project.title}" class="single-img" onclick="openLightbox(this.src)">`;
            } else {
                let slidesHtml = project.images.map((img, i) => {
                    return `<img src="${img}" alt="${project.title}" class="slide-img ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="openLightbox(this.src)">`;
                }).join('');
                
                let dotsHtml = project.images.map((_, i) => {
                    return `<span class="${i === 0 ? 'active' : ''}" data-index="${i}"></span>`;
                }).join('');
                
                imageHtml = `
                    <div class="slideshow-container" data-project="${index}">
                        ${slidesHtml}
                        <button class="slideshow-btn prev" data-project="${index}">‹</button>
                        <button class="slideshow-btn next" data-project="${index}">›</button>
                        <div class="slideshow-dots">${dotsHtml}</div>
                    </div>
                `;
            }
        }

        const demoLink = project.demo ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : '';

        // Potong deskripsi 120 karakter
        const shortDesc = project.desc.length > 120 ? project.desc.substring(0, 120) + '...' : project.desc;
        const isLong = project.desc.length > 120;

        return `
            <div class="project-card">
                <h3 class="project-title">${project.title}</h3>
                ${imageHtml}
                <div class="project-desc" id="desc-${index}">
                    <span class="short-desc">${shortDesc}</span>
                    ${isLong ? `<span class="full-desc">${project.desc}</span>` : ''}
                </div>
                ${isLong ? `<button class="read-more-btn" onclick="toggleDesc(${index})">Selengkapnya →</button>` : ''}
                <p class="project-tech"><i class="fas fa-code"></i> ${project.tech}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>
                    ${demoLink}
                </div>
            </div>
        `;
    }).join('');

    // Setup slideshow events
    document.querySelectorAll('.slideshow-container').forEach(container => {
        const projectIndex = parseInt(container.dataset.project);
        const images = container.querySelectorAll('.slide-img');
        const dots = container.querySelectorAll('.slideshow-dots span');
        const prevBtn = container.querySelector('.slideshow-btn.prev');
        const nextBtn = container.querySelector('.slideshow-btn.next');
        let currentIndex = 0;

        function showSlide(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const newIndex = (currentIndex - 1 + images.length) % images.length;
                showSlide(newIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const newIndex = (currentIndex + 1) % images.length;
                showSlide(newIndex);
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(i);
            });
        });
    });
}

// Toggle deskripsi (expand/collapse)
function toggleDesc(index) {
    const descs = document.querySelectorAll('.project-desc');
    const btns = document.querySelectorAll('.project-card .read-more-btn');
    const isDesktop = window.innerWidth > 768;
    
    if (isDesktop) {
        // Desktop (2 kolom): buka berpasangan
        // index 0 & 1, 2 & 3, 4 & 5, 6 & 7, 8 & 9
        const pairStart = Math.floor(index / 2) * 2;
        const pairEnd = pairStart + 1;
        
        [pairStart, pairEnd].forEach(i => {
            if (descs[i]) {
                descs[i].classList.toggle('expanded');
                const btn = descs[i].parentElement.querySelector('.read-more-btn');
                if (btn) {
                    btn.textContent = descs[i].classList.contains('expanded') ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        });
    } else {
        // Mobile (1 kolom): buka cuma 1
        if (descs[index]) {
            descs[index].classList.toggle('expanded');
            const btn = descs[index].parentElement.querySelector('.read-more-btn');
            if (btn) {
                btn.textContent = descs[index].classList.contains('expanded') ? 'Tutup ↑' : 'Selengkapnya →';
            }
        }
    }
}

// Render Design Gallery
function renderDesigns() {
    const container = document.getElementById('design-grid');
    if (!container) return;
    
    container.innerHTML = designs.map(design => `
        <div class="design-card">
            <img src="${design.imgFile}" alt="${design.title}" class="design-img" onclick="openLightbox(this.src)">
            <div class="design-info">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-desc">${design.desc}</p>
                <a href="${design.figmaUrl}" target="_blank" class="figma-link">
                    <i class="fab fa-figma"></i> Lihat di Figma
                </a>
            </div>
        </div>
    `).join('');
}

// Render Games
function renderGames() {
    const container = document.getElementById('games-grid');
    if (!container) return;

    container.innerHTML = games.map((game, index) => {
        const shortDesc = game.desc.length > 120 ? game.desc.substring(0, 120) + '...' : game.desc;
        const isLong = game.desc.length > 120;

        // Cek apakah github ada isinya atau null
        const githubLink = game.github ? `<a href="${game.github}" target="_blank"><i class="fab fa-github"></i></a>` : '';

        return `
            <div class="game-card">
                <h3 class="game-title">${game.title}</h3>
                <img src="${game.img}" alt="${game.title}" class="game-img" onclick="openLightbox(this.src)">
                <div class="game-desc" id="game-desc-${index}">
                    <span class="short-desc">${shortDesc}</span>
                    ${isLong ? `<span class="full-desc">${game.desc}</span>` : ''}
                </div>
                ${isLong ? `<button class="read-more-btn" onclick="toggleGameDesc(${index})">Selengkapnya →</button>` : ''}
                <p class="game-tech"><i class="fas fa-code"></i> ${game.tech}</p>
                <div class="game-links">
                    ${githubLink}
                    <a href="${game.demo}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
    }).join('');
}

// Toggle deskripsi game (expand/collapse)
function toggleGameDesc(index) {
    const descs = document.querySelectorAll('.game-desc');
    const btns = document.querySelectorAll('.game-card .read-more-btn');
    const isDesktop = window.innerWidth > 768;
    
    if (isDesktop) {
        // Desktop (2 kolom): buka berpasangan
        const pairStart = Math.floor(index / 2) * 2;
        const pairEnd = pairStart + 1;
        
        [pairStart, pairEnd].forEach(i => {
            if (descs[i]) {
                descs[i].classList.toggle('expanded');
                const btn = descs[i].parentElement.querySelector('.read-more-btn');
                if (btn) {
                    btn.textContent = descs[i].classList.contains('expanded') ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        });
    } else {
        // Mobile (1 kolom): buka cuma 1
        if (descs[index]) {
            descs[index].classList.toggle('expanded');
            const btn = descs[index].parentElement.querySelector('.read-more-btn');
            if (btn) {
                btn.textContent = descs[index].classList.contains('expanded') ? 'Tutup ↑' : 'Selengkapnya →';
            }
        }
    }
}

// Lightbox functions
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = imgSrc;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Navbar Active Link on Scroll
function updateActiveLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
        }
    });
}

// Navbar Hamburger Menu
function setupNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scroll for navbar links
function setupSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll hint click
function setupScrollHint() {
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderDesigns();
    renderGames();
    setupNavbar();
    setupSmoothScroll();
    setupScrollHint();
    
    // Active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // Lightbox close
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close-lightbox');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
});