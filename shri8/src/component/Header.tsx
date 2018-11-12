import * as React from "react";
import logo from './../images/logo@2x.png'
import './Header.css'
import { cn } from '@bem-react/classname';
import Navigation from "./Navigation";

const header = cn('Header')

class Header extends React.Component {
  render() {
    return (
      <header className={header()}>
        <div className={header('Logo')}>
            <img src={logo} />
        </div>
        <Navigation/>
        <div className="Line"></div>
      </header>
    );
  }
}
export default Header;