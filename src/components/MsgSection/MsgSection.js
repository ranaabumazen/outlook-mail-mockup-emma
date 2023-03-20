import Title from '../Title/Title';
// import './MsgSection.css';
import style from "./MsgSection.module.css";
import MsgContent from '../MsgContent/MsgContent';
import Scrollbar from '../Scrollbar/Scrollbar';

export default function MsgSection(){
    return(
     <div className={style.sectionContainer}>
        <Title />
        <MsgContent />
        <Scrollbar />
     </div>
    );
}