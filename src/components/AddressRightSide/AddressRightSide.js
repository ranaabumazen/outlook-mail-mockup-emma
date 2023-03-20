import AddressIcons from "../AddressIcons/AddressIcons";
// import './AddressRightSide.css';
import style from "./AddressRightSide.module.css";
import {MsgSectionData} from "../Data/MsgSectionData";
export default function AddressRightSide(){
    return(
        <div className={style.rightSideContainer}>
            {MsgSectionData.map((item)=>
            <AddressIcons key={item.id}{...item.icons}/>
            )}
        </div>
    );
}