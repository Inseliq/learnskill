import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';


const Home1 = () => {
  useDocumentTitle('Проверка ДЗ');

  const path = '/learnskill/question/task1/quest10';

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <NextBtn path = {path} />
          <div className="main__content">
            <div className="text-task home">
              <h2>Проверка домашнего задания</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>Имя</th>
                      <th>Дата проверки</th>
                      <th>Время проверки</th>
                      <th>Оценка</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="№">1</td>
                      <td data-label="Имя">Артур</td>
                      <td data-label="Дата проверки">$data</td>
                      <td data-label="Время проверки">$time</td>
                      <td data-label="Оценка">$score/10</td>
                      <td data-label="Статус">Ожидание</td>
                    </tr>
                    <tr>
                      <td data-label="№">2</td>
                      <td data-label="Имя">Евгения</td>
                      <td data-label="Дата проверки">$data</td>
                      <td data-label="Время проверки">$time</td>
                      <td data-label="Оценка">$score/10</td>
                      <td data-label="Статус">Ожидание</td>
                    </tr>
                    <tr>
                      <td data-label="№">3</td>
                      <td data-label="Имя">Иван</td>
                      <td data-label="Дата проверки">$data</td>
                      <td data-label="Время проверки">$time</td>
                      <td data-label="Оценка">$score/10</td>
                      <td data-label="Статус">Ожидание</td>
                    </tr>
                    <tr>
                      <td data-label="№">4</td>
                      <td data-label="Имя">Алексей (liokha6364)</td>
                      <td data-label="Дата проверки">$data</td>
                      <td data-label="Время проверки">$time</td>
                      <td data-label="Оценка">$score/10</td>
                      <td data-label="Статус">Ожидание</td>
                    </tr>
                    <tr>
                      <td data-label="№">5</td>
                      <td data-label="Имя">Алексей (alexus0015)</td>
                      <td data-label="Дата проверки">$data</td>
                      <td data-label="Время проверки">$time</td>
                      <td data-label="Оценка">$score/10</td>
                      <td data-label="Статус">Ожидание</td>
                    </tr>
                    <tr>
                      <td data-label="№">6</td>
                      <td data-label="Имя">Кирилл</td>
                      <td data-label="Дата проверки">$data</td>
                      <td data-label="Время проверки">$time</td>
                      <td data-label="Оценка">$score/10</td>
                      <td data-label="Статус">Ожидание</td>
                    </tr>
                    <tr>
                      <td data-label="№">7</td>
                      <td data-label="Имя">Михаил</td>
                      <td data-label="Дата проверки">$data</td>
                      <td data-label="Время проверки">$time</td>
                      <td data-label="Оценка">$score/10</td>
                      <td data-label="Статус">Ожидание</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Home1;