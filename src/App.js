import MainComponent from './pages/main'
import ConfirmComponent from './pages/payment/confirm'
import NavComponent from './components/nav/nav'
import ProductsLayout from './pages/layout/products'


import './App.css'
// Router
import { Routes, Route } from 'react-router-dom'
import StripTestComponent from './pages/payment/stripe-test'
import SavedComponent from './pages/saved/saved'

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/products" element={<ProductsLayout/>} />
        <Route path="/saved" element={<SavedComponent />} />
        <Route path="/transaction" element={<ConfirmComponent />} />
        <Route path="/stripe-test" element={<StripTestComponent/>}/>
      </Routes>
    </div>
  )
}

export default App
