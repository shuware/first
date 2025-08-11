
document.getElementById("toggleMenu").addEventListener("click", function() {
    const navbar = document.getElementById("navbar1");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
});

