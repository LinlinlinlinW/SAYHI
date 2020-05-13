const defaultPerson1 = {
    id: 1,
    name: "John Doe",
    msg: "Message shown here!",
};

const defaultPerson2 = {
    id: 2,
    name: "Obaseki Nosa",
    msg: "Message shown here!",
};

window.localStorage.setItem(defaultPerson1.id, JSON.stringify(defaultPerson1));
window.localStorage.setItem(defaultPerson2.id, JSON.stringify(defaultPerson2));


function submitInput(e) {
    e.preventDefault();

    let newDiv = document.createElement('div');
    newDiv.className = 'card-container';

    let innerDiv = document.createElement('div');
    innerDiv.className = 'card-container-first-row';

    let innerDiv2 = document.createElement('div');
    innerDiv2.className = 'card-container-second-row';

    let innerDiv3 = document.createElement('div');
    innerDiv3.className = 'card-container-msg-buttons';


    // card-container-first-row
    let inputName = document.getElementById('msger_name').value;
    if (inputName === '')
        inputName = 'Guest';
    let tName = document.createTextNode(inputName);
    let newName = document.createElement('h4');
    newName.className='msger_shown_name';
    newName.appendChild(tName);
    innerDiv.appendChild(newName);

    // card-container-second-row
    let inputMsg = document.getElementById('msger_content').value;
    let tMsg = document.createTextNode(inputMsg);
    let newMsg = document.createElement('msger_left_msg');
    newMsg.className = 'msger_left_msg';
    newMsg.appendChild(tMsg);
    innerDiv2.appendChild(newMsg);

    // card-container-third-row
    let btnLike = document.createElement('button');
    let btnDel = document.createElement('button');
    btnLike.className = 'card-button';
    btnDel.className = 'card-button';
    let iconLike = document.createElement('i');
    let iconDel = document.createElement('i');
    iconLike.className = 'fas fa-glass-cheers';
    iconDel.className = 'fas fa-trash-alt';
    btnDel.onclick = function(){
        let div = this.parentElement.parentElement;
        div.style.display = "none"
    };
    btnLike.appendChild(iconLike);
    btnDel.appendChild(iconDel);
    innerDiv3.appendChild(btnLike);
    innerDiv3.appendChild(btnDel);

    newDiv.appendChild(innerDiv);
    newDiv.appendChild(innerDiv2);
    newDiv.appendChild(innerDiv3);

    // document.getElementById('msg-cards').appendChild(newDiv)
    let list = document.getElementById('msg-cards');
    list.insertBefore(newDiv,list.childNodes[0]);

    document.getElementById('msger_name').value = '';
    document.getElementById('msger_content').value = '';

    save(inputName,inputMsg)
}

function save(inputName, inputMsg){
    let guest={
        name: inputName,
        msg:inputMsg
    };
    window.localStorage.setItem(guest.id, JSON.stringify(guest));
    console.log('in setItem');
}

function deleteMsg(){
}



function likeMsg(){
}

let buttonSubmit = document.getElementById("submit_msg");
buttonSubmit.addEventListener('click', submitInput, true);

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