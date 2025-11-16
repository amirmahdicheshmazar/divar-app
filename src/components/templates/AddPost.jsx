import React, { useState } from 'react';

import {useQuery} from "@tanstack/react-query"

// service => admin => getQuery
import {getCategory} from '../../services/admin'

// styles
import styles from "./AddPost.module.css"

// token 
import { getCookie } from '../../utils/cookie';

// axios
import axios from 'axios';

// react hot toast
import toast,{Toaster} from 'react-hot-toast'

const AddPost = () => {

    const [form,setForm] = useState({
        title : '',
        content : '',
        category : '',
        city : '',
        amount : null,
        images : null
    })

    const {data} = useQuery(["get-categories"],getCategory)
    console.log(data)

    const addHandeler = (e) =>{

        e.preventDefault();

        const formData = new FormData();
        for (let i in form) {
            formData.append(i,form[i])
        }

        const token = getCookie("accessToken")
        axios.post('http://localhost:3400/post/create', formData , {
            headers : {
                "Content-Type" : "multipart/form-data",
                Authorization : `bearer ${token}`
            }
        })
        .then(res => toast.success(res.data.message))
        .catch(error => toast.error("مشکلی پیش آمده است"))
    
        console.log(form)
    }

    const changeHandeler = (e) => {
        const name = event.target.name
        if(name !== "images") {
            setForm({...form,[name] : event.target.value})
        }else {
            setForm({...form,[name] : event.target.files[0]})
        }
    }

    return (
        <form className={styles.form} onChange={changeHandeler} >
            <h3>افزودن آکهی</h3>
            <label htmlFor='title' >عنوان</label>
            <input type='text' name='title' id='title' />

            <label htmlFor='content' >توضیحات</label>
            <textarea name='content' id='content'/>

            <label htmlFor='amount' >قیمت</label>
            <input type='text' name='amount' id='amount' />

            <label htmlFor='city' >شهر</label>
            <input type='text' name='city' id='city' />

            <label htmlFor='category' >دسته بندی</label>
            <select name='category' id='category'>
                {data?.data.map((item) => <option key={item._id} value={item._id} >{item.name}</option>)}
            </select>

            <label htmlFor='images' >عکس</label>
            <input type='file' name='images' id='images' />

            <button onClick={addHandeler} >ایجاد</button>

            <Toaster/>
        </form>
    );
};

export default AddPost;