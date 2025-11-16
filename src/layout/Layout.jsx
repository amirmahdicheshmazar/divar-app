import React, { Children } from 'react';

// layout => header and footer components
import Footer from './Footer';
import Header from './Header';

// styles
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={styles.main} >{children}</div>
            <Footer/>
        </>
    );
};

export default Layout;