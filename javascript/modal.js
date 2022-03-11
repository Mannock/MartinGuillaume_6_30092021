const modal = document.querySelector(".modal"); //selects the modal
const btnCloseModal = document.querySelector(".close-modal"); //selects the button to close the modal
const btnOpenModal = document.querySelector(".open-modal"); //selects the button to show the modal
const overlay = document.querySelector(".overlay"); //selects the overlay
const form = document.querySelector("form");

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnOpenModal.addEventListener("click", toggleModal);

btnCloseModal.addEventListener("click", toggleModal);

overlay.addEventListener("click", toggleModal);

let firstName = document.querySelector("input");
firstName.addEventListener("input", (e) => {
  firstName = e.target.value;
});

let lastName = document.getElementById("lastname");
lastName.addEventListener("input", (e) => {
  lastName = e.target.value;
});

let email = document.getElementById("email");
email.addEventListener("input", (e) => {
  email = e.target.value;
});

let message = document.getElementById("message");
message.addEventListener("input", (e) => {
  message = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(firstName, lastName, email, message);
  toggleModal();
});
