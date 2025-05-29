import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import NotFound from './pages/NotFound.jsx';


const root = createRoot(document.getElementById('root'));
renderPage();

function renderPage() {
  console.log("renderPage: ");
  root.render(
    <StrictMode>
        <NotFound />
    </StrictMode>,
  );
}

createRoot(document.getElementById('navbar-container')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)

export { renderPage };