// document.querySelector('#commentButton') // id
// document.querySelector('.commentButton')  // class
// document.querySelector('commentButton')  // tag
// document.querySelector('[name='commentButton']') // name

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
const localComments = localStorage.getItem('my-page-comments')
const parsedLocalComments = JSON.parse(localComments)

// object array 형태로 변수에 들어있음
// 불러온 데이터를 화면에 그려주기
const commentDiv = document.createElement('commentDiv')
commentDiv.className = 'commentDiv'
const nameSpan = document.createElement('span')
nameSpan.className = 'nameSpan'
const textSpan = document.createElement('span')
textSpan.className = 'textSpan'

commentDiv.appendChild(nameSpan)
commentDiv.appendChild(textSpan)
if (parsedLocalComments?.[0] !== undefined) {
  nameSpan.innerHTML = parsedLocalComments?.[0].name
  textSpan.innerHTML = parsedLocalComments?.[0].text
}

const commentListDiv = document.querySelector('.commentList')
commentListDiv.appendChild(commentDiv)
// 댓글 불러오기 완료 //

// 댓글 버튼, 댓글 인풋 불러오기
const commentButton = document.querySelector('.commentButton')
const commentNameInput = document.querySelector('.commentName')
const commentTextInput = document.querySelector('.commentText')

// 댓글을 저장할 겍체 배열
const comments = []

// 댓글 버튼에 click 이벤트 추가하기
commentButton.onclick = function () {
  const commentDiv = document.createElement('commentDiv')
  commentDiv.className = 'commentDiv'
  const nameSpan = document.createElement('span')
  nameSpan.className = 'nameSpan'
  const textSpan = document.createElement('span')
  textSpan.className = 'textSpan'

  commentDiv.appendChild(nameSpan)
  commentDiv.appendChild(textSpan)
  nameSpan.innerHTML = commentNameInput.value
  textSpan.innerHTML = commentTextInput.value

  const commentListDiv = document.querySelector('.commentList')
  commentListDiv.appendChild(commentDiv)

  // 댓글을 item에 담고 , data에 추가하기

  const comment = {
    name: commentNameInput.value,
    text: commentTextInput.value,
  }
  comments.push(comment)

  // string으로 변환해서 저장
  const stringComments = JSON.stringify(comments)
  localStorage.setItem('my-page-comments', stringComments)
}
