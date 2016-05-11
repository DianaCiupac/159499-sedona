$(document).ready(function () {

    var link = document.querySelector(".reservation-form");
    var popup = document.querySelector(".modal-content");
    var calendar = popup.querySelector("[name=calendar]");
    var quantity = popup.querySelector("[name=quantity]");
    var form = popup.querySelector("form");
    var storage = localStorage.getItem("quantity");
    
    link.addEventListener("click", function(event) {
        event.preventDefault();
    popup.classList.toggle("modal-content-show");
        calendar.focus();
        });
    form.addEventListener("submit", function(event) {
        if (!calendar.value || !quantity.value) {
        event.preventDefault();
        console.log("Нужно ввести данные");
        } else {
        quantity.value = storage;
            }
    });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
            }
        }
    })
});