
        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close menu after clicking a link
        document.querySelectorAll(".nav-links a").forEach(function(link) {
            link.addEventListener("click", function() {
                navLinks.classList.remove("active");
            });
        });