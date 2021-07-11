import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header(props) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.headerLeft}>
          <img src="/img/logo.png" alt="logo" className={styles.logo} />
          <div>
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={styles.headerRight}>
        <li>
          <button onClick={props.onClickCart}>
            <img src="/img/cart-icon.svg" alt="Cart" />
            <span>1205 rub.</span>
          </button>
        </li>
        <li>
          <Link to="favorities">
            <button>
              <img src="/img/favorities.svg" alt="Favorities" />
            </button>
          </Link>
        </li>
        <li>
          <Link to="profile">
            <button>
              <img src="/img/user-icon.svg" alt="Profile" />
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
}
