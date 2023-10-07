import './App.css'
import SideBar from './components/SideBar/SideBar'
import Box_slide from './components/box_slide/Box_slide'
import Shop_category from './components/shop_category/Shop_category'
import Navbar from './components/navbar/Navbar'
import Best_sellers from './components/best_sellers/Best_sellers'
import Products from './components/products/Products'
import Products_page from './components/products_page/Products_page'

function App() {
  

  return (
    <>
    <Navbar />
      <SideBar/>
      <Box_slide/>
      <Shop_category/>
      <Best_sellers/>
      <Products_page/>
    </>
  )
}

export default App
