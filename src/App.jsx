
import './App.css'
import EmployeeComponent from './Components/EmployeeComponent'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponents from './Components/ListEmployeeComponents'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'


function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} /> <Route/>
          <Route path="/employees" element={<ListEmployeeComponents />} /> <Route/>
          <Route path='/add-employee' element={<EmployeeComponent />} /> <Route/>
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} /> <Route/>
        </Routes>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  

    </>
  )
}

export default App
