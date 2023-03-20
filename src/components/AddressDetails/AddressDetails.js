// import './AddressDetails.css'
import style from "./AddressDetails.module.css";
export default function AddressDetails(props){
    return(
            <div className={style.addressDetails}>
                <div>{props.timeAndDate}</div>
                <div>{props.addressedTo}</div>
            </div>
    );
}