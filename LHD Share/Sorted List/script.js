// 1
window.onload = function () {
    let task = document.getElementById('task')
    let addelement = document.getElementById('addelement')
    let addtask = document.getElementById('addtask')

    addelement.onclick = function () {
        let li = document.createElement('li')
        li.innerText = task.value
        addtask.appendChild(li)
        //  add button
        let btn = document.createElement('button')
        btn.innerText = '🚫'
        btn.onclick = function(close) {
            close.target.parentElement.remove()
        }
        li.appendChild(btn)
        let upbtn = document.createElement('upbutton')
        upbtn.innerText = '🔼'
        upbtn.onclick = function (mkdir) {
            // mkdir.target = up button
            // mkdir.target.parentElement = the <li> item
            // mkdir.target.parentElement.parentElement is the todolist
            mkdir.target.parentElement.parentElement.insertBefore(

                mkdir.target.parentElement,                          // insert this elelment
                mkdir.target.parentElement.previousElementSibling    // before it's previous element
            )
        }
        li.appendChild(upbtn)
        let downbtn = document.createElement('downSbutton')
        downbtn.innerText = '🔻'
        downbtn.onclick = function (mkdir) {
            // mkdir.target = down button
            // mkdir.target.parentElement = the <li> item
            // mkdir.target.parentElement.parentElement is the todolist
                mkdir.target.parentElement.parentElement.insertBefore(

                mkdir.target.parentElement.nextElementSibling,  // insert next element
                mkdir.target.parentElement                       // before current elelment
            )
        }
        li.appendChild(downbtn)
    }
}