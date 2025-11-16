import React from 'react';

// service function => checkOTP
import { checkOTP } from '../../services/auth';

// utils => cookie function
import {setCookie} from '../../utils/cookie'

// react-router-dom
import { useNavigate } from 'react-router-dom';

// tanstack/react-query
import { useQuery } from '@tanstack/react-query';

//services => user => api
import { getProfile } from '../../services/user';

// styles
import styles from './CheckOTP.module.css'

const CheckOTPForm = ({code,setCode,mobile,setStep}) => {

    const navigate = useNavigate()

    const {refetch} = useQuery(['profile'],getProfile)

    const submitHandeler = async(e) => {
        e.preventDefault();

        if(code.length !== 5) return;

        const {response,error} = await checkOTP(code,mobile);
        console.log(response)

        if(response) {
            setCookie(response.data);
            navigate('/');
            refetch();
        }

        if(error) console.log(error.message);
    }

    return (
        <form onSubmit={submitHandeler} className={styles.form} >
            <p>تایید کد اسمس شده.</p>
            <span>کد پیامک شده به شماره {mobile} را وارد کنید.</span>
            <input type='text' 
            id='input' value={code} 
            onChange={e => setCode(e.target.value)} 
            />
            <button type='submit' >ورود</button>
            <button className={styles.backBTN} onClick={() => setStep(1)} >تغییر شماره موبایل.</button>
        </form>
    );
};

export default CheckOTPForm;