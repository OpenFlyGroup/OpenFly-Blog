import { useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Err</title>
      </Helmet>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;