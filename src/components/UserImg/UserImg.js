// import './UserImg.css'
import style from "./UserImg.module.css";
export default function UserImg(props){
    return(
        <div className={style.iconContact}>{props.userImg}</div>
    );
}