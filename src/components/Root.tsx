import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const Root = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default Root;
