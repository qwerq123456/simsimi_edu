// 이전, 내용, 다음 + 배경 컴포넌트를 하나로 조합해서 여러 컴포넌트 속에서 사용하기

const Narration = ({data, step, setStep, username, usernameInput, setSimsimisay, asksimsimi, setAsksimsimi, asksimsimiInput}) => {

    // 이 시나리오는 밖으로 빼기
    const narrationContent = [{
        step: 0,
        contents: "심심이는 당신의 이름을 알아야해요!",
    },
    {
        step: 1,
        contents: "심심이에게 말을 걸어보세요!",
    },
    {
        step: 2,
        contents: "심심이는 아직 아는 말이 없네요. 심심이에게 말을 가르쳐볼까요?",
    },
    {
        step: 3,
        contents: "심심이에게 말을 가르쳤어요~",
    },
    {
        step: 4,
        contents: "심심이에게 방금 가르친 말을 걸어보세요!",
    },
    {
        step: 5,
        contents: "와! 심심이가 말을 할 줄 알게 되었어요",
    },
    {
        step: 6,
        contents: "심심이에게 말을 더 가르쳐볼까요? 2개의 말을 추가로 가르쳐주세요.",
    },
    {
        step: 7,
        contents: "심심이가 세 개의 말을 배웠습니다~👏🏻👏🏻👏🏻",
    },
    {
        step: 8,
        contents: "이제 심심이가 어떻게 작동하는지 알아볼까요?",
    },
    {
        step: 9,
        contents: "이곳은 심심이의 머릿속이에요!",
    },
    {
        step: 10,
        contents: "내가 가르친 말들이 잘 학습되어있는게 보이죠?",
    },
    {
        step: 11,
        contents: "이렇게 학습된 말을 누군가가 걸었을 때\n심심이는 배운대로 이야기합니다.",
    },
    {
        step: 12,
        contents: "수 많은 사람들에게 이와 같은 방법으로 말들을 배워서\n말을 잘 할수 있게 되는거에요!",
    },
    {
        step: 13,
        contents: "이제 내가 만든 챗봇을 가족이나 친구들에게 공유해보세요!",
    }]

    const beforeStep = () => {
        if(step-1 < 0){
            alert("이전단계가 없습니다");
            return;
        }
        setStep(step-1);
    }

    const nextStep = () => {
        console.log("현재단계", step);

        if(step > narrationContent.length-2){
            alert("모달 on!");
            // Setendstep(true);
            return;
        }

        // step 0
        if(step === 0){
            if(username.length === 0){
                alert("이름을 입력하세요");
                usernameInput.current.focus();
                console.log("이름을 입력하지않음.");
            } else {
                setSimsimisay("안녕, "+username+"!");
                setStep(step+1);
            }
        }
        // step 1
        if(step === 1){
            if(asksimsimi.length === 0){
                asksimsimiInput.current.focus();
                alert("말을 걸지 않았어요!");
                console.log("말을 걸지않음.");
            } else {
                setAsksimsimi("");
                // 이 멘트를 기본값으로 정해놓고 App에서 받기?
                setSimsimisay("모르는 말이에요. 가르쳐주세요!");
                setStep(step+1);
            }
        }
        if(step === 2){
            alert("말을 가르치지않았어요!");
        }
        // step 3 
        if(step === 3){
            setStep(step+1);
        }
        // step 4 (만약 말을 안걸었다면 포커스)
        if(step === 4){
            console.log("말을 걸어보자");
            setAsksimsimi(data[0].asksimsimi);

            if(asksimsimi.length === 0){
                asksimsimiInput.current.focus();
                alert("말을 걸지 않았어요!");
                console.log("말을 걸지않음.");
            } else {
                setAsksimsimi("");
                setSimsimisay(data[0].teachAnswer);
                setStep(step+1);
            }
        }
        // step 5,6
        if(step === 5){
            setStep(step+1);
        }
        if(step === 6){
            // 만약 가르친말이 총 3개 미만이라면 넘어가지않기
            alert("말을 더 가르쳐보세요!");
        }
        if(step === 7){
            setStep(step+1);
        }
        if(step > 7){
            setStep(step+1);
            setSimsimisay("");
        }
        // step이 8이면 이미지 옮기고 List 보이기

        console.log("다음단계", step);
    }
    return (
        <div className="Narration">
            <div className="before" step={step} onClick={beforeStep}>{"<"} 이전</div>
            <div className="contents">{narrationContent[step].contents}</div>
            <div className="next" step={step} onClick={nextStep}>다음 {">"}</div>
        </div>
    )
};

export default Narration;