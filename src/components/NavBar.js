import styled from 'styled-components';
import React from 'react'

export const NavBar = () => {
    return (
        <React.Fragment>
        {" "}
        <Nav>
          <Content>
            <NavTitle>The Star Wars Characters</NavTitle>
          </Content>
        </Nav>
      </React.Fragment>)
}


const Nav = styled.nav`
  width: 100%;
  background: #3D0478;
  color: #ffff;
  font-size: 18px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  margin-left: 1.4em;  justify-content: center;
  align-items: center;
`;

const NavTitle = styled.h2`
text-align:center;
  }
`;