import React from 'react';
import styles from './Drawer.module.scss';

export function Drawer(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2>Корзина</h2>
          <button onClick={props.onClose}>
            <img src="/img/cart-remove.svg" alt="Remove" />
          </button>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className={styles.info}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/cart-remove.svg" alt="Remove" />
            </button>
          </div>

          <div className={styles.item}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className={styles.info}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/cart-remove.svg" alt="Remove" />
            </button>
          </div>

          <div className={styles.item}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className={styles.info}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/cart-remove.svg" alt="Remove" />
            </button>
          </div>
        </div>
        <div className={styles.block}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.buttonGreen}>
            Оформить заказ <img src="/img/cart-arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
