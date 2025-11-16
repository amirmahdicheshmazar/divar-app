import React from 'react';

// components
import Main from '../components/templates/Main';
import Sidebar from '../components/templates/Sidebar';

// react query 
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../services/user'
import { getCategory } from '../services/admin'

// loader
import Loader from "../components/templates/modules/Loader"



const style = { display : 'flex', direction : 'rtl' }

const HomePage = () => {

    const {data : posts , isLoading : postLoading} = useQuery(['post-list'],getAllPosts)
    const {data : categories , isLoading : categoryLoading} = useQuery(["get-categories"],getCategory)

    return (
        <>
        {
            postLoading || categoryLoading ? <Loader/> : (
                <div style={style} >
                    <Sidebar categories={categories}/>
                    <Main posts={posts} />
                </div>
            )
        }
        </>
    );
};

export default HomePage;