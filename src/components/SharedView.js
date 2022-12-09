import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SharedView = () => {
    const {id} = useParams();
    const [answer, setAnswer] = useState("");
    const [questionButtons, setQuestionButtons] = useState([]);
    const [name , setName] = useState("");
    
    const getData = async () => {
        console.log(id);
        const responseData = await axios.get("http://localhost:1234/simsimi/" + id);
        const talkSets = responseData.data.simsimi.talkSets;
        setName(responseData.data.simsimi.name);
        const tempButtons = talkSets.map((talk, index) => 
            <li key={index}>
                <button onClick={() => onPressQuestion(talk)}>
                    <div>{talk.question}</div>
                </button>
            </li>
        );
        setQuestionButtons(tempButtons)
        console.log("tempButtons : ", tempButtons);
        console.log("talkSets :", talkSets );
    }

    const onPressQuestion = (talk) => {
        console.log(talk);
        setAnswer(talk.answer);
    }

    useEffect(()=>{
        getData();
    },[]);

    return(
        <div className="SharedView">
            <h1> {`${name}이(가) 만든 챗봇에게 말을 걸어보세요 @_@`} </h1>
            <div className="simsimiSay">
                <span>심심이 대답</span>
                <div>{answer === "" ? "대답" : answer}</div>
            </div>
            <span>말걸기</span>
            {/* <input className="myQ"></input> */}
            <ul>{questionButtons}</ul>
            {/* <div className="inputArea">
                <span>말걸기</span>
                <ul>{questionButtons}</ul>
            </div> */}
        </div>
    );
}

export default SharedView;