import React, { useState } from 'react';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import './QuestGame.css';
import loupik1 from './img/loupik1.png';
 
export default function QuestGame() {
  const [level, setLevel] = useState(0); // 0: Старт, 1-3: Уровни, 4: Финал
 
  const nextLevel = () => setLevel((prev) => prev + 1);
  const restartGame = () => setLevel(0);
 
  return (
<div className='container'>
<header className='header'>
<h2 className='header_title'>
    <img src={loupik1} width={90} height={120} alt='webka' /> 
    Детектив Вебка и пропавшая машинка
    </h2>
        {level > 0 && level < 4 && <span className='badge'>Уровень {level} из 3</span>}
</header>
 
      <main className='main'>
        {level === 0 && (
<div className='card'>
<h3>Привет, кодер!</h3>
<p>У твоего друга <b>Сшарпика</b> пропала редкая коллекционная машинка! Помоги детективу <b>Вебке</b> раскрыть это дело, используя силу программирования на C#.</p>
<button className='button' onClick={nextLevel}>Начать расследование</button>
</div>
        )}
 
        {level === 1 && <Level1 onComplete={nextLevel} />}
        {level === 2 && <Level2 onComplete={nextLevel} />}
        {level === 3 && <Level3 onComplete={nextLevel} />}
 
        {level === 4 && (
<div className='card'>
<h3>🎉 Дело раскрыто!</h3>
<p>Вы открыли секретный багажник велосипеда с помощью ключа на ошейнике кота!</p>
<p><b>Сшарпик:</b> «Ура! Моя машинка на месте! Вебка, ты лучший детектив-программист!»</p>
<p>Теперь ты знаешь основы ООП: Классы, Объекты, Методы и Инкапсуляцию.</p>
<button className='button' onClick={restartGame}>Играть снова</button>
</div>
        )}
</main>
</div>
  );
}