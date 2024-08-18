
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import List from './pages/snippets/List'
import SnippetList from './pages/snippets/SnippetList'
import SnippetShow from './pages/snippets/SnippetShow'
import ErrorPage from './error-page'
import NotFound from './pages/error/NotFound'

const allowedTypes = ['snippets', 'animations'];
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:type" element={<SnippetList />} />
        <Route path="/:type/:slug" element={<SnippetShow />} loader={({ params }) => {
          const { type } = params;
          console.log('type => ', type);
          if (allowedTypes.includes(type as string)) {
            return null; // No special data needed, just pass through
          } else {
            throw new Response('Not Found', { status: 404 }); // Force a 404 error
          }
        }} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} errorElement={<ErrorPage />} />
      </Routes>

    </>
  )
}

export default App
