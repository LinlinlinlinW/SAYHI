// store user information
let userList = [
    {
        "id" : 1,
        "name": "John Doe",
        "msg": "Message shown here!"
    },
    {
        "id" : 2,
        "name": "Obaseki Nosa",
        "msg": "Message shown here!"
    }
];

// helper function count the number of users
function countUser() {
    return window.localStorage.length;
}

// onload the history right after loading the website
function load() {
    console.log('in load');

    console.log(userList);
    // initialize localStorage
    for (let i in userList) {
        //console.log("i is", i)
        const picked = ( ({ name, msg }) => ({ name, msg }))(userList[i]);
        //console.log("picked is ",picked)
        window.localStorage.setItem(userList[i].id, JSON.stringify(picked));
    }

    displayCards();
}


// helper function of displaying all cards
function displayCards(){

    // localStorage is an object, wow
    let numUsers = countUser();

    // let storage = window.localStorage;
    // console.log("storage[0]'s name ",JSON.parse(storage.getItem(1)).name);

    // console.log("in displayCards, the numUsers is ",  numUsers);
    for (let i=1; i <= numUsers; i++) {
        let name = JSON.parse(window.localStorage.getItem(i)).name;
        console.log("the name getting from localStorage is ", name);
        let msg = JSON.parse(window.localStorage.getItem(i)).msg;
        console.log("the message getting from localStorage is ", msg);
        //console.log("this is user_",i+1," whose name is ", name, ", and the msg is ",msg);
        createCard(i, name, msg);
    }
}

// helper function of showing card with information
function createCard(id,inputName, inputMsg) {
    let newLi = document.createElement('li');
    newLi.className = 'card-container';

    let innerDiv = document.createElement('div');
    innerDiv.className = 'card-container-first-row';

    let innerDiv2 = document.createElement('div');
    innerDiv2.className = 'card-container-second-row';

    let innerDiv3 = document.createElement('div');
    innerDiv3.className = 'card-container-msg-buttons';

    // card-container-first-row
    //let inputName = document.getElementById('msger_name').value;
    if (inputName === '')
        inputName = 'Guest';
    //let tName = document.createTextNode(inputName);
    let newName = document.createElement('h4');
    newName.className='msger_shown_name';
    newName.innerHTML = inputName;
    //newName.appendChild(tName);
    innerDiv.appendChild(newName);

    // card-container-second-row
    //let inputMsg = document.getElementById('msger_content').value;
    //let tMsg = document.createTextNode(inputMsg);
    let newMsg = document.createElement('msger_left_msg');
    newMsg.className = 'msger_left_msg';
    newMsg.innerHTML = inputMsg;
    //newMsg.appendChild(tMsg);
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

    btnLike.onclick = function(){

    };

    btnDel.onclick = function(){
        let div = this.parentElement.parentElement;
        div.style.display = "none";
        deleteMsg(id);
        console.log("after delete, the num of user is ", countUser());
    };

    btnLike.appendChild(iconLike);
    btnDel.appendChild(iconDel);
    innerDiv3.appendChild(btnLike);
    innerDiv3.appendChild(btnDel);

    newLi.appendChild(innerDiv);
    newLi.appendChild(innerDiv2);
    newLi.appendChild(innerDiv3);

    // document.getElementById('msg-cards').appendChild(newLi)
    let list = document.getElementById('msg-cards');
    list.insertBefore(newLi,list.childNodes[0]);
}

// function of submit button
function submitInput(e) {
    e.preventDefault();
    let inputName = document.getElementById('msger_name').value;
    let inputMsg = document.getElementById('msger_content').value;

    if (inputName === '')
        inputName = 'Guest';

    console.log("input Name is ", inputName);
    console.log("input Msg is ", inputMsg);
    createCard(countUser()+1,inputName, inputMsg);
    document.getElementById('msger_name').value = '';
    document.getElementById('msger_content').value = '';

    save(inputName,inputMsg);
}

// save user info to web storage
function save(inputName, inputMsg){
    let curNum = countUser();

    let guest={
        id: curNum+1,
        name: inputName,
        msg:inputMsg
    };

    window.localStorage.setItem(guest.id, JSON.stringify(( ({ name, msg }) => ({ name, msg }))(guest)));

    console.log('current num of users: ', countUser());
}

function deleteMsg(id){
    window.localStorage.removeItem(id);
}



function likeMsg(id){
}

let buttonSubmit = document.getElementById("submit_msg");
buttonSubmit.addEventListener('click', submitInput, true);


// function setSize() {
//     let size = 0;
//     let randomNum = Math.floor(Math.random()*10);
//     for (let i =0; i < randomNum; i++) {
//         size += 10;
//     }
//     return size;
// }
// function moveVertical() {
//     let catPicture = document.getElementById('picture');
//     // if (catPicture) {
//     //     catPicture.style.top = setSize() + 'px';
//     // }
// }
// function moveHorizontal() {
//     let catPicture = document.getElementById('picture');
//     // if (catPicture) {
//     //     catPicture.style.left = setSize() + 'px';
//     // }
// }