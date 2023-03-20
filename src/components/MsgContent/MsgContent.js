// import './MsgContent.css';
import style from "./MsgContent.module.css";
import Address from '../Address/Address';
import MsgImage from '../MsgImage/MsgImage';
import MsgText from '../MsgText/MsgText';
import {MsgSectionData} from "../Data/MsgSectionData";
export default function MsgContent(){
    return(
        <div className={style.contentContainer}>
            <Address />
            {MsgSectionData.map((item)=>
            <div key={item.id}>
            <MsgImage msgImage={item.msgImage} />
            <MsgText {...item.msgText}/>
            </div>
            )}
        </div>
    );
}