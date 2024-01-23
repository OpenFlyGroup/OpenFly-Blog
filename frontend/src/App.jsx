// import { useSelector, useDispatch } from 'react-redux'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import AppHeader from "./routes/components/AppHeader/AppHeader";
import ErrorPage from './routes/Error/ErrorPage';
import RootPage from "./routes/Root/RootPage";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import AppFooter from "./routes/components/AppFooter/AppFooter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
    },
]);

const App = () => {

  return (
    <>
      <BrowserRouter>
        <AppHeader />
      </BrowserRouter>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <AppFooter />
    </>
  )
}

export default App
