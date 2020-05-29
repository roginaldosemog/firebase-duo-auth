import React, { useEffect, useState } from "react";
import { app, app2 } from "./Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loaded2, setLoaded2] = useState(false);
  const [currentUser2, setCurrentUser2] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoaded(true);
    });
    app2.auth().onAuthStateChanged((user2) => {
      setCurrentUser2(user2);
      setLoaded2(true);
    });
  }, []);

  if (!loaded || !loaded2) {
    return <>Loading...</>;
  }

  console.log(currentUser?.email + " " + currentUser2?.email);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentUser2
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
