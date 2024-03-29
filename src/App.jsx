
import * as S from "./components/Header/Header_style.jsx";

//Importação dos components
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <>
      {/* "S.GlobalStyle" esta resetando toda a pagina  */}
      <S.GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;