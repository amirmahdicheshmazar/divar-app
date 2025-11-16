import React from 'react';

// service funvtion => sentOTP
import { sendOTP } from '../../services/auth';

// styles 
import styles from './SendOTP.module.css'

const SendOTPForm = ({mobile,setMobile,setStep}) => {

    const submitHandeler = async (e) => {
        e.preventDefault();

        if(mobile.length !== 11) return
        // validation

        const {response,error} = await sendOTP(mobile)
        console.log(response)

        if (response) setStep(2);

    }
    return (
        <form onSubmit={submitHandeler} className={styles.form} >
            <p>ورود به حساب کاربری</p>
            <span>
                برای استفاده از امکانات دیوار ، لطفا شماره موبایل خود را وارد کنید . کد
                تایید به این شماره پیامک خواهد شد.
            </span>
            <input type='text' 
            id='input' placeholder='شماره موبایل' 
            value={mobile} 
            onChange={e => setMobile(e.target.value)}
            />
            <button type='submit' >ارسال کد تایید</button>
        </form>
    );
};

export default SendOTPForm;