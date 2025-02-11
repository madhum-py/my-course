document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const registerModal = document.getElementById("register-modal");
    const successModal = document.getElementById("success-modal");
    const closeButtons = document.querySelectorAll(".close-btn");
    const registrationForm = document.getElementById("registration-form");
    const selectedBatchDisplay = document.getElementById("selected-batch");
    const okButton = document.getElementById("ok-btn");

    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedBatchDisplay.textContent = this.getAttribute("data-batch");
            registerModal.classList.remove("hidden");
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").classList.add("hidden");
        });
    });

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        registerModal.classList.add("hidden");
        successModal.classList.remove("hidden");
    });

    okButton.addEventListener("click", function () {
        successModal.classList.add("hidden");
    });
});
