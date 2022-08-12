/**
 * JS Test
 */
const testString = "Javascript test!";
console.log(testString);
const fruits = ["😀", "✨", "💀"];

fruits.map((fruit) => {
  console.log(fruit);
});
/**
 * NavBar sidemenu
 */
function openNav() {
  document.querySelector(".sidenav").style.width = "100%";
}
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
}

/**
 * Navbar scroll change color
 */
const navbar = document.querySelector(".primary-header");
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
