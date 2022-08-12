/**
 * NavBar
 */

function openNav() {
  document.querySelector(".sidenav").style.width = "100%";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
}

const testString = 'Javascript test!';

console.log(testString);

const fruits = [
  '😀',
  '✨',
  '💀',
];

fruits.map((fruit) => {
  console.log(fruit);
});