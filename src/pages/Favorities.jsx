import React from 'react';
import { Card } from '../components/Card';

export function Favorities({ items, handleCardLike }) {
  return (
    <div className="content">
      <div className="title">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {items.map((item, index) => (
          <Card
            key={index}
            liked={true}
            onClickLike={handleCardLike}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
