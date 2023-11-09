const styleSheets = document.styleSheets;
const listButton = document.getElementById("list");
const gridButton = document.getElementById("grid");
listButton.classList.add("current");




const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "grid.css") {
      return styleSheet;
    }
  }
});
targetSheet.disabled = true;

listButton.addEventListener("click", deleteGrid => {
  targetSheet.disabled = true;
  listButton.classList.add("current");
  gridButton.classList.remove("current");
})
gridButton.addEventListener("click", deleteList => {
  targetSheet.disabled = false;
  gridButton.classList.add("current");
  listButton.classList.remove("current");
})
