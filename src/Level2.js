import React, { useState } from 'react';

//Обучение: Объясняем, что методы — это действия, которые объект умеет выполнять, или функции поиска по внутренним свойствам. Задание: найти 5 предметов, кликая на подсказки-методы.

const DESK_ITEMS = [
  { id: 1, name: '🗒️ Блокнот Сшарпика', method: 'ReadNotes()', found: false },
  { id: 2, name: '🧭 Компас Вебки', method: 'GetDirection()', found: false },
  { id: 3, name: '🔍 Лупа', method: 'ZoomImage()', found: false },
  { id: 4, name: '🔦 Фонарик', method: 'TurnOnLight()', found: false },
  { id: 5, name: '🔑 Странный ключ', method: 'UnlockSecret()', found: false },
];
 
export default function Level2({ onComplete }) {
  const [items, setItems] = useState(DESK_ITEMS);
 
  const triggerMethod = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, found: true } : item));
  };
 
  const allFound = items.every(item => item.found);
 
  return (
<div style={{ maxWidth: '600px', textAlign: 'center' }}>
<h3>Уровень 2: Осмотр письменного стола 📝</h3>
<p style={{ background: '#e2e3e5', padding: '10px', borderRadius: '5px' }}>
<b>Теория:</b> У каждого объекта есть <b>Методы</b> (действия). Чтобы заставить предмет работать, нужно вызвать его метод через точку: <code>loupe.ZoomImage()</code>. Вызови методы, чтобы изучить улики на столе!
</p>
 
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '20px 0' }}>
        {items.map(item => (
<div key={item.id} style={{ padding: '15px', border: '1px solid #aaa', borderRadius: '8px', background: item.found ? '#d4edda' : '#fff' }}>
<h4>{item.found ? item.name : '❓ Скрытая улика'}</h4>
<button 
              disabled={item.found}
              onClick={() => triggerMethod(item.id)}
              style={{ fontFamily: 'monospace', padding: '5px 10px', cursor: 'pointer' }}
>
              .{item.method}
</button>
</div>
        ))}
</div>
 
      {allFound && (
<div>
<p style={{ color: 'green', fontWeight: 'bold' }}>Вы нашли Ключ! Но от чего он? Вебка заметил подозрительного кота и велосипед у окна...</p>
<button style={{ padding: '10px 20px', cursor: 'pointer' }} onClick={onComplete}>Идти к окну</button>
</div>
      )}
</div>
  );
}