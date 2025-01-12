import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Welcome from './pages/welcome';
import Dashboard from './pages/Dashboard/Dashboard';
import './tailwind.css';


function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route  path="/" element={<Welcome />} />
              <Route  path="/dashboard" element ={<Dashboard />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
