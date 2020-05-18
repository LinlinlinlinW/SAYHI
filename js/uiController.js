
window.addEventListener("scroll", function() {
    const tar = document.querySelectorAll('.scroll');
    //tar.style.transform = "translate3d(0px,"+-window.pageYOffset * 0.5+"px, 0px)";

    let len = tar.length;
    console.log(len)
    for (let i=0;i<len;i++) {
        let pos = window.pageYOffset * tar[i].dataset.rate;
        if (tar[i].dataset.direction === 'vertical') {
            tar[i].style.transform = "translate3d(0px," + pos + "px, 0px)";
        }
        else{
            tar[i].style.transform = "translate3d("+pos+"px, 0px, 0px)";
        }
    }

})