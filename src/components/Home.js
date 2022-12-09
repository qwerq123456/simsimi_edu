import { useRef, useState } from "react";
import SimsimiImg from '../img/simsimi.png';
import graduation_cap from "../img/graduation-cap.png";
import share from "../img/share.png";
import Arrow from "../img/Arrow.png"
import TeachModal from "./TeachModal";
import MessageList from "./MessageList";
import SimsimiShadow from "../img/simsimishadow.png"
import ShareModal from "./ShareModal";

const Home = ({username, data, setData, setStep, step, simsimisay, setSimsimisay, asksimsimiInput, asksimsimi, setAsksimsimi, teachbuttonRef, teachQuestionInput, teachAnswerInput}) => {
    const [isvisible, setIsvisible] = useState(false);
    const [shareisvisible, setShareisvisible] = useState(false);

    const BtnsRef = useRef();
    const teachBtnRef = useRef();
    const shareBtnRef = useRef();
    const SimsimiBackgroundRef = useRef();
    const messageInputSendAreaRef = useRef();
    const teachRef = useRef();
    const arrow_1Ref = useRef();
    const arrow_2Ref = useRef();

    const dataId = useRef(0);

    const onCreate = (teachQuestion, teachAnswer) => {

        const newMessage = {
           question : teachQuestion,
           answer : teachAnswer,
        //   id:dataId.current,
        };
        dataId.current += 1;
        console.log("지금까지 가르친 말은 : ",data);

        // 최초 가르친거라먄
        if(data.length === 0){
            setStep(3);
        }
        if(data.length === 2){
            console.log("세개 가르침!");
            setStep(7);
        }

        setData([...data, newMessage]);
        console.log("현재 입력한 데이터 : ",newMessage);
    }
    

    // 단계별 컴포넌트들 CSS style 변형

    if(step === 9){
        teachBtnRef.current.className = "teachBtn fadeout";
        shareBtnRef.current.className = "teachBtn shareBtn fadeout";

        SimsimiBackgroundRef.current.className = "SimsimiBackground moveleft";
        SimsimiBackgroundRef.current.style = "width: 450px";
        messageInputSendAreaRef.current.className =  "messageInputSendArea moveleft";
    }
    if(step === 11){
        console.log("dash 강조!");
        // teachRef.current.className = "teach dashed";
        arrow_1Ref.current.className = "arrow arrow_1 searchingAnimation";
    }
    if(step === 12){
        arrow_2Ref.current.className = "arrow arrow_2 leftToRight";
    }
    if(step === 13){
        console.log("아이콘 페이드인!");
        // teachBtnRef.current.className = "teachBtn fadein";
        // shareBtnRef.current.className = "teachBtn shareBtn fadein";
    }


    // Handle Buttons Click

    const handleSubmit = () => {

        console.log(step);

        if(asksimsimi.length === 0){
            alert("말을 걸지 않았습니다.");
            asksimsimiInput.current.focus();
        } else {
            // 만약 입력한 값이 DATA안에 있다면 해당 대답출력
            // 입력한 값이 Data안에 없다면 모르는 말이에요 출력


            // 입력받은 값 출력
            console.log("입력받은 값은 : ", asksimsimi);

            // 지금까지 가르친 말들 출력
             // (수정해야함) 클릭할때마다 데이터들 다 돌아봄.
            data.map((it,idx) => {
                console.log(idx, it.teachQuestion, it.teachAnswer)

                if(asksimsimi === it.teachQuestion){
                    console.log("아는 말이에요!");
                    setSimsimisay(it.teachAnswer);
                }
                else {
                    console.log("모르는말이에요!");
                    setSimsimisay("모르는말이에요 가르쳐주세요!");
                }
            });
    
            // 각 단계별로 step 을 +1 시켜줄지 판단
            if(step === 1){
                setStep(step+1);
                setSimsimisay("모르는말이에요 가르쳐주세요!");
            }
            if(step === 4){
                setStep(step+1);
                setSimsimisay(data[0].teachAnswer);
            }
            setAsksimsimi("");
        }
    };

    const handleTeachModal = () => {
        setIsvisible(true);
        console.log("가르치기 모달on");
    }

    const handleShareModal = () => {
        setShareisvisible(true);
        console.log("공유하기 모달on");
    }

    return (
        <div className="Home">
            <div className="homeTitle">
                <h1>Simsimi Edu</h1>
                <h3>나만의 AI 챗봇 만들기</h3>
            </div>
            <div className="imgAndbtn">
                <div 
                    ref={SimsimiBackgroundRef}
                    className="SimsimiBackground">
                    <span>{simsimisay}</span>
                    <div className="imgs">
                        <img className="shadow" src={SimsimiShadow} alt="심심이그림자"/>
                        <img className="simsimi" src={SimsimiImg} alt="심심이이미지"/>
                    </div>
                </div>
                <div
                    ref={BtnsRef}
                    className="Btns">
                    <div
                        ref={teachBtnRef}
                        className="teachBtn">
                        <button 
                            ref={teachbuttonRef}
                            onClick={handleTeachModal}
                        >
                            <img src={graduation_cap} alt="학사모"/>
                        </button>
                        <div className="teach">가르치기</div>
                    </div>
                    <div
                        ref={shareBtnRef} 
                        className="teachBtn shareBtn">
                        <button 
                            // ref={sharebuttonRef}
                            onClick={handleShareModal}
                        >
                            <img src={share} alt="공유"/>
                        </button>
                        <div className="teach fadeout">공유하기</div>
                    </div>
                </div>
            </div>

            <div
                ref={messageInputSendAreaRef}
                className="messageInputSendArea"
            >
                <div className="messageInputArea">
                    <input
                        ref={asksimsimiInput}
                        name="contents"
                        value={asksimsimi}
                        onChange={e => setAsksimsimi(e.target.value)}
                        placeholder="심심이에게 말걸기"
                    />
                </div>
                <button 
                    className="submitBtn" 
                    onClick={handleSubmit}
                >
                    <img src={Arrow} alt="보내기버튼"/>
                </button>
            </div>
            { (step > 8) && <MessageList MessageList={data} teachRef={teachRef} arrow_1Ref={arrow_1Ref} arrow_2Ref={arrow_2Ref}/>}
            {/* 심심이 말 가르치기 modal */}
            {isvisible && <TeachModal data={data} onCreate={onCreate} isvisible={isvisible} setIsvisible={setIsvisible} teachQuestionInput={teachQuestionInput} teachAnswerInput={teachAnswerInput}  />}
            {shareisvisible && <ShareModal shareisvisible={shareisvisible} setShareisvisible={setShareisvisible} username={username} data ={data}/>}
            
        </div>
    );
}

export default Home;