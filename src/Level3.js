import React, { useState } from 'react';
import cat from './img/cat.png';
import velo from './img/velo.png';
import book from './img/book.png';
import question from './img/question.png';
import success from './img/success.png';
import car from './img/car.png';
import './QuestGame.css';
import './Level3.css';

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
    <div className="level3-container">
      
      {/* МОДАЛЬНОЕ ОКНО ДЛЯ ЗВОНКА */}
      {showBellModal && (
        <div className="modal-window-lvl3 bell-modal">
          <h4 className="modal-title-bell">🔔 Дзинь-дзинь!</h4>
          <p className="modal-text-lvl3">
            Метод <code className="modal-code">.RingBell()</code> сработал, он был <b>public</b>!
          </p>
          <button 
            onClick={() => setShowBellModal(false)}
            className="modal-btn-bell"
          >
            Понятно
          </button>
        </div>
      )}

      {/* ФИНАЛЬНОЕ МОДАЛЬНОЕ ОКНО ПОБЕДЫ НА УРОВНЕ */}
      {showSuccessModal && (
        <div className="modal-window-lvl3 success-modal">
          <div className="modal-title-success">
            <img src={success} alt="success" className="success-img-lvl3" loading="lazy" />
          </div>
          <p className="modal-text-lvl3 bold-text">
            Багажник открыт! Внутри лежит коллекционная машинка Сшарпика!
          </p>
          <p>
            <img src={car} alt='car' className="car-img-lvl3" loading="lazy" />
          </p>
          <button 
            onClick={onComplete} 
            className="modal-btn-success"
          >
            Отлично! Идти дальше
          </button>
        </div>
      )}

      <h3 className="lvl3-h3">Уровень 3: Кот и велосипед</h3>
      <p className="lvl3-p">
        <img src={book} width={20} height={20} alt='book' loading="lazy" style={{ verticalAlign: 'middle', marginRight: '5px', aspectRatio: '1 / 1' }} />
        <b>Теория:</b> <b style={{color:'#8B008B'}}>Инкапсуляция</b> в ООП это защита внутренних данных <b style={{color:'#8B008B'}}>объекта</b>. Багажник велосипеда имеет статус <code style={{color: '#FF0000'}}>private</code> (скрыт от всех). 
        <br/><br/>
        <img src={question} width={20} height={20} alt='question' loading="lazy" style={{ verticalAlign: 'middle', marginRight: '5px', aspectRatio: '1 / 1' }} />
        <b>Твоё задание: </b>
        Попробуй открыть багажник велосипеда.
      </p>
 
      {/* ИГРОВАЯ ЗОНА (КАРТОЧКИ ПЕРСОНАЖЕЙ) */}
      <div className="lvl3-grid">
        {/* Кот */}
        <div className="lvl3-card">
          <h4 className="lvl3-card-title">Кот Сшарпика</h4>
          <div className="img-wrapper">
            <img src={cat} alt='cat' className="character-img" loading="lazy" />
          </div>
          <p className="status-text">{catStatus}</p>
          {!hasKeyFromCat && <button onClick={clickCat} className='button lvl3-action-btn'>Использовать ключ со стола</button>}
        </div>
 
        {/* Велосипед */}
        <div className="lvl3-card">
          <h4 className="lvl3-card-title">Игрушечный велосипед</h4>
          <div className="img-wrapper">
            <img src={velo} alt='velo' className="character-img" loading="lazy" />
          </div>
          <p className="status-text">{bikeStatus}</p>
          
          <div className="btn-group-lvl3">
            <button 
              onClick={() => setShowBellModal(true)} 
              className="btn-bell"
            >
              Вызвать метод <b>.RingBell()</b>
            </button>
            
            <button 
              onClick={clickBikeTrunk} 
              className="btn-trunk"
            >
              Открыть <b>private trunk</b>
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}
