// import "./AddressIcons.css";
import style from "./AddressIcons.module.css";
// import style from  "./AddressIcons.css";
export default function AddressIcons(props){
    return(
            <ul className={style.addressIcons}>
                <li><img src={`./images/${props.restart}`}/></li>
                <li><img src={`./images/${props.restartCopy}`}/></li>
                <li><img src={`./images/${props.combined}`}/></li>
                <li><img src={`./images/${props.more}`}/></li>
            </ul>
    );
}