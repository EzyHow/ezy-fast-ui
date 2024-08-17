import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationHeader from './components/NavigationHeader'

function App() {

  return (
    <>
      <div className="w-full h-screen overflow-auto bg-slate-700 text-white">
        <NavigationHeader />


        <div className="max-w-7xl mx-auto">
          {/* {children} */}
        </div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-dark.min.css"
          integrity="sha512-y6rcKLYkttB9ZUBaz0IsncWFo1VoqISrcMY6J1i6Nb9WB9jRrpll8zjt5e1/naZHyXFoR/1VlH72+2VJ1Uzh7A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />


      </div>

    </>
  )
}

export default App
