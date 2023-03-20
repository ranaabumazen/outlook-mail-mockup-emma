// import './MsgImage.css';
import style from "./MsgImage.module.css";
export default function MsgImage(props){
    return(
        <div className={style.MsgImageContainer}>
            <img src={`./images/${props.msgImage}`}/>
        </div>
    );
}
