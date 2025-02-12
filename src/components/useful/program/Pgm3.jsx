import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';


const Pgm3 = () => {
  useDocumentTitle('Программа "Figma"');

  return (
      <Layout>
        <div className="LectionPage">
          <NavLink
          to="/learnskill/useful"
          className="back-link back">
          </NavLink>
          <div className='back-link back img figma'></div>
          <main className="main_content pgm">
            <h2>Гайд по Figma для новичков 🎨</h2>
            <p>Figma – это онлайн-инструмент для дизайна и прототипирования. Работает прямо в браузере, а ещё у него есть десктопная версия. Давай разберёмся, как её установить и начать работать!</p>
            <ol>
              <li>
                <h3>🔹 Установка Figma</h3>
                <h4 className='mt10px'>✅ Вариант 1: Через браузер (без скачивания)</h4>
                <ol>
                  <li>Открываем сайт <a rel="noopener noreferrer" target='_blank' href="https://www.figma.com/" className="color link">figma.com</a></li>
                  <li>Нажимаем "Sign up" (если нет аккаунта) или "Log in" (если уже есть)</li>
                  <li>Всё! Можно начинать работать прямо в браузере.</li>
                </ol>
                <h4 className='mt10px'>✅ Вариант 2: Установить программу (Windows / macOS)</h4>
                <ol>
                  <li>Заходим на официальный сайт <a rel="noopener noreferrer" target='_blank'className='color link' href="https://www.figma.com/downloads/">Скачать</a></li>
                  <li>Выбираем Desktop App для своей операционной системы</li>
                  <li>Скачиваем и устанавливаем, как обычную программу</li>
                  <li>Входим в свой аккаунт и работаем!</li>
                </ol>
              </li>
              <li className='mt20px'>
                <h3>🎨 Основной интерфейс</h3>
                <h4 className='mt10px'>Когда ты открыл Figma, вот что видишь:</h4>
                <ul>
                  <li>Фреймы (Frames) – это как страницы в документе, на которых ты рисуешь</li>
                  <li>Панель инструментов – здесь кнопки для создания фигур, текста, линий</li>
                  <li>Слои (Layers) – список всех элементов на экране</li>
                  <li>Свойства (Properties) – справа настройки размера, цвета, шрифтов и т. д.</li>
                </ul>
              </li>
              <li className="mt20px">
                <h3>⌨️ Горячие клавиши (чтобы работать быстрее!)</h3>
                <h4 className='mt10px'>🔹 Основные команды</h4>
                <ul>
                  <li>T – Текст</li>
                  <li>L – Линия</li>
                  <li>O – Овал</li>
                  <li>R – Прямоугольник</li>
                  <li>F – Добавить фрейм (как новый экран)</li>
                  <li>V – Выбрать элемент (Move Tool)</li>
                </ul>
                <h4 className='mt10px'>🔹 Работа с объектами</h4>
                <ul>
                  <li>Ctrl + D (Cmd + D на Mac) – Дублировать</li>
                  <li>Ctrl + G (Cmd + G) – Группировать</li>
                  <li>Ctrl + Shift + G (Cmd + Shift + G) – Разгруппировать</li>
                  <li>Ctrl + K (Cmd + K) – Сделать компонент</li>
                  <li>Alt + перетаскивание – Копировать</li>
                </ul>
                <h4 className='mt10px'>🔹 Выравнивание и работа с сеткой</h4>
                <ul>
                  <li>Ctrl + Shift + 4 – Показывать/скрывать направляющие</li>
                  <li>Shift + перетаскивание – Ровно двигать по осям X/Y</li>
                </ul>
              </li>
              <li className="mt20px">
                <h3>🚀 Первые шаги: что делать в Figma?</h3>
                <ul className="cods num-code">
                  <li className="none">1️⃣ Создай новый фрейм (нажми F и выбери размер экрана, например, "Desktop" или "iPhone 14")</li>
                  <li className="none">2️⃣ Добавь фигуры (R – прямоугольник, O – круг) и измени их размер</li>
                  <li className="none">3️⃣ Напиши текст (T) и выбери красивый шрифт в правой панели</li>
                  <li className="none">4️⃣ Попробуй изменить цвета и добавить тень</li>
                  <li className="none">5️⃣ Сохрани проект и поделись ссылкой с другом!</li>
                </ul>
              </li>
              <li className="mt20px">
                <h3>⭐ Полезные фишки Figma</h3>
                <ul className="cods num-code">
                  <li className="none">✅ Совместная работа – можешь делиться ссылкой и редактировать с друзьями в реальном времени</li>
                  <li className="none">✅ Компоненты – создавай кнопки и элементы, которые можно использовать повторно</li>
                  <li className="none">✅ Плагины – установи расширения, чтобы добавить картинки, иконки и т. д.</li>
                  <li className="none">✅ Автолейаут (Auto Layout) – помогает делать адаптивные интерфейсы</li>
                </ul>
              </li>
            </ol>
            <h4 className='mt20px'>👉 Следующий шаг: попробуй повторить дизайн любого сайта или приложения. Это лучший способ учиться! 💪🎨</h4>
          </main>
        </div>
      </Layout>
  );
};

export default Pgm3;