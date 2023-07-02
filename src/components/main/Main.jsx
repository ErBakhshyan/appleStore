import Header from '../header/Header'
import styles from './Main.module.scss'

const Main = () => {
 return (<div className={styles.Main}>
	<Header />
	<img src="/MainIphone.png" alt="" />
	<p className={styles.firstP}>iPhone 14 Pro</p>
	<p className={styles.lastP}>Pro. Beyond</p>
	<button>Buy now</button>
 </div>)
}

export default Main