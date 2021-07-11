import React from 'react';
import styles from './Header.module.scss';

export function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src="/img/logo.png" alt="logo" className={styles.logo} />
        <div>
          <h3>React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li>
          <button onClick={props.onClickCart}>
            <img src="/img/cart-icon.svg" alt="Cart" />
            <span>1205 rub.</span>
          </button>
        </li>
        <li>
          <button>
            <img src="/img/favorities.svg" alt="Favorities" />
          </button>
        </li>
        <li>
          <button>
            <img src="/img/user-icon.svg" alt="Profile" />
          </button>
        </li>
      </ul>
    </header>
  );
}
