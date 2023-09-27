// document.querySelector('#commentButton') // id
// document.querySelector('.#commentButton')  // class
// document.querySelector('#commentButton')  // tag
// document.querySelector('[name='#commentButton']') // name

// 배열
// const array = [1, 2, 3, 4, 5];
// array[0]
// array[1]
// ~ array [4]
// const stringArray = ["a", "b", "c"];
// const objectArray = [
//   { name: 1, text: "aaa" },
//   { name: 2, text: "bbb" },
//   { name: 3, text: "ccc" },
// ];

// 로컬스토리지에서 댓글 불러오기
// localStorage에서 가져와서 localstring으로 변환
const savedData = localStorage.getItem("my-page-comment")
const parsedData = JSON.parse(savedData)

console.log(parsedData)
// object array 형태로 변수에 들어있음
// 불러온 데이터를 화면에 그려주기
const commentDiv = document.createElement("commentDiv")
commentDiv.className = "commentDiv"
const nameSpan = document.createElement("span")
nameSpan.className = "nameSpan"
const textSpan = document.createElement("span")
textSpan.className = "textSpan"
console.log(commentDiv)
console.log(nameSpan)
console.log(textSpan)

commentDiv.appendChild(nameSpan)
commentDiv.appendChild(textSpan)
nameSpan.innerHTML = parsedData[0].name
textSpan.innerHTML = parsedData[0].text

const commentList = document.querySelector(".commentList")
commentList.appendChild(commentDiv)
// 댓글 불러오기 완료 //

// 댓글 버튼, 댓글 인풋 불러오기
const commentButton = document.querySelector(".commentButton")
const commentName = document.querySelector(".commentName")
const commentText = document.querySelector(".commentText")
console.log(commentButton)
console.log(commentName)
console.log(commentText)

// 댓글을 저장할 겍체 배열
const data = []

// 댓글 버튼에 click 이벤트 추가하기
commentButton.onclick = function () {
  const commentDiv = document.createElement("commentDiv")
  commentDiv.className = "commentDiv"
  const nameSpan = document.createElement("span")
  nameSpan.className = "nameSpan"
  const textSpan = document.createElement("span")
  textSpan.className = "textSpan"
  console.log(commentDiv)
  console.log(nameSpan)
  console.log(textSpan)

  commentDiv.appendChild(nameSpan)
  commentDiv.appendChild(textSpan)
  nameSpan.innerHTML = commentName.value
  textSpan.innerHTML = commentText.value

  const commentList = document.querySelector(".commentList")
  commentList.appendChild(commentDiv)

  // 댓글을 item에 담고 , data에 추가하기

  const item = {
    name: commentName.value,
    text: commentText.value,
  }
  data.push(item)

  // string으로 변환해서 저장
  const stringData = JSON.stringify(data)
  localStorage.setItem("my-page-comment", stringData)
}

// 로컬스토리지
localStorage.setItem("과일", "사과")
const fruit = localStorage.getItem("과일")
console.log(fruit)
localStorage.removeItem("과일")
