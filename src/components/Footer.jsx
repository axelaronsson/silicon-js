import React from 'react'

export default function Footer( {mode} ) {
  return (
    <footer className={ mode ? 'dark' : ''}>
        <p>© 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
    </footer>
  )
}
