import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const MainSection = () => {
  return (
    <div>
        <Header/>
       <Outlet/>
    </div>
  );
};

export default MainSection;