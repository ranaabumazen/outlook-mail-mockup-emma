// import './Title.css';
import style from "./Title.module.css";
import Name from "../Name/Name";
import {MsgSectionData} from "../Data/MsgSectionData";

export default function Title(){
  
    return(
        <div className={style.titleCover}>
            {MsgSectionData.map((item,index)=>
            <Name key={index} name={item.name} />
           )}
        </div>
    
    );
}