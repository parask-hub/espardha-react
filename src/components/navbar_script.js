function classToggle() {
            const navs = document.querySelectorAll('.navbar_items')

            navs.forEach(nav => nav.classList.toggle('navbar_toggleshow'));
        }
        document.querySelector('.navbar_link-toggle')
            .addEventListener('click', classToggle)