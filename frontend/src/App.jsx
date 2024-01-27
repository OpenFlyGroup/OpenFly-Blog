import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux'

import AppHeader from "./routes/components/AppHeader/AppHeader";
import ErrorPage from './routes/Error/ErrorPage';
import RootPage from "./routes/Root/RootPage";
import ForumPage from "./routes/Forum/ForumPage";
import NewsPage from "./routes/News/NewsPage";
import AboutPage from "./routes/About/AboutPage";
import { HelmetProvider } from 'react-helmet-async';
import AppFooter from "./routes/components/AppFooter/AppFooter";

const App = () => {

  return (
    <>
      <Router>
        <AppHeader />
        <HelmetProvider>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<RootPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </HelmetProvider>
        <AppFooter />
      </Router>
    </>
  );
}

export default App;
