import MainComponent from './pages/main'
import ConfirmComponent from './pages/payment/confirm'
import NavComponent from './components/nav/nav'


import './App.css'
// Router
import { Routes, Route } from 'react-router-dom'
import StripTestComponent from './pages/payment/stripe-test'

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/transaction" element={<ConfirmComponent />} />
        <Route path="/stripe-test" element={<StripTestComponent/>}/>
      </Routes>
    </div>
  )
}

export default App
