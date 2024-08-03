import {useState} from 'react';
import GeneralDashboard from './pages/GeneralDashboard';
import Test from './pages/Test';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  const [arrayOfProblems, setArrayOfProblems] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <GeneralDashboard
                setArrayOfProblems={setArrayOfProblems}
              />
            }
          />
          <Route 
            path="/test" 
            element={
              <Test
                arrayOfProblems={arrayOfProblems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
