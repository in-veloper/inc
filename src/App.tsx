import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediInfo from './components/mediInfo/MediInfo';
import { createTheme, ThemeProvider } from '@mui/material';
import QuickMenu from './components/common/QuickMenu';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <QuickMenu />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/medi-info" element={<MediInfo />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
