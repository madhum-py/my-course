document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-btn");
    const registrationForm = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");
    const okButton = document.getElementById("ok-btn");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const whatsappInput = document.getElementById("whatsapp");
    const selectedBatchInput = document.getElementById("selected-batch");

    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            modal.classList.remove("hidden");
            successMessage.classList.add("hidden");
            okButton.classList.add("hidden");
            registrationForm.classList.remove("hidden");

            selectedBatchInput.value = this.dataset.batch;
            nameInput.value = "";
            emailInput.value = "";
            whatsappInput.value = "";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        successMessage.classList.remove("hidden");
        okButton.classList.remove("hidden");
        registrationForm.classList.add("hidden");
    });

    okButton.addEventListener("click", function () {
        modal.classList.add("hidden");
    });
});
