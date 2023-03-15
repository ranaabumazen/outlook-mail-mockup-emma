import AddressLeftSide from "../AddressLeftSide/AddressLeftSide";
import AddressRightSide from "../AddressRightSide/AddressRightSide";
import AddressMiddleSide from "../AddressMiddleSide/AddressMiddleSide";
import './Address.css';
export default function Address(){
    return(
        <div className="d-flex">
           
            <AddressLeftSide />
            <AddressMiddleSide />
            <AddressRightSide/>
        </div>
    );
}
