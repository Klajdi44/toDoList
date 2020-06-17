let button = document.getElementById("enter");
let lis = document.querySelectorAll("li");
let uLlist = document.querySelector("ol");
let input = document.getElementById("userInput");

// button.addEventListener("click", function () {
//   if (input.value.length > 0) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     uLlist.appendChild(li);
//     input.value = ""
//   }
// })


// input.addEventListener("keypress", function (event) {
//   if (input.value.length > 0 && event.keyCode == 13) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     uLlist.appendChild(li);
//     input.value = ""
//   }
// })

// after making the code shorter 
function inputReturn() {
  return input.value.length;
}

function createListElement() {
  let newli = document.createElement("li");
  let btn = document.createElement("button");
  btn.classList.add("delBtn");


  newli.appendChild(document.createTextNode(input.value));
  uLlist.appendChild(newli);
  newli.classList.add("li-list")
  btn.appendChild(document.createTextNode("Delete"));
  newli.appendChild(btn);
  input.value = ""
  btn.addEventListener("click", delItem1);

  let listIndicator = document.getElementById("list-indicator");
  if (uLlist.children.length > 0) {
    listIndicator.style.display = "none";
  }

}






function delItem1(e) {
  //if i didnt put the .parent element when clicked only the button would be deleted and not the li which is the parent of button. so if i put it i am saying delete the whole parent instead
  e.target.parentElement.remove();

}



function addListAfterClick() {
  if (inputReturn() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (inputReturn() > 0 && event.keyCode == 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

uLlist.addEventListener("click", addLine);

//adding the .done(linethrough) class that also changes the background
function addLine(e) {

  if (e.target.classList.contains("li-list")) {
    e.target.classList.toggle("done");

  }
}
//backgorund changer

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.querySelector("body");

color1.addEventListener("input",
  colorChanger);
color2.addEventListener("input",
  colorChanger);

function colorChanger() {
  body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value, +")";

  color1.style.background = color1.value;
  color2.style.background = color2.value;


}