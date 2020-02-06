const x = document.getElementById("navLinks");
function toggleMenu() {
   if (x.style.display === "none") {
       x.style.display = "block";
   } else {
       x.style.display = "none";
   }
}

function showMenu() {
    if (window.innerWidth > 501) {
        if (x.style.display === "none") {
            x.style.display = "flex";
        }
    } else {
        x.style.display = "none";
    }
}

window.addEventListener("resize", showMenu);