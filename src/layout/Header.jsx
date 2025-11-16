import React from 'react';

// link from react-router-dom
import { Link } from 'react-router-dom'

// styles
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header} >
            <div>
                <Link to='/'>
                    <img className={styles.logo} src='divar.svg'  />
                </Link>
                <span>
                    <img src='location.svg' />
                    <p>تهران</p>
                </span>
            </div>
            <div>
                <Link className={styles.auth} to='/auth'>
                    <span>
                        <img src='profile.svg' />
                        <p>دیوار من</p>
                    </span>
                </Link>
                <Link className={styles.btn} to='/dashboard'>ثبت آگهی</Link>
            </div>
        </header>
    );
};

export default Header;