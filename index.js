// document.querySelector('#commentButton') // id
// document.querySelector('.#commentButton')  // class
// document.querySelector('#commentButton')  // tag
// document.querySelector('[name='#commentButton']') // name

// 댓글 버튼, 댓글 인풋 불러오기
let commentButton = document.querySelector(".commentButton");
const commentName = document.querySelector(".commentName");
const commentText = document.querySelector(".commentText");
console.log(commentButton);
console.log(commentName);
console.log(commentText);

// 댓글 버튼에 click 이벤트 추가하기
commentButton.onclick = function () {
  const commentDiv = document.createElement("commentDiv");
  commentDiv.className = "commentDiv";
  const nameSpan = document.createElement("span");
  nameSpan.className = "nameSpan";
  const textSpan = document.createElement("span");
  textSpan.className = "textSpan";
  console.log(commentDiv);
  console.log(nameSpan);
  console.log(textSpan);

  commentDiv.appendChild(nameSpan);
  commentDiv.appendChild(textSpan);
  nameSpan.innerHTML = commentName.value;
  textSpan.innerHTML = commentText.value;

  const commentList = document.querySelector(".commentList");
  commentList.appendChild(commentDiv);
};

// 로컬스토리지
localStorage.setItem("과일", "사과");
const fruit = localStorage.getItem("과일");
console.log(fruit);
localStorage.removeItem("과일");
