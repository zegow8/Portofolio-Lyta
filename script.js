/**
 * PORTOFOLIO 2026 - Earlyta Dwi Anggraeni
 * Core Application Logic, Interactive Effects & Data Showcase
 */

// ==========================================
// DATA: PROJECTS (18 Projects Total)
// ==========================================
const projects = [
    // ====== TOP 5 PINNED (FEATURED) PROJECTS ======
    {
        title: "GoAnywhere",
        desc: `GoAnywhere adalah proyek kolaborasi kelompok (tim beranggotakan 5 orang) yang mengembangkan platform aplikasi web full-stack untuk mendigitalkan sistem penyewaan mobil dan motor di area Jabodetabek. Menggunakan framework Laravel, MySQL, dan Tailwind CSS, aplikasi ini memiliki tigas hak akses utama: User (mencari armada dan booking), Manager (mengelola stok dan memvalidasi pesanan), serta Superadmin (pusat kendali analitik dan data lintas cabang).

Sistem ini menerapkan alur transaksi (workflow) yang terstruktur dan aman. Prosesnya dimulai saat User memilih kendaraan, melakukan pembayaran, dan statusnya berubah menjadi PAID (menunggu). Di tahap ini, Manager wajib memberikan persetujuan (Approval); setelah di-approve, status langsung berubah menjadi ACTIVE dan stok otomatis berkurang. Saat masa sewa habis dan User mengembalikan kendaraan, sistem akan menghitung denda secara otomatis (jika telat). Jika pengembalian berhasil (dan denda lunas), status menjadi COMPLETED dan stok unit otomatis kembali ke sistem.

Melalui proyek kelompok ini, saya tidak hanya mengasah kemampuan teknis dalam membangun logika backend yang kompleks (seperti kalkulasi denda dan manajemen stok) serta desain antarmuka, tetapi juga melatih kemampuan kolaborasi tim yang solid, termasuk pengelolaan version control (Git/GitHub) untuk memastikan seluruh fitur berjalan sinkron tanpa konflik kode.`,
        tech: "Laravel, MySQL, Tailwind CSS",
        github: "https://github.com/lidyaaaa/GoAnywhere",
        demo: null,
        images: ["assets/103.png", "assets/104.png", "assets/105.png", "assets/106.png"],
        filter: "laravel",
        pinned: true
    },
    {
        title: "Rainpedia",
        desc: `Rainpedia adalah platform web hybrid modern yang mengintegrasikan layanan toko buku fisik online (e-commerce) dengan sistem sirkulasi perpustakaan digital berbasis Laravel, MySQL, dan JavaScript. Dibangun untuk memberikan kemudahan akses literasi, aplikasi ini memungkinkan pengguna tidak hanya membeli buku untuk dimiliki, tetapi juga meminjam buku fisik berkualitas secara gratis melalui sistem tata kelola sirkulasi yang terstruktur dan terotomasi.

Dari sudut pandang Pengguna (User), platform ini menyediakan katalog buku interaktif dengan fitur pencarian dan filter genre secara instan. Untuk pembelian buku, pengguna dapat mengelola keranjang belanja, memilih kurir pengiriman saat checkout, mengunggah bukti pembayaran, dan memantau status pesanan bertahap. Sedangkan pada layanan perpustakaan, pengguna dapat mengajukan peminjaman buku gratis dengan batas kuota maksimal 2 buku aktif selama 1–7 hari. Pengguna dibekali dashboard personal untuk memantau sisa hari pinjaman, riwayat buku yang selesai dikembalikan, pelunasan denda keterlambatan harian secara mandiri, serta fitur live chat bantuan ke admin yang dilengkapi proteksi anti-spam (kuota maksimal 3 pesan beruntun).

Dari sisi Administrator (Admin), Rainpedia menyediakan panel kontrol operasional untuk memantau ringkasan transaksi, peringatan buku stok menipis, dan arus peminjaman secara real-time. Admin mengelola inventaris dengan sistem dual-stock (memisahkan stok penjualan dan stok peminjaman), memproses verifikasi pesanan baru, serta menyetujui pengembalian buku (return request) yang terkunci oleh validasi bebas denda. Admin juga memiliki akses manajemen pengguna (termasuk blokir akun), tombol direct chat ke anggota, cetak laporan transaksi dan sirkulasi formal, serta prototipe statis di folder docs yang siap di-deploy ke GitHub Pages dengan tampilan yang 100% responsif di smartphone.`,
        tech: "Laravel, MySQL, JavaScript",
        github: "https://github.com/zegow8/rainpedia.git",
        demo: "https://zegow8.github.io/rainpedia/",
        images: ["assets/110.png", "assets/111.png", "assets/112.png"],
        filter: "laravel",
        pinned: true
    },
    {
        title: "Recyclefy",
        desc: `Recyclefy adalah platform pengelolaan sampah berbasis komunitas dengan sistem multi-user yang terdiri dari user, admin wilayah, dan super admin. Aplikasi dilengkapi dengan fitur autentikasi login dan registrasi berdasarkan role serta sistem tukar sampah jadi poin. User dapat menyetorkan sampah ke 3 wilayah (Kemayoran, Sumur Batu, Cempaka Putih) dan mendapatkan poin yang bisa ditukar dengan produk daur ulang.

Admin wilayah memiliki dashboard yang menampilkan informasi total sampah masuk hari ini, total sampah keseluruhan, total barang diproduksi, barang menunggu persetujuan super admin, dan barang sudah di-ACC. Selain itu, admin wilayah dapat melihat riwayat sampah dari user, mengelola stok sampah, memproduksi barang daur ulang berdasarkan resep dari super admin, mengirim barang produksi ke super admin, serta melihat riwayat produksi dengan tiga status yaitu tersedia, pending, dan selesai.

Super admin memiliki dashboard lengkap yang menampilkan total user, total admin, barang nunggu ACC, total stok, total transaksi, total koin, total jenis sampah, dan total resep. Super admin dapat mengelola seluruh user, mengelola jenis sampah melalui fitur CRUD, mengelola resep daur ulang dengan bahan baku dari jenis sampah, mengelola wilayah, mengonfirmasi kiriman barang dari admin wilayah, dan mengelola transaksi pembelian user dengan tiga status yaitu dipesan, dikirim, dan selesai.

Pada sisi user, tersedia dashboard aktivitas yang menampilkan total poin, poin terpakai, total setor, total unit sampah, dan total berat. User dapat melihat daftar produk di toko dengan fitur pencarian dan filter harga, melakukan pemesanan produk dengan poin yang dimiliki, melihat riwayat setor dan riwayat pembelian, serta mengelola akun melalui fitur ubah nama, no telepon, alamat, dan kata sandi. Sistem akan menghitung total poin secara otomatis saat user menyetorkan sampah dan mengurangi poin saat user membeli produk. Stok barang akan berkurang secara otomatis setelah pembelian dan bertambah saat super admin mengonfirmasi kiriman dari admin wilayah.`,
        tech: "Next.js, PostgreSQL, Prisma",
        github: "https://github.com/zegow8/recyclefy",
        demo: null,
        images: ["assets/rec1.png", "assets/rec2.png", "assets/rec3.png"],
        filter: "nextjs",
        pinned: true
    },
    {
        title: "Budgetify",
        desc: `Budgetify adalah aplikasi pengelola keuangan pribadi berbasis web yang dikembangkan dengan PHP Native dan MySQL. Aplikasi ini dirancang untuk membantu individu mencatat, memantau, dan mengontrol arus keuangan sehari-hari secara praktis dan terstruktur.

Fitur unggulan aplikasi ini meliputi sistem autentikasi pengguna (registrasi dan login), manajemen transaksi (CRUD pemasukan dan pengeluaran), statistik visual berbentuk grafik pie chart per kategori, serta dompet digital yang membedakan saldo tunai (cash) dan saldo elektronik, dilengkapi dengan fitur pemindahan dana antar dompet. Pengguna juga dapat membuat kategori transaksi secara mandiri sesuai kebutuhan, serta melakukan filtering data berdasarkan bulan, kategori, rentang tanggal, dan kata kunci.

Dari sisi teknis, aplikasi ini menggunakan PDO untuk koneksi database yang aman, jQuery & AJAX untuk interaksi tanpa reload halaman, serta Chart.js untuk visualisasi data. Desain antarmuka dibangun dengan pendekatan responsive sehingga optimal diakses melalui laptop maupun perangkat mobile. Aplikasi ini juga dilengkapi dengan fitur auto-detect environment, sehingga dapat berjalan baik di lingkungan localhost maupun server production.`,
        tech: "PHP Native, MySQL, JavaScript",
        github: "https://github.com/zegow8/budgetify",
        demo: "http://budgetify.free.nf/index.php",
        images: ["assets/bud1.png", "assets/bud2.png", "assets/bud3.png", "assets/bud4.png"],
        filter: "phpnative",
        pinned: true
    },
    {
        title: "Raiental",
        desc: `Platform penyewaan website dan game berbasis web dengan sistem multi-user yang terdiri dari admin dan user. Aplikasi dilengkapi dengan fitur autentikasi login dan registrasi berdasarkan role serta sistem penyewaan digital dengan pilihan durasi per jam, hari, minggu, dan bulan.

Admin memiliki dashboard yang menampilkan informasi total pengguna, total pendapatan, total pesanan, pesanan aktif, pesanan kadaluarsa, dan pesanan pending. Selain itu, admin dapat melihat seluruh data pengguna, memantau peminjaman aktif, mengelola produk melalui fitur CRUD, serta memverifikasi pesanan yang masuk dari pengguna. Sistem pesanan menerapkan tiga status, yaitu menunggu konfirmasi, aktif, dan kadaluarsa, yang dikelola melalui halaman manajemen pesanan dan riwayat transaksi.

Pada sisi pengguna, tersedia dashboard yang menampilkan total transaksi, total pengeluaran, pesanan aktif, dan pesanan kadaluarsa. Pengguna dapat melihat daftar produk yang tersedia, melakukan pencarian berdasarkan nama, kategori, dan rentang harga, melihat detail produk, menambahkan produk ke keranjang, memilih durasi sewa, serta melakukan checkout. Sistem akan menghitung total biaya secara otomatis berdasarkan harga dan durasi yang dipilih.

Pengguna juga dapat melihat riwayat penyewaan, memantau status pesanan, mengakses tautan produk selama masa sewa masih aktif, serta mengelola akun melalui fitur ubah username, email, dan kata sandi. Masa sewa akan mulai dihitung setelah pesanan disetujui oleh admin dan akses produk akan otomatis berakhir ketika durasi sewa telah habis.`,
        tech: "Next.js, Prisma, PostgreSQL",
        github: "https://github.com/zegow8/Raiental.git",
        demo: null,
        images: ["assets/raiental1.png", "assets/raiental2.png"],
        filter: "nextjs",
        pinned: true
    },

    // ====== PROYEK LAINNYA ======
    {
        title: "LaBorrow",
        desc: `Laborrow adalah aplikasi web peminjaman alat laboratorium berbasis PHP Native dan MySQL yang dirancang untuk mendigitalkan seluruh alur birokrasi dan tata kelola inventaris secara terpadu. Sistem ini menghubungkan siswa dan administrator secara transparan, di mana siswa dapat mencari alat, memantau rincian unit yang siap pakai maupun yang sedang dalam perbaikan, serta mengajukan pinjaman dengan validasi jadwal yang ketat.

Siklus peminjaman berjalan dinamis melalui tahapan status yang terintegrasi, dimulai dari status Pending saat diajukan, Disetujui saat diverifikasi oleh admin dengan pemotongan stok otomatis, status Dipinjam setelah siswa atau petugas mengonfirmasi serah terima fisik di lab, hingga status Dikembalikan yang secara otomatis memulihkan jumlah stok inventaris.

Di sisi administrator, sistem menyediakan dashboard analitik untuk memantau ringkasan unit baik, unit rusak, dan stok kritis, disertai fitur persetujuan pinjam, pencatatan alasan jika ditolak, serta manajemen aksi cepat untuk mengalihkan unit rusak tanpa mengunci unit yang masih bagus. Seluruh ekosistem ini dilengkapi dengan modul obrolan interaktif real-time berbasis Vanilla JavaScript Fetch API agar siswa dapat berkonsultasi langsung dengan petugas laboratorium, disajikan dalam antarmuka modern bernuansa Maroon dan Soft Pink yang sepenuhnya responsif.`,
        tech: "PHP Native, MySQL, JavaScript",
        github: "https://github.com/zegow8/laborrow",
        demo: null,
        images: ["assets/114.png", "assets/115.png", "assets/116.png"],
        filter: "phpnative"
    },
    {
        title: "BAZAR XII-PPLG 17 September 2026",
        desc: `Bazar XII-PPLG adalah website katalog event interaktif untuk mempermudah pengunjung melihat menu dan memesan produk bazar langsung dari smartphone mereka. Dibangun menggunakan Vanilla HTML, CSS, dan JavaScript murni, website ini menyajikan 10 produk dengan layout responsif (4 kolom di laptop, 2 kolom di HP).

Website ini dilengkapi fitur Direct-to-WhatsApp yang otomatis mengisi pesan berisi nama produk yang dipilih, memangkas alur pemesanan agar lebih cepat. Pengunjung juga dapat melihat detail foto produk lebih besar melalui fitur Kustom Lightbox yang mendukung navigasi swipe.

Untuk pengalaman pengguna, diterapkan desain antarmuka pastel dengan animasi transisi yang halus, serta fitur background music pintar yang menyesuaikan kebijakan autoplay browser.`,
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/bazar17sept2026",
        demo: "https://zegow8.github.io/bazar17sept2026/",
        images: ["assets/101.png"],
        filter: "htmlcssjs"
    },
    {
        title: "KJP #1 LATIHAN USK",
        desc: `Aplikasi web full-stack berbasis PHP Native dan MySQL yang dibangun sebagai latihan Uji Sertifikasi Kompetensi. Sistem ini mensimulasikan alur pengumpulan data Kartu Jakarta Pintar dengan menerapkan pembagian hak akses (multi-role): Guru sebagai admin yang bertugas mengelola data kelas, memantau statistik input, dan memvalidasi (ACC) data siswa; serta Murid yang dapat melakukan registrasi mandiri, mengisi formulir KJP secara lengkap, dan mengelola datanya sendiri.

Dilengkapi dengan fitur pencarian dinamis, sistem validasi status berlapis, dan antarmuka pengguna bergaya Neo-Brutalism yang dirancang manual tanpa template—menunjukkan pemahaman menyeluruh mulai dari perancangan database relasional, keamanan autentikasi, hingga pembuatan UI/UX yang responsif.`,
        tech: "PHP Native, MySQL",
        github: "https://github.com/zegow8/manajemen-KJP.git",
        demo: null,
        images: ["assets/107.png", "assets/108.png", "assets/109.png"],
        filter: "phpnative"
    },
    {
        title: "Portofolio Pancasila Lyta",
        desc: `Portofolio ini merupakan aplikasi web berbasis PHP Native dan MySQL yang dirancang untuk mendokumentasikan penerapan nilai-nilai Pancasila dalam kegiatan sehari-hari. Aplikasi dikembangkan dengan sistem multi-user yang terdiri dari dua peran, yaitu admin dan user, dengan fitur autentikasi login berbasis role untuk memastikan keamanan akses data.

Pada sisi admin, tersedia dashboard yang menampilkan informasi statistik seperti total kegiatan, total refleksi, dan total penilaian yang telah dibuat. Admin dapat mengelola seluruh data kegiatan harian melalui fitur CRUD (Create, Read, Update, Delete), mengunggah dokumentasi berupa gambar, memberikan penilaian mingguan beserta alasan, serta menulis refleksi bulanan. Sistem juga dilengkapi dengan fitur pencarian data berdasarkan bulan dan tahun, serta tampilan kalender interaktif yang menunjukkan aktivitas per tanggal beserta keterangan minggu ke-berapa.

Pada sisi pengguna (user), tersedia tampilan portofolio yang menampilkan data diri, foto profil, logo dan sila Pancasila, serta laporan kegiatan bulanan dalam bentuk tabel mingguan. Pengguna dapat melihat seluruh data kegiatan, dokumentasi, penilaian, dan refleksi yang telah diinput oleh admin tanpa dapat mengubah atau menghapus data. Sistem juga menampilkan kalender yang menunjukkan tanggal-tanggal yang telah terisi data, sehingga memudahkan pengguna dalam melihat pola aktivitas selama satu bulan penuh.`,
        tech: "PHP Native, MySQL, CSS Native",
        github: "https://github.com/zegow8/Portofolio-Pancasila-Lyta",
        demo: "http://porto-pancasila-lyta.free.nf/?i=1",
        images: ["assets/portopsila1.png", "assets/portopsila2.png", "assets/portopsila3.png"],
        filter: "phpnative"
    },
    {
        title: "Olshop Prog Lyta",
        desc: `Aplikasi ini merupakan platform e-commerce berbasis web dengan sistem multi-user yang terdiri dari admin dan user. Sistem menyediakan fitur autentikasi login dan registrasi, manajemen produk, keranjang belanja, checkout, serta pengelolaan pesanan secara terintegrasi.

Pada sisi admin, tersedia dashboard yang menampilkan total produk, total pengguna, total pesanan, dan total pendapatan. Admin juga dapat melihat seluruh daftar pengguna yang terdaftar dalam sistem. Fitur manajemen produk memungkinkan admin melakukan create, read, update, dan delete (CRUD) data produk yang mencakup gambar, nama produk, harga, stok, dan deskripsi. Stok produk akan berkurang secara otomatis setelah pesanan berhasil dibuat oleh pengguna. Selain itu, admin dapat mengelola pesanan dengan fitur pencarian berdasarkan nama pelanggan, email, ID pesanan, maupun status pesanan. Sistem mendukung alur status pesanan mulai dari Pending, Paid, Shipped, Delivered, hingga Cancelled.

Pada sisi pengguna, tersedia halaman katalog produk dengan fitur pencarian, pengurutan berdasarkan harga, tanggal, dan jumlah stok, serta filter rentang harga. Produk ditampilkan menggunakan sistem pagination dan produk yang kehabisan stok secara otomatis ditempatkan pada urutan terakhir. Pengguna dapat menambahkan produk ke keranjang, memberikan catatan khusus kepada penjual, melakukan checkout dengan mengisi alamat dan metode pembayaran, serta mengonfirmasi pesanan. Selain itu, pengguna dapat melihat riwayat pesanan, memantau status transaksi secara real-time, melihat detail pesanan, dan mengelola akun melalui fitur perubahan username, email, dan kata sandi.`,
        tech: "Next.js, PostgreSQL, Prisma",
        github: "https://github.com/zegow8/olshop-prog-lyta.git",
        demo: null,
        images: ["assets/olshop1.png", "assets/olshop2.png"],
        filter: "nextjs"
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
        images: ["assets/gstore1.png", "assets/gstore2.png"],
        filter: "laravel"
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
        images: ["assets/pshop1.png", "assets/pshop2.png"],
        filter: "laravel"
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
        images: ["assets/wash1.png", "assets/wash2.png"],
        filter: "phpnative"
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
        images: ["assets/kascafe1.png"],
        filter: "phpnative"
    },
    {
        title: "Lassavore Restaurant",
        desc: "Website profil restoran yang memperkenalkan informasi dan layanan restoran. Terdapat menu makanan, minuman, dessert dengan animasi interaktif, serta fitur pesan sekarang terhubung ke Instagram.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/lassavore-restaurant.git",
        demo: "https://zegow8.github.io/lassavore-restaurant",
        images: null,
        filter: "htmlcssjs"
    },
    {
        title: "Librify",
        desc: "Aplikasi peminjaman buku berbasis Android dengan dua role (Admin & User), dilengkapi fitur CRUD buku, upload cover, peminjaman buku, dan konfirmasi pengembalian menggunakan database SQLite.",
        tech: "Android Studio, Java, SQLite",
        github: "https://github.com/zegow8/Librify.git",
        demo: null,
        images: null,
        filter: "android"
    },
    {
        title: "DeepFocus",
        desc: "APK Manajemen Timer Belajar berbasis android. Dilengkapi fitur timer belajar + istirahat, preset cepat, statistik, profile, dan goals.",
        tech: "Android Studio, Java",
        github: "https://github.com/zegow8/DeepFocus.git",
        demo: null,
        images: null,
        filter: "android"
    },
    {
        title: "Taskify",
        desc: "Aplikasi personal untuk siswa dalam mengelola tugas atau pekerjaan rumah (PR). Membantu mengorganisasi tugas berdasarkan status penyelesaiannya, dilengkapi fitur catatan motivasi.",
        tech: "Android Studio, Java",
        github: "https://github.com/zegow8/Taskify.git",
        demo: null,
        images: null,
        filter: "android"
    }
];

