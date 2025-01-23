import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { BrowserRouter } from 'react-router';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    authorizationParams={{
      redirect_uri: "http://localhost:3000/dashboard"
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </Auth0Provider>,
);