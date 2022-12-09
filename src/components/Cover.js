import CoverSimSimi from "../img/coverSimSimi.png"

const Cover = ({username, setUsername, usernameInput}) => {

    return (
        <div className="Cover">
            <h1>Simsimi Edu</h1>
            <h3>나만의 AI 챗봇 만들기</h3>
            <div className="CoverInput">
                <div className="SimSimiHead">
                    <img src={CoverSimSimi} alt="표지심심이"/>
                    <div className="SimSimiEyesBackground">
                        <div className="Eyes leftEyes"></div>
                        <div className="Eyes rightEyes"></div>
                    </div>
                    <div className="SimSimiEyesGroup">
                        <div className="Eyes leftEyes"></div>
                        <div className="Eyes rightEyes"></div>
                    </div>
                    
                </div>
                <div className="inputName">
                    <input
                        placeholder="당신의 이름을 알려주세요"
                        ref={usernameInput}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cover;
