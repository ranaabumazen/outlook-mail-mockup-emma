import './MsgContent.css';
import Address from '../Address/Address';
import MsgImage from '../MsgImage/MsgImage';
import MsgText from '../MsgText/MsgText';
export default function MsgContent(){
    return(
        <div className="content-container">
            <Address />
            <MsgImage />
            <MsgText />
        </div>
    );
}