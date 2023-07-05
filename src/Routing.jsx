/* eslint-disable no-unused-vars */
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import { Context } from './contexts'
import { useEffect, useState } from 'react'
import Cart from './Cart'
import Header from './components/header/Header'

const Routing = () => {
	const PRODUCTS = [
		{category: 'MacBook',title: 'MacBook Pro',id: 1,onCart: false,price: 1400,count: 0,img: '/products/macbookPro.jpeg',},
		{title: 'MacBook Air',id: 2,onCart: false,price: 1000,count: 0,img: '/products/macbookAir.jpeg',},
		{category: 'iPad',title: 'iPad Pro 12.9',id: 3,onCart: false,price: 890,count: 0,img: '/products/iPadPro12.jpeg',},
		{title: 'iPad Mini 6',id: 4,onCart: false,price: 680,count: 0,img: '/products/iPadMini6.jpeg',},
		{category: 'Iphone',title: 'Iphone 14 Pro',id: 5,onCart: false,price: 850,count: 0,img: '/products/iphone14Pro.png',},
		{title: 'Iphone 14',id: 6,onCart: false,price: 700,count: 0,img: '/products/iphone14.png',},
		{category: 'Watch',title: 'Apple Watch ultra',id: 7,onCart: false,price: 630,count: 0,img: '/products/appleWatchUltra.jpeg',},
		{title: 'Apple Watch 8',id: 8,onCart: false,price: 500,count: 0,img: '/products/appleWatch7.jpeg',},
		{category: 'AirPods',title: 'AirPods 3',id: 9,onCart: false,price: 250,count: 0,img: '/products/airPods3.jpeg',},
		{title: 'AirPods Max',id: 10,onCart: false,price: 470,count: 0,img: '/products/airPodsMax.jpeg',},
	]
	
	const productsLS = JSON.parse(localStorage.getItem('products'))
	
	const [products, setProducts] = useState(productsLS?.length > 0 ? productsLS : PRODUCTS)
	
	useEffect(()=>{
		localStorage.setItem('products',JSON.stringify(products))
	},[products])
	

  const [cartItems,setCartItems] = useState(0)

	let productsOnCart = 0

	products.forEach(item => {
		if(item.onCart){
			productsOnCart++
		}
	})

  useEffect(()=>{
    setCartItems(productsOnCart)
  },[products])


 return(
	<Context.Provider value={{
		cartItems , products, productsLS ,setProducts 
	}}>
	<BrowserRouter>
		<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
	</BrowserRouter>
	</Context.Provider>
 )

}

export default Routing