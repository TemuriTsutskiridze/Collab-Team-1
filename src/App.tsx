import HeaderLayout from "./layouts/HeaderLayout";
import GlobalStyles from "./components/GlobalStyles";
import FooterLayout from "./layouts/FooterLayout";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderLayout />
      <SignUp />
      <FooterLayout />
    </>
  );
}

export default App;
