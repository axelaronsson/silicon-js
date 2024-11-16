import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
  const [switchMode, setSwitchMode] = useState(false)

  const handleSwitch = () => {
    setSwitchMode(!switchMode)
  }

  useEffect(() => {
    console.log('handle switch', switchMode);

    // return () => {
    // }
  }, [switchMode])


  return (
    <>
      <Header mode={switchMode} handleSwitch={ handleSwitch } />
      <MainContent mode={switchMode} />
      <Footer />
    </>
  )
}

export default App
