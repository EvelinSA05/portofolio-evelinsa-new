let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

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
    todolist: {
        title: "'To Do List'",
        tech: "With Python and JSON",
        features: `
            <p class="feature-title">Features include:</p>
            <p class="feature-subtitle">Users:</p>
            <ul class="feature-list">
                <li>Task Management with Deadline</li>
                <li>Input Validation</li>
                <li>Task Reminder (Deadline Alert)</li>
                <li>Table View with Treeview</li>
                <li>Local Data Storage</li>
                <li>Add and Delete Task Function</li>
            </ul>
        `
    },
    games: {
        title: "'Car and Dino Games'",
        tech: "With C++",
        features: `
            <p class="feature-title">Details:</p>
            <ul class="feature-list">
                <li>Dino Game: A classic endless runner with increasing speed.</li>
                <li>Car Game: A dodging game avoiding obstacles on a 3-lane road.</li>
                <li>Built entirely with C++ console rendering.</li>
            </ul>
        `
    },
    foodrecipes: {
        title: "Website 'Food Recipes'",
        tech: "With React, Laravel, MySQL",
        features: `
            <p class="feature-title">Features include:</p>
            <p class="feature-subtitle">Users:</p>
            <ul class="feature-list">
                <li>Register and login</li>
                <li>User information page</li>
                <li>Search for recipes</li>
                <li>Bookmarks recipes</li>
                <li>Attractive design</li>
            </ul>
            <p class="feature-subtitle">Admin:</p>
            <ul class="feature-list">
                <li>User activities such as recipes saved by the user</li>
                <li>View customer data</li>
                <li>User login data</li>
            </ul>
        `
    },
    salon: {
        title: "App Android 'Salon Cashier'",
        tech: "With Java, Laravel, MySQL",
        features: `
            <p class="feature-title">Features include:</p>
            <p class="feature-subtitle">Users (Cashier):</p>
            <ul class="feature-list">
                <li>Register and login</li>
                <li>Cashier information page</li>
                <li>Basket to store services</li>
                <li>Checkout and service transactions</li>
                <li>Manage customer data</li>
                <li>View transaction history</li>
            </ul>
            <p class="feature-subtitle">Admin:</p>
            <ul class="feature-list">
                <li>Login Admin</li>
                <li>Manage salon services</li>
                <li>Transaction history</li>
                <li>View customer data</li>
                <li>Manage cashier data</li>
            </ul>
        `
    },
    course: {
        title: "Website 'Online Course'",
        tech: "With Laravel, Filament, MySQL",
        features: `
            <p class="feature-title">Features include:</p>
            <p class="feature-subtitle">Users:</p>
            <ul class="feature-list">
                <li>Register and login</li>
                <li>View class catalog</li>
                <li>Search and access courses</li>
                <li>Complete materials/classes</li>
                <li>Make payments</li>
                <li>Monitor subscription status and transactions</li>
            </ul>
            <p class="feature-subtitle">Admin:</p>
            <ul class="feature-list">
                <li>Manage MySQL database and Nginx server</li>
                <li>Integrate Midtrans for digital payments</li>
                <li>Create CMS with Filament PHP (fast dashboard)</li>
                <li>Use HTML templates & Tailwind CSS for UI</li>
                <li>CRUD data: categories, courses, content, users, roles, transactions, prices</li>
                <li>Manage user roles: student, mentor, super admin</li>
            </ul>
        `
    }
};

const modalOverlay = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalTech = document.getElementById('modal-tech');
const modalFeatures = document.getElementById('modal-features');
const closeModalBtn = document.querySelector('.close-modal');

document.querySelectorAll('.btn-modal').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const data = projectData[projectId];

        if (data) {
            modalTitle.textContent = data.title;
            modalTech.textContent = data.tech;
            modalFeatures.innerHTML = data.features;
            modalOverlay.classList.add('active');
        }
    });
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Close when clicking outside content area
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});