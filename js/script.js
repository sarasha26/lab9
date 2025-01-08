//GET THE FORM AND TASK LIST FROM THE DOM
let form = document.querySelector('#addForm')
let list = document.querySelector('#items')

//CHECK TO SEE IF THE 'NO TASKS' MESSAGE SHOULD BE DISPLAYED
checkMessageDisplay()

//Add Task
form.addEventListener('submit',(e) => {
    //prevent default form submission
    e.preventDefault()

    //get the value from the textbox
    let newItem = document.getElementById('item').value

    //create new li
    let li = document.createElement('li')
    //add class to li
    li.className = 'list-group-item'
    //create new task node based on task user added to form
    let text = document.createTextNode(newItem)
    //add text to li
    li.appendChild(text)

    //CREATE A DELETE BUTTON
    let deleteBtn = document.createElement('button')
    //add bootstrap classes for the button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    //create text node for delete button and set it to 'X'
    let textDelete = document.createTextNode('X')
    //append text node to delete button
    deleteBtn.appendChild(textDelete)
    //append delete button to li
    li.appendChild(deleteBtn)

    //add li to ul
    list.appendChild(li)

    //clear the text box
    form.reset()

    //check to see if the 'no tasks' message should be displayed
    checkMessageDisplay()
})

//HANDLE THE CLICK EVENT OF THE DELETE BUTTON
list.addEventListener('click',(e) =>{
    //check and see if the delete button was clicked
    if(e.target.classList.contains('delete')){
        //Display confirmation of delete to the user
        if(confirm('Are you sure you want to delete this task?')){
            //remove the selected li
            list.removeChild(e.target.parentElement)
            //check to see if 'no tasks' message should be displayed
            checkMessageDisplay()
            
        }
    }
})

//FUNCTION TO SHOW OR HIDE 'NO ROWS' ALERT
function checkMessageDisplay(){
    if(list.children.length == 0){
        document.querySelector('span').classList.add('show')

    }else {
        document.querySelector('span').classList.remove('show')
        
    }
}
