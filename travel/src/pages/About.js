// src/pages/About.js
import React from "react";

function About() {
  return (
    <div className="container py-4">
      <h1 className="mb-3">About Travel Planning Application</h1>

      <p>
        Our website helps users explore Lebanon by discovering cities, events,
        and activities. The goal is to make planning trips inside Lebanon
        simple, organized, and enjoyable.
      </p>

      <h2 className="mt-4">Our Team</h2>
      <ul>
        <li>Jad Rahi</li>
        <li>Karim Aoun</li>
      </ul>

      <h2 className="mt-4">What This Phase Includes</h2>
      <ul>
        <li>Frontend built with ReactJS and Bootstrap.</li>
        <li>Pages to view events, book them, and manage favourites.</li>
        <li>Basic login interface (no backend or database yet).</li>
      </ul>
    </div>
  );
}

export default About;
