import styled from "styled-components";
import { MainPage } from "./components/MainPage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
      <MainWrapper>
        <NavBar />
        <MainPage />
      </MainWrapper>
  
  );
}

export default App;

const MainWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f8f8f8;
  color: #b1b1b1;
`;
