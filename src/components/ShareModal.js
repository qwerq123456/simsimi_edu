import { useEffect, useState } from "react";
import CloseBtn from "../img/closebutton.png";
import axios from "axios";

const ShareModal = ({username, shareisvisible, setShareisvisible, data}) => {
    const [id, setId] = useState("");

    const handleCopyClipBoard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          console.log(text);
          alert('복사 성공!');
        } catch (error) {
          alert('복사 실패!');
        }
    };

    const postData = async () => {
        try{
            const requestData = {
                name : username,
                talkSets : data
            }
            const responseData = await axios.post("http://localhost:1234/simsimi", requestData);
            setId(responseData.data.id);
            // console.log(JSON.stringify(responseData.data.id));
        } catch(e) {
            console.log("postData fail with error :", e);
        }
    }

    useEffect(() => {
        postData().catch(error => console.log(error));
    }, []);

    const handleCloseModal = () => {
        setShareisvisible(false);
        console.log("모달 닫힘!", shareisvisible);
    }
    
    const handleGoShare = () => {
        handleCopyClipBoard("http://localhost:3000/sharedSimSimi/" + id);
        // alert("링크를 복사했습니다!");
        setShareisvisible(false);
        console.log("모달 닫힘!", shareisvisible);
    }

    return(
        //ShareModal 으로 이름 바꿔야함.
        <div className="Modal ShareModal">
            <div className="ModalBox ShareModalBox">
                <div className="CloseBtn" onClick={handleCloseModal}>
                    <img src={CloseBtn} alt="닫기버튼"/>
                </div>
                <div className="shareModalContents">
                    <div className="shareModalTitle">
                        <div className="userName">{username} </div>
                        <div>님의 챗봇 공유하기</div>
                    </div>
                    <div className="shareModalExplain">링크를 받은 사람들이 내가 만든 챗봇한테 말을 걸 수 있어요!</div>
                </div>
                <div className="linkShareButton okaybutton">
                    <button onClick={handleGoShare}>링크 공유하기</button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;