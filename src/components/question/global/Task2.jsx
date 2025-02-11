import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task2 = () => {
  useDocumentTitle('GitHub Desktop');

  const path = '/learnskill/question/task1/quest3';
  const path_lec = '/learnskill/useful/program/pgm4';

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <NextBtn path = {path} />
          <LecBtn path_lec = {path_lec}/>
          <div className="main__content">
            <div className="text-task task2">
              <h2>Приложение GitHub Desktop</h2>
              <ol>
                <li>Необходимо войти в свой аккаунт через браузер</li>
                <li>Далее необходимо создать репозиторий (Add)</li>
                <li>Придумать имя репозитория (например: kind-friend)</li>
                <li>Выбрать путь установки куда удобнее</li>
                <li>Сделать его публичным</li>
              </ol>
              <a rel="noopener noreferrer" target='_blank' href="https://desktop.github.com/download/" className="link color red">Скачать GitHub Desktop</a>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task2;