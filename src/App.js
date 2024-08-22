import './App.css'
import {useState} from 'react';
import GeneralDashboard from './pages/GeneralDashboard/GeneralDashboard';
import Test from './pages/Test/Test';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CompleteTest from './pages/CompleteTest/CompleteTest';

function App() {
  const [arrayOfProblems, setArrayOfProblems] = useState(null);
  const [sectionId, setSectionId] = useState(null);
  const [sectionIsSelected, setSectionIsSelected] = useState(false);
  const [selectedSectionRef, setSelectedSectionRef] = useState(null);
  const [numOfCorrect, setNumOfCorrect] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <GeneralDashboard
                setArrayOfProblems={setArrayOfProblems}
                sectionId={sectionId}
                setSectionId={setSectionId}
                sectionIsSelected={sectionIsSelected}
                setSectionIsSelected={setSectionIsSelected}
                selectedSectionRef={selectedSectionRef}
                setSelectedSectionRef={setSelectedSectionRef}
              />
            }
          />
          <Route 
            path="/test" 
            element={
              <Test
                arrayOfProblems={arrayOfProblems}
                setArrayOfProblems={setArrayOfProblems}
                numOfCorrect={numOfCorrect}
                setNumOfCorrect={setNumOfCorrect}
              />
            }
          />
          <Route
            path="/test/complete"
            element={
              <CompleteTest
                setNumOfCorrect={setNumOfCorrect}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;