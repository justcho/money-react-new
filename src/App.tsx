import React from 'react'
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import styled from "styled-components";
import Nav from "./components/Nav";

const Tags = () => (
  <div>
    <h2>标签页面</h2>
  </div>
)

const Money = () => (
  <div>
    <h2>记账页面</h2>
  </div>
)
const Statistics = () => (
  <div>
    <h2>统计页面</h2>
  </div>
)

const NoMatch = () =>(
  <div>
    <h2>页面不存在</h2>
  </div>
)

const Main = styled.div`
  flex-grow: 1;

`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const App = () => (
  <Router>
    <Wrapper>
      <Main>
        <Routes>
          <Route  path="/tags"  element={<Tags/>}/>
          <Route path="/money" element={<Money/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/" element={<Money/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Main>
      <Nav/>
    </Wrapper>
  </Router>
)
export default App