import React, { useState } from 'react';
import cat from './img/cat.png';
import velo from './img/velo.png';
import './QuestGame.css';

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
<div style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto', color: '#191970' }}>
<h3>Уровень 3: Кот и велосипед</h3>
<p style={{ background: '#B0E0E6', padding: '10px', borderRadius: '5px', color: '#191970' }}>
<b>Теория:</b> <b style={{color:'#8B008B'}}>Инкапсуляция</b> в ООП это защита внутренних данных <b style={{color:'#8B008B'}}>объекта</b>. Багажник велосипеда имеет статус <code style={{color: '#FF0000'}}>private</code> (скрыт от всех). Попробуй открыть багажник велосипеда.
</p>
 
      <div style={{ display: 'flex', gap: '20px', margin: '30px 0' }}>
        {/* Кот */}
<div style={{ border: '1px solid #aaa', padding: '15px', borderRadius: '8px', flex: 1, background: 'linear-gradient(to bottom right, #6495ED, #87CEFA, #32CD32)' }}>
<h4>
  <p>Кот Сшарпика</p>
  <img src={cat} width={160} height={160} alt='cat'/>
</h4>
<p style={{ fontSize: '14px', color: '#555' }}>{catStatus}</p>
          {!hasKeyFromCat && <button onClick={clickCat} className='button'>Использовать ключ со стола</button>}
</div>
 
        {/* Велосипед */}
<div style={{ border: '1px solid #aaa', padding: '15px', borderRadius: '8px', flex: 1, background: 'linear-gradient(to bottom right, #6495ED, #87CEFA, #32CD32)' }}>
<h4> 
  Игрушечный велосипед
  <img src={velo} width={160} height={160} alt='cat'/>
</h4>
<p style={{ fontSize: '14px', color: '#555' }}>{bikeStatus}</p>
<button onClick={() => alert('Дзинь-дзинь! Метод RingBell() сработал, он был public!')} 
style={{ padding: '5px 10px', marginRight: '5px' }}>Вызвать .RingBell()
</button>
<button onClick={clickBikeTrunk} 
style={{ 
  padding: '5px 10px', 
  background: '#ffc107', 
  cursor: 'pointer',
  border: 'none', 
  borderRadius: '4px',
  marginTop: '10px' 
   }}>
  Открыть private trunk
</button>
</div>
</div>
</div>
  );
}