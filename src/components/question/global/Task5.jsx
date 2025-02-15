import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../Layout';
import useDocumentTitle from '../../huks.js/useDocumentTitle';
import NextBtn from '../../NextBtn';
import LecBtn from '../../LecBtn';


const Task5 = () => {
  useDocumentTitle('Структурирование файлов');

  const path = '/learnskill/question/task1/quest6';
  const path_lec = '/learnskill/lection/start/lec2';

  return (
      <Layout>
        <div className="QuestionPage">
          <NavLink
          to="/learnskill/question/task1"
          className="back-link no_margin">
          </NavLink>
          <NextBtn path = {path} />
          <LecBtn path_lec = {path_lec}/>
          <div className="main__content task5">
            <div className="text-task">
              <h2>Структурирование файлов</h2>
              <ol>
                <li>В корневой папке создать файл <b>index.html</b></li>
                <li>Создать папки <b>assets</b> и <b>src</b>, а так же для удобства <b>notes.txt</b></li>
                <li>В папке <b>src</b> создать папки <b>css</b> и <b>js</b></li>
                <li>В папке css создать папку <b>style</b>, а также файлы <b>root.css, fonts.css, const.color.css</b></li>
                <li>В папке <b>style</b> создать файл <b>main.css</b></li>
                <li>В папке <b>js</b> создать файл <b>app.js</b></li>
                <li>В папке <b>assets</b> создать папки <b>fonts, ico, img</b></li>
                <li className="coments">//Пример как должно выглядить, написал специально через консоль чтобы вы в дальнейшем могли работать с ChatGPT</li>
                <li className="coments">Объяснение:</li>
                <li className="coments">/$name - название репозитория;</li>
                <li className="coments">/assets - название папки;</li>
                <li className="coments">logo_ico.png - любой файл</li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Task5;