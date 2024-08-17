import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavigationHeader from './components/NavigationHeader.tsx';
import SnippetList from './pages/snippets/SnippetList.tsx';
import About from './pages/about/About.tsx';
import SnippetShow from './pages/snippets/SnippetShow.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/snippets",
    Component: SnippetList
  },
  {
    path: "/snippets/:slug",
    Component: SnippetShow
  },
  {
    path: "/about",
    Component: About
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-full h-screen overflow-auto bg-slate-700 text-white">
      <NavigationHeader />
      <div className="max-w-7xl mx-auto">

        <RouterProvider router={router} />
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-dark.min.css"
        integrity="sha512-y6rcKLYkttB9ZUBaz0IsncWFo1VoqISrcMY6J1i6Nb9WB9jRrpll8zjt5e1/naZHyXFoR/1VlH72+2VJ1Uzh7A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />


    </div>
  </StrictMode>,
)
