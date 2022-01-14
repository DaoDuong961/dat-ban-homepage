import './text.css';

interface Props{
    text?: string,
}
export default function Text (props: Props) {
    return(
        <p>{props.text}</p>
    )
}
