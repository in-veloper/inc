import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediInfo from './components/mediInfo/MediInfo';
import { createTheme, ThemeProvider } from '@mui/material';
import QuickMenu from './components/common/QuickMenu';
import Notice from './components/notice/Notice';
import Inquiry from './components/inquiry/Inquiry';
import Login from './components/login/Login';
import Faq from './components/faq/Faq';
import Signup from './components/signup/Signup';
import './App.css';
import NoticeDetail from './components/notice/NoticeDetail';

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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notice" element={<Notice />} />
            <Route path='/notice/:id' element={<NoticeDetail />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/medi-info" element={<MediInfo />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
