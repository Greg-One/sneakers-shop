import React from 'react';

export function Drawer() {
  return (
    <div className="drawer-overlay">
      <div className="drawer">
        <div className="drawer-header">
          <h2>Корзина</h2>
          <button>
            <img src="/img/cart-remove.svg" alt="Remove" />
          </button>
        </div>
        <div className="drawer-items">
          <div className="cart-item">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-info">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/cart-remove.svg" alt="Remove" />
            </button>
          </div>

          <div className="cart-item">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-info">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/cart-remove.svg" alt="Remove" />
            </button>
          </div>

          <div className="cart-item">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="cart-info">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/cart-remove.svg" alt="Remove" />
            </button>
          </div>
        </div>
        <div className="drawer-block">
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
          <button className="button-green">
            Оформить заказ <img src="/img/cart-arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
