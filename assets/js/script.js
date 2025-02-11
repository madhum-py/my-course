document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-btn");
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const whatsappInput = document.getElementById("whatsapp");
    const batchInput = document.getElementById("batch");

    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            batchInput.value = button.getAttribute("data-batch");
            modal.classList.remove("hidden");
            form.reset(); // Reset form fields on each new registration
        });
    });

    closeModal.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulate successful registration
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Congratulations!</h2>
                <p>You have successfully registered.</p>
                <button id="ok-btn">OK</button>
            </div>
        `;

        document.getElementById("ok-btn").addEventListener("click", function () {
            modal.classList.add("hidden");
        });
    });
});
