import { Link } from "react-router-dom"; // 

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/sharedSimSimi"}>Shared</Link>
      <br />
    </>
  );
};

export default RouteTest;