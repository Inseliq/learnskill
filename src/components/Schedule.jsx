import React from 'react';
import Layout from './Layout';
import useDocumentTitle from './huks.js/useDocumentTitle';
import './css/style/schedule.css';

const Schedule = () => {
  useDocumentTitle('Расписание вебинаров');

  return (
      <Layout>
        <div className="SchedulePage">
          <table class="table">
            <thead>
              <tr>
                <th>№</th>
                <th>Название</th>
                <th>Тип</th>
                <th>Дата проведения</th>
                <th>Время проведения</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="№">1</td>
                <td data-label="Название">Введение</td>
                <td data-label="Тип">Урок</td>
                <td data-label="Дата проведения">09.02.2025</td>
                <td data-label="Время проведения">11:00</td>
                <td data-label="Статус">Ожидание</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
  );
};

export default Schedule;