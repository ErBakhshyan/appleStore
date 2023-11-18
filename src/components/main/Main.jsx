// import Header from '../header/Header'
import { useEffect, useRef } from 'react'
import styles from './Main.module.scss'
import {SmoothScroll} from "../../Hooks/SmoothScroll.jsx";



const Main = () => {
	const homeRef = useRef()
	useEffect(()=>{
		SmoothScroll(homeRef)
	},[])

 return (<div className={styles.Main}>
	{/* <Header /> */}
	<img src="/MainIphone.png" alt="" />
	<p className={styles.firstP}>iPhone 14 Pro</p>
	<p className={styles.lastP}>Pro. Beyond</p>
	<a ref={homeRef} href="#Products"><button>Buy now</button></a>
 </div>)
}

export default Main