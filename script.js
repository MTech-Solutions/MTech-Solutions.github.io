// Modal handling
const modal = document.getElementById("quoteModal");
const quoteBtn = document.getElementById("quoteBtn");
const closeBtn = document.getElementsByClassName("close")[0];

quoteBtn.onclick = function() {
    modal.style.display = "flex";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission handling
document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
});
