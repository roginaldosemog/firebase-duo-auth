import React, { useContext } from "react";
import { app2 } from "../../config/Firebase";
import { AuthContext } from "../../config/Auth";

const Home2 = () => {
  const { currentUser2 } = useContext(AuthContext);
  return (
    <>
      <h1>Home Secondary</h1>
      <p>Welcome, {currentUser2?.email}</p>
      <button onClick={() => app2.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home2;
