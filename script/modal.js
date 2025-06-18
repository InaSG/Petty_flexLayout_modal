const contactUsBtn = document.getElementById("contact_us");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close_modal");

contactUsBtn.addEventListener("click", function(){
    modal.style.display = "block";
});

closeModal.addEventListener("click", function(){
    modal.style.display = "none";
});