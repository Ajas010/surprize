document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
    const speed = 50; // Adjust speed as needed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target; // Ensure the final value matches the target
            }
        };

        updateCount();
    });
});

// 

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// 


