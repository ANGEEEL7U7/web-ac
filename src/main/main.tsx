import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Index from '../components/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
