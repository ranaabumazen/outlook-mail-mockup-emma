import "./AddressIcons.css";
import img1 from "../../images/Icon/UI/restart.png";
import img2 from "../../images/Icon/UI/restartCopy.png";
import img3 from "../../images/CombinedShape.png";
import img4 from "../../images/Icon-More.png";
export default function AddressIcons(){
    return(
            <ul className="address-icons">
                <li><img src={img1}/></li>
                <li><img src={img2}/></li>
                <li><img src={img3}/></li>
                <li><img src={img4}/></li>
            </ul>
    );
}