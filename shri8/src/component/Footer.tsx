import * as React from "react";
import { cn } from '@bem-react/classname';
import './Footer.css'

const footer = cn('Footer')
const content = cn(footer('Content'))

class Footer extends React.Component<any,any> {
  render() {
    return (
      <footer className={footer()}>
        <ul className={content()}>
          <li className={content('Elem')} ><a href="#">Помощь</a></li>
          <li className={content('Elem')} ><a href="#">Обратная связь</a></li>
          <li className={content('Elem')} ><a href="#">Разработчикам</a></li>
          <li className={content('Elem')} ><a href="#">Условия использования</a></li>
          <li className={content('Elem')} ><a href="#">Лицензия</a></li>
        </ul>
        <span className={footer('YandexInfo')}>© 2001–2017  ООО «Яндекс»</span>
      </footer>
    );
  }
}
export default Footer;