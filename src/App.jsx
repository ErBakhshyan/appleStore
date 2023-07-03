import { useEffect, useState } from 'react'
import './App.css'
// import Header from './components/header/Header'
import Main from './components/main/Main'
import Products from './components/products/Products'
import { Context } from './contexts'

function App() {

  const [cart,setCart] = useState([])

  const [cartItems,setCartItems] = useState(0)

  useEffect(()=>{
    setCartItems(cart.length)
  },[cart])

  return (
    <>
    <Context.Provider value={{
      cart, setCart, cartItems
    }}>
    {/* <Header /> */}
    <Main />
    <Products />
    </Context.Provider>
    </>
  )
}

export default App