// ==========================================
// DATA: DESIGN GALLERY (10 Best Design)
// ==========================================
const designs = [
    {
        title: "LaBorrow",
        desc: "UI Web Peminjaman Alat Laboratorium Sekolah",
        imgFile: "assets/117.png",
        figmaUrl: "https://www.figma.com/design/i86HxhzROZPhvPyngTSOGd/LaBorrow?node-id=0-1&p=f&t=6h2X4K84kI3OrXBy-0",
        filter: "desktop"
    },
    {
        title: "GoAnywhere",
        desc: "UI Web Rental Mobil & Motor Jabodetabek (Proyek Tim)",
        imgFile: "assets/113.png",
        figmaUrl: "https://www.figma.com/design/msmIgLpX8zeBFUg210ACn7/GoAnywhere?node-id=0-1&p=f&t=OOMkEXnys58L7m2j-0",
        filter: "desktop"
    },
    {
        title: "Raiental",
        desc: "UI Web Penyewaan Game & Aplikasi Android",
        imgFile: "assets/design-raiental.png",
        figmaUrl: "https://www.figma.com/design/xSAGoQEJEHgmIatoJ72F0c/RAIENTAL-NEXT-JS?t=pMNI5Cw47BnaeKfm-1",
        filter: "desktop"
    },
    {
        title: "Librify",
        desc: "UI Aplikasi Peminjaman Buku Android",
        imgFile: "assets/design-librify.png",
        figmaUrl: "https://www.figma.com/design/zzv5EiF66McfZbsjwgL2Mo/LIBRIFY-ANDROID-STUDIO?t=pMNI5Cw47BnaeKfm-1",
        filter: "mobile"
    },
    {
        title: "DeepFocus",
        desc: "UI Manajemen Timer Belajar Android",
        imgFile: "assets/design-deepfocus.png",
        figmaUrl: "https://www.figma.com/design/V1veFYxIJ1Ny0Dm3bvxyoT/DeepFocus?t=pMNI5Cw47BnaeKfm-1",
        filter: "mobile"
    },
    {
        title: "AppStore",
        desc: "UI App Store (Personal Project)",
        imgFile: "assets/design-appstore.png",
        figmaUrl: "https://www.figma.com/design/VezA7NIrmUStKZ3Sp6GpFD/AppStoreLyta?node-id=0-1&p=f&t=pMNI5Cw47BnaeKfm-0",
        filter: "mobile"
    },
    {
        title: "Taskify",
        desc: "UI Aplikasi Manajemen Tugas Android",
        imgFile: "assets/design-taskify.png",
        figmaUrl: "https://www.figma.com/design/RBkNQMvNPpYpAOUczeAhID/Taskify-Android-Studio?t=pMNI5Cw47BnaeKfm-0",
        filter: "mobile"
    },
    {
        title: "Lassavore Hotel",
        desc: "UI Website Hotel & Restoran",
        imgFile: "assets/lassavore hotel.png",
        figmaUrl: "https://www.figma.com/design/sEYITVlZ0Al1JTiGAvN9R4/skibidi-hotel?node-id=1-5&t=pMNI5Cw47BnaeKfm-1",
        filter: "desktop"
    },
    {
        title: "Koperasi 21",
        desc: "UI Sistem Koperasi Sekolah",
        imgFile: "assets/design-koperasi 21.png",
        figmaUrl: "https://www.figma.com/design/S3N9182xrcLbV7cc0odFDa/KOPERASI-11-EARLYTA?node-id=0-1&t=pMNI5Cw47BnaeKfm-1",
        filter: "desktop"
    },
    {
        title: "IT Club Komik",
        desc: "UI Komik Digital (IT Club Project)",
        imgFile: "assets/itkomik.png",
        figmaUrl: "https://www.figma.com/design/EraJYu2GyywCHkzz1PRlKJ/figmay-it-komik?node-id=1-2&t=pMNI5Cw47BnaeKfm-1",
        filter: "mobile"
    }
];

