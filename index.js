// document.querySelector("#commentButton") // id
// document.querySelector(".#commentButton")  // class
// document.querySelector("#commentButton")  // tag
// document.querySelector("[name='#commentButton']") // name

//댓글 버튼, 댓글 인풋 불러오기
var commentButton = document.querySelector(".commentButton");
var commentName = document.querySelector(".commentName");
var commentText = document.querySelector(".commentText");
console.log(commentButton);
console.log(commentName);
console.log(commentText);

//댓글 버튼에 click 이벤트 추가하기
commentButton.onclick = function () {
  let commentDiv = document.createElement("commentDiv");
  commentDiv.className = "commentDiv";
  let nameSpan = document.createElement("span");
  nameSpan.className = "nameSpan";
  let textSpan = document.createElement("span");
  textSpan.className = "textSpan";
  console.log(commentDiv);
  console.log(nameSpan);
  console.log(textSpan);

  commentDiv.appendChild(nameSpan);
  commentDiv.appendChild(textSpan);
  nameSpan.innerHTML = commentName.value;
  textSpan.innerHTML = commentText.value;

  let commentList = document.querySelector(".commentList");
  commentList.appendChild(commentDiv);
};
