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