// ==========================================
// DATA: GAMES (7 Games Total)
// ==========================================
const games = [
    // ====== 1 GAME TERBARU (8 NOVEMBER 2026) ======
    {
        title: "RAIN PAIRS FINAL",
        desc: `Rain Pairs adalah game memory matching berbasis web yang dikembangkan menggunakan GDevelop 5. Mengusung tema unik, game ini mengajak pemain untuk mengasah daya ingat dengan mencocokkan kartu bergambar logo-logo Artificial Intelligence populer (seperti ChatGPT, Gemini, Claude) serta tools pemrograman (seperti Python, Git, Java, dan Figma).
Cara Bermain & Sistem Permainan:
Pemain dituntut untuk mengingat posisi kartu dengan mengkliknya satu per satu. Jika dua kartu yang dibalik memiliki gambar yang sama, kartu akan hancur dan pemain mendapatkan poin. Namun, jika tidak cocok, kartu akan tertutup kembali dan pemain harus mengingat posisinya untuk kesempatan berikutnya. Permainan akan berakhir jika semua pasangan berhasil ditemukan sebelum waktu dan giliran habis.
Untuk memberikan pengalaman bermain yang berlapis, game ini dirancang dengan 3 Tingkat Kesulitan yang berbeda:
Level 1: 6 pasang kartu, dengan batas waktu 60 detik dan 20 giliran.
Level 2: 8 pasang kartu, dengan batas waktu 90 detik dan 25 giliran.
Level 3: 12 pasang kartu, dengan batas waktu 180 detik dan 30 giliran.
Selain itu, terdapat Sistem Kombo di mana pemain bisa mendapatkan bonus skor hingga 5x lipat jika berhasil mencocokkan kartu secara beruntun. Sebaliknya, kesalahan akan mereset kombo dan mengurangi skor, menciptakan elemen tantangan dan risk-reward yang seru.
Aspek Teknis & Fitur Tambahan:
Dari sisi pengembangan, game ini dibangun dengan manajemen state (Finite State Machine) yang solid untuk mengatur transisi antar layar—mulai dari Home, How to Play, Gameplay, hingga layar kemenangan/kekalahan. Terdapat juga fitur Leaderboard dengan sistem input nama pemain, sehingga skor dari ketiga level akan diakumulasi dan tercatat di papan peringkat.
Untuk memperkaya pengalaman pengguna, game ini memanfaatkan fitur animasi GDevelop seperti efek kartu berputar 3D (3D Flip), transisi fade, dan efek partikel bintang yang dipadukan dengan sound effects responsif. Game ini juga dioptimalkan sebagai build HTML5, sehingga dapat dimainkan langsung di browser (PC maupun mobile) tanpa perlu proses unduh tambahan.`,
        tech: "GDevelop 5",
        github: null,
        demo: "https://zegow8.itch.io/rain-pairs-final",
        img: "assets/102.png",
        filter: "gdevelop"
    },
    // ====== 6 GAME SEBELUMNYA ======
    {
        title: "Rain Pairs Draft",
        desc: `rain pairs merupakan game memory card bertema teknologi yang dikembangkan sebagai permainan untuk menguji kemampuan pemain dalam mengingat posisi dan mencocokkan pasangan kartu. game ini menggunakan berbagai ikon dan nama teknologi seperti ai tools, bahasa pemrograman, serta software development sebagai elemen kartu.

pada awal permainan, pemain diberikan kesempatan untuk melihat susunan kartu sebelum seluruh kartu ditutup. setelah permainan dimulai, pemain harus membuka dua kartu secara bergantian dan mencari kartu yang memiliki pasangan yang sama. apabila kedua kartu cocok, pasangan tersebut akan tetap terbuka dan pemain mendapatkan poin. apabila tidak cocok, kartu akan kembali tertutup sehingga pemain perlu mengingat posisi kartu yang sebelumnya telah dibuka.

untuk membuat gameplay lebih menantang, rain pairs memiliki sistem combo yang memberikan tambahan skor ketika pemain berhasil menemukan pasangan secara berturut-turut. kesalahan dalam mencocokkan kartu akan mereset combo dan memberikan pengurangan skor. permainan juga dibatasi dengan timer 180 detik, sehingga pemain harus menyelesaikan seluruh pasangan sebelum waktu habis.

game ini terdiri dari 24 kartu atau 12 pasangan, serta dilengkapi dengan sistem scoring, combo, timer, kondisi menang/kalah, input nama pemain, dan leaderboard untuk menampilkan peringkat berdasarkan skor yang diperoleh.

secara keseluruhan, rain pairs dirancang untuk menggabungkan konsep permainan memory sederhana dengan elemen kompetitif melalui manajemen waktu, strategi mengingat posisi kartu, dan sistem combo, sehingga pemain tidak hanya bergantung pada keberuntungan saat membuka kartu.
platform: html5
genre: card / memory game
jumlah kartu: 24 kartu / 12 pasangan
fitur utama: timer, scoring, combo system, leaderboard, win/lose system, player name input.`,
        tech: "GDevelop 5",
        github: null,
        demo: "https://zegow8.itch.io/rain-pairs",
        img: "assets/pai1.png",
        filter: "gdevelop"
    },
    {
        title: "MEOWMORY GAME",
        desc: "Game memory match 4×4 dengan gambar kucing. Pemain harus mencocokkan 8 pasang kartu dalam waktu 60 detik. Setiap kartu menampilkan foto kucing yang unik, dan pemain ditantang untuk mengingat posisi setiap gambar. Fitur: timer 60 detik, hitungan langkah, high score tersimpan di localStorage, dan kontrol tap/klik yang responsif di desktop maupun HP.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/meowmorygame.git",
        demo: "https://zegow8.github.io/meowmorygame/",
        img: "assets/meow1.png",
        filter: "htmlcssjs"
    },
    {
        title: "MAZE GAME",
        desc: "Game labirin interaktif dengan generate maze procedural (40×40) pake algoritma recursive backtracking. Pemain punya 3 nyawa, kalo nabrak tembok reset ke start. Multi-platform: arrow keys buat desktop, tombol sentuh buat HP.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/maze-game.git",
        demo: "https://zegow8.github.io/maze-game/",
        img: "assets/maze1.png",
        filter: "htmlcssjs"
    },
    {
        title: "OHIO BLOCK",
        desc: "Game puzzle blok dengan grid 8×8. Pemain drag & drop blok warna-warni ke dalam grid untuk mengisi baris atau kolom penuh. Setiap kali baris/kolom penuh, blok akan hilang dan pemain mendapat poin. Fitur: score & high score (localStorage), level naik setiap 100 poin, hint untuk menunjukkan tempat yang bisa diisi, new shapes untuk mengganti blok yang tersedia, dan kontrol drag & drop yang responsif di desktop (mouse) maupun HP (touch).",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/ohioblock.git",
        demo: "https://zegow8.github.io/ohioblock/",
        img: "assets/ohio1.png",
        filter: "htmlcssjs"
    },
    {
        title: "FLAPPY BIRD",
        desc: "Game arcade klasik dengan kontrol sederhana. Pemain mengontrol burung yang terbang melewati rintangan pipa dengan cara mengetuk/klik untuk melompat. Fitur: 7 tipe rintangan (normal, narrow, wide, moving, double, zigzag, gapChange) yang semakin sulit seiring bertambahnya score, gravity & jump physics, high score tersimpan di localStorage, dan kontrol multi-platform: klik/tap di desktop, swipe up di HP.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/flappy-bird-hand-gesture.git",
        demo: "https://zegow8.github.io/flappy-bird-hand-gesture/",
        img: "assets/flappy1.png",
        filter: "htmlcssjs"
    },
    {
        title: "PLATFORMER FINAL",
        desc: "Aplikasi ini merupakan game platformer 2D yang dikembangkan menggunakan GDevelop 5. Pemain harus menjelajahi level, mengalahkan musuh, mengumpulkan koin, dan mencapai portal tujuan sebelum waktu habis. Game dilengkapi dengan sistem 5 nyawa, timer permainan, checkpoint untuk menyimpan progres, serta dua jenis skor yang memengaruhi kemenangan pemain.\n\nScore A diperoleh dengan mengalahkan monster Fly, sedangkan Score B diperoleh dengan mengalahkan monster Fire dan mengumpulkan koin. Setiap koin memberikan 10 poin, monster Fly memberikan 20 poin, dan monster Fire memberikan 25 poin.\n\nPemain dinyatakan menang apabila berhasil mencapai portal dengan Score A lebih dari 200 poin dan Score B lebih dari 175 poin sebelum waktu permainan berakhir. Sebaliknya, pemain akan kalah apabila gagal mencapai target skor atau tidak berhasil mencapai portal sebelum batas waktu yang tersedia.\n\nGame juga dilengkapi dengan halaman petunjuk permainan, scene menu utama, sistem checkpoint, serta tampilan kemenangan dan kekalahan yang muncul berdasarkan hasil permainan pemain.",
        tech: "GDevelop 5",
        github: null,
        demo: "https://zegow8.itch.io/platformer-final",
        img: "assets/plat1.png",
        filter: "gdevelop"
    }
];

