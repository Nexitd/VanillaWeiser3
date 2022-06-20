const burger = document.querySelector(".burger");
const container = document.querySelector(".header__container");

burger.addEventListener("click", () => {
	container.classList.toggle("header__active");
	burger.classList.toggle("burger__active");
});

