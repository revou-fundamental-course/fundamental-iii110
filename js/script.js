document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector("nav ul");

    burgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Tambahkan CSS untuk memastikan .show berfungsi
    const style = document.createElement('style');
    style.innerHTML = `
        nav ul {
            display: none;
        }
        nav ul.show {
            display: block;
        }
        @media screen and (min-width: 769px) {
            nav ul {
                display: flex;
            }
        }
    `;
    document.head.appendChild(style);

    var visitorSpan = document.getElementById("visitorName");
    var visitorName = ""; // Teks default atau kosong

    if (visitorName === "") {
        visitorSpan.textContent = "Anonymous"; // Teks default jika tidak ada nama
    } else {
        visitorSpan.textContent = visitorName;
    }

    var visitorNameInput = document.getElementById("visitorNameInput");

    visitorNameInput.addEventListener("input", function() {
        visitorSpan.textContent = visitorNameInput.value || "Unknown";
    });

    var messageForm = document.getElementById("messageForm");
    var output = document.getElementById("outputMessage");

    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var birthDate = document.getElementById("birthDate").value;
        var gender = document.getElementById("gender").value;
        var message = document.getElementById("message").value;

        output.innerHTML = `<p><strong>Nama:</strong> ${name}</p>
                            <p><strong>Tanggal Lahir:</strong> ${birthDate}</p>
                            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
                            <p><strong>Pesan:</strong> ${message}</p>`;
    });
});