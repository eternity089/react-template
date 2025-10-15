import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './Components/Header.tsx'
import Image from './Components/image.tsx'
import Content from './Components/content.tsx'

createRoot(document.getElementById('root')!).render(
  // главная страница, соединяет и отображает все компоненты
  <StrictMode>
    <Header />
    <App />
    <Image />
    <Content />
  </StrictMode>
)
