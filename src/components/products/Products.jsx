/* eslint-disable no-unused-vars */
import { Fragment, useContext, useEffect, useState } from 'react'
import { BsCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { Context } from '../../contexts'
import styles from './Products.module.scss'

const Products = () => {
	const { cart, setCart, products, setProducts } = useContext(Context)

	// const [products, setProducts] = useState([
	// 	{
	// 		title: 'MacBook Pro',
	// 		id: 1,
	// 		onCart: false,
	// 		price: 1400,
	// 		count: 0,
	// 		img: '/products/macbookPro.jpeg',
	// 	},
	// 	{
	// 		title: 'MacBook Air',
	// 		id: 2,
	// 		onCart: false,
	// 		price: 1000,
	// 		count: 0,
	// 		img: '/products/macbookAir.jpeg',
	// 	},
	// 	{
	// 		title: 'iPad Pro 12.9',
	// 		id: 3,
	// 		onCart: false,
	// 		price: 890,
	// 		count: 0,
	// 		img: '/products/iPadPro12.jpeg',
	// 	},
	// 	{
	// 		title: 'iPad Mini 6',
	// 		id: 4,
	// 		onCart: false,
	// 		price: 680,
	// 		count: 0,
	// 		img: '/products/iPadMini6.jpeg',
	// 	},
	// 	{
	// 		title: 'Iphone 14 Pro',
	// 		id: 5,
	// 		onCart: false,
	// 		price: 850,
	// 		count: 0,
	// 		img: '/products/iphone14Pro.png',
	// 	},
	// 	{
	// 		title: 'Iphone 14',
	// 		id: 6,
	// 		onCart: false,
	// 		price: 700,
	// 		count: 0,
	// 		img: '/products/iphone14.png',
	// 	},
	// 	{
	// 		title: 'Apple Watch ultra',
	// 		id: 7,
	// 		onCart: false,
	// 		price: 630,
	// 		count: 0,
	// 		img: '/products/appleWatchUltra.jpeg',
	// 	},
	// 	{
	// 		title: 'Apple Watch 8',
	// 		id: 8,
	// 		onCart: false,
	// 		price: 500,
	// 		count: 0,
	// 		img: '/products/appleWatch7.jpeg',
	// 	},
	// 	{
	// 		title: 'AirPods 3',
	// 		id: 9,
	// 		onCart: false,
	// 		price: 250,
	// 		count: 0,
	// 		img: '/products/airPods3.jpeg',
	// 	},
	// 	{
	// 		title: 'AirPods Max',
	// 		id: 10,
	// 		onCart: false,
	// 		price: 470,
	// 		count: 0,
	// 		img: '/products/airPodsMax.jpeg',
	// 	},
	// ])

	// useEffect(() => {
	// 	setCart(() => products.filter(item => item.onCart))
	// }, [products])

	

	const addCart = id => {
		setProducts(
			products.map(item => {
				if (item.id === id) {
					if (item.onCart) {
						return {
							...item,
							onCart: false,
							count: 0,
						}
					}
					return {
						...item,
						onCart: true,
						count: 1,
					}
				}
				return item
			})
		)
	}

	return (
		<div className={styles.products}>
			<h2 id='Products'>Products</h2>
			<ul>
				{products.map(item => (
					<Fragment key={item.id}>
						{item.category &&  <><h2 className={styles.category} id={item.category}>{item.category}</h2></>}
	<li className={styles.productItem} key={item.id}>
						<div className={styles.imgDiv}>
							<img src={item.img} alt={item.title} />
						</div>
						<div className={styles.infoDiv}>
							<p>{item.title}</p>
							<p>{item.price}$</p>
						</div>
						<div className={styles.buttonDiv}>
							<button onClick={() => addCart(item.id)}>
								{item.onCart ? <BsCartCheckFill color='green' /> : <BsFillCartPlusFill color='#333' />}
							</button>
						</div>
					</li>
					</Fragment>
				))}
			</ul>
		</div>
	)
}

export default Products
