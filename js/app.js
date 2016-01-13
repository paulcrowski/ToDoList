/**
 * Created by Pol on 2015-12-31.
 */

// new entry add
var taskInput = document.getElementById("new-task");
// button for new entry
var addButton = document.getElementsByTagName("button")[0];
// ul li list of incompleted task
var incompledTaskHolder = document.getElementById("incomplete-tasks");
// ul li list of completed task
var completedTaskHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function (taskString) {
    // creating new task elemnt with add/edit/delete/checkbox
    var listItem = document.createElement("li");

    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    //modyfing elemnet
    checkBox.type ="checkbox";
    editInput.type ="text";

    editButton.innerText ="Edit";
    editButton.className ="edit";
    deleteButton.innerText ="Delete";
    deleteButton.className ="delete";
    label.innerText =taskString;

    // appending element
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
};

var addTask = function () {
    console.log('add task');
    var listItem = createNewTaskElement (taskInput.value);

    incompledTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";
};

var editTask = function () {
    console.log('edit task');
    var listItem = this.parentNode;
    var editInput = listItem.querySelector('input[type=text]');
    var label = listItem.querySelector('label');

    var contains = listItem.className.contains =="editMode";
    if (contains) {
        label.innerText = editInput.value;
    }
    else {
        editInput.value = label.innerText;
    }

    //togle edit mode
    listItem.classList.toggle('editMode');
};


var deleteTask = function () {
    console.log('delete task');
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};
var taskCompleted = function () {
    console.log('task complete');
    //when the checkbox is checked
    var listItem = this.parentNode;
    // append task list itme to complete task
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplite)
};
var taskIncomplite = function () {
    console.log('task incomplete');
    var listItem = this.parentNode;
    // append task list itme to complete task
    incompledTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted)
};


// binding children, edit, delete and completed or incomplete event (checkBoxEventHandler)
var bindTaskEvents = function (taskListItem, checkBoxEventHandler){
    console.log('bind list item');
    // for each list item
    // select children of li
    var checkBox = taskListItem.querySelector('input[type=checkbox]');
    var editButton = taskListItem.querySelector('button.edit');
    var deleteButton = taskListItem.querySelector('button.delete');

    // bind edit task to edit
    editButton.onclick = editTask;
    // bind deletetask to delete
    deleteButton.onclick = deleteTask;
    // bin taskcomplete to checkbox depednce wgat we catcg complete or incomplete
    checkBox.onchange = checkBoxEventHandler;
};

// for each incompleted ul li start function bindEvents
for(var i=0; i < incompledTaskHolder.children.length; i++){

    bindTaskEvents(incompledTaskHolder.children[i], taskCompleted);
}

// for each completed ul li start function bindEvents
for(var i=0; i < completedTaskHolder.children.length; i++){

    bindTaskEvents(completedTaskHolder.children[i], taskIncomplite);
}
//addButton.onclick = addTask;

var ajaxRequest = function() {
    console.log('ajax requst');
}

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);