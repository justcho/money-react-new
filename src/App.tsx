import React from 'react'
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Layout from "components/Layout";

const Tags = () => (
    <Layout>
      <h2>标签页</h2>
    </Layout>
)

const Money = () => (
  <Layout>
    <h2>记账页</h2>
  </Layout>
)
const Statistics = () => (
  <Layout>
    <h2>统计页</h2>
  </Layout>
)

const NoMatch = () => (
  <div>
    <h2>页面不存在</h2>
  </div>
)



const App = () => (
  <Router>
    <Routes>
      <Route path="/tags" element={<Tags/>}/>
      <Route path="/money" element={<Money/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/" element={<Money/>}/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  </Router>
)
export default App