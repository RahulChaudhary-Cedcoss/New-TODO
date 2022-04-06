var UserInputData = [];  
var completedTask = [];

function add(){
  var input  = document.getElementById("new-task").value;
  UserInputData.push(input)
  display();
};

function display(){
    var Items = ""
    UserInputData.forEach((element,index) => {
    var input =`<li>
    <input type="checkbox" onclick="check(${index})" /><label>${element}</label
    ><input type="text" /><button class="edit" onclick="edit(${index})">Edit</button
    ><button class="delete" onclick="del(${index})">Delete</button>
    </li>`;
    Items += input;
});
document.getElementById("incomplete-tasks").innerHTML =Items;
};
function edit(index){
    var listitem = UserInputData[index];
    document.getElementById("todoindex").value=index;
    var x = document.getElementById("todoindex").classList.add('UserInputData');
    document.getElementById("new-task").value=listitem;
    document.getElementById('addbutton').style.display = 'none';
    document.getElementById("updatebutton").style = display;
};

function update(){
    var input = document.getElementById("new-task").value;
    var index = document.getElementById("todoindex").value;
    var x = document.getElementById("todoindex").className;
    if(x == "UserInputData"){
      UserInputData[index]=input;
        display();
        document.getElementById("todoindex").className="";
    }
    else{
        comptodo[index]=input;
        displaycompleted();
        document.getElementById("todoindex").className="";
    }
    document.getElementById('addbutton').style = display;
    document.getElementById("updatebutton").style.display = 'none';
}
function del(index){
  UserInputData.splice(index,1);
    display();
};

function check(index){
    var value = UserInputData[index];
    completedTask.push(value);
    UserInputData.splice(index,1);
    displaycompleted();
    display();
};
function displaycompleted(){
    var Items = ""
    completedTask.forEach((element,index) => {
    var input =`<li>
    <input type="checkbox" onclick="completecheck(${index})" /><label>${element}</label
    ><input type="text" /><button class="edit" onclick="compedit(${index})">Edit</button
    ><button class="delete" onclick="completedelete(${index})">Delete</button>
    </li>`;
    console.log(index)
    Items += input;
});

document.getElementById("completed-tasks").innerHTML =Items;
};

function compedit(index){
    var listitem = completedTask[index];
    document.getElementById("todoindex").value=index;
    document.getElementById("new-task").value=listitem;
    var x = document.getElementById("todoindex").classList.add('completedTask')
    document.getElementById('addbutton').style.display = 'none';
    document.getElementById("updatebutton").style = display;
};
function completedelete(index){
  completedTask.splice(index,1);
    displaycompleted();
};

function completecheck(index){
    var value = completedTask[index];
    UserInputData.push(value);
    completedTask.splice(index,1);
    displaycompleted();
    display();
};
