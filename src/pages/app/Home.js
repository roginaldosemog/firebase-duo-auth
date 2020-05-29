import React from "react";
import { app } from "../../config/Firebase";

const Home = () => {
  return (
    <>
      <h1>Home Primary</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