// ==========================================
// DATA: CERTIFICATIONS
// ==========================================
const certifications = [
    {
        title: "TECC (Test of English Communication Competency)",
        desc: "Score: 650 (setara TOEIC 650) – LCC Prediction, Agustus 2025",
        detail: "Listening: 360 | Reading: 290",
        imgFile: "assets/TECC-Lyta.png",
        badge: "Score 650 / TOEIC Equivalent",
        scores: [
            { label: "Listening", val: 360, max: 495, pct: "72%" },
            { label: "Reading", val: 290, max: 495, pct: "58%" }
        ]
    },
    {
        title: "UKBI (Uji Kemahiran Berbahasa Indonesia)",
        desc: "Skor: 673 – Peringkat: Sangat Unggul",
        detail: "Mendengarkan: 605 | Merespons Kaidah: 704 | Membaca: 710",
        imgFile: "assets/UKBI lyta.png",
        badge: "Predikat: Sangat Unggul",
        scores: [
            { label: "Mendengarkan", val: 605, max: 800, pct: "75%" },
            { label: "Merespons Kaidah", val: 704, max: 800, pct: "88%" },
            { label: "Membaca", val: 710, max: 800, pct: "89%" }
        ]
    }
];

// ==========================================
// STATE VARIABLES
// ==========================================
let currentProjectFilter = 'all';
let currentSearchQuery = '';

