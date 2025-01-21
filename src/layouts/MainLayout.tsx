import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Outlet } from "react-router";
import GlobalStyles from "../components/GlobalStyles";

const MainLayout: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
};

export default MainLayout;
