import { useContext, useState } from 'react'
import { RiAppleFill, RiMenu2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import styles from './Header.module.scss'
import { Context } from '../../contexts'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const [navbar, setNavbar] = useState()

	const nav = useNavigate()

	const {cartItems} = useContext(Context)

	const showNavbar = () => {
		setNavbar(defValue => !defValue)
	}

	return (
		<div className={styles.header}>
			<div onClick={showNavbar}>
				<RiMenu2Line />
			</div>
			<div className={`${styles.navbar} ${navbar && styles.navbarOpen}`}>
				<a href='#Products'>All PRODUCTS</a>
				<a>MacBook</a>
				<a>Iphone</a>
				<a>Apple Watch</a>
				<a>AriPods</a>
				<a>DISCOUNT PRICES</a>
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
