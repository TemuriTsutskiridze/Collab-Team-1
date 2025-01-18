import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './pages/Home.tsx'
import ErrorPage from './components/Home/ErrorPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
       <Routes>
           <Route path='/' element = {<Home />}></Route>
           <Route path='*' element = {<ErrorPage />}></Route>
       </Routes>
     </BrowserRouter>
  </StrictMode>,
)
