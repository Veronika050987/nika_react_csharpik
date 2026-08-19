import React, { useState } from 'react';
import './Level1.css';
import box from './img/box.png';
import bed from './img/bed.png';
import wheel from './img/wheel.png';
import body from './img/body.png';
import lamp from './img/lamp.png';
import drive from './img/drive.png';
import volant from './img/volant.png';
import bear from './img/bear.png';
import book from './img/book.png';
import apple from './img/apple.png';
import sock from './img/sock.png';
import pencil from './img/pencil.png';

const ITEMS = [
  { id: 1, name: 'Колесо', type: 'Car', image: wheel },
  { id: 2, name: 'Корпус', type: 'Car', image: body },
  { id: 3, name: 'Фара', type: 'Car', image: lamp },
  { id: 4, name: 'Моторчик', type: 'Car', image: drive },
  { id: 5, name: 'Руль', type: 'Car', image: volant },
  { id: 6, name: 'Мишка', type: 'Other', image: bear },
  { id: 7, name: 'Книга', type: 'Other', image: book },
  { id: 8, name: 'Яблоко', type: 'Other', image: apple },
  { id: 9, name: 'Носок', type: 'Other', image: sock },
  { id: 10, name: 'Карандаш', type: 'Other', image: pencil },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Level1({ onComplete }) {
  const [items, setItems] = useState(() => shuffleArray(ITEMS));
  const [boxCar, setBoxCar] = useState([]);
  const [boxOther, setBoxOther] = useState([]);
 
  const moveToBox = (item, boxName) => {
    setItems(items.filter(i => i.id !== item.id));
    if (boxName === 'Car') setBoxCar([...boxCar, item]);
    if (boxName === 'Other') setBoxOther([...boxOther, item]);
  };
 
  const checkResults = () => {
    const carErrors = boxCar.filter(i => i.type !== 'Car').length;
    const otherErrors = boxOther.filter(i => i.type !== 'Other').length;
 
    if (items.length === 0 && carErrors === 0 && otherErrors === 0) {
      alert('Отлично! Ты распределил объекты по классам!');
      onComplete();
    } else {
      alert('Где-то ошибка или ты забыл собрать все вещи под кроватью! Проверь коробки.');
    }
  };
 
  return (
    /* box-sizing: border-box и width: 100% страхуют от появления боковой прокрутки */
    <div style={{ maxWidth: '800px', width: '100%', boxSizing: 'border-box', textAlign: 'center', color: '#00008B' }}>
      
      {/* Уменьшили верхний отступ (margin-top), чтобы поднять весь блок ближе к заголовку с мальчиком */}
      <h3 style={{ 
        marginTop: '10px', 
        marginBottom: '10px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
        }}>
        Уровень 1: Беспорядок под кроватью 
        <img src={bed} width={80} height={80} alt='bed'/>
      </h3>
      
      <p style={{ background: '#B0E0E6', padding: '15px', borderRadius: '8px', lineHeight: '1.5', marginTop: '0', color: '#00008B' }}>
        <b>Теория:</b> В программировании <b style={{color:'#8B008B'}}>Класс</b> это коробка, в которой должны лежать только правильные предметы, а сами предметы это <b style={{color:'#8B008B'}}>Объекты</b>. 
        В коробке с наклейкой <code style={{ color: '#FF0000' }}>class Car</code> лежат только детали гоночной машинки. В коробке с наклейкой <code style={{ color: '#008000' }}>class Other</code> хранится всё остальное. 
        <br/><br/>
        🎯 <b>Твоё задание:</b> Отсортируй объекты по двум коробкам - распредели все предметы по их типам (классам) с помощью клика мышки!
      </p>
 
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '10px 0', flexWrap: 'wrap' }}>
          {items.map(item => (
        <div key={item.id} style={{ 
          border: '1px solid #ccc', 
          padding: '10px', 
          borderRadius: '5px', 
          background: '#00FF7F',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Центрируем текст, картинку и кнопки по горизонтали
          gap: '5px' // Делаем аккуратные отступы между элементами карточки
        }}>
        {/* Рендерим картинку, только если она есть у элемента */}
        {item.image && (
        <img 
          src={item.image} 
          alt={item.name} 
          style={{ width: '50px', height: '50px', objectFit: 'contain', marginBottom: '5px' }} 
        />
      )}
      
      <span style={{ fontWeight: 'bold' }}>{item.name}</span>
      
      <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
        <button className='car' onClick={() => moveToBox(item, 'Car')}>Car</button>
        <button className='other' onClick={() => moveToBox(item, 'Other')}>Other</button>
      </div>
    </div>
  ))}
</div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{ 
          border: '2px dashed #dc3545', 
          padding: '20px', 
          width: '40%', 
          background: '#FAEBD7', 
          boxSizing: 'border-box',
          display: 'flex', // Включаем flex для всего прямоугольника
          flexDirection: 'column',  // Элементы идут друг под другом 
          alignItems: 'center',      // Центрируем и заголовок, и список элементов по горизонтали
          justifyContent: 'center'
          }}>
          <h4 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px', 
            margin: '0', 
            color: '#FF0000',
            textAlign: 'center',
            width: '100%' 
            }}>
            <img src={box} width={40} height={40} alt='box'/> 
            class Car
            </h4>
          <div style={{ textAlign: 'center', color: '#000' }}> 
          {boxCar.map(i => <div key={i.id}>{i.name}</div>)}
          </div>
        </div>
        <div style={{ 
          border: '2px dashed #6c757d', 
          padding: '20px', 
          width: '40%', 
          background: '#FFFFF0', 
          boxSizing: 'border-box', 
          color: '#008000',
          display: 'flex', // Включаем flex для всего прямоугольника
          flexDirection: 'column',  // Элементы идут друг под другом 
          alignItems: 'center',      // Центрируем и заголовок, и список элементов по горизонтали
          justifyContent: 'center' 
          }}>
          <h4 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px', 
            margin: '0',
            textAlign: 'center',
            width: '100%' 
            }}>
            <img src={box} width={40} height={40} alt='box'/> 
            class Other
            </h4>
          <div style={{ textAlign: 'center', color: '#000' }}> 
          {boxOther.map(i => <div key={i.id}>{i.name}</div>)}
          </div>
        </div>
      </div>
 
      <button 
      className='compile'
      onClick={checkResults}>
        Запустить проверку кода
      </button>
    </div>
  );
}
