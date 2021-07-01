import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <Drawer />

      <div className="content">
        <div className="title">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />

            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
}
