import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import { useState } from 'react';

import './OTP.scss';
import CountDownAnimation from "./CountDownAnimation";
const OTP = ()=>{
    const [orgOTPParent , setorgOTPParent] = useState("");
    const [userOTPParent, setuserOTPParent] = useState("");
    const [isDisableBtn, setIsDisableBtn] = useState(false);
    const handleSubmitOTP = () =>{
        if(!orgOTPParent){
            alert("Please generate an OTP...!");
            return;
        }
        if(!userOTPParent){
            alert("Please enter an OTP...!");
            return;
        }
        if (+orgOTPParent === +userOTPParent) {
            alert("Correct OTP")
        }
        else{
            alert("Wrong OTP");
            setuserOTPParent("");
        }
    }
    return(
        <div className="otp-parent-container">
            
            <GenerateOTP 
            setorgOTPParent ={setorgOTPParent}
            />
            <InputOTP
            setuserOTPParent = {setuserOTPParent}
            handleSubmitOTP = {handleSubmitOTP}
            isDisableBtn={isDisableBtn}
            setIsDisableBtn = {setIsDisableBtn}
            />
        </div>
    )
}

export default OTP;