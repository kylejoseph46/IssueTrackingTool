import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IssueAdderLink from './components/IssueAdderLink'
import Header from './components/Header'
import Taskbar from './components/Taskbar'
import Issue from './components/Issue'
import IssueAdder from './components/IssueAdder'
import { useState } from 'react'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <div>
              <Header />
              <Taskbar />
              <div className="issue-list">
                <Issue language='react' errorName='SyntaxError: Did you mean to use === ?' errorType='Warning' />
                <Issue language='python' errorName='TypeError: Cannot add int and string' errorType='Error' />
              </div>
            </div>
          }>
          </Route>
          <Route path='/issueadder' element={<IssueAdder />}></Route>
        </Routes>
        <IssueAdderLink />
      </div>
    </Router>
  );
}

export default App;
