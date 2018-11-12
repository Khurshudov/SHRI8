import * as React from "react";
import { cn } from '@bem-react/classname';
import './Main.css'
import Cards from "./Cards";

const main = cn('Main')

class Main extends React.Component {
  render() {
    return (
      <main className={main()}>
        <h2 className={main('Heading')}>Лента событий</h2>
        <Cards/>
      </main>
    );
  }
}
export default Main;