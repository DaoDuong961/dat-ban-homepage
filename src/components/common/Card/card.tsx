import './card.css';

interface Props{
    className?: string,
    src?: string,
    titleCard?: string,
    deception?: string,
}
export default function Card (props: Props){
    return(
        <div className={props.className}>
            <img src={props.src} alt=""/>
            <h3>{props.titleCard}</h3>
            <p>{props.deception}</p>
        </div>
    );
}
