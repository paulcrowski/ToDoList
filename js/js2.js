var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button on page
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks



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


var addTask = function(taskInput){
    console.log("Add task..");

    var listItem = createNewTaskElement(taskInput.value);

    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};



var editTask = function(){
    console.log("Edit task..");


};



var deleteTask = function(){
    console.log("Delete task..");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};



var taskCompleted = function(){
    console.log("Task Complete..");

    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
};



var taskIncomplete = function(){
    console.log("Task Incomplete..");

    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
    console.log("Bind list items events");

    var checkBox = taskListItem.querySelector("input[type=checkbox]") ;
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");

    editButton.onclick = editTask;

    deleteButton.onclick = deleteTask;

    checkBox.onchange = checkBoxEventHandler;
};


addButton.onclick = addTask;




for (var i=0; i< incompleteTasksHolder.children.length ; i++) {

    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}


for (var i=0; i< completedTasksHolder.children.length ; i++) {

    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}