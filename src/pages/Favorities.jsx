import React from 'react';
import { AppContext } from '../context';
import { Card } from '../components/Card';

export function Favorities({ handleCardLike }) {
  const { favorities } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="title">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {favorities.map((item, index) => (
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
