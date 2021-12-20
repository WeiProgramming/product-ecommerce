import MainComponent from './pages/main'
import ConfirmComponent from './pages/payment/confirm'
import './App.css'
// Router
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/transaction" element={<ConfirmComponent />} />
      </Routes>
    </div>
  )
}

export default App
