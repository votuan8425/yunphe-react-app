import { useState } from "react";

const GenerateOTP = (props) =>{
    const [orgOTP, setOrgOTP] = useState("");
    const handleClickBtn =() =>{
        const otp = Math.floor(100000 + Math.random() * 900000);
        setOrgOTP(otp);
        props.setorgOTPParent(otp)
    }
    return(
        <div className="generate_otp">
            <button onClick={() => handleClickBtn()}>Generate OTP</button>
            <div className="title">Your OTP: {orgOTP}</div>
        </div>
    )
}


export default GenerateOTP;