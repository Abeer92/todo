//this class has 2 functions:

function Start(){};

//1st (event) to check if btn exists, and if so it calls the other 
//function (fire) when the btn is clicked, 

Start.prototype.events = function(){
	if(document.getElementById("myBtn")){
	document.getElementById("myBtn").addEventListener("click",this.fire);
	}
};

//2nd (fire) to get the user input, and the html elements, 
//then passing them to createItem class
Start.prototype.fire = function(event){
	event.preventDefault();
	var myForm = document.forms["myForm"];
	//create an input to hold the entered value
	var myInput = myForm["myText"].value;
    myInput.trim(" ");
	if(myInput){
	   var ul = document.querySelector(".myList");
	   //we will instentiate a newItem from createItem class
	   var newItem = new createItem("li");
	   /*we will call a class function and pass ul, and the input to it, 
	   so that it'll perform adding new item operation*/
	   newItem.appendListItem(ul,myInput);
	}
	//to reset form and remove previous value
	myForm.reset();
};


//instentiating new opject from start class to apply functions on it

var operation = new Start();
operation.events();


/*the class createItem that is responsable for creating new element and it has 2 methods:
1st: appendListItem to append the new element to the list if it's no already added
2nd: removeTask to remove task when click on it after asking to confirm if task is done
*/

function createItem(element){
	this.element = document.createElement(element);
};

createItem.prototype.appendListItem = function(ul, myInput){
	var liText = document.createTextNode(myInput);
		var ulItems = ul.children;
		this.element.appendChild(liText);
		var z = false;
		if(ulItems.length < 1){
			ul.appendChild(this.element);
            this.element.addEventListener("click",this.removeTaske);
		} else {
			for(var i = 0; i < ulItems.length; i++){
				if(ulItems[i].innerText.trim() == myInput.trim()){
					z = true;
					console.log("Item Already exists");
					alert("Item already exists")
				}
			}

			if(!z){ 
				ul.appendChild(this.element);
                this.element.addEventListener("click",this.removeTaske);
			}
		}
};

createItem.prototype.removeTaske = function(event){
    var request = confirm("Are you sure that you done the Task?");
    parent = document.querySelector(".myList");
    if(request == true){
    parent.removeChild(event.target);
   }
 };