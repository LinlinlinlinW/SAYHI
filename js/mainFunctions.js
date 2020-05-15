// store user information
let userList = [
    {
        "id" : 1,
        "name": "John Doe",
        "msg": "Message shown here!",
        "like" : 0,
        "haveRead": false
    },
    {
        "id" : 2,
        "name": "Obaseki Nosa",
        "msg": "Message shown here!",
        "like" : 1,
        "haveRead": true
    }
];

// helper function count the number of users
function countUser() {
    return window.localStorage.length;
}

// onload the history right after loading the website
function load() {
    console.log("in load");
    console.log("number of users is ", countUser());

    // initialize message
    for (let i in userList) {
        const picked = ( ({ name, msg , like, haveRead}) => ({ name, msg, like, haveRead}))(userList[i]);
        // console.log("picked is ", picked);
        window.localStorage.setItem(userList[i].id, JSON.stringify(picked));
    }
    displayCards();
}

// helper function of displaying all cards
function displayCards(){
    let numUsers = countUser();
    for (let i=1; i <= numUsers; i++) {
        let name = JSON.parse(window.localStorage.getItem(i)).name;
        let msg = JSON.parse(window.localStorage.getItem(i)).msg;
        let like = parseInt(JSON.parse(window.localStorage.getItem(i)).like);
        let haveRead = JSON.parse(window.localStorage.getItem(i)).haveRead;
        // console.log("id, name, msg, like, haveRead is ",i,name,msg,like,haveRead);
        createCard(i, name, msg, like, haveRead);
    }
}

// helper function of painting card-container
function paintCardContainer (newLi,haveRead) {
    if (haveRead === true)
        newLi.style.boxShadow = "3px 3px 3px 3px grey";
    else
        newLi.style.boxShadow = "3px 3px 3px 3px #fbc8ec";
    newLi.style.textAlign = "center";
    newLi.style.padding = "15px 40px 15px 40px";
    newLi.style.marginBottom = "20px";
    newLi.style.marginTop = "20px";
    newLi.style.opacity = "0.8";
    newLi.style.filter = "blur(2px)";
}


// helper function of showing card with information
function createCard(id, inputName, inputMsg, like, haveRead) {

    let newLi = document.createElement('li');
    newLi.className = 'card-container';
    paintCardContainer(newLi,haveRead);

    newLi.onclick = function() {
        if (haveRead === false) {
            newLi.style.boxShadow = "3px 3px 3px 3px grey";
        }
        haveRead = true;
        window.localStorage.setItem(id, JSON.stringify( { name:inputName, msg:inputMsg, like:like, haveRead:true } ));
    };

    newLi.onmouseenter = function() {
        newLi.style.boxShadow = "3px 3px 3px 3px #fbc8ec";
        newLi.style.opacity = "1";
        newLi.style.filter = "blur(0)";
        newLi.style.transition="0.2s";
    }

    newLi.onmouseleave = function() {
        paintCardContainer(newLi,haveRead);
    }


    let innerDiv = document.createElement('div');
    innerDiv.className = 'card-container-first-row';

    let innerDiv2 = document.createElement('div');
    innerDiv2.className = 'card-container-second-row';

    let innerDiv3 = document.createElement('div');
    innerDiv3.className = 'card-container-msg-buttons';


    // card-container-first-row
    if (inputName === '')
        inputName = 'Guest';
    let newName = document.createElement('h4');
    newName.className='msger_shown_name';
    newName.innerHTML = inputName;
    innerDiv.appendChild(newName);


    // card-container-second-row
    let newMsg = document.createElement('msger_left_msg');
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
    iconLike.innerText = like;
    iconDel.className = 'fas fa-trash-alt';

    btnLike.onclick = function(){
        like++;
        iconLike.innerText = like;
        iconLike.style.gap = "2px";
        window.localStorage.setItem(id, JSON.stringify( { name:inputName, msg:inputMsg, like:like, haveRead:haveRead } ));
    };

    btnDel.onclick = function(){
        let div = this.parentElement.parentElement;
        div.style.display = "none";
        console.log("before delete, the localStorage is ",window.localStorage);
        window.localStorage.removeItem(id);
        console.log("after delete, the localStorage is ",window.localStorage);
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

// function of submit button
function submitInput(e) {
    e.preventDefault();
    let inputName = document.getElementById('msger_name').value;
    let inputMsg = document.getElementById('msger_content').value;
    let like = 0;
    let haveRead = false;

    if (inputName === '')
        inputName = 'Guest';

    console.log("in submit button, like is ", JSON.parse(like));
    createCard(countUser()+1, inputName, inputMsg, JSON.parse(like), haveRead);
    document.getElementById('msger_name').value = '';
    document.getElementById('msger_content').value = '';

    save(inputName,inputMsg, like, haveRead);
}

// save user info to web storage
function save(inputName, inputMsg, inputLike ,haveRead){
    let curNum = countUser();

    let guest={
        id: curNum+1,
        name: inputName,
        msg:inputMsg,
        like: inputLike,
        haveRead: haveRead
    };

    window.localStorage.setItem(guest.id, JSON.stringify(( ({ name, msg, like, haveRead }) => ({ name, msg, like, haveRead }))(guest)));
}


let buttonSubmit = document.getElementById("submit_msg");
buttonSubmit.addEventListener('click', submitInput, true);
