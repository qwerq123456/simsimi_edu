import { useEffect } from "react";

const SharedView = () => {

    useEffect(()=>{
        // 서버에 id 보내고 data 받기 -> state 로 관리
    },[]);

    return(
        <div className="SharedView">
            <h1> 보낸사람이 만든 챗봇에게 말을 걸어보세요 @_@ </h1>
            <div className="simsimiSay">
                <span>심심이 대답</span>

                <div>"대답"</div>
            </div>
            <div className="inputArea">
                <span>말걸기</span>
                <input className="myQ"></input>
                {/* 가르친 말들 버튼 목록 */}
            </div>
        </div>
    );
}

export default SharedView;