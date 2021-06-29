import React from "react";
import './NavTab.css';

function NavTab() {
  return (
        <section className="navtab">
          <div className="navtab__wrapper">
              <h2 className="navtab__title">О проекте</h2>
              <div className="navtab__line"></div>

              <ul className="navtab-cards">
                <li className="navtab-card__item">
                  <h3 className="navtab-card__title">Дипломный проект включал 5 этапов</h3>
                  <p className="navtab-card__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="navtab-card__item">
                  <h3 className="navtab-card__title">На выполнение диплома ушло 5 недель</h3>
                  <p className="navtab-card__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
              </ul>

              <div className="navtab-progress-bar__wrapper">
                <div className="navtab-progress-bar">
                  <div className="navtab-progress-bar__item navtab-progress-bar__item_type_small">
                    <p className="navtab-progress-bar__item-text">1 неделя</p>
                  </div>
                  <div className="navtab-progress-bar__item navtab-progress-bar__item_type_big">
                    <p className="navtab-progress-bar__item-text">4 недели</p>
                  </div>
                </div>


                <div className="navtab-progress-bar">
                  <div className="navtab-progress-bar__item navtab-progress-bar__item-two_type_small">
                    <p className="navtab-progress-bar__item-text navtab-progress-bar__item-text_style-gray">Back-end</p>
                  </div>
                  <div className="navtab-progress-bar__item navtab-progress-bar__item-two_type_big">
                    <p className="navtab-progress-bar__item-text navtab-progress-bar__item-text_style-gray">Front-end</p>
                  </div>
                </div>
              </div>


          </div>
        </section>
  );
}

export default NavTab;