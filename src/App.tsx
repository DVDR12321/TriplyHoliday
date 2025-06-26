import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
=======
import ArrangementsPage from './pages/ArrangementsPage/ArrangementsPage'
import LandingPage from './pages/landing-page/LandingPage'
>>>>>>> f013f01 ( cherrypicked last commit from the work done after the failed rebase)
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { LandingPage } from './pages/landing-page/LandingPage'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aranzmani" element={<ArrangementsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
