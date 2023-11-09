const heading = document.querySelector(".masthead h1");
const computedStyle = window.getComputedStyle(heading);
console.log(computedStyle.fontSize);
console.log(computedStyle.getPropertyValue("font-size"));