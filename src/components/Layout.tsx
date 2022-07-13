import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

type Props = {
  children:any
}

const Main = styled.div`
  flex-grow: 1;
`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
const Layout = (props:Props)=>{
  return (
    <div>
      <Wrapper>
        <Main>
          {props.children}
        </Main>
        <Nav/>
      </Wrapper>
    </div>
  )
}
export default Layout