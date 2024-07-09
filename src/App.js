import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import CalcProvider from "./context/CalcContext";

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox />
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
