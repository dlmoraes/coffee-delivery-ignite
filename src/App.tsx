import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CheckoutContextProvider } from './context/CheckoutContext'

export function App() {
  return (
    <BrowserRouter>
      <CheckoutContextProvider>
        <Router />
      </CheckoutContextProvider>
    </BrowserRouter>
  )
}
