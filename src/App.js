import MainComponent from './pages/main'
import ConfirmComponent from './pages/payment/confirm'
import NavComponent from './components/nav/nav'

import './App.css'
// Router
import { Routes, Route, Link } from 'react-router-dom'
import SavedComponent from './pages/saved/saved'

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/saved" element={<SavedComponent />} />
        <Route path="/transaction" element={<ConfirmComponent />} />
      </Routes>
    </div>
  )
}

export default App
