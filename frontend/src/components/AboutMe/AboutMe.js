import React from "react";
import avatar from "../../images/tatiavatar.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-block">
          <h3 className="about-me__subtitle">Татьяна Милинова</h3>
          <h4 className="about-me__info">Фронтенд-разработчик, 36 лет</h4>
          <p className="about-me__description">
            Я живу в Тольятти, закончила факультет экономики ПВГУС. У меня есть
            молодой человек и сын. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начала писать код. С 2015 года работала в компании
            «СКБ Контур». После того, как прошла курс по веб-разработке, начала
            заниматься фриланс-заказами и ушла с постоянной работы.
          </p>
          <a
            href="https://github.com/TatianaMil"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={avatar} alt="мое фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
