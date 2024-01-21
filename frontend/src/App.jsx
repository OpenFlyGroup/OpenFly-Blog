// import { useSelector, useDispatch } from 'react-redux'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import ErrorPage from './routes/Error/ErrorPage';
import RootPage from "./routes/Root/RootPage";
import AppHeader from "./routes/components/AppHeader/AppHeader";

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
      <AppHeader />
      <RouterProvider router={router} />
    </>
  )
}

export default App
