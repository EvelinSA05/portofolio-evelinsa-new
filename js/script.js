let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// --- SWIPER CAROUSEL INITIALIZATION ---
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
});

// --- LANDING PAGE SWIPER INITIALIZATION ---
var landingSwiper = new Swiper(".landingSwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});

// --- MODAL LOGIC FOR PROJECTS ---
const projectData = {
  id: {
    desktopBadminton: {
      title: "Aplikasi Desktop 'Kasir Badminton'",
      tech: "Dengan Visual Basic .NET",
      features: `
              <p class="feature-title">Aplikasi Point of Sale (POS) khusus untuk arena badminton. Fitur utama:</p>
              <ul class="feature-list">
                  <li><b>Penjualan Tiket</b>: Sistem penjualan tiket terintegrasi</li>
                  <li><b>Manajemen Member</b>: Kelola data member dan membership</li>
                  <li><b>Pemesanan Lapangan</b>: Booking jadwal penggunaan lapangan</li>
                  <li><b>Manajemen Pembayaran</b>: Proses pembayaran berbagai metode</li>
                  <li><b>Laporan Penjualan</b>: Generate laporan harian, mingguan, bulanan</li>
                  <li><b>Diskon & Promo</b>: Sistem diskon untuk member setia</li>
                  <li><b>Statistik & Analitik</b>: Dashboard statistik penjualan</li>
              </ul>
          `,
    },
    flomart: {
      title: "Aplikasi Mobile 'Flomart'",
      tech: "Dengan Flutter",
      features: `
              <p class="feature-title">Aplikasi mobile e-commerce jual beli tanaman. Fitur utama:</p>
              <ul class="feature-list">
                  <li><b>Halaman Beranda</b>: Dashboard dengan konten terbaru dan produk unggulan</li>
                  <li><b>Katalog Produk</b>: Browsing dan pencarian produk yang mudah</li>
                  <li><b>Blog Konten</b>: Artikel dan tips terkait produk tanaman</li>
                  <li><b>Keranjang Belanja</b>: Manajemen item belanja dengan mudah</li>
                  <li><b>Profil Pengguna</b>: Kelola akun dan preferensi pribadi</li>
                  <li><b>Antarmuka Responsif</b>: Desain yang optimal untuk berbagai ukuran layar</li>
              </ul>
          `,
    },
    foodrecipes: {
      title: "Website & API 'Food Recipes'",
      tech: "Dengan React, Laravel, MySQL, JWT",
      features: `
              <p class="feature-title">Aplikasi resep makanan dengan backend RESTful API. Fitur utama:</p>
              <ul class="feature-list">
                  <li><b>Autentikasi Aman</b>: Registrasi dan login pengguna menggunakan token JWT.</li>
                  <li><b>Manajemen Resep (CRUD)</b>: Buat, baca, perbarui, dan hapus data resep makanan.</li>
                  <li><b>Bookmark</b>: Fitur penyimpanan resep favorit bagi pengguna.</li>
                  <li><b>Alur Persetujuan (Workflow)</b>: Resep yang dikirim memerlukan persetujuan dari admin.</li>
                  <li><b>Pelacakan Riwayat</b>: Fitur history tracking aktivitas resep.</li>
                  <li><b>Manajemen Pengguna & Admin</b>: Kelola data pengguna, hak akses, dan admin sistem.</li>
              </ul>
          `,
    },
    salon: {
      title: "App Android & API 'Salon Cashier'",
      tech: "Dengan Java (Android), Laravel (API), MySQL",
      features: `
              <p class="feature-title">Aplikasi kasir salon mobile beserta backend RESTful API. Fitur utama:</p>
              <ul class="feature-list">
                  <li><b>Autentikasi Aman</b>: Sistem login, register, dan manajemen sesi menggunakan JWT.</li>
                  <li><b>Role-Based Access (RBAC)</b>: Hak akses berbeda untuk Admin (kelola layanan/kasir) dan Kasir (transaksi/pelanggan).</li>
                  <li><b>Manajemen Data (CRUD)</b>: Pengelolaan data user, produk/layanan, dan transaksi secara penuh.</li>
                  <li><b>RESTful API Endpoint</b>: Pagination, filtering, dan integrasi yang mulus dengan aplikasi Android via Retrofit.</li>
                  <li><b>Keamanan Lanjutan</b>: Input validation, CORS configuration, rate limiting, dan secure password hashing.</li>
                  <li><b>Fitur Kasir</b>: Fitur keranjang layanan, checkout, dan riwayat transaksi di aplikasi Android.</li>
              </ul>
          `,
    },
    course: {
      title: "Platform EduTech 'Study Buddy'",
      tech: "Dengan React.js, Tailwind CSS, MockAPI",
      features: `
              <p class="feature-title">Aplikasi web Single-Page Application (SPA) edukasi teknologi. Fitur utama:</p>
              <ul class="feature-list">
                  <li><b>Manajemen State Dinamis</b>: Validasi form interaktif, carousel testimonial, dan pencarian live.</li>
                  <li><b>Manajemen API</b>: Pengambilan data asynchronous dari MockAPI menggunakan Axios.</li>
                  <li><b>State Global</b>: Dark/Light Mode dan manajemen state global yang persisten (useContext).</li>
                  <li><b>Navigasi & Routing</b>: Routing statis, dinamis, dan nested routing dengan React Router DOM.</li>
                  <li><b>Dasbor Admin</b>: Panel kontrol dengan fungsi CRUD penuh (Create, Read, Update, Delete) untuk kursus dan mentor.</li>
                  <li><b>Arsitektur Komponen</b>: Komponen modular dan dapat digunakan kembali sesuai prinsip DRY.</li>
              </ul>
          `,
    },
    reservasi: {
      title: "Website 'Reservasi Badminton'",
      tech: "Dengan PHP, Tailwind CSS, MySQL",
      features: `
              <p class="feature-title">Aplikasi web pemesanan lapangan badminton online.</p>
              <p class="feature-subtitle">Fitur Utama:</p>
              <ul class="feature-list">
                  <li><b>Reservasi & Validasi</b>: Booking lapangan dengan perhitungan biaya otomatis dan validasi jadwal</li>
                  <li><b>Pembayaran</b>: Fitur upload bukti transfer dan verifikasi oleh admin</li>
                  <li><b>Multi-Role</b>: Dashboard berbeda untuk pelanggan, admin, kasir, dan owner</li>
                  <li><b>Landing Page</b>: Informasi venue, promo, pelatih, dan artikel</li>
                  <li><b>Laporan</b>: Menampilkan data operasional untuk monitoring</li>
              </ul>
          `,
    },
  },
  en: {
    desktopBadminton: {
      title: "Desktop App 'Badminton Cashier'",
      tech: "With Visual Basic .NET",
      features: `
              <p class="feature-title">Point of Sale (POS) application specifically for badminton arenas. Main features:</p>
              <ul class="feature-list">
                  <li><b>Ticket Sales</b>: Integrated ticket sales system</li>
                  <li><b>Member Management</b>: Manage member data and membership</li>
                  <li><b>Court Booking</b>: Booking schedule for court usage</li>
                  <li><b>Payment Management</b>: Payment processing for various methods</li>
                  <li><b>Sales Reports</b>: Generate daily, weekly, monthly reports</li>
                  <li><b>Discounts & Promos</b>: Discount system for loyal members</li>
                  <li><b>Statistics & Analytics</b>: Sales statistics dashboard</li>
              </ul>
          `,
    },
    flomart: {
      title: "Mobile App 'Flomart'",
      tech: "With Flutter",
      features: `
              <p class="feature-title">Mobile e-commerce application for buying and selling plants. Main features:</p>
              <ul class="feature-list">
                  <li><b>Home Page</b>: Dashboard with latest content and featured products</li>
                  <li><b>Product Catalog</b>: Easy browsing and product search</li>
                  <li><b>Content Blog</b>: Articles and tips related to plant products</li>
                  <li><b>Shopping Cart</b>: Easy shopping item management</li>
                  <li><b>User Profile</b>: Manage personal account and preferences</li>
                  <li><b>Responsive Interface</b>: Optimal design for various screen sizes</li>
              </ul>
          `,
    },
    foodrecipes: {
      title: "Website & API 'Food Recipes'",
      tech: "With React, Laravel, MySQL, JWT",
      features: `
              <p class="feature-title">Food recipe application with RESTful API backend. Main features:</p>
              <ul class="feature-list">
                  <li><b>Secure Authentication</b>: User registration and login using JWT tokens.</li>
                  <li><b>Recipe Management (CRUD)</b>: Create, read, update, and delete food recipe data.</li>
                  <li><b>Bookmarks</b>: Favorite recipe saving feature for users.</li>
                  <li><b>Approval Workflow</b>: Submitted recipes require admin approval.</li>
                  <li><b>History Tracking</b>: History tracking feature for recipe activities.</li>
                  <li><b>User & Admin Management</b>: Manage user data, access rights, and system admins.</li>
              </ul>
          `,
    },
    salon: {
      title: "Android App & API 'Salon Cashier'",
      tech: "With Java (Android), Laravel (API), MySQL",
      features: `
              <p class="feature-title">Mobile salon cashier application with RESTful API backend. Main features:</p>
              <ul class="feature-list">
                  <li><b>Secure Authentication</b>: Login, register, and session management using JWT.</li>
                  <li><b>Role-Based Access (RBAC)</b>: Different access rights for Admins (manage services/cashiers) and Cashiers (transactions/customers).</li>
                  <li><b>Data Management (CRUD)</b>: Full management of user, product/service, and transaction data.</li>
                  <li><b>RESTful API Endpoints</b>: Pagination, filtering, and seamless integration with the Android app via Retrofit.</li>
                  <li><b>Advanced Security</b>: Input validation, CORS configuration, rate limiting, and secure password hashing.</li>
                  <li><b>Cashier Features</b>: Service cart feature, checkout, and transaction history in the Android app.</li>
              </ul>
          `,
    },
    course: {
      title: "EduTech Platform 'Study Buddy'",
      tech: "With React.js, Tailwind CSS, MockAPI",
      features: `
              <p class="feature-title">Educational technology Single-Page Application (SPA) web app. Main features:</p>
              <ul class="feature-list">
                  <li><b>Dynamic State Management</b>: Interactive form validation, testimonial carousel, and live search.</li>
                  <li><b>API Management</b>: Asynchronous data fetching from MockAPI using Axios.</li>
                  <li><b>Global State</b>: Dark/Light Mode and persistent global state management (useContext).</li>
                  <li><b>Navigation & Routing</b>: Static, dynamic, and nested routing with React Router DOM.</li>
                  <li><b>Admin Dashboard</b>: Control panel with full CRUD (Create, Read, Update, Delete) functionality for courses and mentors.</li>
                  <li><b>Component Architecture</b>: Modular and reusable components according to DRY principles.</li>
              </ul>
          `,
    },
    reservasi: {
      title: "Website 'Badminton Reservation'",
      tech: "With PHP, Tailwind CSS, MySQL",
      features: `
              <p class="feature-title">Online badminton court reservation web application.</p>
              <p class="feature-subtitle">Main Features:</p>
              <ul class="feature-list">
                  <li><b>Reservation & Validation</b>: Court booking with automatic cost calculation and schedule validation</li>
                  <li><b>Payments</b>: Transfer proof upload feature and admin verification</li>
                  <li><b>Multi-Role</b>: Different dashboards for customers, admins, cashiers, and owners</li>
                  <li><b>Landing Page</b>: Venue information, promos, coaches, and articles</li>
                  <li><b>Reports</b>: Display operational data for monitoring</li>
              </ul>
          `,
    },
  }
};

const modalOverlay = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalTech = document.getElementById("modal-tech");
const modalFeatures = document.getElementById("modal-features");
const closeModalBtn = document.querySelector(".close-modal");

document.querySelectorAll(".btn-modal").forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.getAttribute("data-project");
    const lang = localStorage.getItem("lang") || "en";
    const data = projectData[lang][projectId];

    if (data) {
      modalTitle.textContent = data.title;
      modalTech.textContent = data.tech;
      modalFeatures.innerHTML = data.features;
      modalOverlay.classList.add("active");
    }
  });
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

