import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/theme.css'
import HeaderPage from '../components/header/header-page'
import FooterPage from '../components/footer/footer-page'
import Content from '../components/content/content-page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderPage></HeaderPage>
    <Content></Content>
    <FooterPage></FooterPage>
  </StrictMode>,
)
