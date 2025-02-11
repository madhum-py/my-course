document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-btn");
    const registrationForm = document.getElementById("registration-form");
    const selectedBatchDisplay = document.getElementById("selected-batch");
    const successModal = document.getElementById("success-modal");
    const okButton = document.getElementById("ok-btn");

    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            const batchInfo = this.getAttribute("data-batch"); // Fetch batch details
            selectedBatchDisplay.textContent = batchInfo || "Not Available"; // Set batch text

            // Clear previous input values when opening modal
            registrationForm.reset();

            modal.classList.remove("hidden"); // Show modal
        });
    });

    closeModal.addEventListener("click", function () {
        modal.classList.add("hidden"); // Hide modal
    });

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        modal.classList.add("hidden"); // Hide registration modal
        successModal.classList.remove("hidden"); // Show success modal
    });

    okButton.addEventListener("click", function () {
        successModal.classList.add("hidden"); // Hide success modal
    });
});
