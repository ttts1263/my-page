# my-page

HTML, CSS, JS를 이용해서 만든 간단한 자기소개 페이지

## vscode 확장프로그램

- live server
- prettier
- eslint

## 설치방법

- 로컬에서 live server 확장프로그램을 사용하기 위해서 폴더를 하나 생성한다.
  - ex) study/my-page/...
- 위에서 만든 폴더로 이동 후 my-page 레포지토리를 git clone 한다.
- 위에서 만든 폴더에서 vscode를 실행한다.
- pnpm을 사용해서 패키지를 설치한다.

```bash
mkdir study
cd study && git clone git@github.com:ttts1263/my-page.git
code .
cd my-page
npm i -g pnpm
pnpm i
```

## 실행방법

- vscode 에디터에서 live server 확장프로그램을 설치한다.
- vscode 하단에 있는 Go Live를 실행한다.
- 로컬에서 프로젝트가 실행되고 /my-page/ 주소로 이동한다.

## 배포방법

- 배포는 gh-pages를 사용한다.
- pnpm run deploy
