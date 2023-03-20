import AddressDetails from "../AddressDetails/AddressDetails";
import Name from "../Name/Name";
import Email from "../Email/Email";
// import './AddressMiddleSide.css';
import style from "./AddressMiddleSide.module.css";
import {MsgSectionData} from "../Data/MsgSectionData";

export default function AddressMiddleSide(){
    return(
            <div className={style.middleSideContainer}>
                {MsgSectionData.map((item)=>
                <div key={item.id}>
                <Name name={item.name} />
                <Email email={item.email} />
                <AddressDetails {...item.addressDetails}/>
                </div>
                )}
            </div>
    );
}
