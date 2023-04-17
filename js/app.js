"use strict";
// https://race.notion.site/DOM-Manipulation-Simple-To-Do-List-adb24737446a4a72aa829ada27440e0f


// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp (){

    document.querySelector("#btn-add-item").addEventListener("click", addToDo)
}
    function removeToDo() {
        // this is the listDeleteBtn, and parentNode gets the listItem 'li' element, and then we delete the entire element & the children appended to it.
        this.parentNode.remove();
}

function addToDo() {
    // her bruger vi backtick string til at lave noget html og gemmen i en html konstant.
const myHTML = `
            <li>
                <span>${newToDo.value}</span>
                <button>Delete</button>
            </li>
`;
    // Vi inserter derefter det her html, i vores 'ul' tag ovre i vores HTML, med insertAdjacentHTML metoden,
    // hvor vi vælger position først, og det html vi vil indsætte efter

list.insertAdjacentHTML("beforeend",myHTML);
    //EventListener on the ____________!!
list.querySelector("li:last-child button").addEventListener("click", removeToDo);
    //Resets the input field entity
    newToDo.value = "";
}


/*
function addToDo() {
    const listItem = document.createElement('li')
    const listText = document.createElement("span")
    const listDeleteBtn = document.createElement('button')

    //Updating the value of our list
    listText.textContent = newToDo.value;
    listDeleteBtn.textContent = "Delete"

    console.log(listItem)
    console.log(listText)
    console.log(listDeleteBtn)
    //listItem.appendChild(listText,buttonDelete)

    // We append the span element and button element to our 'li' element, so they become items inside the list element.
    listItem.appendChild(listText);
    listItem.appendChild(listDeleteBtn);

    // Now we take the listItem 'li' element with the span and btn appended to it, and append THAT to the empty 'ul' list html tag,
    // we created in our html
    list.appendChild(listItem);

    //Resets the input field entity
    newToDo.value = "";

    //EventListener on the delete button
    listDeleteBtn.addEventListener("click", removeToDo);

}
*/