// ==========================================
// DYNAMIC GITHUB REPO FETCHER & SYNC
// ==========================================
let statsCounterAnimated = false;

function applyCachedRepoCount() {
    try {
        const cached = localStorage.getItem('cached_github_repos');
        if (cached) {
            const count = parseInt(cached, 10);
            if (!isNaN(count) && count > 0) {
                const statEl = document.getElementById('github-repo-count');
                if (statEl) {
                    statEl.dataset.target = count;
                    statEl.textContent = count;
                }
            }
        }
    } catch (e) {
        // LocalStorage might be disabled in private mode
    }
}

function animateNumber(el, start, end) {
    if (start === end) return;
    const diff = end - start;
    const step = diff > 0 ? 1 : -1;
    let curr = start;
    const duration = 600;
    const stepTime = Math.max(30, Math.floor(duration / Math.abs(diff)));
    const timer = setInterval(() => {
        curr += step;
        el.textContent = curr;
        if (curr === end) {
            clearInterval(timer);
            el.textContent = end;
        }
    }, stepTime);
}

async function fetchLiveGitHubRepoCount() {
    // 1. Instantly apply cached repo count if available
    applyCachedRepoCount();

    // 2. Fetch fresh live data from GitHub API with cache-busting timestamp
    try {
        const response = await fetch(`https://api.github.com/users/zegow8?t=${Date.now()}`);
        if (response.ok) {
            const data = await response.json();
            if (data && typeof data.public_repos === 'number') {
                const freshCount = data.public_repos;
                
                try {
                    localStorage.setItem('cached_github_repos', freshCount.toString());
                } catch (e) {}

                // Update hero stats counter
                const statEl = document.getElementById('github-repo-count');
                if (statEl) {
                    const currentDisplayed = parseInt(statEl.textContent, 10);
                    statEl.dataset.target = freshCount;

                    if (statsCounterAnimated) {
                        // If stats counter already finished counting up, animate smoothly to fresh count
                        if (!isNaN(currentDisplayed) && currentDisplayed !== freshCount) {
                            animateNumber(statEl, currentDisplayed, freshCount);
                        } else {
                            statEl.textContent = freshCount;
                        }
                    } else {
                        // If stats counter hasn't animated yet, set initial text & target so it counts up to freshCount
                        statEl.dataset.target = freshCount;
                        statEl.textContent = freshCount;
                    }
                }
            }
        }
    } catch (e) {
        // Fallback gracefully without breaking UI
    }
}

// ==========================================
// HELPER: TECH TAGS GENERATOR
// ==========================================
function renderTechTags(techString) {
    if (!techString) return '';
    const items = techString.split(',').map(s => s.trim());
    return items.map(item => {
        let icon = 'fas fa-code';
        const lower = item.toLowerCase();
        if (lower.includes('react') || lower.includes('next')) icon = 'fab fa-react';
        else if (lower.includes('laravel')) icon = 'fab fa-laravel';
        else if (lower.includes('php')) icon = 'fab fa-php';
        else if (lower.includes('html')) icon = 'fab fa-html5';
        else if (lower.includes('css') || lower.includes('tailwind')) icon = 'fab fa-css3-alt';
        else if (lower.includes('javascript') || lower.includes('js')) icon = 'fab fa-js';
        else if (lower.includes('android')) icon = 'fab fa-android';
        else if (lower.includes('java')) icon = 'fab fa-java';
        else if (lower.includes('postgres') || lower.includes('mysql') || lower.includes('sqlite') || lower.includes('database')) icon = 'fas fa-database';
        else if (lower.includes('firebase')) icon = 'fas fa-fire';
        else if (lower.includes('bootstrap')) icon = 'fab fa-bootstrap';
        else if (lower.includes('prisma')) icon = 'fas fa-gem';
        else if (lower.includes('gdevelop') || lower.includes('unity')) icon = 'fas fa-gamepad';

        return `<span class="tech-pill"><i class="${icon}"></i> ${item}</span>`;
    }).join('');
}