// Close when clicking outside content area
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});

// --- THEME TOGGLE LOGIC ---
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  body.classList.add("light-mode");
  themeToggleBtn.classList.replace("bx-moon", "bx-sun");
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeToggleBtn.classList.replace("bx-moon", "bx-sun");
  } else {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.classList.replace("bx-sun", "bx-moon");
  }
});

// --- AOS (ANIMATE ON SCROLL) INITIALIZATION ---
// Menambahkan atribut data-aos secara otomatis agar HTML tetap rapi
document.querySelectorAll('.heading').forEach(el => el.setAttribute('data-aos', 'fade-down'));
document.querySelectorAll('.home-content').forEach(el => el.setAttribute('data-aos', 'fade-right'));
document.querySelectorAll('.home-img').forEach(el => el.setAttribute('data-aos', 'zoom-in'));
document.querySelectorAll('.timeline-item').forEach((el, index) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', (index % 2 === 0 ? '100' : '200'));
});
document.querySelectorAll('.skills-marquee').forEach(el => el.setAttribute('data-aos', 'fade-up'));
document.querySelectorAll('.mySwiper').forEach(el => el.setAttribute('data-aos', 'fade-up'));
document.querySelectorAll('.landingSwiper').forEach(el => el.setAttribute('data-aos', 'fade-up'));

