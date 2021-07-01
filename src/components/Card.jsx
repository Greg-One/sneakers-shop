import React from 'react';

export function Card() {
  return (
    <article className="card">
      <button className="like">
        <img src="/img/like-disabled.svg" alt="Like" />
      </button>

      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card-content">
        <div className="card-price">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button>
          <img src="/img/plus.svg" alt="Add item" />
        </button>
      </div>
    </article>
  );
}
