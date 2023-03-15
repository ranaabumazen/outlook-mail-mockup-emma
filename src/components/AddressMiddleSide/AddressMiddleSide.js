import AddressDetails from "../AddressDetails/AddressDetails";
import Name from "../Name/Name";
import Email from "../Email/Email";
import './AddressMiddleSide.css';

export default function AddressMiddleSide(){
    return(
            <div className="middleSide-container">
                <Name />
                <Email />
                <AddressDetails />
            </div>
    );
}
