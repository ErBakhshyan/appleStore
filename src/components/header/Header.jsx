import React, {useContext, useEffect, useState} from 'react'
import {
    RiAppleFill,
    RiArrowLeftLine,
    RiMenu2Line,
    RiShoppingCart2Fill,
} from 'react-icons/ri'
import {useLocation, useNavigate} from 'react-router-dom'
import {Context} from '../../contexts'
import styles from './Header.module.scss'
import {SmoothScroll, SmoothScrollWithA} from "../../Hooks/SmoothScroll.jsx";
import {AiOutlineClose} from "react-icons/ai";

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const nav = useNavigate()
    const {pathname} = useLocation()

    const {cartItems} = useContext(Context)

    const showNavbar = () => {
        setNavbar(defValue => !defValue)
    }

    document.addEventListener('click', e => {
        if (navbar) {
            if (
                e.target.classList.contains('_header_tloss_1') === false &&
                e.target.classList.contains('openNavbarButton') === false &&
                e.target.classList.contains('navbar') === false
            ) {
                setNavbar(false)
            }
        }
    })

    useEffect(() => {
        SmoothScrollWithA()
        setNavbar(false)
    }, [])

    return (
        <div className={styles.header}>
            {pathname === '/' ?
                navbar ?
                    <div style={{cursor: 'pointer'}} className='openNavbarButton' onClick={showNavbar}>
                        <AiOutlineClose/>
                    </div>
                    :
                    <div style={{cursor: 'pointer'}} className='openNavbarButton' onClick={showNavbar}>
                        <RiMenu2Line className='openNavbarButton'/>
                    </div>

                : (
                    <div onClick={() => nav('/')}>
                        <RiArrowLeftLine/>
                    </div>
                )}
            <div className={`navbar ${styles.navbar} ${navbar && styles.navbarOpen}`}>
                <a href='#Products'>All PRODUCTS</a>
                <a href='#MacBook'>MacBook</a>
                <a href='#iPad'>iPad</a>
                <a href='#Iphone'>Iphone</a>
                <a href='#Watch'>Apple Watch</a>
                <a href='#AirPods'>AriPods</a>
            </div>
            <div onClick={() => nav('/')}>
                <RiAppleFill/>
            </div>
            <div
                onClick={() => cartItems > 0 ? nav('/cart') : () => {
                    nav('/')
                    SmoothScroll()
                }}
                className={styles.cartDiv}
            >
                <RiShoppingCart2Fill/>
                {cartItems > 0 && (
                    <span className={styles.cartCounterPoint}>{cartItems}</span>
                )}
            </div>
        </div>
    )
}

export default Header
