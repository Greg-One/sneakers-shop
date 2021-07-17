import React from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

import styles from './Header.module.scss';

export function Header(props) {
  const { totalPrice } = useCart();

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
            <span>{totalPrice} rub.</span>
          </button>
        </li>
        <li>
          <Link to="/favorities">
            <button>
              <img src="/img/favorities.svg" alt="Favorities list" />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <button>
              <img src="/img/user-icon.svg" alt="Orders list" />
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
}
