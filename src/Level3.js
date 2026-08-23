import React, { useState } from 'react';
import cat from './img/cat.png';
import velo from './img/velo.png';
import book from './img/book.png';
import question from './img/question.png';
import success from './img/success.png';
import car from './img/car.png';
import './QuestGame.css';

export default function Level3({ onComplete }) {
  const [catStatus, setCatStatus] = useState('Кот довольно урчит. На его ошейнике висит замок. Нужен ключ со стола!');
  const [bikeStatus, setBikeStatus] = useState('Игрушечный велосипед заперт. Внутри багажника что-то лежит.');
  const [hasKeyFromCat, setHasKeyFromCat] = useState(false);
  const [showBellModal, setShowBellModal] = useState(false); 
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Новое состояние для окна победы
 
  const clickCat = () => {
    setCatStatus('Вы применили Ключ со стола! Замок открылся. На ошейнике был спрятан Ключ от Багажника!');
    setHasKeyFromCat(true);
  };
 
  const clickBikeTrunk = () => {
    if (!hasKeyFromCat) {
      setBikeStatus('Ошибка: Доступ к private trunk ограничен! Нужен специальный ключ доступа.');
    } else {
      setBikeStatus('Багажник открыт! Внутри лежит коллекционная машинка Сшарпика!');
      setShowSuccessModal(true); // Показываем окно победы вместо невидимого таймаута
    }
  };
 
  return (
    <div style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto', color: '#191970', position: 'relative' }}>
      
      {/* МОДАЛЬНОЕ ОКНО ДЛЯ ЗВОНКА */}
      {showBellModal && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '450px',
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          border: '3px solid #FF6347',
          zIndex: 1000,
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#FF6347', margin: '0 0 10px 0', fontSize: '20px' }}>🔔 Дзинь-дзинь!</h4>
          <p style={{ color: '#333', fontSize: '15px', margin: '0 0 15px 0', lineHeight: '1.5' }}>
            Метод <code style={{ background: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>.RingBell()</code> сработал, он был <b>public</b>!
          </p>
          <button 
            onClick={() => setShowBellModal(false)}
            style={{ padding: '8px 20px', background: '#FF6347', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Понятно
          </button>
        </div>
      )}

      {/* ФИНАЛЬНОЕ МОДАЛЬНОЕ ОКНО ПОБЕДЫ НА УРОВНЕ */}
      {showSuccessModal && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '450px',
          background: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          border: '3px solid #28a745', // Зеленая рамка успеха
          zIndex: 1001,
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#28a745', margin: '0 0 10px 0', fontSize: '20px' }}>
            <img src={success} alt="success" style={{ width: '70px', height: '70px', objectFit: 'contain', loading:"lazy", aspectRatio: '1 / 1' }} />
          </h4>
          <p style={{ color: '#333', fontSize: '15px', margin: '0 0 20px 0', lineHeight: '1.5', fontWeight: 'bold' }}>
            Багажник открыт! Внутри лежит коллекционная машинка Сшарпика!
          </p>
            <p><img src={car} width={110} height={80} alt='car' loading="lazy" aspectRatio= '1 / 1'/></p>
          <button 
            onClick={onComplete} // Переход на следующий уровень теперь по клику
            style={{ 
              padding: '10px 24px', 
              background: '#28a745', 
              color: '#fff', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '15px'
            }}
          >
            Отлично! Идти дальше
          </button>
        </div>
      )}

      <h3>Уровень 3: Кот и велосипед</h3>
      <p style={{ background: '#B0E0E6', padding: '10px', borderRadius: '5px', color: '#191970' }}>
        <img src={book} width={20} height={20} alt='book' loading="lazy" aspectRatio= '1 / 1'/>
        <b>Теория:</b> <b style={{color:'#8B008B'}}>Инкапсуляция</b> в ООП это защита внутренних данных <b style={{color:'#8B008B'}}>объекта</b>. Багажник велосипеда имеет статус <code style={{color: '#FF0000'}}>private</code> (скрыт от всех). 
        <br/><br/>
        <img src={question} width={20} height={20} alt='question' loading="lazy" aspectRatio= '1 / 1'/>
        <b>Твоё задание: </b>
        Попробуй открыть багажник велосипеда.
      </p>
 
      <div style={{ display: 'flex', gap: '20px', margin: '30px 0' }}>
        {/* Кот */}
        <div style={{ border: '1px solid #aaa', padding: '15px', borderRadius: '8px', flex: 1, background: 'linear-gradient(to bottom right, #6495ED, #87CEFA, #32CD32)' }}>
          <h4>
            <p>Кот Сшарпика</p>
            <img src={cat} width={160} height={160} alt='cat' loading="lazy" aspectRatio= '1 / 1'/>
          </h4>
          <p style={{ fontSize: '14px', color: '#555' }}>{catStatus}</p>
          {!hasKeyFromCat && <button onClick={clickCat} className='button'>Использовать ключ со стола</button>}
        </div>
 
        {/* Велосипед */}
        <div style={{ border: '1px solid #aaa', padding: '15px', borderRadius: '8px', flex: 1, background: 'linear-gradient(to bottom right, #6495ED, #87CEFA, #32CD32)' }}>
          <h4> 
            Игрушечный велосипед
            <img src={velo} width={160} height={160} alt='velo' loading="lazy" aspectRatio= '1 / 1'/>
          </h4>
          <p style={{ fontSize: '14px', color: '#555' }}>{bikeStatus}</p>
          
          <button 
            onClick={() => setShowBellModal(true)} 
            style={{ padding: '5px 10px', marginRight: '5px', borderRadius: '8px', backgroundColor: '#FF6347', cursor: 'pointer', color: '#fff', fontWeight: 'bold' }}
          >
            Вызвать метод <b>.RingBell()</b>
          </button>
          
          <button onClick={clickBikeTrunk} 
            style={{ 
              padding: '5px 10px', 
              background: '#ffc107', 
              cursor: 'pointer',
              borderRadius: '8px',
              marginTop: '10px',
              fontWeight: 'bold'
            }}
          >
            Открыть <b>private trunk</b>
          </button>
        </div>
      </div>
    </div>
  );
}
