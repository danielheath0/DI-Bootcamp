//1.
const header1 = document.getElementsByTagName("h1")
const myH1 = header1[0]
console.log(myH1);

//2.

const article = document.querySelector('article')

const lastPara = article.lastElementChild

lastPara.remove()

//3. 

const header2 = document.getElementsByTagName("h2")
const myH2 = header2[0]

myH2.addEventListener("click", TurnRed)

function TurnRed(e) {
    e.target.style = "background-color: red"
}

//4.

const header3 = document.getElementsByTagName("h3")
const myH3 = header3[0]

myH3.addEventListener("click", Hide)

function Hide(e) {
    e.target.style = "display:none"
}

//5.

const paras = document.getElementsByTagName("p")

const boldButton = document.getElementById("embolden")
boldButton.addEventListener("click", MakeBold)

function MakeBold () {
    for (let index = 0; index < paras.length; index++) {
        paras[index].style = "font-weight:bold";
        
    }

}