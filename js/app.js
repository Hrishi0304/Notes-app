//If user add a note,add it to the local storage
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj)
    showNotes();
})
//function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="note-card my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="delNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `;
    });
    let notesElem = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`
    }
}
// function to delete note
function delNote(index){
    // console.log('Deleting note...',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// let del = document.getElementById('delbtn');

// del.addEventListener("click", function () {
//     let notes = document.getElementById('notes');
//     let card = document.getElementById('note-text')
//     notes.removeChild(card)
// })
let search = document.getElementById('searchtxt')
search.addEventListener('input',function(){
    inputVal=search.value
    // console.log('input event fired!!!....',inputVal);
    let notecards = document.getElementsByClassName('note-card');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt);
        if(cardtxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    });
})
/*
1.add title
2.mark note as important
3.delete all function
4.Separate notes for user
5.sync and host to the web server 
 */
