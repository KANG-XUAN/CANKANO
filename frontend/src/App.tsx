import { BrowserRouter } from 'react-router-dom'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import AppRoutes from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
