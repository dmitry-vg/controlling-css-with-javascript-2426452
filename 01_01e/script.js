const styleSheets = document.styleSheets;
console.log(styleSheets);

const styleSheetsArray = Array.from(styleSheets);
const targetSheets = styleSheetsArray.find((styleSheets) => {
  if(styleSheets?.href){
    const patchName = new URL(styleSheets.href).pathname.split("/").pop();
    if (patchName === "extra.css"){
      return styleSheets;
    }
    
  }
})
console.log(targetSheets)