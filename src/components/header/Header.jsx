import { useState } from 'react'
import styles from './Header.module.scss'
import {RiMenu2Line,RiAppleFill, RiShoppingCart2Fill} from 'react-icons/ri'

const Header = () => {

	const [navbar,setNavbar] = useState()

	const showNavbar = () => {
		setNavbar((defValue) => !defValue)
	}


return (
	<div className={styles.header}>
		<div onClick={showNavbar}>
		<RiMenu2Line />
		</div>
		<div className={`${styles.navbar} ${navbar && styles.navbarOpen}`}>
			<p>All PRODUCTS</p>
			<p>MacBook</p>
			<p>Iphone</p>
			<p>Apple Watch</p>
			<p>AriPods</p>
			<p>DISCOUNT PRICES</p>
		</div>
		<div>
			<RiAppleFill />
		</div>
		<div>
			<RiShoppingCart2Fill />
		</div>
	</div>
)
}

export default Header