// Inisialisasi library AOS
AOS.init({
    duration: 800,
    offset: 100,
    once: true, // Animasi hanya berjalan satu kali saat di-scroll
});

// --- COUNTER ANIMATION LOGIC ---
const startCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counterElements = entry.target.querySelectorAll('.counter');
            counterElements.forEach(counter => {
                const duration = 2000; // Animasi 2 detik
                const frames = 60;
                const totalFrames = Math.round(duration / (1000 / frames));
                const target = +counter.getAttribute('data-target');
                let currentFrame = 0;
                
                const updateCount = () => {
                    currentFrame++;
                    const progress = currentFrame / totalFrames;
                    const currentCount = Math.round(target * progress);
                    
                    if (currentFrame < totalFrames) {
                        counter.innerText = currentCount;
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
};

const counterObserver = new IntersectionObserver(startCounters, {
    threshold: 0.5 // Start when 50% of the banner is visible
});

const statBanner = document.querySelector('.statistics-banner');
if (statBanner) {
    counterObserver.observe(statBanner);
}

// --- CONTACT FORM SUBMIT ---
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const btn = event.target.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;
    
    // Gunakan variabel bahasa langsung dari lang.js (karena di-load secara global)
    const lang = window.currentLang || 'id';
    const t = window.translations ? window.translations[lang] : null;

    // Ubah tombol jadi status loading
    btn.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> <span>${t ? t.form_sending : "Mengirim..."}</span>`;
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    const name    = document.getElementById('contact-name').value;
    const email   = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    try {
        // Menggunakan FormSubmit API (Gratis & Tanpa Backend)
        const response = await fetch("https://formsubmit.co/ajax/evelinsalsabila27@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: subject ? `[Portofolio] ${subject}` : "Pesan Baru dari Portofolio",
                Nama: name,
                Email: email,
                Pesan: message
            })
        });

        if (response.ok) {
            btn.innerHTML = `<i class='bx bx-check-circle'></i> <span>${t ? t.form_success : "Berhasil!"}</span>`;
            btn.style.background = '#25a244'; // Warna hijau sukses
            event.target.reset(); // Kosongkan form
        } else {
            throw new Error("Gagal");
        }
    } catch (error) {
        btn.innerHTML = `<i class='bx bx-x-circle'></i> <span>${t ? t.form_error : "Gagal Mengirim"}</span>`;
        btn.style.background = '#d90429'; // Warna merah error
    }

    btn.style.opacity = '1';
    
    // Kembalikan tombol ke semula setelah 4 detik
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.style.pointerEvents = 'auto';
    }, 4000);
}

// --- CURSOR SPOTLIGHT ---
(function() {
    const spotlight = document.getElementById('cursor-spotlight');
    if (!spotlight) return;

    let mouseX = -200, mouseY = -200;
    let currentX = -200, currentY = -200;
    const speed = 0.12; // lerp factor (lower = smoother/lazier)

    function lerp(a, b, t) { return a + (b - a) * t; }

    function animateSpotlight() {
        currentX = lerp(currentX, mouseX, speed);
        currentY = lerp(currentY, mouseY, speed);

        document.documentElement.style.setProperty('--spotlight-x', currentX + 'px');
        document.documentElement.style.setProperty('--spotlight-y', currentY + 'px');

        requestAnimationFrame(animateSpotlight);
    }

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Start hidden, reveal on first mouse move
    spotlight.style.opacity = '0';
    window.addEventListener('mousemove', function reveal() {
        spotlight.style.opacity = '1';
        spotlight.style.transition = 'opacity 0.5s ease';
        window.removeEventListener('mousemove', reveal);
    }, { once: true });

    animateSpotlight();
})();

// --- SCROLL PROGRESS BAR + BACK TO TOP ---
(function() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Scroll Progress
        if (progressBar) {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = progress + '%';
        }

        // Back to Top visibility
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    }, { passive: true });

    // Scroll to top on click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();

// --- NAVBAR GLASSMORPHISM ON SCROLL ---
(function() {
    const header = document.querySelector('.header');
    if (!header) return;

    const onScroll = () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load in case page is already scrolled
})();




