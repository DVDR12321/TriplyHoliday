import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { LandingPage } from './pages/landing-page/LandingPage'
import { ArrangementsPage } from './pages/ArrangementsPage/ArrangementsPage'
import { Layout } from './layout/Layout'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aranzmani" element={<ArrangementsPage />} />
          </Routes></Layout>
      </Router>

    </ThemeProvider>
  )
}

export default App
