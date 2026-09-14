document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('#menu-icon');
    var navbar = document.querySelector('.navbar');
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('header nav a');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function () {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });

        menuIcon.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menuIcon.classList.toggle('bx-x');
                navbar.classList.toggle('active');
            }
        });
    }

    function onScroll() {
        var scrollPos = window.scrollY;

        sections.forEach(function (sec) {
            var offset = sec.offsetTop - 150;
            var height = sec.offsetHeight;
            var id = sec.getAttribute('id');

            if (scrollPos >= offset && scrollPos < offset + height && id) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    var match = link.getAttribute('href') === '#' + id;
                    if (match) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var fullName = document.getElementById('full_name');
            var email = document.getElementById('email');
            var subject = document.getElementById('subject');
            var message = document.getElementById('message');

            var values = [fullName, email, subject, message];
            var empty = values.some(function (field) {
                return field && !field.value.trim();
            });

            if (empty) {
                alert('Please fill out all the fields.');
                return;
            }

            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email.value.trim())) {
                alert('Please enter a valid email address.');
                return;
            }

            contactForm.reset();
            alert('Message sent successfully! Thank you for reaching out.');
        });
    }
});