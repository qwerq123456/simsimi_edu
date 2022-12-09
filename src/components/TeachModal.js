import { useState } from "react";
import CloseBtn from "../img/closebutton.png";


const TeachModal = ({id, data, onCreate, isvisible, setIsvisible, teachQuestionInput, teachAnswerInput,}) => {

    // teachInput
    const [state, setState] = useState({
        teachQuestion: "",
        teachAnswer: "",

    });

    const [localContent, setLocalContent] = useState("");

    const handleCloseModal = () => {
        setIsvisible(false);
        console.log("모달 닫힘!", isvisible);

        // 작성내용 초기화
        setLocalContent({
            teachQuestion: "",
            teachAnswer: "",
        });
    }

    // 현재 값들이 입력될때마다 호출됨.
    // 다 입력 후 teachinput를 출력하면 하나의 객체 생성됨.
    const handleChangeState = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };


    const handleOkayModal = () => {

        if(state.teachQuestion.length === 0){
            alert("가르칠 말을 다 입력하지 않았습니다");
            teachQuestionInput.current.focus();
        }
        else if(state.teachAnswer.length === 0){
            alert("가르칠 말을 다 입력하지 않았습니다");
            teachAnswerInput.current.focus();
        } else {
            onCreate(state.teachQuestion, state.teachAnswer);
            alert(`${data.length+1}개의 말을 가르쳤습니다.`);
            handleCloseModal();
    
            setState({
                teachQuestion: "",
                teachAnswer: "",
            });
        }
    }

    return(
        <div className="Modal TeachModal">
            <div className="ModalBox TeachModalBox">
                <div className="CloseBtn" onClick={handleCloseModal}>
                    <img src={CloseBtn} alt="닫기버튼"/>
                </div>
                <div className="inputs">
                    <div>
                        <div>이렇게 물어보면</div>
                        <input
                            ref={teachQuestionInput}
                            name="teachQuestion"
                            value={state.teachQuestion}
                            onChange={handleChangeState}
                        />
                    </div>
                    <div>
                        <div>이렇게 대답해</div>
                        <input
                            ref={teachAnswerInput}
                            name="teachAnswer"
                            value={state.teachAnswer}
                            onChange={handleChangeState}
                        />
                    </div>
                </div>
                <div className="okaybutton" onClick={handleOkayModal} >
                    <button>알겠지? 심심아</button>
                </div>
            </div>
        </div>
    );
};

export default TeachModal;