import React, { useState } from 'react';
import "./Level2.css";
import notepad from "./img/notepad.png";
import compass from "./img/compass.png";
import loupe from "./img/loupe.png";
import lampik from "./img/lampik.png";
import key from "./img/key.png";
import table from "./img/table.png";
import book from './img/book.png';
import question from './img/question.png';

const DESK_ITEMS = [
  { id: 1, name: 'Блокнот Сшарпика', method: 'ReadNotes()', found: false, image: notepad },
  { id: 2, name: 'Компас Вебки', method: 'GetDirection()', found: false, image: compass},
  { id: 3, name: 'Лупа', method: 'ZoomImage()', found: false, image: loupe },
  { id: 4, name: 'Фонарик', method: 'TurnOnLight()', found: false, image: lampik },
  { id: 5, name: 'Странный ключ', method: 'UnlockSecret()', found: false, image: key },
];
 
export default function Level2({ onComplete }) {
  const [items, setItems] = useState(DESK_ITEMS);
 
  const triggerMethod = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, found: true } : item));
  };
 
  const allFound = items.every(item => item.found);
 
  return (
    <div style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto', color: '#00008B' }}>
      <h3
      style={{ 
        marginTop: '10px', 
        marginBottom: '10px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
        }}>
        Уровень 2: Осмотр письменного стола
        <img src={table} width={80} height={80} alt='table'/> 
      </h3>
      <p style={{ background: '#B0E0E6', padding: '15px', borderRadius: '8px', lineHeight: '1.5', marginTop: '0', color: '#00008B' }}>
        <img src={book} width={20} height={20} alt='level1'/>
        <b>Теория:</b> Всё, что ты видишь на столе это <b style={{color:'#8B008B'}}>Объекты </b>(вещи). А всё, что они умеют делать это их <b style={{color:'#8B008B'}}>Методы</b> (действия). Чтобы предмет заработал, нужно вызвать его <b style={{color:'#8B008B'}}>Метод</b>. 
        <br/><br/>
        <img src={question} width={20} height={20} alt='level1'/>
        <b>Твоё задание: </b>
        Нажимай на <b style={{color:'#8B008B'}}>Методы</b> под вопросительным знаком, чтобы изучить все улики!
      </p>
 
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '20px 0' }}>
        {items.map(item => (
          <div key={item.id} style={{ 
            padding: '15px', 
            border: item.found ? '2px solid #28a745' : '1px solid #aaa', 
            borderRadius: '8px', 
            background: item.found ? '#d4edda' : 'linear-gradient(to bottom right, #6495ED, #87CEFA, #32CD32)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            color: '#000'
          }}>
            {/* Картинка: если предмет найден — показываем его фото, если нет — красивую заглушку */}
            <div style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: item.found ? 'transparent' : '#f0f0f0', borderRadius: '50%' }}>
              {item.found ? (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }} 
                />
              ) : (
                <span><img src={question} width={38} height={38} alt='level1'/></span>
              )}
            </div>

            <h4 style={{ margin: '5px 0' }}>{item.found ? item.name : 'Скрытая улика'}</h4>
            
            <button 
              disabled={item.found}
              onClick={() => triggerMethod(item.id)}
              style={{ 
                fontFamily: 'monospace', 
                padding: '8px 12px', 
                cursor: item.found ? 'default' : 'pointer',
                background: item.found ? '#e2e3e5' : '#007bff',
                color: item.found ? '#6c757d' : '#fff',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              .{item.method}
            </button>
          </div>
        ))}
      </div>
 
      {allFound && (
        <div style={{ background: '#d4edda', padding: '15px', borderRadius: '8px', border: '1px solid #c3e6cb', marginTop: '20px' }}>
          <p style={{ color: '#155724', fontWeight: 'bold', margin: '0 0 10px 0' }}>
            Вы нашли ключ! Но от чего он? Вебка заметил подозрительного кота и велосипед у окна...
          </p>
          <button 
          className='compile'
           onClick={onComplete}>
            Идти к окну
          </button>
        </div>
      )}
    </div>
  );
}
