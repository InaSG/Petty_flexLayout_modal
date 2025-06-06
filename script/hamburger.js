const hamburger_el = document.getElementById("hamburger");
const nav_el = document.getElementById("nav");
const nav_img_el = document.getElementById("nav_img");
const nav_link_els = document.querySelectorAll(".nav_link");

hamburger_el.addEventListener('click', function(){
    nav_el.classList.toggle("menu_column");
    if(nav_img_el.attributes["class"].value == "menu"){
        nav_img_el.setAttribute("src", "images/cross.svg");
        nav_img_el.className="cross";
    } else{
        nav_img_el.setAttribute("src", "images/menu_icon.svg");
        nav_img_el.className="menu";
    };
});

nav_link_els.forEach(link => {
    link.addEventListener('click', function(){
        nav_el.classList.remove("menu_column");
        nav_img_el.setAttribute("src", "images/menu_icon.svg");
        nav_img_el.className="menu";
    })
})