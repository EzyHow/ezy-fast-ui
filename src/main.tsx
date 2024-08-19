import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  HashRouter,
} from "react-router-dom";
import NavigationHeader from './components/NavigationHeader.tsx';
import App from './App.tsx';
import Footer from './components/Footer.tsx';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <div className="w-full h-screen overflow-auto bg-slate-700 text-white">
        <HashRouter>
          <NavigationHeader />
          <div className="max-w-7xl mx-auto min-h-[calc(100vh-120px)]">
            <App />
          </div>
          <Footer />
        </HashRouter>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-dark.min.css"
          integrity="sha512-y6rcKLYkttB9ZUBaz0IsncWFo1VoqISrcMY6J1i6Nb9WB9jRrpll8zjt5e1/naZHyXFoR/1VlH72+2VJ1Uzh7A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />


      </div>
    </HelmetProvider>
  </StrictMode>,
)
