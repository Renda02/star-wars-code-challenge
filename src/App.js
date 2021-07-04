import styled from 'styled-components';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <MainWrapper >
        <MainPage />
    </MainWrapper>
  );
}

export default App;


const MainWrapper = styled.div`
margin: 0;
  padding: 0;
  box-sizing: border-box;
  background:#3D0478;
  color:#FFFFFF`