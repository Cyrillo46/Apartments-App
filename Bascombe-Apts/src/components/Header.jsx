import React from "react";

function Header() {
  return (
    <header>
      <h1>Short-Term Apartment Rentals</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/apartments">Apartments</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
