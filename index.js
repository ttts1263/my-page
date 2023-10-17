/**
 * 댓글 타입
 * comment: {
 *  id: number,
 *  name: string,
 *  text: string
 * }
 */

(function () {
  // 즉시실행함수(IIFE)로 스코프 제한하기
  // --- DOM에 필요한 데이터 불러오기 ---

  // 댓글 불러오기
  const comments = getCommentsLocalStorage();
  console.log(comments);
  // 불러온 데이터를 화면에 그려주기
  renderComments(comments);

  // --- DOM에 이벤트 추가 ---

  // 댓글 버튼, 댓글 인풋 불러오고 onclick 이벤트 추가하기
  const commentButton = document.querySelector('.commentButton');
  commentButton.onclick = () => {
    addComment(getCommentsLocalStorage());
  };
})();

// utils 함수들 //

// 로컬스토리지에서 댓글 가져오는 함수
function getCommentsLocalStorage() {
  // localStorage에서 가져와서 localstring으로 변환
  const localComments = localStorage.getItem('my-page-comments');
  // 파싱에 실패하거나, 데이터가 없을 경우 빈배열[] 리턴
  try {
    if (localComments == null) {
      return [];
    }
    return JSON.parse(localComments);
  } catch (error) {
    return [];
  }
}

// comments를 입력받아서 화면에 그려주는 함수
function renderComments(comments) {
  const commentListDiv = document.querySelector('.commentList');
  commentListDiv.innerHTML = '';

  // 배열을 순회하는 함수
  comments.forEach((item) => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'commentDiv';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'nameSpan';
    const textSpan = document.createElement('span');
    textSpan.className = 'textSpan';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '삭제';
    // 버튼 클릭시 삭제
    deleteButton.onclick = () => {
      comments = removeComment(comments, item.id);
    };

    commentDiv.appendChild(nameSpan);
    commentDiv.appendChild(textSpan);
    commentDiv.appendChild(deleteButton);
    if (item !== undefined) {
      commentDiv.id = item.id;
      nameSpan.innerHTML = item.name;
      textSpan.innerHTML = item.text;
    }
    commentListDiv.appendChild(commentDiv);
  });
}

// 댓글 추가 함수
function addComment(comments) {
  // DOM 요소 가져오기
  const commentNameInput = document.querySelector('.commentName');
  const commentTextInput = document.querySelector('.commentText');
  // 댓글을 item에 담고 , data에 추가하기
  const comment = {
    id: 'comment-id-' + new Date().getTime(),
    name: commentNameInput.value,
    text: commentTextInput.value,
  };
  comments.push(comment);

  // string으로 변환해서 저장
  const stringComments = JSON.stringify(comments);
  localStorage.setItem('my-page-comments', stringComments);

  // 화면에 렌더
  renderComments(comments);
}

// 댓글 삭제 함수
function removeComment(comments, id) {
  // 화면에서도 삭제해야함
  const commentDiv = document.querySelector('#' + id);
  if (commentDiv) {
    commentDiv.remove();
  }

  // 배열에서 삭제하는 방법
  // 우리가 원하는건 id를 제외한 전부를 리턴을 해야함
  const filtered = comments.filter((item) => item.id !== id);

  // 삭제한 배열을 로컬스토리지에 저장
  localStorage.setItem('my-page-comments', JSON.stringify(filtered));
  return filtered;
}
