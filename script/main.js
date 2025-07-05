import { activateButton, hideMenu } from "./modals/hamburger.js";
import { numbersNotAllowed, validateFirstName, validateLastName, validateEmail, validateSubject, validateMessage, collect_data } from "./modals/input_validation.js";

const contactUsBtn = document.getElementById("contact_us");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close_modal");
const hamburger_el = document.getElementById("hamburger");
const nav_link_els = document.querySelectorAll(".nav_link");

export const firstNameEl = document.getElementById("first_name");
export const lastNameEl = document.getElementById("last_name");
export const emailEl = document.getElementById("email");
export const subjectEl = document.getElementById("subject");
export const messageEl = document.getElementById("message");
export const submitMessageBtn = document.getElementById("submit_message_btn");
export const thanksBtn = document.getElementById("thanks_btn");
export const confirmationTextEl = document.getElementById("confirmation");
export const missingDataEl = document.getElementById("missing_data");

//change navigation view onclick "hamburger" or "cross" button
hamburger_el.addEventListener('click', activateButton);

//closes navigation links list when any menu link is activated
nav_link_els.forEach(link => {
    link.addEventListener('click', hideMenu)
});

//open Contact Us modal
contactUsBtn.addEventListener("click", function () {
    modal.style.display = "block";
    firstNameEl.value = "";
    lastNameEl.value = "";
    emailEl.value = "";
    subjectEl.value = "";
    messageEl.value = "";
    submitMessageBtn.style.display = "block";
    thanksBtn.style.display = "none";
    confirmationTextEl.innerText = "";
    missingDataEl.innerText = "";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Modal inputs validation

// First name validation: mandatory field, 
// the first name cannot be shorter than 2 character and longer than 50 characters, 
// there is not a single number in the name.

firstNameEl.addEventListener("keydown", numbersNotAllowed);
firstNameEl.addEventListener("keyup", validateFirstName);

// Last name validation: optional field, 
// the last name cannot be longer than 50 characters, 
// there is not a single number in the name.

lastNameEl.addEventListener("keydown", numbersNotAllowed);
lastNameEl.addEventListener("keyup", validateLastName);

// Email validation: mandatory field

emailEl.addEventListener("change", validateEmail);

// Subject validation: optional field, 
// subject cannot be longer than 100 characters.

subjectEl.addEventListener("keyup", validateSubject);

// Message validation: mandatory field, 
// message must be from 2 to 5000 characters length.

messageEl.addEventListener("keyup", validateMessage);

submitMessageBtn.addEventListener("click", () => {
    const messageData = collect_data();
    console.log(messageData);
});
