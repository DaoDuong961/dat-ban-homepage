import './taga.css';

interface Props{
    href?: string,
    text?: string,
}
export default function TagA (props: Props){
    return(
        <a href={props.href}>{props.text}</a>
    );
}