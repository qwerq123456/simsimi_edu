import MessageItem from "./MessageItem";

const MessageList = ({MessageList, teachRef, arrow_1Ref, arrow_2Ref}) => {
    return (
        <div className="MessageListContainer fadein">
            {/* <h2>내가 가르친 말</h2> */}
            <div className="MessageList">
                {/* 되도록 idx 쓰지말고 유니크한 id 매번 직접 데이터 안에 생성하기! */}
                {MessageList.map((it,idx) => (
                    <MessageItem key={idx} {...it} teachRef={teachRef}/>
                ))}
            </div>
            <div
                ref={arrow_1Ref} 
                className="">
                <div className="arrowbody"></div>
                <div className="arrowHead"></div>
            </div>
            <div
                ref={arrow_2Ref} 
                className="">
                <div className="arrowbody"></div>
                <div className="arrowHead"></div>
            </div>
            
            {/* test */}
            {/* <div className="parent1">
                <span className="first">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere rhoncus velit, vel faucibus risus cursus commodo.
                </span>
                <span className="second">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere rhoncus velit, vel faucibus risus cursus commodo.
                </span>
            </div> */}


        </div>
    );
};

MessageList.defaultProps = {
    msgList: [],
};

export default MessageList;