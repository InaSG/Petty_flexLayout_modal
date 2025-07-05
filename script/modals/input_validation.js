import { firstNameEl, lastNameEl, emailEl, subjectEl, messageEl, submitMessageBtn, thanksBtn, confirmationTextEl, missingDataEl } from "../main.js";

const firstNameValidationMessageEl = document.getElementById("first_name_validation");
const lastNameValidationMessageEl = document.getElementById("last_name_validation");
const emailValidationMessageEl = document.getElementById("email_validation");
const subjectValidationMessageEl = document.getElementById("subject_validation");
const messageValidationMessageEl = document.getElementById("message_validation");

let isFirstNameOk = 0;
let isLastNameOk = 1;
let isEmailOk = 0;
let isSubjectOk = 1;
let isMessageOk = 0;

export function numbersNotAllowed(event) {
    if ("0123456789".includes(event.key)) {
        event.preventDefault();
        return;
    };
};

//change success status of first name field or display error message if first name characters number is not between 2 and 50
export function validateFirstName(event) {
    if (event.target.value) {
        if (event.target.value.length < 2) {
            invalid(firstNameEl, firstNameValidationMessageEl, "The first name must be at least 2 characters long");
            isFirstNameOk = 0;
            return;
        } else if (event.target.value.length > 50) {
            invalid(firstNameEl, firstNameValidationMessageEl, "The first name cannot be longer than 50 characters");
            isFirstNameOk = 0;
            return;
        } else {
            valid(firstNameEl, firstNameValidationMessageEl);
            isFirstNameOk = 1;
            return;
        };
    } else isFirstNameOk = 0;
    return;
};

//display error message if last name is longer than 50 characters
export function validateLastName(event) {
    if (event.target.value) {
        if (event.target.value.length > 50) {
            invalid(lastNameEl, lastNameValidationMessageEl, "The last name cannot be longer than 50 characters.");
            isLastNameOk = 0;
            return;
        } else {
            valid(lastNameEl, lastNameValidationMessageEl);
            isLastNameOk = 1;
            return;
        };
    } else {
        valid(lastNameEl, lastNameValidationMessageEl);
        isLastNameOk = 1;
        return;
    };
};

// change success status of email field or display error message if
export function validateEmail(event) {
    if (event.target.value) {
        let mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = event.target.value.match(mailRegex);
        if (isValid) {
            valid(emailEl, emailValidationMessageEl);
            isEmailOk = 1;
            return;
        } else {
            invalid(emailEl, emailValidationMessageEl, "Enter your email address");
            isEmailOk = 0;
            return;
        }
    } else isEmailOk = 0;
    return;
};

//display error message if subject is longer than 100 characters
export function validateSubject(event) {
    if (event.target.value) {
        if (event.target.value.length > 100) {
            invalid(subjectEl, subjectValidationMessageEl, "The subject cannot be longer than 100 characters.");
            isSubjectOk = 0;
            return;
        } else {
            valid(subjectEl, subjectValidationMessageEl);
            isSubjectOk = 1;
            return;
        };
    };
};

//change success status of message field or display error message if there are less than 2 or more than 5000 characters in message input field
export function validateMessage(event) {
    if (event.target.value) {
        if (event.target.value.length < 2) {
            invalid(messageEl, messageValidationMessageEl, "The message must be at least 2 characters long.");
            isMessageOk = 0;
            return;
        } else if (event.target.value.length > 5000) {
            invalid(messageEl, messageValidationMessageEl, "The message cannot be longer than 5000 characters.");
            isMessageOk = 0;
            return;
        } else {
            valid(messageEl, messageValidationMessageEl);
            isMessageOk = 1;
            return;
        };
    } else isMessageOk = 0;
    return;
};

// function change input field border and text color into red and display error message
function invalid(input_el, message_el, message) {
    input_el.classList.add("invalid");
    input_el.classList.remove("valid");
    message_el.innerText = message;
};

// function change input field border and text color into dark purple and delete error message
function valid(input_el, message_el) {
    input_el.classList.add("valid");
    input_el.classList.remove("invalid");
    message_el.innerText = "";
}

//Collects data and shows information about the successfully sent message

export function collect_data() {
    if (isFirstNameOk + isLastNameOk + isEmailOk + isSubjectOk + isMessageOk === 5) {
        missingDataEl.innerText = "";
        let date = new Date().toLocaleDateString("lt");
        let time = new Date().toLocaleTimeString("lt");

        confirmationTextEl.innerText = `Your message has been successfully sent on ${date}  ${time}`;

        const messageData = {
            name: firstNameEl.value,
            email: emailEl.value,
            message: messageEl.value,
            date: date,
        }

        submitMessageBtn.style.display = "none";
        thanksBtn.style.display = "block";
        thanksBtn.addEventListener("click", () => {
            modal.style.display = "none";

            isFirstNameOk = 0;
            isLastNameOk = 1;
            isEmailOk = 0;
            isSubjectOk = 1;
            isMessageOk = 0;

            submitMessageBtn.addEventListener("click", collect_data);
        });

        return (messageData);

    } else {
        const missingData = [];
        if (isFirstNameOk === 0) missingData.push("first name");
        if (isEmailOk === 0) missingData.push("email");
        if (isMessageOk === 0) missingData.push("message");

        if (missingData.length > 2) missingDataEl.innerText = `Enter your ${missingData[0]}, ${missingData[1]} and ${missingData[2]}, please.`;
        else if (missingData.length > 1) missingDataEl.innerText = `Enter your ${missingData[0]} and ${missingData[1]}, please.`;
        else missingDataEl.innerText = `Enter your ${missingData[0]}, please.`;
        return;
    }
};
