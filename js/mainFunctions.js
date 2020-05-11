function setSize() {
    let size = 0;
    let randomNum = Math.floor(Math.random()*10);
    for (let i =0; i < randomNum; i++) {
        size += 10;
    }
    return size;
}
function moveVertical() {
    let catPicture = document.getElementById('picture');
    // if (catPicture) {
    //     catPicture.style.top = setSize() + 'px';
    // }
}
function moveHorizontal() {
    let catPicture = document.getElementById('picture');
    // if (catPicture) {
    //     catPicture.style.left = setSize() + 'px';
    // }
}

function showInput() {

}

function deleteMsg(){

}

function likeMsg(){

}