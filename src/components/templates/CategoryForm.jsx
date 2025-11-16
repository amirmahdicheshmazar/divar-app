import React, { useState } from 'react';

// styles
import styles from './CategoryForm.module.css'

// mutation => useQuery
import {useMutation,useQueryClient} from '@tanstack/react-query'

// services => admin
import { addCategory } from '../../services/admin';


const CategoryForm = () => {

    const [form,setForm] = useState({ name: "", slug:"", icon:"" })

    const queryClinet = useQueryClient()

    const {mutate,isLoading,error,data} = useMutation(addCategory,{
        onSuccess : () => queryClinet.invalidateQueries('get-categories')
    });
    console.log(error)

    const ChangeHandeler = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const submitHandeler = (e) => {
        e.preventDefault();

        if(!form.name || !form.slug || !form.icon) return;

        mutate(form);
    }

    return (
        <form onChange={ChangeHandeler} onSubmit={submitHandeler} className={styles.form} >
            <h3>دسته بندی جدید</h3>
            {!!error && <p>مشکلی پیش آمده است</p>}
            {data?.status == 201 && <p>دسته بندی با موفقیت اضافه شد</p>}
            <label htmlFor='name' >اسم دسته بندی</label>
            <input type='text' name='name' id='name'/>
            <label htmlFor='slug' >اسلاگ</label>
            <input type='text' name='slug' id='slug'/>
            <label htmlFor='icon' >آیکون</label>
            <input type='text' name='icon' id='icon'/>
            <button type='submit' disabled={isLoading} >ایجاد</button>
        </form>
    );
};

export default CategoryForm;