import React from "react"
import "./NavTab.css"
import { Link } from "react-scroll"

//Компонент NavTab представляет собой навигационную вкладку.
function NavTab() {
  //Рендерится в виде nav с классом nav-tab.
  //Содержит компонент Link из пакета react-scroll, который предоставляет
  // плавную прокрутку при переходе по ссылкам.
  //Link имеет свойства:
  //to="about" - указывает на элемент с идентификатором "about", к которому будет осуществляться прокрутка.
  //className="nav-tab__link" - применяет класс "nav-tab__link" к ссылке.
  //smooth={true} - включает плавную прокрутку.
  //duration={600} - задает длительность прокрутки в миллисекундах.
  //Текст "Узнать больше" отображается внутри ссылки и служит для
  // указания пользователям на возможность получения дополнительной информации.
  return (
    <nav className="nav-tab">
      <Link to="about" className="nav-tab__link" smooth={true} duration={700}>
        Узнать больше
      </Link>
    </nav>
  )
}

export default NavTab
