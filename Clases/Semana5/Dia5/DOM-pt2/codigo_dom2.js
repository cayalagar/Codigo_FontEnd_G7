
const demoId = document.getElementById("demo");
//console.log(demoId)
demoId.style.border = "5px  solid blue"

const demoClass = document.getElementsByClassName("demo")

//console.log(demoClass)
demoClass[0].style.border = "2px dashed yellow"
demoClass[1].style.border = "1px dotted red"
//vamos a usar un for para recorrer mi array de elementos HTML y vamos a definirle 
// un vcalor a su borde de los elementos

const demoTag = document.getElementsByName("article")

console.log(demoTag)

/* 
for(elementoHtml in demoTag){
    console.log(demoTag[elementoHtml])
    demoTag[elementoHtml].style.border = "6px solid orange"
}
 */
/*
 const demoQuery = document.querySelector("demo-query")

console.log(demoQuery)
*/

const demoQueryAll = document.querySelectorAll(".demo-query-all")

//demoQueryAll[0].style.border="5px solid red"

console.log(demoQueryAll)


demoQueryAll.forEach(Elemento => {
    Elemento.style.border="10px solid red"
})


const demoTitle = document.getElementById("titulo")

demoTitle.addEventListener()