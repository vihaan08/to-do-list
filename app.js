var listOfActivity=[];

var input = document.getElementById("input");

var toDoList  = document.getElementById("toDoList");

document.getElementById("button").onclick=click;

function click(){
    listOfActivity.push(input.value);

    console.log(listOfActivity);

    input.value="";

    showList();

}

function showList(){
    toDoList.innerHTML="";

    listOfActivity.forEach(function(current_value, index){

        toDoList.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")>edit</a>")
       } )
}

function editItem(index){
    var newValue=prompt("Please insert your value");

    listOfActivity.splice(index,1,newValue);

    showList();
}

function deleteItem(index){
    listOfActivity.splice(index,1);

    showList()
}