// Nav Bar toggle 
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

function Navigate(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};


// Auto Text Type 
var type = new Typed(".auto-input", {
    strings: ["UI/UX Developer", "Frontend Developer","Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
