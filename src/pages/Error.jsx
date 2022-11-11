import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.jsx';

function ErrorPage() {
  /**
   * Returns error message coming from api
   *
   */
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
