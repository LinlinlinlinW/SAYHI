let scrollNum = document.getElementsByClassName("scroll").length;
let titleUL = document.getElementsByClassName("title-ul")[0];
titleUL.style.gridTemplateColumns="repeat("+scrollNum+", auto)";


function jumpPage(id){
    console.log("id is ", id)
    let site=id.split("-")[1];
    window.open("https://github.com/LinlinlinlinW/"+site);
}