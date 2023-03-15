import './MsgImage.css';
import MsgImg from '../../images/ImgHi.png';
export default function MsgImage(){
    return(
        <div className="MsgImage-container">
            <img src={MsgImg}/>
        </div>
    );
}
