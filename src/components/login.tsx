import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return isAuthenticated ? null : (
    <button onClick={() => loginWithRedirect()}>ログイン</button>
  );
};

export default LoginButton;