const body = document.body;
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const closeIcon = document.querySelector(".closeIcon");

hamburgerIcon.addEventListener("click", () => {
    body.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    body.classList.remove("show");
})