// ==========================================
// RENDER: PROJECTS
// ==========================================
function renderProjects() {
    const container = document.getElementById('projects-grid');
    const countLabel = document.getElementById('project-visible-count');
    if (!container) return;

    let filtered = projects.filter(p => {
        const matchesCategory = currentProjectFilter === 'all' || p.filter === currentProjectFilter;
        const query = currentSearchQuery.toLowerCase().trim();
        if (!query) return matchesCategory;

        const matchesQuery = p.title.toLowerCase().includes(query) ||
                             p.desc.toLowerCase().includes(query) ||
                             p.tech.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    // Pinned projects stay gracefully on top while preserving defined order
    filtered.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return 0;
    });

    if (countLabel) {
        countLabel.textContent = filtered.length;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon"><i class="fas fa-search-minus"></i></div>
                <h3>Tidak ada proyek yang sesuai</h3>
                <p>Coba kata kunci pencarian lain atau pilih filter kategori yang berbeda.</p>
                <button class="btn btn-secondary" onclick="resetProjectFilters()">
                    <i class="fas fa-redo"></i> Reset Filter
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map((project, index) => {
        let mediaHtml = '';
        if (project.images && project.images.length > 0) {
            if (project.images.length === 1) {
                mediaHtml = `
                    <div class="card-media-wrapper single-media">
                        <img src="${project.images[0]}" alt="${project.title}" class="project-img single-img" onclick="openLightbox('${project.images[0]}', '${project.title}')" loading="lazy">
                        <div class="media-hover-overlay" onclick="openLightbox('${project.images[0]}', '${project.title}')">
                            <span class="zoom-badge"><i class="fas fa-search-plus"></i> Perbesar</span>
                        </div>
                    </div>
                `;
            } else {
                let slidesHtml = project.images.map((img, i) => `
                    <img src="${img}" alt="${project.title} - Screenshot ${i + 1}" class="slide-img ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="openLightbox('${img}', '${project.title} (${i+1}/${project.images.length})')" loading="lazy">
                `).join('');

                let dotsHtml = project.images.map((_, i) => `
                    <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}" title="Slide ${i + 1}"></span>
                `).join('');

                mediaHtml = `
                    <div class="card-media-wrapper slideshow-container" data-project="${index}">
                        ${slidesHtml}
                        <button class="slideshow-btn prev" data-project="${index}" aria-label="Slide sebelumnya"><i class="fas fa-chevron-left"></i></button>
                        <button class="slideshow-btn next" data-project="${index}" aria-label="Slide berikutnya"><i class="fas fa-chevron-right"></i></button>
                        <div class="slideshow-counter">1 / ${project.images.length}</div>
                        <div class="slideshow-dots">${dotsHtml}</div>
                    </div>
                `;
            }
        } else {
            mediaHtml = `
                <div class="card-media-wrapper placeholder-media">
                    <div class="placeholder-content">
                        <i class="fas fa-laptop-code"></i>
                        <span>${project.title}</span>
                    </div>
                </div>
            `;
        }

        const isLong = project.desc.length > 120;
        const shortDesc = isLong ? project.desc.substring(0, 120).trim() + '...' : project.desc;
        const formattedFullDesc = project.desc.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

        const demoLink = project.demo 
            ? `<a href="${project.demo}" target="_blank" class="card-link demo-link" title="Buka Live Demo"><i class="fas fa-external-link-alt"></i> <span>Live Demo</span></a>`
            : '';

        const githubLink = project.github 
            ? `<a href="${project.github}" target="_blank" class="card-link github-link" title="Lihat Source Code di GitHub"><i class="fab fa-github"></i> <span>GitHub</span></a>`
            : '';

        return `
            <article class="project-card modern-card ${project.pinned ? 'card-pinned' : ''}" data-index="${index}">
                <div class="card-header-bar">
                    <div class="card-badge-group">
                        <span class="card-category-badge">${project.filter.toUpperCase()}</span>
                        ${project.pinned ? `<span class="card-pinned-badge"><i class="fas fa-thumbtack"></i> Pinned</span>` : ''}
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                </div>

                ${mediaHtml}

                <div class="project-desc" id="desc-${index}">
                    <span class="short-desc">${shortDesc}</span>
                    ${isLong ? `<span class="full-desc">${formattedFullDesc}</span>` : ''}
                </div>

                ${isLong ? `
                    <button class="read-more-btn" onclick="toggleDesc(${index})">Selengkapnya →</button>
                ` : ''}

                <div class="project-tech-stack">
                    ${renderTechTags(project.tech)}
                </div>

                <div class="card-actions">
                    ${githubLink}
                    ${demoLink}
                </div>
            </article>
        `;
    }).join('');

    setupProjectSlideshows();
    attachCardTiltEffect();
}

function resetProjectFilters() {
    currentProjectFilter = 'all';
    currentSearchQuery = '';
    const searchInput = document.getElementById('project-search');
    if (searchInput) searchInput.value = '';
    const filterBtns = document.querySelectorAll('#project-filters .filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
    });
    renderProjects();
}

// Setup project slideshow controls & swipe support
function setupProjectSlideshows() {
    document.querySelectorAll('.slideshow-container').forEach(container => {
        const images = container.querySelectorAll('.slide-img');
        const dots = container.querySelectorAll('.slideshow-dots span');
        const counter = container.querySelector('.slideshow-counter');
        const prevBtn = container.querySelector('.slideshow-btn.prev');
        const nextBtn = container.querySelector('.slideshow-btn.next');
        let currentIndex = 0;
        const total = images.length;

        function showSlide(index) {
            images.forEach((img, i) => img.classList.toggle('active', i === index));
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            if (counter) counter.textContent = `${index + 1} / ${total}`;
            currentIndex = index;
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const newIndex = (currentIndex - 1 + total) % total;
                showSlide(newIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const newIndex = (currentIndex + 1) % total;
                showSlide(newIndex);
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(i);
            });
        });

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 40) {
                showSlide((currentIndex + 1) % total);
            } else if (touchEndX - touchStartX > 40) {
                showSlide((currentIndex - 1 + total) % total);
            }
        }, { passive: true });
    });
}

// =========================================================================
// PAIRED EXPAND/COLLAPSE LOGIC (DESKTOP: ROW PAIRS, MOBILE: INDEPENDENT)
// =========================================================================

