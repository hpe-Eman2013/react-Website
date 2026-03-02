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
          <NavLink to="/the-way/about">The Way → About</NavLink>
        </li>
        <li>
          <NavLink to="/the-way/statement-of-faith">
            The Way → Statement of Faith
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-way/mission">
            The Way → Mission &amp; Vision
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-way/outreach">The Way → Outreach</NavLink>
        </li>
        <li>
          <NavLink to="/the-way/education">The Way → Education</NavLink>
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
