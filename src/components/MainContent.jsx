import React from 'react'
import Hero from './Hero'
import AppFeatures from './AppFeatures'
import How from './How'
import Banking from './Banking'
import Clients from './Clients'
import Faq from './Faq'

export default function MainContent( { mode } ) {
  return (
    <main>
        <Hero />
        <AppFeatures mode={ mode } />
        <How />
        <Banking />
        <Clients />
        <Faq />
    </main>
  )
}
