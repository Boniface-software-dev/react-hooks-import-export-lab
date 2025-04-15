import React from "react";
import { username, city } from "../data/user.js"

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
/**
 * The Home component serves as the main landing page of the application.
 * It is exported as the default export of this module.
 */
export default Home;