// 1. Projects: toggleDesc
function toggleDesc(index) {
    const isDesktop = window.innerWidth > 768;
    const cards = document.querySelectorAll('#projects-grid .project-card');
    if (!cards.length) return;

    if (isDesktop) {
        const pairStart = Math.floor(index / 2) * 2;
        const pairEnd = pairStart + 1;

        const clickedCard = cards[index];
        const clickedDesc = clickedCard ? clickedCard.querySelector('.project-desc') : null;
        const willExpand = clickedDesc ? !clickedDesc.classList.contains('expanded') : true;

        [pairStart, pairEnd].forEach(i => {
            if (cards[i]) {
                const desc = cards[i].querySelector('.project-desc');
                const btn = cards[i].querySelector('.read-more-btn');
                if (desc) {
                    desc.classList.toggle('expanded', willExpand);
                }
                if (btn) {
                    btn.textContent = willExpand ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        });
    } else {
        if (cards[index]) {
            const desc = cards[index].querySelector('.project-desc');
            const btn = cards[index].querySelector('.read-more-btn');
            if (desc) {
                const willExpand = !desc.classList.contains('expanded');
                desc.classList.toggle('expanded', willExpand);
                if (btn) {
                    btn.textContent = willExpand ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        }
    }
}

// 2. Games: toggleGameDesc
function toggleGameDesc(index) {
    const isDesktop = window.innerWidth > 768;
    const cards = document.querySelectorAll('#games-grid .game-card');
    if (!cards.length) return;

    if (isDesktop) {
        const pairStart = Math.floor(index / 2) * 2;
        const pairEnd = pairStart + 1;

        const clickedCard = cards[index];
        const clickedDesc = clickedCard ? clickedCard.querySelector('.game-desc') : null;
        const willExpand = clickedDesc ? !clickedDesc.classList.contains('expanded') : true;

        [pairStart, pairEnd].forEach(i => {
            if (cards[i]) {
                const desc = cards[i].querySelector('.game-desc');
                const btn = cards[i].querySelector('.read-more-btn');
                if (desc) {
                    desc.classList.toggle('expanded', willExpand);
                }
                if (btn) {
                    btn.textContent = willExpand ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        });
    } else {
        if (cards[index]) {
            const desc = cards[index].querySelector('.game-desc');
            const btn = cards[index].querySelector('.read-more-btn');
            if (desc) {
                const willExpand = !desc.classList.contains('expanded');
                desc.classList.toggle('expanded', willExpand);
                if (btn) {
                    btn.textContent = willExpand ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        }
    }
}

// 3. Design: toggleDesignDesc
function toggleDesignDesc(index) {
    const isDesktop = window.innerWidth > 768;
    const cards = document.querySelectorAll('#design-grid .design-card');
    if (!cards.length) return;

    if (isDesktop) {
        const pairStart = Math.floor(index / 2) * 2;
        const pairEnd = pairStart + 1;

        const clickedCard = cards[index];
        const clickedDesc = clickedCard ? clickedCard.querySelector('.design-desc') : null;
        const willExpand = clickedDesc ? !clickedDesc.classList.contains('expanded') : true;

        [pairStart, pairEnd].forEach(i => {
            if (cards[i]) {
                const desc = cards[i].querySelector('.design-desc');
                const btn = cards[i].querySelector('.read-more-btn');
                if (desc) {
                    desc.classList.toggle('expanded', willExpand);
                }
                if (btn) {
                    btn.textContent = willExpand ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        });
    } else {
        if (cards[index]) {
            const desc = cards[index].querySelector('.design-desc');
            const btn = cards[index].querySelector('.read-more-btn');
            if (desc) {
                const willExpand = !desc.classList.contains('expanded');
                desc.classList.toggle('expanded', willExpand);
                if (btn) {
                    btn.textContent = willExpand ? 'Tutup ↑' : 'Selengkapnya →';
                }
            }
        }
    }
}

// Global functions for onclick handlers
window.toggleDesc = toggleDesc;
window.toggleProjectDesc = toggleDesc;
window.toggleGameDesc = toggleGameDesc;
window.toggleDesignDesc = toggleDesignDesc;

// ==========================================
// RENDER: DESIGN GALLERY (9 Designs)
// ==========================================
function renderDesigns(filter = 'all') {
    const container = document.getElementById('design-grid');
    if (!container) return;

    const filtered = filter === 'all' ? designs : designs.filter(d => d.filter === filter);

    container.innerHTML = filtered.map((design, index) => {
        const isLong = design.desc.length > 120;
        const shortDesc = isLong ? design.desc.substring(0, 120).trim() + '...' : design.desc;

        return `
            <article class="design-card modern-card" data-index="${index}">
                <div class="design-image-frame" onclick="openLightbox('${design.imgFile}', '${design.title} - ${design.desc}')">
                    <img src="${design.imgFile}" alt="${design.title}" class="design-img" loading="lazy">
                    <div class="design-overlay">
                        <span class="preview-badge"><i class="fas fa-search-plus"></i> Lihat Desain</span>
                    </div>
                    <span class="platform-badge">${design.filter.toUpperCase()}</span>
                </div>
                <div class="design-info">
                    <h3 class="design-title">${design.title}</h3>
                    <div class="design-desc" id="design-desc-${index}">
                        <span class="short-desc">${shortDesc}</span>
                        ${isLong ? `<span class="full-desc">${design.desc}</span>` : ''}
                    </div>
                    ${isLong ? `
                        <button class="read-more-btn" onclick="toggleDesignDesc(${index})">Selengkapnya →</button>
                    ` : ''}
                    <div class="design-actions">
                        <a href="${design.figmaUrl}" target="_blank" class="figma-btn">
                            <i class="fab fa-figma"></i> <span>Lihat di Figma</span>
                            <i class="fas fa-arrow-right arrow-icon"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    attachCardTiltEffect();
}

// ==========================================
// RENDER: GAMES (7 Games)
// ==========================================
function renderGames(filter = 'all') {
    const container = document.getElementById('games-grid');
    if (!container) return;

    const filtered = filter === 'all' ? games : games.filter(g => g.filter === filter);

    container.innerHTML = filtered.map((game, index) => {
        const isLong = game.desc.length > 120;
        const shortDesc = isLong ? game.desc.substring(0, 120).trim() + '...' : game.desc;
        const formattedFullDesc = game.desc.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

        const githubLink = game.github 
            ? `<a href="${game.github}" target="_blank" class="card-link github-link"><i class="fab fa-github"></i> <span>GitHub</span></a>` 
            : '';
        const demoLink = game.demo 
            ? `<a href="${game.demo}" target="_blank" class="card-link demo-link"><i class="fas fa-play"></i> <span>Mainkan Demo</span></a>` 
            : '';

        return `
            <article class="game-card modern-card" data-index="${index}">
                <div class="card-header-bar">
                    <span class="card-category-badge"><i class="fas fa-gamepad"></i> GAME</span>
                    <h3 class="game-title">${game.title}</h3>
                </div>

                <div class="card-media-wrapper single-media" onclick="openLightbox('${game.img}', '${game.title}')">
                    <img src="${game.img}" alt="${game.title}" class="game-img" loading="lazy">
                    <div class="media-hover-overlay">
                        <span class="zoom-badge"><i class="fas fa-search-plus"></i> Perbesar</span>
                    </div>
                </div>

                <div class="game-desc" id="game-desc-${index}">
                    <span class="short-desc">${shortDesc}</span>
                    ${isLong ? `<span class="full-desc">${formattedFullDesc}</span>` : ''}
                </div>

                ${isLong ? `
                    <button class="read-more-btn" onclick="toggleGameDesc(${index})">Selengkapnya →</button>
                ` : ''}

                <div class="project-tech-stack">
                    ${renderTechTags(game.tech)}
                </div>

                <div class="card-actions">
                    ${githubLink}
                    ${demoLink}
                </div>
            </article>
        `;
    }).join('');

    attachCardTiltEffect();
}

// ==========================================
// RENDER: CERTIFICATIONS
// ==========================================
function renderCertifications() {
    const container = document.getElementById('cert-grid');
    if (!container) return;

    container.innerHTML = certifications.map((cert, index) => {
        const scoresHtml = cert.scores ? cert.scores.map(s => `
            <div class="cert-score-item">
                <div class="score-header">
                    <span class="score-label">${s.label}</span>
                    <span class="score-val">${s.val} / ${s.max}</span>
                </div>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${s.pct}"></div>
                </div>
            </div>
        `).join('') : '';

        return `
            <article class="cert-card modern-card" data-index="${index}">
                <div class="cert-media-frame" onclick="openLightbox('${cert.imgFile}', '${cert.title}')">
                    <img src="${cert.imgFile}" alt="${cert.title}" class="cert-img" loading="lazy">
                    <div class="cert-overlay">
                        <span class="zoom-badge"><i class="fas fa-search-plus"></i> Lihat Sertifikat Resmi</span>
                    </div>
                    <span class="cert-ribbon"><i class="fas fa-certificate"></i> Verified</span>
                </div>
                <div class="cert-info">
                    <div class="cert-badge-pill">${cert.badge}</div>
                    <h3 class="cert-title">${cert.title}</h3>
                    <p class="cert-desc">${cert.desc}</p>
                    <p class="cert-detail"><i class="fas fa-chart-pie"></i> ${cert.detail}</p>
                    <div class="cert-score-bars">
                        ${scoresHtml}
                    </div>
                </div>
            </article>
        `;
    }).join('');

    attachCardTiltEffect();
}

// ==========================================
// 3D CARD TILT MICRO-INTERACTION (DESKTOP)
// ==========================================
function attachCardTiltEffect() {
    if (window.innerWidth < 992) return;
    const cards = document.querySelectorAll('.modern-card');

    cards.forEach(card => {
        if (card.dataset.tiltAttached) return;
        card.dataset.tiltAttached = 'true';

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ==========================================
// FILTERS SETUP (PROJECTS, DESIGNS, GAMES)
// ==========================================
function setupFilters() {
    // Projects Filter Buttons
    const projectFilterBtns = document.querySelectorAll('#project-filters .filter-btn');
    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            projectFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentProjectFilter = this.dataset.filter;
            renderProjects();
        });
    });

    // Project Search Input
    const searchInput = document.getElementById('project-search');
    const clearBtn = document.getElementById('clear-search');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            if (clearBtn) {
                clearBtn.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
            }
            renderProjects();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            currentSearchQuery = '';
            clearBtn.style.display = 'none';
            renderProjects();
            if (searchInput) searchInput.focus();
        });
    }

    // Design Filter Buttons
    const designFilterBtns = document.querySelectorAll('#design-filters .filter-btn');
    designFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            designFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderDesigns(this.dataset.filter);
        });
    });

    // Games Filter Buttons
    const gamesFilterBtns = document.querySelectorAll('#games-filters .filter-btn');
    gamesFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            gamesFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderGames(this.dataset.filter);
        });
    });
}

// ==========================================
// LIGHTBOX MODAL
// ==========================================
function openLightbox(imgSrc, caption = '') {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = imgSrc;
    if (lightboxCaption) {
        lightboxCaption.textContent = caption;
        lightboxCaption.style.display = caption ? 'block' : 'none';
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, icon = 'fas fa-check-circle') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3200);
}

// Copy to clipboard helper
function copyToClipboard(text, successMsg = 'Tersalin ke clipboard!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg, 'fas fa-copy');
        }).catch(() => {
            fallbackCopy(text, successMsg);
        });
    } else {
        fallbackCopy(text, successMsg);
    }
}

function fallbackCopy(text, successMsg) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
        document.execCommand('copy');
        showToast(successMsg, 'fas fa-copy');
    } catch (e) {
        showToast('Gagal menyalin secara otomatis', 'fas fa-exclamation-circle');
    }
    document.body.removeChild(tempInput);
}

// ==========================================
// TYPEWRITER EFFECT IN HERO
// ==========================================
function setupTypewriter() {
    const element = document.getElementById('typewriter-text');
    if (!element) return;

    const phrases = [
        "Full Stack Developer & UI/UX Enthusiast.",
        "Siswa Rekayasa Perangkat Lunak (Kelas 12).",
        "Web & Android App Creator.",
        "Crafting Fast, Functional & Aesthetic Systems."
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = true;
    let speed = 60;

    function tick() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
            element.textContent = current.substring(0, charIndex);
            speed = 30;
        } else {
            charIndex++;
            element.textContent = current.substring(0, charIndex);
            speed = 65;
        }

        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            speed = 2200;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 450;
        }

        setTimeout(tick, speed);
    }

    setTimeout(tick, 2000);
}

// ==========================================
// THEME SWITCHER (DARK / LIGHT)
// ==========================================
function setupTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('earlyta_theme') || 'dark';

    document.documentElement.setAttribute('data-theme', savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('earlyta_theme', target);

            showToast(target === 'dark' ? 'Mode Gelap Aktif 🌙' : 'Mode Terang Aktif ☀️', 'fas fa-palette');
        });
    }
}

// ==========================================
// SCROLL PROGRESS & BACK TO TOP
// ==========================================
function setupScrollIndicators() {
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    const progressCircle = document.getElementById('progress-circle');
    const circumference = 2 * Math.PI * 20;

    if (progressCircle) {
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) : 0;

        if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
        }

        if (progressCircle) {
            const offset = circumference - (progress * circumference);
            progressCircle.style.strokeDashoffset = offset;
        }

        if (backToTop) {
            if (scrollTop > 350) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }, { passive: true });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ==========================================
// NAVBAR & ACTIVE SECTION HIGHLIGHT
// ==========================================
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open', navMenu.classList.contains('active'));
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    const navHeight = navbar ? navbar.offsetHeight : 70;
                    const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - (navHeight + 10);
                    window.scrollTo({
                        top: targetPos,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const matchingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (matchingLink) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    matchingLink.classList.add('active');
                } else {
                    matchingLink.classList.remove('active');
                }
            }
        });
    }, { passive: true });
}

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================
function setupStatsCounter() {
    const statCards = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsCounterAnimated) {
                statsCounterAnimated = true;
                statCards.forEach(stat => {
                    const target = parseInt(stat.dataset.target, 10) || 0;
                    const hasPlus = stat.textContent.includes('+');
                    let current = 0;
                    const duration = 1200;
                    const stepTime = Math.max(Math.floor(duration / (target || 1)), 25);

                    const timer = setInterval(() => {
                        current++;
                        stat.textContent = current + (hasPlus ? '+' : '');
                        if (current >= target) {
                            clearInterval(timer);
                            stat.textContent = target + (hasPlus ? '+' : '');
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsWrapper = document.querySelector('.hero-stats');
    if (statsWrapper) {
        observer.observe(statsWrapper);
    }
}

// ==========================================
// INTERACTIVE AMBIENT BACKGROUND CANVAS
// ==========================================
function setupBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 26), 55);

    let mouse = { x: null, y: null, radius: 120 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }, { passive: true });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.vx = (Math.random() - 0.5) * 0.7;
            this.vy = (Math.random() - 0.5) * 0.7;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        draw(color) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;

            if (mouse.x != null && mouse.y != null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = (dx / distance) * force * 2.5;
                    const directionY = (dy / distance) * force * 2.5;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const particleColor = isDark ? 'rgba(225, 29, 72, 0.45)' : 'rgba(128, 0, 0, 0.35)';
        const lineColor = isDark ? 'rgba(225, 29, 72, ' : 'rgba(128, 0, 0, ';

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(particleColor);

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    const alpha = (1 - dist / 110) * (isDark ? 0.18 : 0.12);
                    ctx.beginPath();
                    ctx.strokeStyle = `${lineColor}${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// ==========================================
// SCROLL HINT
// ==========================================
function setupScrollHint() {
    const hint = document.getElementById('scroll-hint');
    if (hint) {
        hint.addEventListener('click', () => {
            const aboutSec = document.getElementById('about');
            if (aboutSec) {
                aboutSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ==========================================
// QUICK ACTIONS & COPY TRIGGERS
// ==========================================
function setupQuickActions() {
    const quickEmailBtn = document.getElementById('quick-copy-email');
    if (quickEmailBtn) {
        quickEmailBtn.addEventListener('click', () => {
            copyToClipboard('earlytadwi7@gmail.com', 'Email Earlyta (earlytadwi7@gmail.com) disalin! 📧');
        });
    }

    const copyableCards = document.querySelectorAll('.copyable-card');
    copyableCards.forEach(card => {
        card.addEventListener('click', () => {
            const textToCopy = card.getAttribute('data-copy');
            if (textToCopy) {
                copyToClipboard(textToCopy, `Email (${textToCopy}) berhasil disalin! ✨`);
            }
        });
    });
}

// ==========================================
// INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch live GitHub repo count & apply cached counter immediately
    fetchLiveGitHubRepoCount();

    setupTheme();

    renderProjects();
    renderDesigns('all');
    renderGames('all');
    renderCertifications();

    setupFilters();
    setupNavbar();
    setupScrollIndicators();
    setupScrollHint();
    setupTypewriter();
    setupStatsCounter();
    setupQuickActions();
    setupBackgroundCanvas();

    const lightbox = document.getElementById('lightbox');
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    const overlay = document.querySelector('.lightbox-overlay');

    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }
    if (overlay) {
        overlay.addEventListener('click', closeLightbox);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});
