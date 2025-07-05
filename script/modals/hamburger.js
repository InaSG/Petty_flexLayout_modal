const nav_el = document.getElementById("nav");
const nav_img_el = document.getElementById("nav_img");

export function activateButton(){
    nav_el.classList.toggle("menu_column");
    if(nav_img_el.attributes["class"].value == "menu"){
        nav_img_el.setAttribute("src", "images/cross.svg");
        nav_img_el.className="cross";
    } else{
        nav_img_el.setAttribute("src", "images/menu_icon.svg");
        nav_img_el.className="menu";
    };
};

export function hideMenu(){
        nav_el.classList.remove("menu_column");
        nav_img_el.setAttribute("src", "images/menu_icon.svg");
        nav_img_el.className="menu";
    };