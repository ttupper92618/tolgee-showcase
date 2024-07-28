import './assets/css/App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Tolgee, DevTools, TolgeeProvider, FormatSimple, BackendFetch, BrowserExtensionPlugin } from "@tolgee/react";
import App from './App';

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use(BackendFetch({ prefix: 'https://cdn.tolg.ee/f055354438add2878f63c6cacc0f7c5c' }))
  .init({
    language: 'en',
    apiUrl: process.env.REACT_APP_TOLGEE_API_URL,
    apiKey: process.env.REACT_APP_TOLGEE_API_KEY,
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <TolgeeProvider tolgee={tolgee} fallback="Loading...">
      <App />
    </TolgeeProvider>
  </BrowserRouter>,
);
