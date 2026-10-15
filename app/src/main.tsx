import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router";
import { AppProvider } from './context/AppContext'
import './i18n'
import './theme/theme.css'
import './theme'
import './mascot'
import './index.css'
import App from './app.tsx'

function routerBasename(): string {
  const path = window.location.pathname.replace(/\/$/, "");
  const webAt = path.lastIndexOf("/web");
  if (webAt < 0) return "/web";
  return `${path.slice(0, webAt)}/web`;
}

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <HashRouter basename={routerBasename()}>
      <App />
    </HashRouter>
  </AppProvider>,
)
