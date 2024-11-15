import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AppFeatures from './components/AppFeatures'
import How from './components/How'
import Banking from './components/Banking'
import Clients from './components/Clients'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppFeatures />
        <How />
        <Banking />
        <Clients />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
