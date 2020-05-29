import React, { useContext } from "react";
import { AuthContext } from "../../config/Auth";
import { app } from "../../config/Firebase";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <h1>Home Primary</h1>
      <p>Welcome, {currentUser?.email}</p>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
