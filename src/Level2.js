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
  const [showModal, setShowModal] = useState(false); // Состояние для показа модального окна
 
  const triggerMethod = (id) => {
    const updatedItems = items.map(item => item.id === id ? { ...item, found: true } : item);
    setItems(updatedItems);

    // Если после этого клика все предметы стали найденными — показываем окно
    if (updatedItems.every(item => item.found)) {
      setShowModal(true);
    }
  };
 
  return (
    <div style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto', color: '#00008B', position: 'relative' }}>
      
      {/* МОДАЛЬНОЕ ОКНО ВВЕРХУ ЭКРАНА */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '550px',
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          border: '3px solid #28a745',
          zIndex: 1000,
          animation: 'slideDown 0.3s ease-out',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '15px' }}>
            {/* Ваша картинка ключа вместо эмодзи */}
            <img src={key} width={40} height={40} alt="Ключ" style={{ objectFit: 'contain' }} />
            <span style={{ color: '#155724', fontWeight: 'bold', fontSize: '18px', lineHeight: '1.4' }}>
              Отлично! Ты распределил объекты по классам!
            </span>
          </div>
          
          <p style={{ color: '#333', fontSize: '15px', margin: '0 0 20px 0', lineHeight: '1.5' }}>
            Вы нашли ключ! Но от чего он? Вебка заметил подозрительного кота и велосипед у окна...
          </p>
          
          <button 
            className='compile'
            onClick={onComplete}
            style={{ 
              padding: '10px 24px', 
              fontSize: '16px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Идти к окну
          </button>
        </div>
      )}

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
                background: item.found ? '#007bff' : '#007bff', // Кнопка активна, пока не найдено
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold          ' // Исправлена опечатка в стиле
              }}
              className={item.found ? '' : 'active-btn'} // Стилизация через классы при необходимости
            >
              .{item.method}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
