
import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import List from './pages/snippets/List'
import SnippetList from './pages/snippets/SnippetList'
import SnippetShow from './pages/snippets/SnippetShow'
import ErrorPage from './error-page'
import NotFound from './pages/error/NotFound'
import HomePage from './pages/homepage/HomePage'
import BoxShadowGenerator from './pages/generator/BoxShadowGenerator'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy'
import GradientGenerator from './pages/generator/GradientGenerator'

const allowedTypes = ['snippets', 'animations'];
function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:type" element={<SnippetList />} />
        <Route path="/:type/:slug" element={<SnippetShow />} loader={({ params }) => {
          const { type } = params;
          // console.log('type => ', type);
          if (allowedTypes.includes(type as string)) {
            return null; // No special data needed, just pass through
          } else {
            throw new Response('Not Found', { status: 404 }); // Force a 404 error
          }
        }} />
        <Route path="/about" element={<About />} />
        <Route path="/css-box-shadow-generator" element={<BoxShadowGenerator />} />
        <Route path="/css-gradient-generator" element={<GradientGenerator />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} errorElement={<ErrorPage />} />
      </Routes>

    </>
  )
}

export default AppRoutes
