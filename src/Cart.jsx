/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import Header from './components/header/Header'
import { Context } from './contexts'
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs'
import './assets/App.css'

const Cart = () => {
	const {setProducts,products} = useContext(Context)
	let totalPrice = 0

	// console.log(products)

	const cartAddItem = (id) =>{
		setProducts(
			products.map((item)=>{
				if(item.id === id && item.count < 15){
					return {
						...item,
						count: item.count + 1
					}
				}
				return item
			})
		)
	}

	const cartDelItem = (id) =>{
		setProducts(products.map(item=>{
			if(item.id === id){
				if(item.count === 1){
					return{
						...item,
						count: 0,
						onCart: false
					}
				}
					return {
						...item,
						count: item.count - 1
					}
			}
			return item
		}))
	}

return (
	<div className='firstDiv'>
	<ul style={{padding: 0,margin: 0}}>
	{products.length > 0 ?
	products.map(product => {
		totalPrice = totalPrice + (product.count * product.price)
		
		if(product.onCart){
			return(
				<li className='mainLi' key={product.id}>
				<img src={product.img} alt={product.title} />
				<div className='titlePrice'>
					<p>{product.title}</p>
					<p>{product.price}$</p>
				</div>
				<div className='buttonDiv'>
					<button onClick={() => cartAddItem(product.id)}><BsFillCartPlusFill /></button>
					<span className='cartCounter'>{product.count}</span>
					<button onClick={()=>cartDelItem(product.id)}>
						<BsFillCartDashFill />
					</button>
				</div>
			</li>
			)
		}

		}) : 'process...'}

		</ul>
		<p style={{textAlign: 'center', background: '#444' , margin: '0', padding: '18px 0',color: '#fff',fontSize: '20px',fontFamily: 'sans-serif',letterSpacing: '3.5px'}}>{totalPrice}$</p>
		</div>
	)}

export default Cart