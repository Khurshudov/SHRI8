import * as React from "react";
import { cn } from '@bem-react/classname';
import './Card.css'

import closeImg from './../images/close_img.svg'
import openImg from './../images/right_arrow.svg'
import key from './../images/key.svg'
import grafik from './../images/grafik.png'
import image_pylesos from './../images/image.jpg'


const card = cn('Card')

interface dataObject extends Object {
    type?: string
    values?: any
    temperature?: Number
    humidity?: Number
    albumcover?: string 
    artist?: string
    track?: any
    volume?: Number
    buttons?: Array<string>
    image?: string
}
interface eventObject extends Object {
    type : string
    size : string
    title: string
    source: string 
    time: string
    description: string | null
    icon: string
    data?: any

}

class Card extends React.Component<{event: eventObject}, any> {
    render() {
        const ifCritical = this.props.event.type == 'critical'
        const size = this.props.event.size
        const title = this.props.event.title
        const source = this.props.event.source
        const time = this.props.event.time
        const description = this.props.event.description
        const dataType = this.props.event.data && this.props.event.data.type
        const temperature = this.props.event.data && this.props.event.data.temperature
        const humidity = this.props.event.data && this.props.event.data.humidity
        const image = this.props.event.data && this.props.event.data.image
        const buttons = this.props.event.data && this.props.event.data.buttons
        // music
        const albumcover = this.props.event.data && this.props.event.data.albumcover
        const artist = this.props.event.data && this.props.event.data.artist
        const track = this.props.event.data && this.props.event.data.track
        const volume = this.props.event.data && this.props.event.data.volume

        return (
            <div className={card({size: size, critical: ifCritical})}>
                <a href="#" className={card('CloseImg')} > <img src={closeImg} alt="closeImg"/> </a>
                <div className={card('TopInfo')} >
                    <img className={card('Logo')} src={key} alt="icon"/>
                    <h3 className={card('Title')} ><span>{title}</span></h3>
                    <span className={card('Source')} >{source}</span>
                    <span className={card('Time')} >{time}</span>
                </div>
                <div className={card('Data')} >
                    {description && <span className={card('Description')} >{description}</span>}
                    {dataType && dataType=='graph' && <img className={card('Img')} src={grafik} alt="plot"></img>}
                    {temperature && 
                    <div>
                        <span className={card('Temp')} >Температура: {temperature}C</span>
                        <span className={card('Wetness')}>Влажность: {humidity}%</span>
                    </div>}
                    {image && 
                        <div>
                            <img className={card('Img')} src={image_pylesos} alt="pylesos" /> 
                            <span className="zoom">Приближение: 78%</span>
                            <span className="brightness">Яркость: 58%</span>
                        </div>
                    }
                    {buttons &&
                        <div className={card('ButtonBlock')} >
                            <button className={card('Button')} >{buttons[0]}</button>
                            <button className={card('Button')} >{buttons[1]}</button>
                        </div>
                    }
                    {albumcover && 
                        <div className={card('Music')} >
                            <img className={card('Albumcover')} src={albumcover} alt="albumcover"/>
                            <span className={card('Artist')} >{artist}
                                <span className={card('TrackName')} >{track.name}</span>
                            </span>
                            <input className={card('TrackName')} type="range" name="length" min="0" max="100" />
                        </div>

                    }
                </div>
                <a href="#" className={card('OpenImg')} > <img src={openImg} alt="OpenImg"/> </a>
            </div>
        );
    }
}
export default Card;