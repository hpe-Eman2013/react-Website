import React from "react";
import { NavLink } from "react-router-dom";

export default function SiteMap() {
  return (
    <main className="container">
      <h1>Site Map</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/who-are-we/about">Who Are We → About</NavLink>
        </li>
        <li>
          <NavLink to="/who-are-we/statement-of-faith">
            Who Are We → Statement of Faith
          </NavLink>
        </li>
        <li>
          <NavLink to="/who-are-we/mission">
            Who Are We → Mission &amp; Vision
          </NavLink>
        </li>
        <li>
          <NavLink to="/who-are-we/outreach">Who Are We → Outreach</NavLink>
        </li>
        <li>
          <NavLink to="/who-are-we/education">Who Are We → Education</NavLink>
        </li>
        <li>
          <NavLink to="/bible/old-covenant">Bible → Old Covenant</NavLink>
        </li>
        <li>
          <NavLink to="/bible/renewed-covenant">
            Bible → Renewed Covenant
          </NavLink>
        </li>
        <li>
          <NavLink to="/bible/apocrypha">Bible → Apocrypha</NavLink>
        </li>
        <li>
          <NavLink to="/bible/lectures">Bible → Lectures</NavLink>
        </li>
        <li>
          <NavLink to="/bible/studies">Bible → Studies</NavLink>
        </li>
        <li>
          <NavLink to="/the-assembly/testimonies">
            The Assembly → Testimonies
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-assembly/submissions">
            The Assembly → Submissions
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-assembly/memberships">
            The Assembly → Memberships
          </NavLink>
        </li>
        <li>
          <NavLink to="/accounts/register">Accounts → Register</NavLink>
        </li>
        <li>
          <NavLink to="/accounts/login">Accounts → Login</NavLink>
        </li>
        <li>
          <NavLink to="/accounts/verify-email">Accounts → Verify Email</NavLink>
        </li>
      </ul>
    </main>
  );
}
