import React from "react";

export default function About() {
  return (
    <div className="container py-4">
      <h1 className="h3 mb-3">About</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <p className="mb-3">
            The Way of Messiah is dedicated to sharing Scripture-centered
            teaching, encouragement, and testimony—calling people to walk in
            faith, obedience, and love.
          </p>

          <h2 className="h5 mt-4">Our mission</h2>
          <p className="mb-3">
            To proclaim the message of the Messiah, strengthen believers, and
            provide resources that help families grow in truth and purpose.
          </p>

          <h2 className="h5 mt-4">What you’ll find here</h2>
          <ul className="mb-0">
            <li>Testimonies that encourage faith</li>
            <li>Teachings and studies</li>
            <li>Events and gatherings</li>
            <li>Resources to support your walk</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
