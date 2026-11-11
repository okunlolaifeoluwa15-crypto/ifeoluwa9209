
        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click",  () => {
            navLinks.classList.toggle("active");
        });
        if (navLinks.classList.contains("active")){
            menuBtn.innerHTML= `<! class="fa fa-times"></!>`
        }

        // Close menu after clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.innerHTML = `<! class = "fa fa-bars"></!>`;
            });
        });
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 200);
});

        window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});