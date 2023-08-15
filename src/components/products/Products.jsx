/* eslint-disable no-unused-vars */
import { Fragment, useContext, useEffect, useState } from 'react'
import { BsCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { Context } from '../../contexts'
import styles from './Products.module.scss'
import { useNavigate } from 'react-router-dom'

const Products = () => {
	const { cart, setCart, products, setProducts } = useContext(Context)
	
	const nav = useNavigate()

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
						<div onClick={()=> nav(`/product/${item.id}`)} className={styles.imgDiv}>
							<img src={item.img} alt={item.title} />
						</div>
						<div className={styles.infoDiv}>
							<p onClick={()=> nav(`/product/${item.id}`)}>{item.title}</p>
							<p onClick={()=> nav(`/product/${item.id}`)}>{item.price}$</p>
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
