import { useRef, useState } from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";
import Home from './components/Home';
import MessageList from './components/MessageList';
import Cover from './components/Cover';
import Narration from './components/Narration';

// const dummyList = [
//   {
//     id:1,
//     contents: "좋은아침~",
//     answer: "굿모닝",
//   },
//   {
//     id:2,
//     contents: "배고파",
//     answer: "오늘은 내가 요리사",
//   },
//   {
//     id:3,
//     contents: "난 너를 사랑해~",
//     answer: "알러뷰걸~",
//   },
// ];

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}`;

function App() {
  // const dataId = useRef(0); // 추가될 메세지의 id를 담을 변수
  // 현재 나레이션 단계 값을 담는 state
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [simsimisay, setSimsimisay] = useState("");
  const [asksimsimi, setAsksimsimi] = useState("");

  const usernameInput = useRef();
  const asksimsimiInput = useRef();
  const teachbuttonRef = useRef();
  const teachQuestionInput = useRef();
  const teachAnswerInput = useRef();

  // 가르친말들 다 저장하는곳
  const [data, setData] = useState([]);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        { step === 0 ? 
          <Cover username={username} setUsername={setUsername} usernameInput={usernameInput}/> : 
          <Home username={username} data={data} setData={setData} step={step} setStep={setStep} simsimisay={simsimisay} setSimsimisay={setSimsimisay} asksimsimiInput={asksimsimiInput} asksimsimi={asksimsimi} setAsksimsimi={setAsksimsimi} teachbuttonRef={teachbuttonRef} teachQuestionInput={teachQuestionInput} teachAnswerInput={teachAnswerInput}/> 
        }
        {
          <Narration data={data} step={step} setStep={setStep} username={username} usernameInput={usernameInput} setSimsimisay={setSimsimisay} asksimsimi={asksimsimi} setAsksimsimi={setAsksimsimi} asksimsimiInput={asksimsimiInput} teachbuttonRef={teachbuttonRef}/>
        }

        {/* <MessageList MessageList={data}/> */}

      </div>
    </>
  );
}

export default App;