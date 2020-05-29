import React from "react";
import { app2 } from "../../config/Firebase";

const Home2 = () => {
  return (
    <>
      <h1>Home Secondary</h1>
      <button onClick={() => app2.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home2;
