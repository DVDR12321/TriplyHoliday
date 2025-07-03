import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { BookingContextProvider } from './context/BookingContext';
import { Layout } from './layout/Layout';
import { ArrangementsPage } from './pages/arrangment-page/ArrangementsPage';
import { LandingPage } from './pages/landing-page/LandingPage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aranzmani" element={
              <BookingContextProvider>
                <ArrangementsPage />
              </BookingContextProvider>
            } />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
