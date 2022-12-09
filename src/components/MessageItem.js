import { useRef } from "react";

// 하나의 메세지를 만듦.
const MessageItem = ({ teachQuestion, teachAnswer, id, teachRef}) => {

    // console.log("각각의 값은 : ", id, teachQuestion, teachAnswer);

    // key값은 map할때만 쓰이고 못받음!
    // 제일 첫번째 메세지만 대쉬로 강조!

    if(id === 0) {
        // teachRef.current.style = "border: 5px dashed black";
        console.log("0번째 말에 Dash 주고 싶어!");
    }

    return (
        <div className="MessageItem">
            <div 
                ref={teachRef}
                className="teach dashed"
            >
                <span className="teachMessage">{teachQuestion}</span>
                <div className="explain">이라고말하면</div>
            </div>
            <div className="simsimi">
                <span className="answer">{teachAnswer}</span>
                <div className="explain">라고 답해</div>
            </div>
        </div>
    )
};

export default MessageItem;