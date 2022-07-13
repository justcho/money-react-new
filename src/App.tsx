import React from 'react'
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Tags from "views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";

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