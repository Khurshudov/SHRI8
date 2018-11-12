import * as React from "react";
import { cn } from '@bem-react/classname';
import './Navigation.css'

const nav = cn('Navigation')

class Navigation extends React.Component {
  render() {
    return (
        <ul className={nav()}>
            <li className={nav('Item', {active: true})}><a href="index.html">События</a></li>
            <li className={nav('Item')}><a href="#">Сводка</a></li>
            <li className={nav('Item')}><a href="#">Устройства</a></li>
            <li className={nav('Item')}><a href="#">Сценарии</a></li>
            <li className={nav('Item')}><a href="#">Видеонаблюдение</a></li>
        </ul>
    );
  }
}
export default Navigation;