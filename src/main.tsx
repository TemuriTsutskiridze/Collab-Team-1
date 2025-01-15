import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
       <Routes>
           <Route path='/' element = {<Home />}></Route>
       </Routes>
     </BrowserRouter>
  </StrictMode>,
)
