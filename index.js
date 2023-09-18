// document.querySelector("#commentButton") // id
// document.querySelector(".#commentButton")  // class
// document.querySelector("#commentButton")  // tag
// document.querySelector("[name='#commentButton']") // name

var commentButton = document.querySelector("#commentButton");
var commentInput = document.querySelector("#commentInput");
console.log(commentButton);
console.log(commentInput);

commentButton.onclick = function () {
  console.log(commentInput.value);
  let div = document.createElement("div");
  div.innerHTML = commentInput.value;

  let main = document.querySelector("main");
  main.appendChild(div);
};
