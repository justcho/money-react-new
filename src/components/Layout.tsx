import React from "react";
import Nav from "./Nav";
import styled from "styled-components";


const Main = styled.div`
  flex-grow: 1;
`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
const Layout = (props:any)=>{
  return (
    <div>
      <Wrapper>
        <Main className={props.className}>
          {props.children}
        </Main>
        <Nav/>
      </Wrapper>
    </div>
  )
}
export default Layout