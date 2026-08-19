import React, { useState } from 'react';

export default function Level3({ onComplete }) {
  const [catStatus, setCatStatus] = useState('Кот довольно урчит. На его ошейнике висит замок. Нужен ключ со стола!');
  const [bikeStatus, setBikeStatus] = useState('Игрушечный велосипед заперт. Внутри багажника что-то лежит.');
  const [hasKeyFromCat, setHasKeyFromCat] = useState(false);
 
  const clickCat = () => {
    setCatStatus('Вы применили Ключ со стола! Замок открылся. На ошейнике был спрятан Ключ от Багажника!');
    setHasKeyFromCat(true);
  };
 
  const clickBikeTrunk = () => {
    if (!hasKeyFromCat) {
      setBikeStatus('Ошибка: Доступ к private trunk ограничен! Нужен специальный ключ доступа.');
    } else {
      setBikeStatus('Багажник открыт! Внутри лежит коллекционная машинка Сшарпика!');
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  };
 
  return (
<div style={{ maxWidth: '600px', textAlign: 'center' }}>
<h3>Уровень 3: Кот и Велосипед</h3>
<p style={{ background: '#e2e3e5', padding: '10px', borderRadius: '5px' }}>
<b>Теория:</b> В ООП есть <b>Инкапсуляция</b>. Это защита внутренних данных объекта. Багажник велосипеда имеет статус <code>private</code> (скрыт от всех). Чтобы открыть его, нужен правильный ключ доступа!
</p>
 
      <div style={{ display: 'flex', gap: '20px', margin: '30px 0' }}>
        {/* Кот */}
<div style={{ border: '1px solid #aaa', padding: '15px', borderRadius: '8px', flex: 1, background: '#fff' }}>
<h4>🐱 Кот Сшарпика</h4>
<p style={{ fontSize: '14px', color: '#555' }}>{catStatus}</p>
          {!hasKeyFromCat && <button onClick={clickCat} style={{ padding: '5px 10px', cursor: 'pointer' }}>Использовать Ключ со стола</button>}
</div>
 
        {/* Велосипед */}
<div style={{ border: '1px solid #aaa', padding: '15px', borderRadius: '8px', flex: 1, background: '#fff' }}>
<h4>🚲 Игрушечный Велосипед</h4>
<p style={{ fontSize: '14px', color: '#555' }}>{bikeStatus}</p>
<button onClick={() => alert('Дзинь-дзинь! Метод RingBell() сработал, он был public!')} style={{ padding: '5px 10px', marginRight: '5px' }}>Вызвать .RingBell()</button>
<button onClick={clickBikeTrunk} style={{ padding: '5px 10px', background: '#ffc107', cursor: 'pointer', border: 'none', borderRadius: '4px' }}>Открыть private trunk</button>
</div>
</div>
</div>
  );
}