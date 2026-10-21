import React from "react";
import { useRouteError } from "react-router";

function page404() {
  const error = useRouteError();
  return (
    <div>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default page404;
