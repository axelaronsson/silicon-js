import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Contact from './components/Contact'

function App() {
  const [switchMode, setSwitchMode] = useState(false)
  const [page, setPage] = useState('home')

  const handleSwitch = () => {
    setSwitchMode(!switchMode)
  }

  const handlePage = (payload) => {
    console.log('handlepage', payload);
    setPage(payload)
  }

  useEffect(() => {
    console.log('handle switch', switchMode);

    // return () => {
    // }
  }, [switchMode])


  return (
    <>
      <Header handlePage={handlePage} mode={switchMode} handleSwitch={ handleSwitch } />
      {
        page === 'home' ?
        <MainContent mode={switchMode} />
        :
        <Contact mode={switchMode} />
      }
      <Footer mode={ switchMode } />
    </>
  )
}

export default App
