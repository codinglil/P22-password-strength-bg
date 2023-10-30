const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  let input = e.target.value;
  let length = input.length;
  let blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
