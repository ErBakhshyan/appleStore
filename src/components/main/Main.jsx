// import Header from '../header/Header'
import { useEffect, useRef } from 'react'
import styles from './Main.module.scss'



const Main = () => {
	const homeRef = useRef()
	useEffect(()=>{
			homeRef.current.addEventListener('click',function(e){
				e.preventDefault()
				const itemLink = homeRef.current.getAttribute('href')
				const itemLinkTop = document.querySelector(itemLink).getBoundingClientRect().top
				const totalOffset = itemLinkTop + window.pageYOffset - 65
				window.scrollTo({behavior: 'smooth',top: totalOffset})
			})
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