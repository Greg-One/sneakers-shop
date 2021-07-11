import React from 'react';
import styles from './Drawer.module.scss';

export function Drawer({ items = [], onClose, onCartRemove }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2>Корзина</h2>
          <button onClick={onClose}>
            <img src="/img/remove.svg" alt="Remove" />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((item, index) => {
                return (
                  <div className={styles.item} key={index}>
                    <img
                      width={70}
                      height={70}
                      src={item.image}
                      alt="Sneakers"
                    />
                    <div className={styles.info}>
                      <p>{item.title}</p>
                      <b>{item.price} руб.</b>
                    </div>
                    <button onClick={() => onCartRemove(item.id)}>
                      <img src="/img/remove.svg" alt="Remove" />
                    </button>
                  </div>
                );
              })}
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
                Оформить заказ
                <img src="/img/cart-forward-arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <img src="/img/cart-empty.jpg" alt="Empty cart" />
            <h3 className={styles.emptyTitle}>Корзина пустая</h3>
            <p className={styles.emptySubtitle}>
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className={styles.buttonGreen}>
              <img src="/img/cart-back-arrow.svg" alt="Arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
