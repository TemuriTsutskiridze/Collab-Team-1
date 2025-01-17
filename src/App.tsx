import HeaderLayout from "./layouts/HeaderLayout";
import GlobalStyles from "./components/GlobalStyles";
import FooterLayout from "./layouts/FooterLayout";
import Sign from "./pages/Sign";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderLayout />
      <Sign />
      <FooterLayout />
    </>
  );
}

export default App;
