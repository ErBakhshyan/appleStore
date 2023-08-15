import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../contexts'
import { BsCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import styles from './Products.module.scss'

const Product = () => {

	const {title} = useParams()
	const [product,setProduct] = useState([])
	const {products, setProducts} = useContext(Context)

	useEffect(()=>{
		setProduct(
			products.find((item) => item.id === +title) || []
		)
	},[title])

	const addCart = id => {
		setProduct({...product,onCart: !product.onCart})
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

	return <div style={{marginTop: '100px'}}>
		{product.id ? (
			<div style={{display: 'flex', alignItems: 'center'}}>
				<li className={styles.productItem}>
						<div className={styles.imgDiv}>
							<img src={product.img} alt={product.title} />
						</div>
						<div className={styles.infoDiv}>
							<p>{product.title}</p>
							<p>{product.price}$</p>
						</div>
						<div className={styles.buttonDiv}>
							<button onClick={() => addCart(product.id)}>
								{product.onCart ? <BsCartCheckFill color='green' /> : <BsFillCartPlusFill color='#333' />}
							</button>
						</div>
					</li>
			</div>
		) : 'Loading...'}
	</div>
}

export default Product