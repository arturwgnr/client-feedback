import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Feedbacks from './pages/Feedbacks'
import { FeedbackProvider } from './context/FeedbackContext'
import './App.css'

function App() {


  return (

    <FeedbackProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/dashboard/feedbacks' element={<Feedbacks/>} />
   </Routes>
   </BrowserRouter>
    </FeedbackProvider>

  )
}

export default App
