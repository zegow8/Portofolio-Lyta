// Data Projects (10 Best Projects)
const projects = [
    {
        title: "Raiental",
        desc: "Web penyewaan game dan aplikasi Android dengan multi-user (Admin & User), fitur cart, peminjaman dengan durasi fleksibel (jam/hari/minggu/bulan), konfirmasi admin, dan akses otomatis ditutup setelah masa sewa habis.",
        tech: "Next.js, Prisma, PostgreSQL",
        github: "https://github.com/zegow8/Raiental.git",
        demo: null
    },
    {
        title: "Librify",
        desc: "Aplikasi peminjaman buku berbasis Android dengan dua role (Admin & User), dilengkapi fitur CRUD buku, upload cover, peminjaman buku, dan konfirmasi pengembalian menggunakan database SQLite.",
        tech: "Android Studio, Java, SQLite",
        github: "https://github.com/zegow8/Librify.git",
        demo: null
    },
    {
        title: "DeepFocus",
        desc: "APK Manajemen Timer Belajar berbasis android. Dilengkapi fitur timer belajar + istirahat, preset cepat, statistik, profile, dan goals.",
        tech: "Android Studio, Java",
        github: "https://github.com/zegow8/DeepFocus.git",
        demo: null
    },
    {
        title: "Taskify",
        desc: "Aplikasi personal untuk siswa dalam mengelola tugas atau pekerjaan rumah (PR). Membantu mengorganisasi tugas berdasarkan status penyelesaiannya, dilengkapi fitur catatan motivasi.",
        tech: "Android Studio, Java",
        github: "https://github.com/zegow8/Taskify.git",
        demo: null
    },
    {
        title: "Rainnawr Pet Shop",
        desc: "Aplikasi Pet Shop berbasis web menggunakan Laravel dengan multi-user dan role access. Admin dapat mengelola produk, kategori, pesanan, serta memantau dashboard. User dapat melihat produk, filter, keranjang, checkout, dan rating.",
        tech: "Laravel, MySQL, Bootstrap",
        github: "https://github.com/zegow8/rainnawr-pet-shop.git",
        demo: null
    },
    {
        title: "Washify",
        desc: "Aplikasi manajemen laundry berbasis web dengan multi-user (Admin & Customer). Pelanggan dapat membuat pesanan, memantau status. Admin mengelola pesanan, data pelanggan, dan transaksi.",
        tech: "PHP Native, MySQL, CSS Native",
        github: "https://github.com/zegow8/washify.git",
        demo: "http://washify.free.nf"
    },
    {
        title: "Olshop Prog Lyta",
        desc: "Platform online shop berbasis web dengan multi-user (Admin & User). User dapat melihat produk, keranjang, checkout, riwayat pesanan. Admin mengelola produk, memproses pesanan, dan dashboard.",
        tech: "Next.js, PostgreSQL, Prisma",
        github: "https://github.com/zegow8/olshop-prog-lyta.git",
        demo: null
    },
    {
        title: "Gamestorelyta",
        desc: "Platform distribusi game berbasis web dengan multi-user. Admin mengelola data game (CRUD), memantau unduhan. User dapat melihat, mengunduh game, library pribadi, rating, dan riwayat pembayaran.",
        tech: "Laravel, MySQL",
        github: "https://github.com/zegow8/gamestorelyta.git",
        demo: null
    },
    {
        title: "Lassavore Restaurant",
        desc: "Website profil restoran yang memperkenalkan informasi dan layanan restoran. Terdapat menu makanan, minuman, dessert dengan animasi interaktif, serta fitur pesan sekarang terhubung ke Instagram.",
        tech: "HTML, CSS, JavaScript",
        github: "https://github.com/zegow8/lassavore-restaurant.git",
        demo: null
    },
    {
        title: "Kasir Cafe",
        desc: "Sistem kasir (Point of Sale/POS) berbasis PHP Native untuk operasional kafe real-time. Mengelola menu, transaksi, keranjang belanja, cetak struk PDF, riwayat transaksi, dan dashboard.",
        tech: "PHP Native, MySQL, Bootstrap",
        github: "https://github.com/zegow8/kasir-cafe.git",
        demo: null
    }
];

// Data Design Gallery (8 Best Design)
const designs = [
    {
        title: "Raiental",
        desc: "UI Web Penyewaan Game & Aplikasi Android",
        imgFile: "design-raiental.png",
        figmaUrl: "https://www.figma.com/design/xSAGoQEJEHgmIatoJ72F0c/RAIENTAL-NEXT-JS?t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "Librify",
        desc: "UI Aplikasi Peminjaman Buku Android",
        imgFile: "design-librify.png",
        figmaUrl: "https://www.figma.com/design/zzv5EiF66McfZbsjwgL2Mo/LIBRIFY-ANDROID-STUDIO?t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "DeepFocus",
        desc: "UI Manajemen Timer Belajar Android",
        imgFile: "design-deepfocus.png",
        figmaUrl: "https://www.figma.com/design/V1veFYxIJ1Ny0Dm3bvxyoT/DeepFocus?t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "AppStore",
        desc: "UI App Store (Personal Project)",
        imgFile: "design-appstore.png",
        figmaUrl: "https://www.figma.com/design/VezA7NIrmUStKZ3Sp6GpFD/AppStoreLyta?node-id=0-1&p=f&t=pMNI5Cw47BnaeKfm-0"
    },
    {
        title: "Taskify",
        desc: "UI Aplikasi Manajemen Tugas Android",
        imgFile: "design-taskify.png",
        figmaUrl: "https://www.figma.com/design/RBkNQMvNPpYpAOUczeAhID/Taskify-Android-Studio?t=pMNI5Cw47BnaeKfm-0"
    },
    {
        title: "Lassavore Hotel",
        desc: "UI Website Hotel & Restoran",
        imgFile: "lassavore hotel.png",
        figmaUrl: "https://www.figma.com/design/sEYITVlZ0Al1JTiGAvN9R4/skibidi-hotel?node-id=1-5&t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "Koperasi 21",
        desc: "UI Sistem Koperasi Sekolah",
        imgFile: "design-koperasi 21.png",
        figmaUrl: "https://www.figma.com/design/S3N9182xrcLbV7cc0odFDa/KOPERASI-11-EARLYTA?node-id=0-1&t=pMNI5Cw47BnaeKfm-1"
    },
    {
        title: "IT Club Komik",
        desc: "UI Komik Digital (IT Club Project)",
        imgFile: "itkomik.png",
        figmaUrl: "https://www.figma.com/design/EraJYu2GyywCHkzz1PRlKJ/figmay-it-komik?node-id=1-2&t=pMNI5Cw47BnaeKfm-1"
    }
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    
    container.innerHTML = projects.map(project => {
        return `
            <div class="project-card">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                <p class="project-tech"><i class="fas fa-code"></i> ${project.tech}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>
                    ${project.demo ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            </div>
        `;
    }).join('');
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