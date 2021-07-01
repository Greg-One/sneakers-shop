import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/img/logo.png" alt="logo" className="header-logo" />
        <div>
          <h3>React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="header-right">
        <li>
          <img src="/img/cart-icon.svg" alt="Cart" />
          <span>1205 rub.</span>
        </li>
        <li>
          <img src="/img/user-icon.svg" alt="Profile" />
        </li>
      </ul>
    </header>
  );
}
