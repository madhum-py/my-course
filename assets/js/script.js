document.addEventListener("DOMContentLoaded", function () {
    const registerButtons = document.querySelectorAll(".register-btn");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const whatsappInput = document.getElementById("whatsapp");
    const batchInput = document.getElementById("selected-batch");

    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            batchInput.value = this.getAttribute("data-batch");
            form.reset(); // Reset form fields before opening
            modal.classList.remove("hidden");
            modal.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
        modal.classList.remove("show");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        if (nameInput.value.trim() === "" || whatsappInput.value.trim() === "") {
            alert("Please fill all required fields!");
            return;
        }

        modal.innerHTML = `
            <div class="modal-content">
                <h2>🎉 Registration Successful!</h2>
                <p>We will contact you soon.</p>
                <button id="ok-btn">OK</button>
            </div>
        `;

        document.getElementById("ok-btn").addEventListener("click", function () {
            modal.classList.add("hidden");
            modal.classList.remove("show");
        });
    });
});
