const menuButton = document.querySelector(".hamburger");

if (menuButton) {
  menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });
}
