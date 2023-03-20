import UserImg from '../UserImg/UserImg';
// import './AddressLeftSide.css';
import style from "./AddressLeftSide.module.css";
import {MsgSectionData} from "../Data/MsgSectionData";
export default function AddressLeftSide(){
    return(
        <div className={style.leftSideContainer}>
            {MsgSectionData.map((item)=>
            <UserImg key={item.id} userImg={item.userImg} />

            )}
        </div>
    );
}