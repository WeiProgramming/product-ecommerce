import MainComponent from './pages/main'
import ConfirmComponent from './pages/payment/confirm'
import NavComponent from './components/nav/nav'


import './App.css'
// Router
import StripTestComponent from './pages/payment/stripe-test'
import { Routes, Route } from 'react-router-dom'
import SavedComponent from './pages/saved/saved'

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/saved" element={<SavedComponent />} />
        <Route path="/transaction" element={<ConfirmComponent />} />
        <Route path="/stripe-test" element={<StripTestComponent/>}/>
      </Routes>
    </div>
  )
}

export default App
