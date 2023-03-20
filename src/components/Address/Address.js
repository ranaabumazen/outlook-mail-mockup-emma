import AddressLeftSide from "../AddressLeftSide/AddressLeftSide";
import AddressRightSide from "../AddressRightSide/AddressRightSide";
import AddressMiddleSide from "../AddressMiddleSide/AddressMiddleSide";
// import './Address.css';
import style from "./Address.module.css";
export default function Address(){
    return(
        <div className={style.dFlex}>
           
            <AddressLeftSide />
            <AddressMiddleSide />
            <AddressRightSide/>
        </div>
    );
}
