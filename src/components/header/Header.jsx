import { useContext, useEffect, useState } from 'react'
import { RiAppleFill, RiMenu2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import styles from './Header.module.scss'
import { Context } from '../../contexts'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
	const [navbar, setNavbar] = useState()

	const nav = useNavigate()

	const {cartItems} = useContext(Context)

	const showNavbar = () => {
		setNavbar(defValue => !defValue)
	}

	const {pathname} = useLocation()

	useEffect(()=>{
		console.log(document.querySelector('#Products'))
		document.querySelectorAll('a').forEach(item => {
			item.addEventListener('click',function(e){
				e.preventDefault()
				const itemLink = this.getAttribute('href')
				const itemLinkTop = document.querySelector(itemLink).getBoundingClientRect().top
				const totalOffset = itemLinkTop + window.pageYOffset - 65
				window.scrollTo({behavior: 'smooth',top: totalOffset})
			})
		})

	},[])
	
	console.log(location)

	pathname === '/' && console.log('hello')
	
	return (
		
		<div className={styles.header}>
				<div onClick={showNavbar}>
					<RiMenu2Line />
				</div>
				<div className={` ${styles.navbar} ${navbar && styles.navbarOpen}`}>
					<a href='#Products'>All PRODUCTS</a>
					<a href='#MacBook'>MacBook</a>
					<a href='#iPad'>iPad</a>
					<a href='#Iphone'>Iphone</a>
					<a href='#Watch'>Apple Watch</a>
					<a href='#AirPods'>AriPods</a>
				</div>
				<div onClick={()=> nav('/')}>
					<RiAppleFill />
				</div>
				<div onClick={()=> cartItems > 0 && nav('/cart')} className={styles.cartDiv}>
					<RiShoppingCart2Fill />
					{cartItems > 0 && <span className={styles.cartCounterPoint}>{cartItems}</span>}
				</div>
			</div>

	)
}

export default Header
