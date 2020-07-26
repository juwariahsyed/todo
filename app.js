var list = document.getElementById("list");


function addTodo() {
  var todo_item = document.getElementById("todo-item")


//   cretae li tag with text node

  var li = document.createElement('li')
  var liText = document.createTextNode(todo_item.value)
  li.appendChild(liText)


//   cretae delete button 

  var delBtn = document.createElement("Button")
  var delText = document.createTextNode("Delete")
  delBtn.setAttribute("class", "btn")
  delBtn.setAttribute("onclick", "deleteItem(this)")
  delBtn.appendChild(delText)


//   cretae edit button 

   var editBtn = document.createElement("button");
   var editText = document.createTextNode("Edit")
   editBtn.setAttribute("class", "btn")
   editBtn.appendChild(editText)
   editBtn.setAttribute("onclick", "editItem(this)")

  li.appendChild(delBtn)
  li.appendChild(editBtn)
  
  list.appendChild(li)


  todo_item.value = " "

}


function deleteItem(e) {

    e.parentNode.remove()
}


function deleteAll() {
    list.innerHTML = " "
}

function editItem(e) {
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}






