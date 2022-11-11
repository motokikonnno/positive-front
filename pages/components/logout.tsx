import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <div>
      <p>ログイン完了</p>
      <p>{user?.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  ) : null;
};
 export default LogoutButton;