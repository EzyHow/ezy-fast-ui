import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {
createHashRouter,
  RouterProvider,
} from "react-router-dom";
import NavigationHeader from './components/NavigationHeader.tsx';
import SnippetList from './pages/snippets/SnippetList.tsx';
import About from './pages/about/About.tsx';
import SnippetShow from './pages/snippets/SnippetShow.tsx';
import List from './pages/snippets/List.tsx';
import ErrorPage from "./error-page";

const allowedTypes = ['snippets', 'animations'];

const router = createHashRouter([
  {
    path: "/",
    Component: List,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    Component: List
  },
  {
    path: "/list/:type",
    Component: SnippetList,
    loader: ({ params }) => {
      const { type } = params;
      if (allowedTypes.includes(type as string)) {
        return null; // No special data needed, just pass through
      } else {
        throw new Response('Not Found', { status: 404 }); // Force a 404 error
      }
    }
  },
  {
    path: "/:type/:slug",
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
