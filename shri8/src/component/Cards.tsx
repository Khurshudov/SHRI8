import * as React from "react";
import { cn } from '@bem-react/classname';
import Card from "./Card";
import imported from './../events.json';
import './Cards.css'

const events = imported.events

const obj = {
    prop1: 'qwe'
}

const cards = cn('Cards')

class Cards extends React.Component {
  render() {
    return (
      <div className={cards()}>
        {events.map((evt, i) => <Card key={i} event={evt} /> )}
      </div>
    );
  }
}
export default Cards;