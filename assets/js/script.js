document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const modal = document.getElementById("register-modal");
    const closeModalButtons = document.querySelectorAll(".close-btn");
    const registrationForm = document.getElementById("registration-form");
    const selectedBatchDisplay = document.getElementById("selected-batch");
    const successModal = document.getElementById("success-modal");
    const okButton = document.getElementById("ok-btn");

    // Open Registration Modal
    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            const batchInfo = this.getAttribute("data-batch"); // Fetch batch details
            selectedBatchDisplay.textContent = batchInfo || "Not Available"; // Set batch text

            // Clear previous input values when opening modal
            registrationForm.reset();

            modal.classList.add("show"); // Show modal
            modal.classList.remove("hide");
        });
    });

    // Close Modal with Fade-Out
    closeModalButtons.forEach(button => {
        button.addEventListener("click", function () {
            const parentModal = this.closest(".modal");
            parentModal.classList.add("hide");

            setTimeout(() => {
                parentModal.classList.remove("show");
            }, 300);
        });
    });

    // Handle Form Submission
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        modal.classList.add("hide");

        setTimeout(() => {
            modal.classList.remove("show");
            successModal.classList.add("show");
        }, 300);
    });

    // Close Success Modal
    okButton.addEventListener("click", function () {
        successModal.classList.add("hide");

        setTimeout(() => {
            successModal.classList.remove("show");
        }, 300);
    });
});
