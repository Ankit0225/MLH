let btnAdd = $('#btnAdd')
let newtask = $('#newtask')
let btnclear = $('#btnclear')
let btnSort = $('#btnSort')
let btndel = $('#btndel')
let listedtask = $('#listedtask')
let SortedTask = $('#SortedTask')

function addtask() {
    let listitem = $('<li>', {
        'class': 'list-group-item',
        text: newtask.val()
       })
       listitem.click(() => {
           listitem.toggleClass('done')
       })
        listedtask.append(listitem)
        newtask.val('')
        togglebuttons()
}

function del() {
   $('#SortedTask .done').remove()
   togglebuttons()
}

function sort() {
    $('#listedtask .done').appendTo(SortedTask)
}

function togglebuttons() {
        btnAdd.prop('disabled',newtask.val() == '')
        btnclear.prop('disabled',newtask.val() == '')
        btnSort.prop('disabled',listedtask.children().length < 1)
        btndel.prop('disabled',listedtask.children().length < 1)
    }

newtask.keypress((e) => {
    if(e.which == 13) addtask()
})

newtask.on('input' , togglebuttons)

btnAdd.click(addtask)

btnclear.click(() => {
    newtask.val('')
    togglebuttons()
})

btndel.click(del)

btnSort.click(sort)