// store user information
let userList = [
    {
        "id": 0,
        "name": "John Doe",
        "msg": "Message shown here!",
        "like" : 0,
        "haveRead": false
    },
    {
        "id": 1,
        "name": "Obaseki Nosa",
        "msg": "Message shown here!",
        "like" : 3,
        "haveRead": true
    }
];

// helper function count the number of users
function countUser() {
    let localStore = JSON.parse(window.localStorage.getItem("userList"));
    let num;
    if (localStore === null) {
        num = 0;
    } else {
        num = localStore.length;
    }
    return num;
}

// onload the history right after loading the website
function load() {
    if (window.localStorage.getItem("userList") === null) {
        window.localStorage.setItem("userList", JSON.stringify(userList));
    }
    // display all cards
    displayCards();
}

// helper function of displaying all cards
function displayCards(){
    let numUsers = countUser();

    let users = JSON.parse(window.localStorage.getItem("userList"));

    for (let i=0; i < numUsers; i++) {
        let name = users[i].name;
        let msg = users[i].msg;
        let like = users[i].like;
        let haveRead = users[i].haveRead;
        // console.log(">> in display cards, id is:",i,"; name:",name,"; msg:",msg,"; like:",like,"; haveRead:",haveRead);
        createCard(i, name, msg, like, haveRead);
    }
}

// helper function of showing card with information
function createCard(id, inputName, inputMsg, like, haveRead) {

    if (like > 0 && haveRead === false) {
        alert("something wrong with the information!");
    }

    let newLi = document.createElement('li');
    newLi.className = 'card-container';
    newLi.id = "number-"+id+"-card";
    paintCardContainer(newLi,haveRead);

    newLi.onmouseenter = function() {
        newLi.style.boxShadow = "3px 3px 3px 3px #fbc8ec";
        newLi.style.opacity = "1";
        newLi.style.filter = "blur(0)";
        newLi.style.transition="0.2s";
    }

    newLi.onmouseleave = function() {
        paintCardContainer(newLi, haveRead);
    }

    newLi.onclick = function() {
        if (haveRead === false) {
            newLi.style.boxShadow = "3px 3px 3px 3px grey";
        }
        haveRead = true;

        let localStore = JSON.parse(window.localStorage.getItem("userList"));

        for (let i in localStore) {
            if (this.id === "number-"+i+"-card") {
                localStore[i].haveRead = true;
            }
        }

        window.localStorage.setItem("userList", JSON.stringify(localStore));
    };

    let innerDiv = document.createElement('div');
    innerDiv.className = 'card-container-first-row';

    let innerDiv2 = document.createElement('div');
    innerDiv2.className = 'card-container-second-row';

    let innerDiv3 = document.createElement('div');
    innerDiv3.className = 'card-container-third-row';


    // card-container-first-row
    if (inputName === '')
        inputName = 'Guest';
    let newName = document.createElement('h4');
    newName.className='msger_shown_name';
    newName.innerHTML = inputName;
    innerDiv.appendChild(newName);


    // card-container-second-row
    let newMsg = document.createElement('p');
    newMsg.className = 'msger_left_msg';
    newMsg.innerHTML = inputMsg;
    innerDiv2.appendChild(newMsg);


    // card-container-third-row
    let btnLike = document.createElement('button');
    let btnDel = document.createElement('button');
    btnLike.className = 'card-button';
    btnDel.className = 'card-button';

    let iconLike = document.createElement('i');
    let iconDel = document.createElement('i');
    iconLike.className = 'fas fa-heart';
    iconLike.style.gap = "2px";
    iconLike.innerText = like;
    iconDel.className = 'fas fa-trash-alt';

    btnLike.onclick = function(){
        like++;
        iconLike.innerText = like;

        let localStore = JSON.parse(window.localStorage.getItem("userList"));
        for (let i in localStore) {
            if (this.parentElement.parentElement.id === "number-"+i+"-card") {
                localStore[i].like = like;
            }
        }
        window.localStorage.setItem("userList", JSON.stringify(localStore));
    };

    btnDel.onclick = function(){
        let div = this.parentElement.parentElement;
        div.style.display = "none";

        let localStore = JSON.parse(window.localStorage.getItem("userList"));
        for (let i in localStore) {
            if (div.id === "number-"+i+"-card") {
                localStore.splice(i,1);
            }
        }
        window.localStorage.setItem("userList", JSON.stringify(localStore));
    };

    btnLike.appendChild(iconLike);
    btnDel.appendChild(iconDel);
    innerDiv3.appendChild(btnLike);
    innerDiv3.appendChild(btnDel);

    newLi.appendChild(innerDiv);
    newLi.appendChild(innerDiv2);
    newLi.appendChild(innerDiv3);

    let list = document.getElementById('msg-cards');
    list.insertBefore(newLi,list.childNodes[0]);
}

// helper function of painting card-container
function paintCardContainer(newLi, haveRead) {
    if (haveRead === true)
        newLi.style.boxShadow = "3px 3px 3px 3px gray";
    else
        newLi.style.boxShadow = "3px 3px 3px 3px #fbc8ec";
    newLi.style.textAlign = "center";
    newLi.style.padding = "15px 40px 15px 40px";
    newLi.style.marginBottom = "20px";
    newLi.style.marginTop = "20px";
    newLi.style.opacity = "0.8";
    newLi.style.filter = "blur(2px)";
}

// function of submit button
function submitInput(e) {
    e.preventDefault();

    let id = countUser(); // index starting from 0
    let inputName = document.getElementById('msger_name').value;
    let inputMsg = document.getElementById('msger_content').value;
    let like = 0;
    let haveRead = false;

    if (inputName === '')
        inputName = 'Guest';

    createCard(id, inputName, inputMsg, like, haveRead);
    document.getElementById('msger_name').value = '';
    document.getElementById('msger_content').value = '';

    save(id, inputName,inputMsg, like, haveRead);
}

// store user info to web storage after clicking submit
function save(id ,inputName, inputMsg, inputLike ,haveRead){
    let guest={
        id: id,
        name: inputName,
        msg:inputMsg,
        like: inputLike,
        haveRead: haveRead
    };

    let localStore = JSON.parse(window.localStorage.getItem("userList"));
    localStore.push(guest);
    window.localStorage.setItem("userList", JSON.stringify(localStore));
}

// clear all the messages
function clearMsg(){
    //console.log("in clearing messages")
    let localStore = JSON.parse(window.localStorage.getItem("userList"));
    let numOfUsers = countUser();
    //console.log("numOfUsers is ", numOfUsers)
    for (let k=0; k<numOfUsers; k++) {
        //console.log ("k is ",k)
        let id = localStore[k].id;
        //console.log("id is ", id)
        document.getElementById("number-"+id+"-card").style.display = "none";
    }
    window.localStorage.clear();
    document.getElementById("clear_msg").style.display = "none"
}

function cleanInput(d) {
    d.preventDefault();
    document.getElementById('msger_name').value = '';
    document.getElementById('msger_content').value = '';
}

let buttonSubmit = document.getElementById("submit_msg");
buttonSubmit.addEventListener('click', submitInput, true);

let buttonClean = document.getElementById("clean_msg");
buttonClean.addEventListener("click", cleanInput, true);



//console.log("reach here!!")
let scrollNum = document.getElementsByClassName("scroll").length;
let titleUL = document.getElementsByClassName("title-ul")[0];
titleUL.style.gridTemplateColumns="repeat("+scrollNum+", auto)";
//console.log("reach here!!!")