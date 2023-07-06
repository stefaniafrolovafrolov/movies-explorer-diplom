import React from "react"
import avatar from "../../images/vadim.jpg"
import "./AboutMe.css"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-block">
          <h3 className="about-me__subtitle">Фролов Вадим</h3>
          <h4 className="about-me__info">Фронтенд-разработчик, 36 лет</h4>
          <p className="about-me__description">
            Я живу в городе Коломна московская область, закончил факультет
            экономики ПВГУС. Я люблю слушать музыку, а ещё увлекаюсь бегом и
            ездой на автомобилях. Недавно начал писать код. С 2014 года по 2021
            год занимался собственным производством мебели и лестниц из массива
            натурального дерева. После того, как прошел курс по веб-разработке,
            начал заниматься фриланс-заказами и ушел с головой в разработку.
          </p>
          <a
            href="https://github.com/stefaniafrolovafrolov"
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
  )
}

export default AboutMe
