const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgerIcon = header.querySelector(".burger-menu__icon");

burger.addEventListener("click", function () {
	header.classList.toggle("header--mobile");

	if (header.classList.contains("header--mobile")) {
		burgerIcon.src = "img/burger-menu-close.svg";
	} else {
		burgerIcon.src = "img/burger-menu.svg";
	}
});

alert("Могаю тебя");
