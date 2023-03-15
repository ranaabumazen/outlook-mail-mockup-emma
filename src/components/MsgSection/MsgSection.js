import Title from '../Title/Title';
import './MsgSection.css';
import MsgContent from '../MsgContent/MsgContent';
import Scrollbar from '../Scrollbar/Scrollbar';

export default function MsgSection(){
    return(
     <div className="section-container">
        <Title />
        <MsgContent />
        <Scrollbar />
     </div>
    );
}