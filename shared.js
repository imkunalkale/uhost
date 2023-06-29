var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action-negative");
var selectPlanButton = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobalNav = document.querySelector(".mobile-nav");

// console.log(backdrop);

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener("click", function () {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = "open"; // this will actually overwrite the complete class list
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function () {
    // mobalNav.style.display = "none";
    mobalNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}


function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
   
    backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
    // mobalNav.style.display = "block";
    // backdrop.style.display = "block";
    mobalNav.classList.add("open");
    backdrop.classList.add("open");
});

