// import Container from '@mui/material/Container';
import './App.css'
import AppHeader from './components/base/AppHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <AppHeader />
    </Router>
  );
}