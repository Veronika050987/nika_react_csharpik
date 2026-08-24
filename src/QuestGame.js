import React, { useState } from 'react';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import './QuestGame.css';
import tears from './img/tears.png';
import done from './img/done.png';
import happy from './img/happy.png';
import spider from './img/spider.png';
 
export default function QuestGame() {
  const [level, setLevel] = useState(0); // 0: Старт, 1-3: Уровни, 4: Финал
 
  const nextLevel = () => setLevel((prev) => prev + 1);
  const restartGame = () => setLevel(0);
 
  return (
<div className='container'>
<header className='header'>
<h2 className='header_title'>
    <img src={spider} width={130} height={130} alt='spider' loading="lazy" aspectRatio= '1 / 1' /> 
    Детектив Вебка и пропавшая машинка
    </h2>
        {level > 0 && level < 4 && <span className='badge'>Уровень {level} из 3</span>}
</header>
 
      <main className='main'>
        {level === 0 && (
<div className='card'>
<h3>Привет, кодер!</h3>
<img src={tears} width={270} height={280} alt='tears' loading="lazy" aspectRatio= '1 / 1' />  
<p>У твоего друга <b>Сшарпика</b> пропала редкая коллекционная машинка.
Помоги детективу <b>Вебке</b> раскрыть это дело, используя силу программирования на C#.</p>
<button className='button' onClick={nextLevel}>Начать расследование</button>
</div>
        )}
 
        {level === 1 && <Level1 onComplete={nextLevel} />}
        {level === 2 && <Level2 onComplete={nextLevel} />}
        {level === 3 && <Level3 onComplete={nextLevel} />}
 
        {level === 4 && (
<div className='card'>
<h3> 
        <p>Дело раскрыто! <img src={done} width={60} height={60} alt='done' /></p>
</h3>
<p>Вместе с Вебкой вы открыли секретный багажник велосипеда с помощью ключа на ошейнике кота!</p>
<div className='character-block'> 
<img src={happy} width={240} height={240} alt='happy' />
<p><b>Сшарпик:</b> «Ура! Моя машинка на месте! Вебка, кодер, вы лучшие детективы-программисты!»</p>
</div>
<p>Спасибо за помощь, кодер! Теперь ты знаешь главные секреты создания игр (ООП): 
    <b> Классы</b> (коробки игрушек), <b>Объекты</b> (сами игрушки), <b>Методы</b> (их суперсилы) и <b>Инкапсуляцию</b> (тайные багажники)!
</p>
<button className='button' onClick={restartGame}>Играть снова</button>
</div>
        )}
</main>
</div>
  );
}