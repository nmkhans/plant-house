import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from 'react-auth-kit'
import { BrowserRouter } from "react-router-dom"
import { store } from './redux/store'
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider authType={'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={window.location.protocol === "https:"}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
)
