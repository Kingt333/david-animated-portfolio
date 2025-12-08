import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { ThemeToggle } from './assets/components/ThemeToggle'
import { NotFound } from './Pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
