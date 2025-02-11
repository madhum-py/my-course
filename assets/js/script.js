document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-btn");
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");
    const okButton = document.getElementById("ok-btn");
    const selectedBatch = document.getElementById("selected-batch");

    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            const batchInfo = this.getAttribute("data-batch");
            selectedBatch.textContent = batchInfo;
            form.classList.remove("hidden");
            successMessage.classList.add("hidden");
            okButton.classList.add("hidden");
            modal.classList.remove("hidden");
        });
    });

    closeModal.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.classList.add("hidden");
        successMessage.classList.remove("hidden");
        okButton.classList.remove("hidden");
    });

    okButton.addEventListener("click", function () {
        modal.classList.add("hidden");
    });
});
