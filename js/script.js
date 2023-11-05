const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar');

let isNavbarOpen = false;

toggleButton.addEventListener('click', () => {
    if (isNavbarOpen) {
        navbar.style.height = '0';
    } else {
        navbar.style.height = 'auto'; // Ajustez la hauteur à votre contenu
    }
    isNavbarOpen = !isNavbarOpen;
});

//tabs script

function openTab(tabName) {
    var tabContent = document.getElementsByClassName("tab");
    var tabButtons = document.getElementsByClassName("tab_link");
    var contentItems = document.getElementsByClassName("contenu");

    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    for (var i = 0; i < contentItems.length; i++) {
        contentItems[i].style.display = "none";
    }

    if (tabName === "all") {
        // Afficher le contenu de tous les onglets
        for (var i = 0; i < contentItems.length; i++) {
            contentItems[i].style.display = "block";
        }
    } else {
        // Afficher le contenu de l'onglet sélectionné
        document.getElementById(tabName).classList.add("active");
        document.getElementById(tabName).style.display = "block";
    }
}
