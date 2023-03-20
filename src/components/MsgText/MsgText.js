// import './MsgText.css';
import style from "./MsgText.module.css";
export default function MsgText(props){
    return(
        <div className={style.MsgTextContainer}>
        <p>{props.msgHeader}</p>
        <p>{props.msgBody}</p>
    </div>
    );

}