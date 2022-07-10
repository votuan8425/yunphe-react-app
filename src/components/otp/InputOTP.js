import { useState, useRef } from 'react';
import OtpInput from 'react-otp-input';
// import CountDown from "./CountDown.js";
import CountDownAnimation from './CountDownAnimation.js';

const InputOTP = (props) =>{
    const childRef = useRef();
    const [otp, setotp] = useState("");
    const handleChange = (otp) => {
        setotp(otp)
        props.setuserOTPParent(otp);
    };
    const handleConfirmOTP = () =>{
        props.handleSubmitOTP();
    }
    const handleClearBtn = () =>{
        childRef.current.resetTimer();
        props.setuserOTPParent('');
    }
    return(
        <div className='input-otp-container'>
            <div className='title'>
                Enter verification code:
            </div>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
            inputStyle={"input-customize"}
        />
            {/* <CountDown 
            setIsDisableBtn={props.setIsDisableBtn}
            /> */}
            <CountDownAnimation
            setIsDisableBtn={props.setIsDisableBtn}
            ref = {childRef}
            />
            <div className='action'>
                <button className='clear' onClick={() =>handleClearBtn()} disabled={!props.isDisableBtn} >Clear</button>
                <button className='confirm' 
                disabled={props.isDisableBtn} 
                onClick={()=>handleConfirmOTP()}
                >Confirm</button>
            </div>
        </div>

    )
}

export default InputOTP;