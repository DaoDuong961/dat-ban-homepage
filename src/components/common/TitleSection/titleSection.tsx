import './titleSection.css'

interface Props{
    className?: string;
    text?: string;
}
export default function TitleSection (props: Props){
    return(
        <h2 className={props.className}>{props.text}</h2>
    );
}